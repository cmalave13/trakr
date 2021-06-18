import React, { Component } from "react";
import axios from "axios";

// import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DetailsIcon from "@material-ui/icons/Details";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ffeb3b" }}>
        <Grid container spacing="0" direction="column" alignItems="center">
          <div style={{ backgroundColor: "#ffeb3b" }}>
            <h3></h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <DetailsIcon fontSize="large" />

                <Button
                  alignItems="center"
                  type="submit"
                  value="Add Activity"
                  className="btn btn-primary"
                >
                  Add Activity{" "}
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

/*



<Grid>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "8px solid black",
              borderRadius: "3px",
              textAlign: "center",
              backgroundColor: "#ffd453",
              marginTop: "0px",
            }}
          >
            <FormControl onSubmit={this.onSubmit}>
              <InputLabel htmlFor="component-simple">Make It Count!</InputLabel>
              <TextField
                type="text"
                size="small"
                required
                className="form-control"
                value={this.state.username}
                onClick={this.onChangeUsername}
              />
            </FormControl>
            <DetailsIcon fontSize="large" />
            <Button>Add Activity</Button>
          </div>
        </Grid>
*/
