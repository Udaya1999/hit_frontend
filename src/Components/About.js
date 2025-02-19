import React from "react";

const About = () => {
  return (
    <div className="container mt-5 pt-5">
      <div>
        <p
          style={{
            width: "70%",
            justifyContent: "center",
            marginLeft: "250px",
            paddingTop: "10px",
          }}
        >
          <h5>
            {" "}
            <span style={{ color: "red" }}>
              "Hyderabad IT Trainings provides all software courses Classroom
              training & Online with 100% placements."
            </span>
          </h5>
          Hyderabad IT Trainings is a Hyderabad based IT Software Training &
          Recruitment Company delivering classroom and online trainings in
          India, USA and UK, Australia, Canada, Singapore. Being the leader in
          Software courses classroom training & online training sector,
          Hyderabad IT Trainings holds the top position in short time. Our core
          values are providing high quality and project oriented training at
          affordable fees. We offer classroom and online training on all
          technologies which are in high demand. All our trainers are IT
          professionals with rich experience.
        </p>
      </div>
      <section style={{ display: "flex" }}>
        <div style={{ width: "25%", marginLeft: "70px" ,marginRight:"25px"}}>
          <img
            src="https://hyderabadittrainings.com/images/course/cu-2.jpg"
            alt="about-sid-img-1"
          />
        </div>
        <div style={{ width: "70%" }}>
          <h2 style={{ color: "red" }}>Online Training</h2>
          <p>
            Online training is a method of delivering training through an
            electronic medium without the immediate presence of a human trainer.
            By taking advantage of technology, Online Training can be more cost
            effective by delivering more knowledge in a more efficient manner.
            Hyderabad IT Trainings is offering Software courses online Training
            using its vast Technology Expertise for the benefit of the students
            in transforming their dreams into reality. We offer Online Software
            Training sessions to cater the training requirements of the
            Aspirants who cannot attend Classroom Training.
          </p>
        </div>
      </section>
      <br />
      <section style={{ display: "flex" }}>
        <div style={{ width: "60%", marginLeft: "70px" }}>
          <h2 style={{ color: "red" }}>Offline Training</h2>
          <p>
            Hyderabad IT Trainings is a leading IT courses Classroom training
            Institute in Hyderabad, India. We are a well-respected company that
            has been in the training platform for over a decade. In everything
            we do we make an effort to deliver quality. With Classroom Training
            opted from Hyderabad IT Trainings, you can develop skills that
            directly and transfer from the classroom to the workplace. Each
            Software classroom training course includes the planning, design,
            implementation, management, and support phases of the technology
            adoption of the course.
          </p>
        </div>
        <br />
        <div style={{ width: "25%" }}>
          <img
            src="https://hyderabadittrainings.com/images/course/cu-5.jpg"
            alt="about-sid-img-2"
          />
        </div>
      </section>
      <br />
      <div style={{ margin: "30px" }}>
        <h6 style={{ color: "red" }}> Vision</h6>
        <br />
        <p>
          Hyderabad IT Training Training Institutes in Hyderabad vision for
          quality managements to consistently deliver high-quality solutions
          focused on improving customer satisfaction. To be an Software Training
          Institutes in Hyderabad, in dynamic equilibrium with its social,
          ecological and economic environment striving continuously for
          excellence in education. Hyderabad IT Training is targeting to become
          one the biggest and globally renowned training and learning Solutions
          Company which helps students build a reputed IT career and also assist
          IT organization to build up their workforce with more practical
          oriented resources.
        </p>
        <br />
        <h6 style={{ color: "red" }}> Mission</h6>
        <br />
        <p>
          The mission of quality management at Hyderabad IT Training Institute
          in Hyderabad, is to Training and Develop a new methods and standards
          Proactively communicate and share knowledge Apply the knowledge to
          enhance our products, processes, and services Continually monitor and
          improve our performance against set targets. Hyderabad IT Training
          gives the flexibility to organization making corporate Training more
          flexible, customized and economical that allows them to train a batch
          of candidates or as few candidates as you need depending on the
          business need – from a single individual, team or department to
          everyone in the organization.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;