import { IoBookOutline } from "react-icons/io5";
import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "Ranjan Daswani | Resume";
  }, []);

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline color="#ffdb70" />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Chameli Devi Groups of Institution, affiliated to RGPV Bhopal.
            </h4>
            <span>2012 — 2016</span>
            <p className="timeline-text">
              Bachelor of Engineering | CGPA - 8 .47 | Electronics and
              Communication.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              R.R.M.B Gujarati H.S school, affiliated to Board of Secondary
              Education Bhopal
            </h4>
            <span>2011 — 2012</span>
            <p className="timeline-text">
              Senior Secondary School Certificate | 80 .40%
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              R.R.M.B Gujarati H.S school, affiliated to Board of Secondary
              Education Bhopal.
            </h4>
            <span>2009 — 2010</span>
            <p className="timeline-text">High School Certificate | 71 .00%</p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline color="#ffdb70" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Tata Consultancy Services
            </h4>
            <span>2022 — Present</span>
            <p className="timeline-text">
              Led a development team, providing direction and support to ensure
              project milestones were achieved effectively and on
              time.Successfully delivered complex, high-impact projects within
              challenging timelines, significantly contributing to client
              satisfaction and team success.
            </p>
            <p className="timeline-text">
              Worked extensively with Drupal and Node.js for building and
              maintaining robust web applications tailored to business needs.
            </p>
            <p className="timeline-text">
              Utilized GCP DevOps tools for seamless deployment and optimized
              application performance through cloud services.
            </p>
            <p className="timeline-text">
              Developed and integrated APIs, enhancing application connectivity
              and scalability while ensuring secure and efficient data handling.
            </p>
            <p className="timeline-text">
              Certified Drupal 10 Developer, showcasing advanced knowledge and
              expertise in Drupal development and customization.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Infobind software PVT LTD
            </h4>
            <span>2016 — 2022</span>
            <p className="timeline-text">
              Worked as PHP/web developer and learned & Worked on the core
              concept of web developemet that includes frontend and backend
              using PHP and HTML,JS, CSS.
            </p>
            <p className="timeline-text">
              Worked on the Multiple Projects with theme integration with HTML
              and Bootstrap in Drupal 7 and 8. Worked on make the templates of
              content types, views and user profile pages.
            </p>
            <p className="timeline-text">
              Worked on Arabic multilingual website with Drupal 8, that was the
              university website in which we build couple of Backoffice features
              for multiple Drupal Roles.
            </p>
            <p className="timeline-text">
              Got the chance to Work on AWS bucket with Drupal and Image
              resizing as file system, also used GCP file store as file system
              with multiple Drupal instance
            </p>
          </li>
        </ol>
      </section>
      {/* <section className="download-resume">
      <a href="./assets/file/RanjanDaswani_Resume.pdf" className="form-btn">
        <ion-icon name="paper-plane"></ion-icon>
        <span>Download Resume</span>
      </a>
    </section> */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Drupal</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">PHP</h5>
              <data value="80">80%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">HTML - CSS</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">JavaScript & Jquery</h5>
              <data value="65">65%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "65%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Mysql</h5>
              <data value="60">60%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">GIT</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">NodeJs</h5>
              <data value="40">40%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "40%" }}
              ></div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Devops/Cloud Infrastruture</h5>
              <data value="35">35%</data>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: "35%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Resume;
