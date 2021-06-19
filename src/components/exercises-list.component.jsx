import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import TimerIcon from "@material-ui/icons/Timer";
import NearMeIcon from "@material-ui/icons/NearMe";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <TableRow>
    <TableCell align="center">{props.exercise.username}</TableCell>
    <TableCell align="center">{props.exercise.description}</TableCell>
    <TableCell align="center">{props.exercise.duration}</TableCell>
    <TableCell align="center">{props.exercise.distance}</TableCell>
    <TableCell align="center">{props.exercise.calories}</TableCell>
    <TableCell align="center">{props.exercise.date.substring(0, 10)}</TableCell>
    <TableCell align="center">
      <Link to={"/edit/" + props.exercise._id}>
        <IconButton edge="start" color="disabled" aria-label="menu">
          <EditIcon fontSize="small" />
        </IconButton>
      </Link>
      |{" "}
      <IconButton edge="start" aria-label="menu">
        <DeleteForeverIcon
          fontSize="small"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        />
      </IconButton>
    </TableCell>
  </TableRow>
);

// const Totals = (props) => {
//   <TableRow>
//     <TableCell>Totals:</TableCell>
//     <TableCell>{props.exercise.calories}</TableCell>
//   </TableRow>;
// };

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffeb3b",
    color: "#000000",
  },
  body: {
    fontSize: 14,
    textAlign: "center",
  },
}))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });
let calorieTotal = 0;
let distanceTotal = 0;
let durationTotal = 0;

export default class ExercisesList extends Component {
  // const classes = useStyles();

  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
    window.location = "/";
  };

  exerciseList = () => {
    // console.log(this.state.exercises);

    for (let i = 0; i < this.state.exercises.length; i++) {
      let exerciseObject = this.state.exercises[i];
      calorieTotal += exerciseObject.calories;
      distanceTotal += exerciseObject.distance;
      durationTotal += exerciseObject.duration;
      // console.log(calorieTotal);
    }

    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  // calorieTotal = () => {
  //   console.log(this.state.exercises);
  //   return this.state.exercises.map((currentexercise) => {
  //     return <Totals exercise={currentexercise} key={currentexercise._id} />;
  //   });
  // };

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                ACTIVITY
                <br /> <SportsHandballIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell align="center">
                INTENSITY LVL
                <br />
                <TransferWithinAStationIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell align="center">
                DURATION
                <br />
                <TimerIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell align="center">
                DISTANCE
                <br />
                <NearMeIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell align="center">
                CALORIES
                <br />
                <WhatshotIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell align="center">
                DATE
                <br />
                <EventAvailableIcon fontSize="small"></EventAvailableIcon>
              </StyledTableCell>
              <StyledTableCell align="center">
                ACTIONS
                <br />
                <ListAltIcon fontSize="small" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.exerciseList()}</TableBody>
        </Table>
        <div style={{ borderColor: "black" }}>
          <Box display="flex" justifyContent="center">
            <Container align="center" style={{ backgroundColor: "#ffeb3b" }}>
              <img
                src={"https://i.imgur.com/llbBNEg.png"}
                alt="stats"
                width="200px"
              />
              <h4>You burned {calorieTotal} calories so far!</h4>
              <h4>You traveled a distance of {distanceTotal} miles!</h4>
              <h4>You logged {durationTotal} minutes of activities!</h4>
            </Container>
          </Box>
        </div>
      </TableContainer>
    );
  }
}
