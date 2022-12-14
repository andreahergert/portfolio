import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-primary btn-floating m-1" href="https://github.com/andreahergert" target="blank" role="button">Github<i className="fab fa-github"></i></a>
          <a className="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/andreahergert/" target="blank" role="button">LinkedIn<i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-primary btn-floating m-1" href="https://www.goodreads.com/andreahergert" target="blank" role="button">Goodreads<i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-primary btn-floating m-1" href="https://post.news/@andreahergert" target="blank" role="button">Post<i className="fab fa-linkedin-in"></i></a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;