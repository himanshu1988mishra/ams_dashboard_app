import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import LineChart from "../Components/Charts/LineChart";
import MapChart from "../Components/Charts/MapChart";
import VerticalBarChart from "../Components/Charts/VerticalBarChart";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AMSDashboard = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Current Sales Month"
              // subheader="September 14, 2016"
            />

            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
          <Item>
            <MapChart />
          </Item>
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Item>
            <VerticalBarChart />
          </Item>
          <Item>
            <VerticalBarChart />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default AMSDashboard;
