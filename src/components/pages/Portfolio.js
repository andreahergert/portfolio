import React from "react";
import TechBlog from "../../img/tech_blog.png";
import TextEditor from "../../img/text_editor.png";
import SocialNetwork from "../../img/social_network.png";
import MotivationStation from "../../img/motivation_station.png";
import EmployeeTracker from "../../img/employee_tracker.png";
import CurriculumCorner from "../../img/curriculum_corner.png";

import "../../style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://pacific-anchorage-45596.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={CurriculumCorner}
                alt="screenshot of curriculum corner"
              />
              <header>
                <h3 style={styles.header}>Curriculum Corner</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/curriculum_corner"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is our group project for Project 3 created in the UW Coding Bootcamp. This is a MERN (MongoDB, Express.js, React, and Node.js) app that will allow a user to access a dashboard with their to-do list for keeping their educational goals. This app also utilizes bcrypt, jsonwebtoken, and bootstrap.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://www.youtube.com/watch?v=6G3ubKlC82c"
              target="blank"
            >
              <img
                className="card-img-top"
                src={EmployeeTracker}
                alt="screenshot of employee tracker on command line showing list of employees"
              />
              <header>
                <h3 style={styles.header}>Employee Tracker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/employee_tracker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is an employee tracker database created in the UW Coding
              Bootcamp. It allows users to input departments, roles, and
              employees, update an employee's role, and view a table of
              departments, roles, and employees.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://secret-springs-16165.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={MotivationStation}
                alt="screenshot of motivation station showing a list of goals on the homepage"
              />
              <header>
                <h3 style={styles.header}>Motivation Station</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/motivation_station"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is our group project for Project 2 created in the UW Coding
              Bootcamp. On the front-end, the app can be accessed at Heroku. On
              the back-end, this is a node command line application that
              utilizes sequilize, dotenv, mysql2, express, handlebars, dayjs,
              and bcrypt. The Motivation Station is an app where users can keep
              track of their goals.
            </p>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://www.youtube.com/watch?v=CMaXuKK3Jjc"
              target="blank"
            >
              <img
                className="card-img-top"
                src={SocialNetwork}
                alt="screenshot of Insomnia software running the social network API. Shows list of users"
              />
              <header>
                <h3 style={styles.header}>Social Network API</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/social_network_api"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a social network api back-end database created in the UW
              Coding Bootcamp. This is a command line application that utilizes
              mongoose, express, and moment to view, create, update, and delete
              data from the database using Insomnia or MongoDB Compass.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://ancient-citadel-20743.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={TechBlog}
                alt="screenshot of tech blog website showing rows of comments on homepage"
              />
              <header>
                <h3 style={styles.header}>Tech Blog</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/tech_blog"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a tech blog created in the UW Coding Bootcamp. On the
              front-end, the app can be accessed at Heroku. On the back-end,
              this is a node command line application that utilizes sequilize,
              dotenv, mysql2, express, handlebars, and bcrypt.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://murmuring-garden-28398.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={TextEditor}
                alt="screenshot of installed text editor showing Hello World!"
              />
              <header>
                <h3 style={styles.header}>Text Editor</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/andreahergert/text_editor"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is a text editor application created in the UW Coding
              Bootcamp. The text editor runs in a browser and can be installed
              on a computer.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
