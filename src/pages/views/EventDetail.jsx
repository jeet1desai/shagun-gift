import React, { useEffect, useState } from "react";

import { Box, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography, useTheme } from "@mui/material";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Card from "../../components/Card";
import Button from "../../components/ui/Button";
import Loader from "../../components/Loader";
import TextInput from "../../components/ui/TextInput";

import { RiAddFill, RiCloseLine } from "react-icons/ri";

import { dispatch, useSelector } from "../../store";
import { findUserSuccess } from "../../store/slices/event";
import { changeStatusService, createGuestService, eventsDetailService, findUserService } from "../../service/events";

const EventDetail = () => {
  const { id, eid } = useParams();
  const theme = useTheme();

  const { loading, event, guest } = useSelector((state) => state.event);

  const [isAddGuestOpen, setAddGuest] = useState(false);
  const [guestForm, setGuestForm] = useState({ id: "", phone: "", email: "", name: "", city: "", fee: 0 });

  useEffect(() => {
    if (eid) {
      dispatch(eventsDetailService(eid));
    }
  }, [eid]);

  useEffect(() => {
    if (guest) {
      setGuestForm({ id: guest._id, phone: guest.phone, email: guest.email, name: guest.name, city: guest.city, fee: 0 });
    }
  }, [guest]);

  return (
    <>
      <Loader loading={loading} />

      <Container maxWidth="md">
        <Typography variant="h4" sx={{ my: "18px" }}>
          {event?.name}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="event-card" padding={20}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <span>Host:</span> {event?.host?.name} {event?.host?._id === id && "(You)"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <span>Date:</span> {moment(event?.date).format("MMM DD, YYYY")}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <span>No of Guest:</span> {event?.guests?.length}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <span>Total Received Amount:</span> {event?.totalReceivedAmount}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    <span>Venue:</span> {event?.venue}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    {event?.guests &&
                      event.guests.map((guest) => {
                        return (
                          <Grid item xs={6}>
                            <Card className="event-card" padding={10}>
                              <Grid container spacing={4}>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>Name:</span> {guest.name}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>Phone:</span> {guest.phone}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>Email:</span> {guest.email}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>City:</span> {guest.city}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>Amount:</span> {guest.contributionAmount}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="h6">
                                    <span>Is Paid:</span> {guest.paymentStatus}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Card>
                          </Grid>
                        );
                      })}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {event?.status === "Open" && (
                      <Button onClick={() => setAddGuest(true)} title="Add Guest" Icon={RiAddFill} variant="neutral" state="Stroke" />
                    )}
                    <Button
                      onClick={() =>
                        dispatch(changeStatusService(eid, { status: event?.status === "Open" ? "Closed" : "Open" })).then(() =>
                          dispatch(eventsDetailService(eid))
                        )
                      }
                      title={event?.status === "Open" ? "Close Event" : "Open Event"}
                      variant="primary"
                      state="Filled"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Dialog fullWidth maxWidth="xs" open={isAddGuestOpen}>
          <Formik
            initialValues={guestForm}
            validationSchema={Yup.object().shape({
              phone: Yup.string().max(10).required("Please enter phone number!"),
              email: Yup.string().email("Must be a valid email").max(255).required("Please enter email address!"),
              name: Yup.string().max(255).required("Please enter name!"),
              city: Yup.string().max(255).required("Please enter city!"),
            })}
            onSubmit={(values, { resetForm }) => {
              setAddGuest(false);
              dispatch(createGuestService(eid, values)).then(() => {
                dispatch(findUserSuccess({ guest: null }));
                dispatch(eventsDetailService(eid));
                resetForm();
              });
            }}
            enableReinitialize
          >
            {({ values, errors, handleSubmit, touched, getFieldProps, handleBlur }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <IconButton onClick={() => setAddGuest(false)}>
                  <RiCloseLine size={theme.icon.size.lg} color={theme.palette.text.secondary} />
                </IconButton>
                <DialogTitle>Add Guest</DialogTitle>
                <DialogContent>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextInput
                        placeholder="9632587412"
                        fullWidth
                        label="Phone Number"
                        required
                        {...getFieldProps("phone")}
                        onBlur={(e) => {
                          handleBlur && handleBlur(e);
                          dispatch(findUserService({ phone: values.phone, email: values.email }));
                        }}
                        error={touched.phone && errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        placeholder="hello@hello.com"
                        fullWidth
                        label="Email Address"
                        required
                        {...getFieldProps("email")}
                        onBlur={(e) => {
                          handleBlur && handleBlur(e);
                          dispatch(findUserService({ phone: values.phone, email: values.email }));
                        }}
                        handleBlur={(e) => {}}
                        error={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput
                        placeholder="John Deo"
                        fullWidth
                        label="Name"
                        required
                        {...getFieldProps("name")}
                        error={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput placeholder="Surat" fullWidth label="City" required {...getFieldProps("city")} error={touched.city && errors.city} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextInput placeholder="200" fullWidth label="Contribution" {...getFieldProps("fee")} type="number" />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setAddGuest(false)} fullWidth title="Cancel" variant="neutral" state="Stroke" />
                  <Button type="submit" fullWidth title="Save" variant="primary" state="Filled" />
                </DialogActions>
              </Form>
            )}
          </Formik>
        </Dialog>
      </Container>
    </>
  );
};

export default EventDetail;
