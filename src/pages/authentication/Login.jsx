import React, { useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { RiLock2Line, RiMailLine, RiPhoneLine } from "react-icons/ri";

import { StyledAuthContainer, StyledAuthHeading, StyledFooter, StyledLoginContainer } from "./AuthStyled";

import TextInput from "../../components/ui/TextInput";
import Divider from "../../components/ui/Divider";
import Button from "../../components/ui/Button";
import Loader from "../../components/Loader";

import { dispatch, useSelector } from "../../store";
import { cookieStorage } from "../../utils/cookie";
import { authService } from "../../service/auth";

const Login = () => {
  const navigate = useNavigate();
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      cookieStorage.setItem("user", JSON.stringify(user));

      if (user.name) {
        navigate(`/dashboard/${user._id}`);
      } else {
        navigate(`/register/${user._id}`);
      }
    }
  }, [user]);

  useEffect(() => {
    const sessionUser = cookieStorage.getItem("user");
    if (sessionUser) {
      const user = JSON.parse(sessionUser);

      if (user.name) {
        navigate(`/dashboard/${user._id}`);
      } else {
        navigate(`/register/${user._id}`);
      }
    }
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <StyledAuthContainer>
        <StyledLoginContainer>
          <StyledAuthHeading>
            <Typography variant="h5">Sign In to your account</Typography>
            <Typography variant="body1">Enter your email & password to login or sign up.</Typography>
          </StyledAuthHeading>

          <Divider />

          <Formik
            initialValues={{ phone: "", email: "", password: "" }}
            validationSchema={Yup.object().shape({
              phone: Yup.string().max(10).required("Please enter your phone number!"),
              email: Yup.string().email("Must be a valid email").max(255).required("Please enter your email address!"),
              password: Yup.string().max(255).required("Please enter your password!"),
            })}
            onSubmit={(values) => {
              dispatch(authService(values));
            }}
          >
            {({ errors, handleSubmit, isSubmitting, touched, getFieldProps }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextInput
                      placeholder="9632587412"
                      fullWidth
                      label="Phone Number"
                      required
                      {...getFieldProps("phone")}
                      error={touched.phone && errors.phone}
                      LeftIcon={RiPhoneLine}
                    />
                  </Grid>
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
    </>
  );
};

export default Login;
