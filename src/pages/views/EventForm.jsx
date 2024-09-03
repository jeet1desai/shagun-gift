import React from "react";

import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { StyledContainer, StyledEventBtn, StyledHeadingBox } from "./StyledView";

import Button from "../../components/ui/Button";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import TextInput from "../../components/ui/TextInput";

import { dispatch, useSelector } from "../../store";
import { createEventService } from "../../service/events";

const EventForm = () => {
  const { id } = useParams();
  const { loading } = useSelector((state) => state.event);

  return (
    <>
      <Loader loading={loading} />

      <StyledContainer maxWidth="md">
        <StyledHeadingBox>
          <Typography variant="h4" style={{ marginBottom: "18px" }}>
            Create Event
          </Typography>
        </StyledHeadingBox>

        <Card padding="24px">
          <Formik
            initialValues={{ name: "", date: "", venue: "" }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Required"),
              date: Yup.string().required("Required"),
              venue: Yup.string().required("Required"),
            })}
            enableReinitialize
            onSubmit={(values, { resetForm }) => {
              const body = { ...values, hostId: id };
              dispatch(createEventService(body)).then(() => {
                resetForm();
              });
            }}
          >
            {({ errors, handleSubmit, touched, getFieldProps }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextInput
                      {...getFieldProps("name")}
                      error={touched.name && errors.name}
                      placeholder="Type event name..."
                      fullWidth
                      label="Event Name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      {...getFieldProps("date")}
                      error={touched.date && errors.date}
                      type="date"
                      placeholder="Type event date..."
                      fullWidth
                      label="Event Date"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      {...getFieldProps("venue")}
                      error={touched.venue && errors.venue}
                      placeholder="Type event venue..."
                      fullWidth
                      label="Event Venue"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledEventBtn>
                      <Button type="submit" title="Save" variant="primary" state="Filled" />
                    </StyledEventBtn>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Card>
      </StyledContainer>
    </>
  );
};

export default EventForm;
