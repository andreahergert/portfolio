import React from "react";
import ResumeAndreaHergert from "../../pdf/Andrea_Hergert_Resume.pdf";

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        <a href={ResumeAndreaHergert} download>
          Download Full Resume
        </a>
      </p>
      <h3>Summary</h3>
      <p>
        As a full-stack web developer with a web development certificate from
        the University of Washington Professional & Continuing Education, I am a
        driven and self-motivated individual with a passion for technology and a
        desire to make a positive impact through my work. I have a strong
        foundation in programming languages and a proven ability to learn and
        adapt quickly in a fast-paced environment. With a focus on delivering
        high-quality, reliable solutions, I am committed to constantly improving
        my skills and staying up-to-date with the latest technologies. Whether
        working independently or as part of a team, I am always striving to
        contribute to the success of the project and the company.
      </p>
      <h3>Technical Skills</h3>
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
        </ul>
      </p>
      <h3>Work Experience</h3>
      <p>
        <h4>Librarian I – Information Services / Cataloging</h4>
        <h5>Jefferson County Library, Port Hadlock, WA</h5>
        (5/2016 – 7/2022)
        <ul>
          <li>
            Copy and original cataloging of books, DVDs, CDs, and electronic
            resources in the Polaris Database
          </li>
          <li>
            Select and manage the collection for nonfiction, audiobooks, and
            eAudiobooks
          </li>
          <li>
            Develop and deliver various library programs and services including
            technology classes and one-on-one tech help
          </li>
          <li>
            Assist patrons and demonstrate the use of reference resources at the
            Info Desk
          </li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant – Cataloging</h4>
        <h5>Whitman College, Walla Walla, WA</h5>
        (6/2014- 4/2016)
        <ul>
          <li>
            Copy and original cataloging of books, DVDs, and electronic
            resources in the III and Alma Database
          </li>
          <li>
            Assist in the hiring, training, scheduling, and supervision of
            student workers
          </li>
          <li>
            Verify and assign Library of Congress call numbers and subject
            headings to records
          </li>
          <li>Weeding the government documents collection</li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant</h4>
        <h5>Whitman County Library, Colfax, WA</h5>
        (5/2008 - 5/2014)
        <ul>
          <li>
            Copy and original cataloging of popular movies, music CDs, and large
            print books in the Horizon Database
          </li>
          <li>
            Develop and deliver various library programs and services including
            technology classes
          </li>
          <li>Process, borrow, and lend interlibrary loans in WorldShare</li>
          <li>Assist patrons at the reference and circulation desk</li>
          <li>
            Organize and deliver home library services at local senior living
            facilities
          </li>
          <li>
            Select and manage the collection for popular movies, music, and
            eBooks
          </li>
        </ul>
      </p>
      <h3>Education</h3>
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
