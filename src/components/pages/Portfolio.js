import React from "react";
import CraterLake from "../../img/crater-lake.jpg";
import IcePlant from "../../img/ice-plant.jpg";
import Boats from "../../img/boats.jpg";
import CalCoast from "../../img/california-coast.jpg";
import Ferry from "../../img/ferry.jpg";
import PortTownsend from "../../img/port-townsend.jpg";

import "../../style/portfolio.css";

const styles = {
  project: {
    border: "3px solid #58C2C7",
    filter: "opacity (75%)",
  },
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    backgroundColor: "#58C2C7",
    marginBottom: "0rem",
}
};

export default function Portfolio() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className='images'>
        <section className="card">
          <header><h3 style={styles.header}>Tech Blog</h3></header>
          <a href="https://ancient-citadel-20743.herokuapp.com/" target="blank">
            <img
              style={styles.project}
              src={CraterLake}
              alt="mountain lake with island in middle, wizard island at crater lake"
            />
          </a>
          <a href="https://github.com/andreahergert/tech_blog">
            GitHub Repository
          </a>
          <p>
            This is a tech blog created in the UW Coding Bootcamp. On the
            front-end, the app can be accessed at Heroku. On the back-end, this
            is a node command line application that utilizes sequilize, dotenv,
            mysql2, express, handlebars, and bcrypt.
          </p>
        </section>

        <section className="card">
        <header><h3 style={styles.header}>Text Editor</h3></header>
          <a
            href="https://murmuring-garden-28398.herokuapp.com/"
            target="blank"
          >
            <img
              style={styles.project}
              src={IcePlant}
              alt="ice plant with pink and yellow flowers growing on beach with a sunset in distance"
            />
          </a>
          <a href="https://github.com/andreahergert/text_editor">
            GitHub Repository
          </a>
          <p>
            This is a text editor application created in the UW Coding Bootcamp.
            The text editor runs in a browser and can be installed on a
            computer.
          </p>
        </section>

        <section className="card">
        <header><h3 style={styles.header}>Social Network API</h3></header>
          <a href="https://www.youtube.com/watch?v=CMaXuKK3Jjc" target="blank">
            <img
              style={styles.project}
              src={Boats}
              alt="white sailboats in puget sound"
            />
          </a>
          <a href="https://github.com/andreahergert/social_network_api">
            GitHub Repository
          </a>
          <p>
            This is a social network api back-end database created in the UW
            Coding Bootcamp. This is a command line application that utilizes
            mongoose, express, and moment to view, create, update, and delete
            data from the database using Insomnia or MongoDB Compass.
          </p>
        </section>

        <section className="card">
        <header><h3 style={styles.header}>Motivation Station</h3></header>
          <a href="https://secret-springs-16165.herokuapp.com/" target="blank">
            <img
              style={styles.project}
              src={CalCoast}
              alt="california coast with crashing waves"
            />
          </a>
          <a href="https://github.com/andreahergert/motivation_station">
            GitHub Repository
          </a>
          <p>
            This is our group project for Project 2 created in the UW Coding
            Bootcamp. On the front-end, the app can be accessed at Heroku. On
            the back-end, this is a node command line application that utilizes
            sequilize, dotenv, mysql2, express, handlebars, dayjs, and bcrypt.
            The Motivation Station is an app where users can keep track of their
            goals.
          </p>
        </section>

        <section className="card">
        <header><h3 style={styles.header}>Employee Tracker</h3></header>
          <a href="https://www.youtube.com/watch?v=6G3ubKlC82c" target="blank">
            <img
              style={styles.project}
              src={Ferry}
              alt="ferry sailing in puget sound"
            />
          </a>
          <a href="https://github.com/andreahergert/employee_tracker">
            GitHub Repository
          </a>
          <p>
            This is an employee tracker database created in the UW Coding
            Bootcamp. It allows users to input departments, roles, and
            employees, update an employee's role, and view a table of
            departments, roles, and employees.
          </p>
        </section>

        <section className="card">
        <header><h3 style={styles.header}>Weather Dashboard</h3></header>
          <a
            href="https://andreahergert.github.io/weather_dashboard/"
            target="blank"
          >
            <img
              style={styles.project}
              src={PortTownsend}
              alt="sunrise on puget sound in port townsend"
            />
          </a>
          <a href="https://github.com/andreahergert/weather_dashboard">
            GitHub Repository
          </a>
          <p>
            This is a weather dashboard project for the UW Coding Bootcamp. This
            page uses HTML, CSS, Javascript, and the Open Weather API to create
            a functioning weather forecast for a city.
          </p>
        </section>
      </div>
    </div>
  );
}
