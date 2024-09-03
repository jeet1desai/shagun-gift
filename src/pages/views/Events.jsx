import React, { useEffect } from "react";

import { Grid, Typography, useTheme } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

import { StyledContainer, StyledEmptyBox, StyledEventList, StyledHeading, StyledHeadingBox } from "./StyledView";

import { RiAddFill, RiShiningFill } from "react-icons/ri";
import EmptyStateIcon from "../../assets/images/empty_state.png";

import Button from "../../components/ui/Button";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

import { dispatch, useSelector } from "../../store";
import { eventsListService } from "../../service/events";

const Events = () => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, events } = useSelector((state) => state.event);

  useEffect(() => {
    if (id) {
      dispatch(eventsListService(id));
    }
  }, [id]);

  return (
    <>
      <Loader loading={loading} />

      <StyledContainer maxWidth={events.length === 0 ? "md" : "lg"}>
        <StyledHeadingBox>
          <StyledHeading>
            <Typography variant="h4">Active Events</Typography>
            <RiShiningFill size={theme.icon.size.xs} color={theme.palette.text.primary} />
            <Typography variant="h4">{events.length}</Typography>
          </StyledHeading>
          {events.length !== 0 && (
            <Button
              onClick={() => navigate(`/events/${id}/event/create`)}
              title="Create a New Event"
              variant="primary"
              state="Filled"
              Icon={RiAddFill}
            />
          )}
        </StyledHeadingBox>

        {events.length === 0 && (
          <StyledEmptyBox>
            <Card className="empty-state-card" padding={32}>
              <img src={EmptyStateIcon} alt="empty state" />
              <Typography variant="subtitle1">There are no event postings here yet.</Typography>
              <Link to={`/events/${id}/event/create`}>
                <Button title="Create a New Event" variant="primary" state="Filled" Icon={RiAddFill} />
              </Link>
            </Card>
          </StyledEmptyBox>
        )}
        <StyledEventList>
          <Grid container spacing={4}>
            {events.map((event) => {
              return (
                <Grid item xs={4} key={event._id}>
                  <Card className="event-card" padding={12} onClick={() => navigate(`/events/${id}/event/${event._id}`)}>
                    <Typography variant="h6">
                      <span>Name:</span> {event.name}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <span>Date:</span> {moment(event.date).format("MMM DD, YYYY")}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2">
                          <span>No of Guest:</span> {event.guests.length}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">
                          <span>Venue:</span> {event.venue}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </StyledEventList>
      </StyledContainer>
    </>
  );
};

export default Events;
