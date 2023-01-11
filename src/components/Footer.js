import React from "react";

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          <a className="btn btn-primary btn-floating m-1" href="https://github.com/andreahergert" target="blank" role="button">Github</a>
          <a className="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/andreahergert/" target="blank" role="button">LinkedIn</a>
          <a className="btn btn-primary btn-floating m-1" href="https://twitter.com/AndreaHergert" target="blank" role="button">Twitter</a>
          <a className="btn btn-primary btn-floating m-1" href="https://post.news/@andreahergert" target="blank" role="button">Post</a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;