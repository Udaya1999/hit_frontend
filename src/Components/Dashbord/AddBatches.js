import axios from "axios";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  }

  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  postBatch = (e) => {
    e.preventDefault();
    axios
      .post("https://hit-backend.onrender.com/batches", this.state)
      .then(() => {
        toast.success(`New batch for ${this.state.course} Added Successfully!`, {
          position: "top-right",
          autoClose: 3000, // Toast disappears in 3 seconds
        });

        // Clear input fields after submission
        this.setState({
          course: "",
          date: "",
          duration: "",
          timing: "",
          trainer: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { course, date, timing, duration, trainer } = this.state;

    return (
      <div className="container-fluid mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg p-4">
              <h2 className="text-center text-primary">Add Batches</h2>
              <form onSubmit={this.postBatch}>
                <input
                  type="text"
                  name="course"
                  className="form-control mb-3"
                  placeholder="Enter Course Name"
                  value={course}
                  onChange={this.changeData}
                  required
                />
                <input
                  type="date"
                  name="date"
                  className="form-control mb-3"
                  value={date}
                  onChange={this.changeData}
                  required
                />
                <input
                  type="text"
                  name="duration"
                  className="form-control mb-3"
                  placeholder="Course Duration"
                  value={duration}
                  onChange={this.changeData}
                  required
                />
                <input
                  type="text"
                  name="timing"
                  className="form-control mb-3"
                  placeholder="Timing"
                  value={timing}
                  onChange={this.changeData}
                  required
                />
                <input
                  type="text"
                  name="trainer"
                  className="form-control mb-3"
                  placeholder="Enter Trainer Name"
                  value={trainer}
                  onChange={this.changeData}
                  required
                />
                <button type="submit" className="btn btn-success w-100">
                  Add Batch
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Toast Notification Container */}
        <ToastContainer />
      </div>
    );
  }
}
