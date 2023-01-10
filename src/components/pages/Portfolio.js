import React from 'react';
import CraterLake from "../../img/crater-lake.jpg";
import IcePlant from "../../img/ice-plant.jpg";
import Boats from "../../img/boats.jpg";
import CalCoast from "../../img/california-coast.jpg";
import Ferry from "../../img/ferry.jpg";
import PortTownsend from "../../img/port-townsend.jpg";

const styles = {
  project: {

  },
};

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
      <img style={styles.project} src={CraterLake} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
      <div>
      <img style={styles.project} src={IcePlant} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
      <div>
      <img style={styles.project} src={Boats} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
      <div>
      <img style={styles.project} src={CalCoast} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
      <div>
      <img style={styles.project} src={Ferry} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
      <div>
      <img style={styles.project} src={PortTownsend} alt="Andrea Hergert" />
      </div>
      <p>
        My Portfolio.
      </p>
    </div>
  );
}
