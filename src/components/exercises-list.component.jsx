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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => (
  <TableRow>
    <TableCell>{props.exercise.username}</TableCell>
    <TableCell>{props.exercise.description}</TableCell>
    <TableCell>{props.exercise.duration}</TableCell>
    <TableCell>{props.exercise.distance}</TableCell>
    <TableCell>{props.exercise.calories}</TableCell>
    <TableCell>{props.exercise.date.substring(0, 10)}</TableCell>
    <TableCell>
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffeb3b",
    color: "#000000",
  },
  body: {
    fontSize: 14,
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
  };

  exerciseList = () => {
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

  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                ACTIVITY
                <br /> <SportsHandballIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell>
                INTENSITY LVL
                <br />
                <TransferWithinAStationIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell>
                DURATION
                <br />
                <TimerIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell>
                DISTANCE
                <br />
                <NearMeIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell>
                CALORIES
                <br />
                <WhatshotIcon fontSize="small" />
              </StyledTableCell>
              <StyledTableCell>
                DATE
                <br />
                <EventAvailableIcon fontSize="small"></EventAvailableIcon>
              </StyledTableCell>
              <StyledTableCell>
                ACTIONS
                <br />
                <ListAltIcon fontSize="small" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.exerciseList()}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
