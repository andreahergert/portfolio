import React from "react";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Post from "../img/post.png";

const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '5px',
  },
};

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          
        <a href="https://www.linkedin.com/in/andreahergert/" target="blank">
          <img style={styles.icons} src={LinkedIn} alt="linkedin icon" />
          </a>
          <a href="https://github.com/andreahergert" target="blank">
            <img style={styles.icons} src={Github} alt="github icon" />
          </a>
          <a href="https://post.news/@andreahergert" target="blank">
          <img style={styles.icons} src={Post} alt="post icon" />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
