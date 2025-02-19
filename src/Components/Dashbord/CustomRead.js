import axios from "axios";
import React, { Component } from "react";

export default class CustomRead extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      course: "",
      date: "",
      duration: "",
      timing: "",
      trainer: "",
      batches: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://hit-backend.onrender.com/batches")
      .then((res) => {
        console.log(res.data);
        this.setState({
          batches: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteBatch = (id) => {
    // alert("deleted "+ id);
    axios
      .delete("https://hit-backend.onrender.com/batches/" + id)
      .then(alert("Deleted Successfully"))
      .catch((err) => {
        console.log(err);
      });
  };
  editBatch = (id) => {
    axios
      .get("https://hit-backend.onrender.com/batches/" + id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          course: res.data.course,
          date: res.data.date,
          duration: res.data.duration,
          timing: res.data.timing,
          trainer: res.data.trainer,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  changeData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateBatch = (e) => {
    e.preventDefault();
    const { id, course, timing, trainer, date, duration } = this.state;
    axios
      .put("https://hit-backend.onrender.com/batches/" + id, {
        id,
        course,
        date,
        timing,
        trainer,
        duration,
      })
      .then(() => alert("Updated Successfully"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container mt-5 pt-5">
        <h1 className="text-center mb-10">Upcomming Batches</h1>
        <table
          className="table table-striped"
          style={{ height: "40px", textAlign: "center" }}
        >
          <thead
            style={{
              backgroundColor: "black",
              color: "white",
              height: "40px",
              textAlign: "center",
            }}
          >
            <th>Course Name</th>
            <th>Duration</th>
            <th>Timings</th>
            <th>Date</th>
            <th>Trainer</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.batches?.map((bat) => {
              return (
                <tr key={bat.id}>
                  <td>{bat.course}</td>
                  <td>{bat.duration} Days</td>
                  <td>{bat.timing}</td>
                  <td>{bat.date}</td>
                  <td>{bat.trainer}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      data-bs-target="#1234"
                      data-bs-toggle="modal"
                      style={{ height: "30px" }}
                      onClick={() => this.editBatch(bat.id)}
                    >
                      <p>Edit</p>
                    </button>
                    <span> </span>
                    <button
                      className="btn btn-danger"
                      style={{ height: "30px" }}
                      onClick={() => this.deleteBatch(bat.id)}
                    >
                      <p>delete</p>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Model for update*/}

        <div className="modal fade" id="1234">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> Update Batch Data</h4>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.updateBatch}>
                  <input
                    type="text"
                    name="course"
                    className="form-control mb-3"
                    placeholder=" Enter Course Name "
                    value={this.state.course}
                    onChange={this.changeData}
                  />
                  <input
                    type="date"
                    name="date"
                    className="form-control mb-3"
                    placeholder="choose date"
                    value={this.state.date}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    name="duration"
                    className="form-control mb-3"
                    placeholder=" Course duration "
                    value={this.state.duration}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    name="timing"
                    className="form-control mb-3"
                    placeholder=" Timing "
                    value={this.state.timing}
                    onChange={this.changeData}
                  />
                  <input
                    type="text"
                    name="trainer"
                    className="form-control mb-3"
                    placeholder=" Enter trainer Name "
                    value={this.state.trainer}
                    onChange={this.changeData}
                  />
                  <input
                    type="submit"
                    value="Update Batch"
                    data-bs-dismiss="modal"
                    className="btn btn-danger"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
