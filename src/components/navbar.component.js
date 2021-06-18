import React, { Component } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { yellow } from "@material-ui/core/colors";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FaceIcon from "@material-ui/icons/Face";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    marginRight: "200px",
  },

  logo: {
    maxWidth: 80,
    textAlign: "center",
  },
  stylebar: {
    background: "linear-gradient(45deg, #000000 30%, #353839 90%)",
    minHeight: 20,
    width: "100%",
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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.stylebar}>
        <Toolbar>
          <Link to={{ pathname: "/" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Link to={{ pathname: "/" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <DirectionsRunIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Link to={{ pathname: "/create" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AddBoxIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Link to={{ pathname: "/user" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <PersonAddIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Link to={{ pathname: "/calendar" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <DateRangeIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Typography variant="h6" className={classes.title}>
            <img
              src={"https://i.imgur.com/wChLbIQ.png"}
              alt="logo"
              className={classes.logo}
            />
          </Typography>
          <Link to={{ pathname: "/login" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FaceIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//export { default } from "./NavBar";
