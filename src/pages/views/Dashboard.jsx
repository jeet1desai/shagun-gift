import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

import { StyledContainer } from "./StyledView";

import { dispatch, useSelector } from "../../store";
import { contributionGiftService, receivedGiftService, topGuestHostService } from "../../service/dashboard";

import Loader from "../../components/Loader";
import Card from "../../components/Card";

const Dashboard = () => {
  const { id } = useParams();

  const { loading, gifts, guests, contribution } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (id) {
      dispatch(receivedGiftService(id));
      dispatch(topGuestHostService(id));
      dispatch(contributionGiftService(id));
    }
  }, [id]);

  const [receivedGiftData, setReceivedGiftData] = useState([]);
  useEffect(() => {
    if (gifts) {
      const pieData = gifts.map((event) => ({
        label: event.eventName,
        value: event.totalReceived,
      }));
      setReceivedGiftData(pieData);
    }
  }, [gifts]);

  const [barChartData, setBarChartData] = useState({ xData: [], yData: [] });
  useEffect(() => {
    if (contribution) {
      const contributedGifts = contribution;
      const xData = [];
      const yData = [];

      Object.keys(contributedGifts).forEach((hostId) => {
        const contributions = contributedGifts[hostId];
        const totalAmount = contributions.reduce((sum, contribution) => sum + contribution.amount, 0);

        xData.push(hostId);
        yData.push(totalAmount);
      });

      setBarChartData({ xData, yData });
    }
  }, [contribution]);

  const [series, setSeries] = useState([]);
  const [xData, setXData] = useState([]);
  useEffect(() => {
    if (guests) {
      const xDataSet = new Set();
      const seriesDataMap = {};

      guests.forEach((g) => {
        if (Array.isArray(g.events)) {
          g.events.forEach((event) => {
            xDataSet.add(event.eventName);

            if (!seriesDataMap[event.eventName]) {
              seriesDataMap[event.eventName] = 0;
            }
            seriesDataMap[event.eventName] += event.amountContributed;
          });
        }
      });

      const xDataArray = Array.from(xDataSet);

      const seriesDataArray = xDataArray.map((eventName) => seriesDataMap[eventName]);

      setXData(xDataArray);
      setSeries([{ data: seriesDataArray, label: "Contributions" }]);
    }
  }, [guests]);

  return (
    <>
      <Loader loading={loading} />

      <StyledContainer maxWidth="md">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Card padding={20}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Received Gift
              </Typography>
              <PieChart
                series={[
                  {
                    data: receivedGiftData,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                  },
                ]}
                height={200}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card padding={20}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Top Guest & Host
              </Typography>
              <LineChart xAxis={[{ data: xData, scaleType: "point" }]} series={series} height={200} margin={{ top: 10, bottom: 20 }} />
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card padding={20}>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Gifts Contributed
              </Typography>
              <BarChart
                xAxis={[{ data: barChartData.xData, scaleType: "band" }]}
                series={[{ data: barChartData.yData, label: "Total Contribution" }]}
                height={300}
                margin={{ top: 20, bottom: 30 }}
              />
            </Card>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Dashboard;
