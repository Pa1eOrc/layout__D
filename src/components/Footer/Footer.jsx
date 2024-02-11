import { useRef } from "react";

import "./Footer.scss";

export const Footer = ({ handleLinkClick }) => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleVideoEnded1 = () => {
    videoRef1.current.src = "img/a.mp4";

    videoRef1.current.play();
  };

  const handleVideoEnded2 = () => {
    videoRef2.current.src = "img/a.mp4";

    videoRef2.current.play();
  };

  return (
    <footer className="footer">
      <h3 className="footer__title">Some text here</h3>

      <section className="footer__container footer__container--1">
        <div className="footer__inner-container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__inner-container">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>{" "}
            <li className="footer__item">
              <a href="/" className="footer__link" onClick={handleLinkClick}>
                <img src="img/fff.png" alt="img" className="footer__img" />
                <p className="footer__text">Lorem ipsum dolor sit amet.</p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer__container">
        <div
          className="
          footer__inner-container2 footer__inner-container2--first"
        >
          <video
            ref={videoRef1}
            autoPlay
            muted
            className="footer__video"
            onEnded={handleVideoEnded1}
          >
            <source src="img/a.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="footer__inner-container2">
          <video
            ref={videoRef2}
            autoPlay
            muted
            className="footer__video"
            onEnded={handleVideoEnded2}
          >
            <source src="img/a.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </footer>
  );
};
