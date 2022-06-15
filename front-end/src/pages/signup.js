import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "../components/authInput";
import AuthBtn from "../components/authBtn";
import { styled, Typography } from "@mui/material";
import AuthIntro from "../components/authIntro";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Container = styled("div")(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Card = styled("div")(() => ({
  backgroundColor: "rgba(255,255,255,.7)",
  width: "70vw",
  height: "90vh",
  display: "flex",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  border: ".5px solid rgba(0,0,0,.1)",
  borderRadius: 10,
  position: "relative",
}));

const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "50%",
  width: "50%",
  flex: 1,
  overflowY: "scroll",
}));

const AuthLink = styled(Link)(({ theme }) => ({
  fontWeight: 200,
  textDecoration: "none",
  color: "rgba(0,0,0,.7)",
  fontFamily: "Roboto",
  marginLeft: 30,
  marginTop: 8,
  marginBottom: 30,
  span: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  width: 400,
  marginTop: 30,
}));
const SubHeader = styled(Typography)(({ theme }) => ({
  width: 400,
  marginBottom: 16,
  color: theme.palette.primary.main,
}));

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordc: "",
    },
    mode: "onBlur",
  });
  const password = React.useRef({});
  password.current = watch("password", "");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(formData) {
    try {
      setDisabled(true);
      let response = await axios.post("http://localhost:8888/signup", formData);
      let data = await response.data;
      if (data.isValid === true) navigate("/");
      for (const errorName in data.errors) {
        console.log(`${errorName}: ${data.errors[errorName]}`);
        if (data.errors[errorName]) {
          setError(errorName, {
            type: "server",
            message: data.errors[errorName],
          });
        }
      }
      setDisabled(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <AuthIntro />
        <Form>
          <Header variant="h4">SIGN UP FORM</Header>
          <SubHeader variant="body2">
            Enter your credentials to create an account
          </SubHeader>
          <Controller
            rules={{
              required: { value: true, message: "The first name is required" },
              minLength: {
                value: 3,
                message: "The minimum length is 3 characters",
              },
              maxLength: {
                value: 10,
                message: "The maximum length is 10 characters",
              },
              pattern: {
                value: /^[a-z0-9]+$/i,
                message: "The first name is must be alphanumeric",
              },
            }}
            name="firstName"
            control={control}
            render={({ field }) => (
              <AuthInput
                field={field}
                label="First Name"
                placeholder="Enter your first name"
                error={errors.firstName}
              />
            )}
          />
          <Controller
            rules={{
              required: { value: true, message: "The last name is required" },
              minLength: {
                value: 3,
                message: "The minimum length is 3 characters",
              },
              maxLength: {
                value: 10,
                message: "The maximum length is 10 characters",
              },
              pattern: {
                value: /^[a-z0-9]+$/i,
                message: "The last name is must be alphanumeric",
              },
            }}
            name="lastName"
            control={control}
            render={({ field }) => (
              <AuthInput
                field={field}
                label="Last Name"
                placeholder="Enter your last name"
                error={errors.lastName}
              />
            )}
          />
          <Controller
            rules={{
              required: { value: true, message: "The email is required" },
              minLength: {
                value: 6,
                message: "The minimum length is 6 characters",
              },
              maxLength: {
                value: 60,
                message: "The maximum length is 60 characters",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "The email is invalid",
              },
            }}
            name="email"
            control={control}
            render={({ field }) => (
              <AuthInput
                field={field}
                label="Email Address"
                placeholder="Enter a valid email address"
                error={errors.email}
              />
            )}
          />
          <Controller
            rules={{
              required: { value: true, message: "The password is required" },
              minLength: {
                value: 8,
                message: "The minimume length is 8 characters",
              },
            }}
            name="password"
            control={control}
            render={({ field }) => (
              <AuthInput
                field={field}
                label="Password"
                placeholder="Enter a strong password"
                error={errors.password}
              />
            )}
          />
          <Controller
            rules={{
              required: {
                value: true,
                message: "The password confirmation is required",
              },
              validate: (value) =>
                value === password.current ||
                "The password confirmation doesn't match",
            }}
            name="passwordc"
            control={control}
            render={({ field }) => (
              <AuthInput
                field={field}
                label="Password Confirmation"
                placeholder="Confirm your password"
                error={errors.passwordc}
              />
            )}
          />
          <AuthBtn disabled={disabled}>SIGN UP</AuthBtn>
          <AuthLink to="/">
            Already have an account ? <span>SIGN IN</span>
          </AuthLink>
        </Form>
      </Card>
    </Container>
  );
};

export default SignUp;
