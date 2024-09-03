import React, { useEffect, useState } from "react";

import { Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography, useTheme } from "@mui/material";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import Card from "../../components/Card";
import Button from "../../components/ui/Button";
import Loader from "../../components/Loader";
import TextInput from "../../components/ui/TextInput";

import { RiAddFill, RiCloseLine } from "react-icons/ri";
import EmptyStateIcon from "../../assets/images/empty_state.png";

import { dispatch, useSelector } from "../../store";
import { StyledEmptyBox, StyledEventList } from "./StyledView";
import { addContributionService, getInvitesService } from "../../service/events";

const Invites = () => {
  const { id } = useParams();
  const theme = useTheme();

  const { loading, invites } = useSelector((state) => state.event);

  const [isAddContributionOpen, setAddContribution] = useState(false);
  const [contributionForm, setContributionForm] = useState({ eventId: "", amount: 0 });

  useEffect(() => {
    if (id) {
      dispatch(getInvitesService(id));
    }
  }, [id]);

  console.log(invites);

  return (
    <>
      <Loader loading={loading} />

      <Container maxWidth={invites.length === 0 ? "md" : "lg"}>
        <Typography variant="h4" sx={{ my: "18px" }}>
          Invites
        </Typography>

        {invites.length === 0 && (
          <StyledEmptyBox>
            <Card className="empty-state-card" padding={32}>
              <img src={EmptyStateIcon} alt="empty state" />
              <Typography variant="subtitle1">There are no invites postings here yet.</Typography>
            </Card>
          </StyledEmptyBox>
        )}

        <StyledEventList>
          <Grid container spacing={4}>
            {invites.map((item, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <Card className="event-card" padding={12}>
                    <Typography variant="h6">
                      <span>Name:</span> {item.event.name}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <span>Date:</span> {moment(item.event.date).format("MMM DD, YYYY")}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <span>No of Guest:</span> {item.event.guests.length}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          <span>Venue:</span> {item.event.venue}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <span>Is Paid:</span> {item.contribution.paymentStatus}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}></Grid>
                      {item.event.status === "Open" && item.contribution.paymentStatus === "Pending" && (
                        <Grid item xs={12}>
                          <Button
                            onClick={() => {
                              setContributionForm({ eventId: item.event._id, amount: item.contribution.amount || 0 });
                              setAddContribution(true);
                            }}
                            title="Add Contribution"
                            Icon={RiAddFill}
                            variant="neutral"
                            state="Stroke"
                          />
                        </Grid>
                      )}
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </StyledEventList>

        <Dialog fullWidth maxWidth="xs" open={isAddContributionOpen}>
          <Formik
            initialValues={contributionForm}
            validationSchema={Yup.object().shape({
              amount: Yup.string().required("Please enter contribution!"),
            })}
            onSubmit={(values, { resetForm }) => {
              const body = { ...values, userId: id };
              setAddContribution(false);
              dispatch(addContributionService(body)).then(() => {
                dispatch(getInvitesService(id));
                resetForm();
              });
            }}
            enableReinitialize
          >
            {({ handleSubmit, getFieldProps }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <IconButton onClick={() => setAddContribution(false)}>
                  <RiCloseLine size={theme.icon.size.lg} color={theme.palette.text.secondary} />
                </IconButton>
                <DialogTitle>Add Contribution</DialogTitle>
                <DialogContent>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextInput placeholder="200" fullWidth label="Contribution" {...getFieldProps("amount")} type="number" />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setAddContribution(false)} fullWidth title="Cancel" variant="neutral" state="Stroke" />
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

export default Invites;
