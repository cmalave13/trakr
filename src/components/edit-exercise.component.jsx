import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailsIcon from "@material-ui/icons/Details";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      distance: 0,
      calories: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          distance: response.data.distance,
          calories: response.data.calories,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value,
    });
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      distance: this.state.distance,
      calories: this.state.calories,
      date: this.state.date,
    };

    console.log(exercise);

    axios
      .post(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ffeb3b" }}>
        <Grid container spacing="0" direction="column" alignItems="center">
          <div>
            <h3>EDIT EXERCISE LOG</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Activity</label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                >
                  {this.state.users.map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Intensity (1-10)</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.duration}
                  onChange={this.onChangeDuration}
                />
              </div>

              <div className="form-group">
                <label>Distance (In Miles): </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.distance}
                  onChange={this.onChangeDistance}
                />
              </div>

              <div className="form-group">
                <label>Calories Burned: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.calories}
                  onChange={this.onChangeCalories}
                />
              </div>

              <div className="form-group">
                <div alignItems="center" align="center">
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>

              <div className="form-group" alignItems="center" align="center">
                <DetailsIcon fontSize="large" />

                <Button
                  alignItems="center"
                  type="submit"
                  value="Add Activity"
                  className="btn btn-primary"
                >
                  Edit Activity{" "}
                </Button>
                <DetailsIcon fontSize="large" />
              </div>
            </form>
          </div>
        </Grid>
      </div>
    );
  }
}
