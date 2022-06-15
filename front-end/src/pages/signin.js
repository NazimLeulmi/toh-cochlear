import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "../components/authInput";
import AuthBtn from "../components/authBtn";
import { styled, Typography } from "@mui/material";
import AuthIntro from "../components/authIntro";
import { Link } from "react-router-dom";
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

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
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
  const onSubmit = (data) => console.table(data);

  return (
    <Container>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <AuthIntro />
        <Form>
          <Header variant="h4">SIGN IN FORM</Header>
          <SubHeader variant="body2">
            Enter your email and password to login
          </SubHeader>
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
          <AuthBtn>SIGN IN</AuthBtn>
          <AuthLink to="/signup">
            Don't have an account ? <span>SIGN UP</span>
          </AuthLink>
        </Form>
      </Card>
    </Container>
  );
};

export default SignIn;
