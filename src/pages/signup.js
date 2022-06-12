import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "../components/authInput";
import AuthBtn from "../components/authBtn";
import { styled, Typography } from "@mui/material";
import { ReactComponent as Brand } from "../assets/logo.svg";
import { ReactComponent as HomeSvg } from "../assets/home.svg";

const Container = styled("div")(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
}));

const Form = styled("form")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Logo = styled(Brand)(() => ({
  width: "55%",
  marginBottom: 48,
}));

const Header = styled(Typography)(() => ({
  fontWeight: 100,
  width: 400,
}));
const Text = styled(Typography)(() => ({
  fontWeight: 100,
  width: 400,
  marginBottom: 16,
}));

const HomeImg = styled(HomeSvg)(() => ({
  width: "90%",
  height: "90%",
}));

const Intro = styled("div")(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SignUp = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordc: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  console.log("Rendered");
  return (
    <Container>
      <Intro>
        <HomeImg />
      </Intro>
      <Form onSubmit={handleSubmit(onSubmit)} id="sign-in">
        <Logo />
        <Header variant="h2">SIGN UP</Header>
        <Text>Enter your credentials </Text>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <AuthInput
              field={field}
              label="FIRST NAME"
              placeholder="Enter your first name"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <AuthInput
              field={field}
              label="LAST NAME"
              placeholder="Enter your last name"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <AuthInput
              field={field}
              label="EMAIL ADDRESS"
              placeholder="Enter a valid email address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <AuthInput
              field={field}
              label="PASSWORD"
              placeholder="Enter a strong password"
            />
          )}
        />
        <Controller
          name="passwordc"
          control={control}
          render={({ field }) => (
            <AuthInput
              field={field}
              label="PASSWORD CONFIRMATION"
              placeholder="Confirm your password"
            />
          )}
        />
        <AuthBtn>SIGN UP</AuthBtn>
      </Form>
    </Container>
  );
};

export default SignUp;
