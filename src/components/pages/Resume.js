import React from "react";
import ResumeAndreaHergert from "../../pdf/Andrea_Hergert_Resume.pdf";

const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      <p style={styles.h2}>
        <a style={styles.link} href={ResumeAndreaHergert} download>
          Download Full Resume
        </a>
      </p>
      <h3 style={styles.h3}>Technical Skills</h3>
      <p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
      </p>
      <p>
        <h4>Back-End</h4>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
          <li>GraphQL</li>
        </ul>
      </p>
      <h3 style={styles.h3}>Work Experience</h3>
      <p>
        <h4>Librarian I – Information Services / Cataloging</h4>
        <h5>Jefferson County Library, Port Hadlock, WA</h5>
        (5/2016 – 7/2022)
        <ul>
          <li>
            Improved the accessibility and organization of library materials by
            cataloging over 40,000 items in the Polaris Database using copy and
            original cataloging methods.
          </li>
          <li>
            Managed a collection of over 12,000 nonfiction books, all the
            fiction and nonfiction audiobooks and eAudiobooks, ensuring timely
            acquisition and removal of materials to keep the collection
            up-to-date and relevant for library users.
          </li>
          <li>
            Designed and implemented over 50 technology classes for library
            patrons, resulting in an increase in digital literacy skills among
            attendees.
          </li>
          <li>
            Provided personalized reference services to patrons at the Info Desk
            to determine their information needs and deliver tailored solutions,
            promoting the use of library resources and technology.
          </li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant – Cataloging</h4>
        <h5>Whitman College, Walla Walla, WA</h5>
        (6/2014- 4/2016)
        <ul>
          <li>
            Improved the accessibility and organization of library materials by
            cataloging over 13,000 items in the III and Alma Database using copy
            and original cataloging methods.
          </li>
          <li>
            Played an integral role in the supervision and professional
            development of a team of three student workers, providing guidance
            and support to ensure the success of both the workers and the
            library.
          </li>
          <li>
            Conducted a comprehensive weeding project of the government
            documents collection, removing outdated and irrelevant materials and
            making space for other collections.
          </li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant</h4>
        <h5>Whitman County Library, Colfax, WA</h5>
        (5/2008 - 5/2014)
        <ul>
          <li>
            Improved the accessibility and organization of library materials by
            cataloging over 5,000 items in the Polaris Database using copy and
            original cataloging methods.
          </li>
          <li>
            Managed a collection of over 5,000 popular movies, music, and
            eBooks, ensuring timely acquisition and removal of materials to keep
            the collection up-to-date and relevant for library users.
          </li>
          <li>
            Designed and implemented over 30 technology classes for library
            patrons, resulting in an increase in digital literacy skills among
            attendees.
          </li>
          <li>
            Provided personalized reference services to patrons at the reference
            and circulation desk to determine their information needs and
            deliver tailored solutions, promoting the use of library resources
            and technology.
          </li>
        </ul>
      </p>
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Coding Bootcamp Certificate of Completion (2/2023)</h4>
        University of Washington Professional & Continuing Education, Seattle,
        WA
      </p>
      <p>
        <h4>Master of Library and Information Science (5/2014)</h4>
        San José State University, San José, CA
      </p>
      <p>
        <h4>Bachelor of Arts in Literature (3/2008)</h4>
        The Evergreen State College, Olympia, WA
      </p>
    </div>
  );
}
