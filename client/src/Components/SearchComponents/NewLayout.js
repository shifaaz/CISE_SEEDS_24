import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import {
  form,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import YearPicker from "react-year-picker";
import axios from "axios";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

export class NewLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seMethod: "TDD",
      claim: "CI CD",
      start: null,
      end: null,
      radio: null,
      getSeMethods: [],
      getClaims: [],
      error: "",
      value: "all years",
      listArticles: [],
      status: false,
      count: 0
    };
    this.handleSEMethods = this.handleSEMethods.bind(this);
    this.handleClaim = this.handleClaim.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.getSEMethods = this.getSEMethods.bind(this);
    this.getClaims = this.getClaims.bind(this);
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSEMethods(e) {
    this.setState({
      seMethod: e.target.value,
      count: this.state.count + 1
    });
    console.log("cc" + this.state.count)
    console.log(this.state.seMethod);
  }
  handleClaim(e) {
    console.log("Hi" + e.target.value)
    this.setState({
      claim: e.target.value,
      count: this.state.count + 1
    });
    console.log("cc" + this.state.count)
    console.log(this.state.claim);
  }
  handleStart(date) {
    this.setState({
      start: date,
      count: this.state.count + 1
    });
    console.log("cc" + this.state.count)
    console.log(this.state.start);
  }
  handleEnd(date) {
    this.setState({
      end: date,
      count: this.state.count + 1
    });
    console.log("cc" + this.state.count)
    console.log(this.state.end);
  }
  validate() {
    let se = this.state.seMethod;
    let claim = this.state.claims;
    let startYr = this.state.start;
    let endYr = this.state.end;
    if (se === "" || claim === "" || startYr === "" || endYr === "") {
      this.setState({
        error: "All Fileds must be fill",
      });
      return false;
    } else {
      return true;
    }
  }

  getSEMethods() {
    axios.get('http://localhost:5000/getSeMethods/').then(response => {
      console.log(response.data)
      console.log(response.status);
      this.setState({
        getSeMethods: response.data
      })

    }).catch(function (error) {
      console.log(error);
    })
  }
  getClaims() {
    axios.get('http://localhost:5000/getClaims/').then(response => {
      console.log(response.data)
      console.log(response.status);
      this.setState({
        getClaims: response.data
      })

    }).catch(function (error) {
      console.log(error);
    })
  }
  handleChange = (event) => {
    this.setState({
      radio: event.target.value,
      count: this.state.count + 2.0
    });
    console.log("cc1" + this.state.count)
  };
  componentDidMount() {
    this.getClaims();
    this.getSEMethods();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-between align-items-start">
            <div className="col-2" style={{ paddingTop: '8px' }}>
              <br />
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.seMethod}
                onClick={this.handleSEMethods}
              >
                {this.state.getSeMethods.map(function (item) {
                  return (
                    <option key={item} value={item} >
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-2" style={{ paddingTop: '8px' }}>
              <br />
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.claim}
                onChange={this.handleClaim}
              >
                {this.state.getClaims.map(function (item) {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-2">
              <p>Start Year</p>
              <YearPicker
                onChange={this.handleStart}
                value={this.state.start}
              />
            </div>
            <div className="col-2">
              <p>End Year</p>
              <YearPicker onChange={this.handleEnd} value={this.state.end} />
              <br />

            </div>
            <div className="col-2" style={{ paddingTop: '30px' }}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  // value={this.state.value}
                  onChange={this.handleChange}>
                  <FormControlLabel
                    value="last 1 year"
                    control={<Radio />}
                    label="last 1 year"

                  />
                  <FormControlLabel
                    value="last 5 year"
                    control={<Radio />}
                    label="last 5 year"
                  />
                  <FormControlLabel
                    value="last 10 year"
                    control={<Radio />}
                    label="last 10 year"
                  />
                  <FormControlLabel
                    value="All years"
                    control={<Radio />}
                    label="All years"
                  />
                </RadioGroup>
              </FormControl>
            </div>


          </div>
          <div className="text-center">
            {this.state.count >= 5 ?
              <nav>
                <Link to={"/searchResults/" + this.state.seMethod + "/" + this.state.claim + "/" + this.state.start + "/" + this.state.end + "/" + this.state.radio} class="btn btn-light">Search</Link>
              </nav>
              :
              <div>
                <p className="text-danger">{this.state.error}</p>
                <button class="btn btn-light">Search</button>
              </div>


            }

          </div>
        </div>
      </div>
    );
  }
}

export default NewLayout;