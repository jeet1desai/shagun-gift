import React, { useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { RiUser3Line } from "react-icons/ri";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { StyledAuthContainer, StyledAuthHeading, StyledFooter, StyledLoginContainer } from "./AuthStyled";

import TextInput from "../../components/ui/TextInput";
import Divider from "../../components/ui/Divider";
import Loader from "../../components/Loader";
import Button from "../../components/ui/Button";

import { dispatch, useSelector } from "../../store";
import { changeNameService } from "../../service/auth";
import { cookieStorage } from "../../utils/cookie";

const Register = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.name) {
      cookieStorage.setItem("user", JSON.stringify(user));
      navigate(`/dashboard/${user._id}`);
    }
  }, [user]);

  return (
    <>
      <Loader loading={loading} />

      <StyledAuthContainer>
        <StyledLoginContainer>
          <StyledAuthHeading>
            <Typography variant="h5">Create a new account</Typography>
            <Typography variant="body1">Please enter your full name to continue.</Typography>
          </StyledAuthHeading>

          <Divider />

          <Formik
            initialValues={{ name: "" }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required("Please enter your name!"),
            })}
            onSubmit={(values) => {
              dispatch(changeNameService({ id: id, name: values.name }));
            }}
          >
            {({ errors, handleSubmit, isSubmitting, touched, getFieldProps }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextInput
                      placeholder="James Brown"
                      fullWidth
                      label="Full Name"
                      required
                      {...getFieldProps("name")}
                      error={touched.name && errors.name}
                      LeftIcon={RiUser3Line}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button title="Continue" type="submit" fullWidth variant="contained" />
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

export default Register;
