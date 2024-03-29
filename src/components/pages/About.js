import React from 'react';
import AndreaHergert from "../../img/andreahergert.jpg";

const styles = {
  andreahergert: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
      <img style={styles.andreahergert} src={AndreaHergert} alt="Andrea Hergert" />
      </div>
      <p>
      I am a driven and self-motivated individual with a passion for libraries and technology and a desire to make a positive impact through my work. I have a proven ability to learn and adapt quickly in a fast-paced environment. With a focus on delivering high-quality, reliable solutions, I am committed to constantly improving my skills and staying up-to-date with the latest trends and technologies. Whether working independently or as part of a team, I am always striving to contribute to the success of the project and the company.
      </p>
      <p>
        I have fourteen years of library experience, with six of those years working for Jefferson County Library as a Librarian I in Information Services/Cataloging. As a Librarian I in Information Services/Cataloging at Jefferson County Library I assisted patrons and demonstrated the use of reference resources at the information desk, helped patrons with item requests, and helped patrons with the public computers as well as with their own tech devices. My other tasks include cataloging, collection development, and library programming.
      </p>
      <p>
        My previous employment was for nearly two years as a Library Assistant in Cataloging at Whitman College. My main task there was providing original and copy cataloging of books, DVDs, and electronic resources. Another responsibility I had was supervising student workers which included monitoring their work, approving schedules, checking timesheets, and training them to catalog government documents.
      </p>
      <p>
        My first library job was for six years as a Library Assistant at the Whitman County Library. My main duties as a Library Assistant were helping library patrons at the reference and circulation desk, coordinating a home library delivery service at two senior living facilities, purchasing and managing the collection for popular movies, music, and eBooks. Also, I was teaching public programs about eBooks, social media, and internet safety, assisting with interlibrary loan, and cataloging movies, music, and large-print books.
      </p>
    </div>
  );
}
