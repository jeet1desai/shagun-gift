import React from "react";

import { Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { RiMailLine, RiLock2Line } from "react-icons/ri";

import { StyledAuthContainer, StyledAuthHeading, StyledFooter, StyledLoginContainer } from "./AuthStyled";

import TextInput from "../../components/ui/TextInput";
import Divider from "../../components/ui/Divider";
import Button from "../../components/ui/Button";

const Login = () => {
  return (
    <StyledAuthContainer>
      <StyledLoginContainer>
        <StyledAuthHeading>
          <Typography variant="h5">Sign In to your account</Typography>
          <Typography variant="body1">Enter your email & password to login or sign up.</Typography>
        </StyledAuthHeading>

        <Divider />

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Must be a valid email").max(255).required("Please enter your email address!"),
            password: Yup.string().max(255).required("Please enter your password!"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, handleSubmit, isSubmitting, touched, getFieldProps }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextInput
                    placeholder="hello@hello.com"
                    fullWidth
                    label="Email Address"
                    required
                    {...getFieldProps("email")}
                    error={touched.email && errors.email}
                    LeftIcon={RiMailLine}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    placeholder="******"
                    fullWidth
                    label="Password"
                    required
                    type="password"
                    {...getFieldProps("password")}
                    error={touched.password && errors.password}
                    LeftIcon={RiLock2Line}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button title="Sign In" type="submit" fullWidth variant="contained" />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </StyledLoginContainer>
      <StyledFooter>© 2024 Shagun</StyledFooter>
    </StyledAuthContainer>
  );
};

export default Login;
