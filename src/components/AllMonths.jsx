import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";
import DetailsIcon from "@material-ui/icons/Details";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 4),
  },
  card: {
    height: "120%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "8px solid black",
    borderRadius: "3px",
    textAlign: "center",
    backgroundColor: "#ffeb3b",
    // marginTop: "0px",
  },
  icon: {},
  title: {
    // padding: theme.spacing(2),
  },
  featureList: {
    // padding: theme.spacing(2),
  },
  button: {
    background: "linear-gradient(45deg, #000000 30%, #353839 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(53, 56, 57)",
    color: "white",
    height: 48,
    padding: "0 35px",
  },
}));

const Months = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#ffeb3b" }}>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>JANUARY</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>FEBRUARY</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>MARCH</Button>
            </div>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>APRIL</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>MAY</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Link style={{ textDecoration: "none" }} to={{ pathname: "/" }}>
                <Button className={classes.button}>JUNE</Button>
              </Link>
            </div>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>JULY</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>AUGUST</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>SEPTEMBER</Button>
            </div>
          </Grid>
        </Grid>

        <br />

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>OCTOBER</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>NOVEMBER</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.card}>
              <DetailsIcon fontSize="large" className={classes.icon} />
              <Button className={classes.button}>DECEMBER</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Months;
