import axios from "axios";
import React, { Component } from "react";

export default class AddBatches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
      date: "",
      duration: "",
      timing: "",
      trainer: "",
    };
  };

  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  postBatch = (e) => {
    e.preventDefault();
    axios
      .post("https://hit-backend.onrender.com/batches", this.state)
      .then(() => {
        // alert("Batch Added Successfully");

        this.changeData("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { course, date, timing, duration, trainer } = this.state;

    return (
      <div className="container mt-5 pt-5">
        {/* <h3 style={{color:"green",textAlign:"center"}}>CRUD Operarions with Class Component</h3> */}
        <div className="col-8 col-lg-4 mx-auto">
          <form onSubmit={this.postBatch}>
            <h1>Add Batches</h1>
            <input
              type="text"
              name="course"
              className="form-control mb-3"
              placeholder=" Enter Cource Name "
              value={course}
              onChange={this.changeData}
            />
            <input
              type="date"
              name="date"
              className="form-control mb-3"
              placeholder="choose date"
              value={date}
              onChange={this.changeData}
            />
            <input
              type="text"
              name="duration"
              className="form-control mb-3"
              placeholder=" Course duration "
              value={duration}
              onChange={this.changeData}
            />
            <input
              type="text"
              name="timing"
              className="form-control mb-3"
              placeholder=" Timing "
              value={timing}
              onChange={this.changeData}
            />
            <input
              type="text"
              name="trainer"
              className="form-control mb-3"
              placeholder=" Enter trainer Name"
              value={trainer}
              onChange={this.changeData}
            />
            <input type="submit" value="Add Batch" className="btn btn-danger" />
          </form>
        </div>
      </div>
    );
  }
}
