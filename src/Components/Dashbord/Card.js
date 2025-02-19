import React from "react";

const Card = ({ course }) => {
  // console.log(course);
  return (
    
    <div className="col-12 col-md-6 col-lg4 col-xl-3">
      <div className="card" key={course.id}>
        <img src={course.image} alt="" className="w-100" />
        <div className="card-body">
          <h4>{course?.courseName}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
