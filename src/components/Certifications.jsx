import DrupalCert from "../assets/images/certs/Drupal_cert.png";
import DjangoCert from "../assets/images/certs/django.jpg";
import chatgptCert from "../assets/images/certs/chatgpt.jpg";
import NodejsCert from "../assets/images/certs/nodejs.jpg";
import { useEffect } from "react";

function Certifications() {
  useEffect(() => {
    document.title = "Ranjan Daswani | Certifications";
  }, []);

  return (
    <article className="certifications active" data-page="certifications">
      <header>
        <h2 class="h2 article-title">Certifications</h2>
      </header>
      <section class="blog-posts">
        <ul class="blog-posts-list">
          <li class="blog-post-item">
            <figure class="blog-banner-box">
              <img
                src={DrupalCert}
                alt="Drupal 10 Certification"
                loading="lazy"
              />
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Technology</p>
                <span class="dot"></span>
                <time datetime="2024-09-09">Sep 09,2024</time>
              </div>
              <h3 class="h3 blog-item-title">
                Acquia Certified Developer - Drupal 10
              </h3>
            </div>
          </li>

          <li class="blog-post-item">
            <figure class="blog-banner-box">
              <img
                src={chatgptCert}
                alt="Django Certification"
                loading="lazy"
              />
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Technology</p>
                <span class="dot"></span>
                <time datetime="2024-09-09">Oct 17,2024</time>
              </div>
              <h3 class="h3 blog-item-title">
                Introduction to open API and Chat GPT API for Developers
              </h3>
            </div>
          </li>
          <li class="blog-post-item">
            <figure class="blog-banner-box">
              <img src={NodejsCert} alt="Django Certification" loading="lazy" />
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Technology</p>
                <span class="dot"></span>
                <time datetime="2024-09-09">Feb 29,2024</time>
              </div>
              <h3 class="h3 blog-item-title">
                Nodejs: Restful API Development
              </h3>
            </div>
          </li>

          <li class="blog-post-item">
            <figure class="blog-banner-box">
              <img src={DjangoCert} alt="Django Certification" loading="lazy" />
            </figure>
            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Technology</p>
                <span class="dot"></span>
                <time datetime="2024-09-09">July 10,2022</time>
              </div>
              <h3 class="h3 blog-item-title">
                Python and Django Full Stack Web Developer
              </h3>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
export default Certifications;
