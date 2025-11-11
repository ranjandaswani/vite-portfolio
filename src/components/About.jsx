import databaseicon from "../assets/images/database.png";
import codeingicon from "../assets/images/coding.png";
import frontendicon from "../assets/images/front-end-programming.png";
import cloudserviceicon from "../assets/images/cloud-service.png";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "Ranjan Daswani | About";
  }, []);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Experienced Drupal and web developer with over 7 years in the
          industry, specializing in building robust and dynamic websites and web
          applications. Skilled in PHP, JavaScript, jQuery, HTML, CSS,
          Bootstrap, MySQL, and Node.js, with extensive experience in Drupal
          from version 7 onwards.
        </p>
        <p>
          Currently working at a leading multinational corporation, I have a
          proven track record of delivering high-quality, scalable, and
          efficient web solutions. My passion for web development drives me to
          stay updated with the latest industry trends and technologies,
          ensuring that my projects are always at the cutting edge of
          innovation.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={codeingicon} alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Backend development</h4>
              <p className="service-item-text">
                Using & learning Drupal, PHP, Symphony, NodeJS
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={frontendicon} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Web Frontend development
              </h4>
              <p className="service-item-text">
                Using and Learning HTML, JS, CSS, ReactJs, Jquery
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={databaseicon} alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database</h4>
              <p className="service-item-text">
                Using and Learning Mysql and MongoDB
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={cloudserviceicon} alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Cloud</h4>
              <p className="service-item-text">
                working with Servers, DNS, CNAME, Emails, GCP and VPS, Apache
                and Nginx web servers
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
