import { useEffect, useState } from "react";
import "./Main.scss";

export const Main = ({ handleLinkClick }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [castomer, setCastomer] = useState([]);
  const [timer, setTimer] = useState("59:59");

useEffect(() => {
  const storedTimer = localStorage.getItem("timer");
  if (storedTimer) {
    setTimer(storedTimer);
  }

  const interval = setInterval(() => {
    const [minutes, seconds] = timer.split(":").map(Number);

    const newSeconds = seconds === 0 ? 59 : seconds - 1;
    const newMinutes = newSeconds === 59 ? minutes - 1 : minutes;

    setTimer(
      `${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(
        2,
        "0"
      )}`
    );

    localStorage.setItem(
      "timer",
      `${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(
        2,
        "0"
      )}`
    );

    if (newMinutes === 0 && newSeconds === 0) {
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleEmailCghange = (value) => {
    setEmail(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newCastomer = { email, phone };
    setCastomer((prevCastomer) => [...prevCastomer, newCastomer]);

    localStorage.setItem(
      "castomer",
      JSON.stringify([...castomer, newCastomer])
    );

    setPhone("");
    setEmail("");
  };

  return (
    <main className="main">
      <div className="main__bread-crumbs">
        <p className="main__bread-crumbs-text">Lorem</p>
        <span className="icon icon--arow" />
        <p
          className="
          main__bread-crumbs-text main__bread-crumbs-text--active"
        >
          input
        </p>
        <span className="icon icon--arow" />
        <p className="main__bread-crumbs-text">Lorem ipsum dolor</p>
      </div>

      <section className="main__container">
        <h2 className="main__title">Lorem ipsum dolor sit amet consectetur</h2>

        <p className="main__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius rerum
          ad dolore quas nam. Veritatis eos perspiciatis iste! Eum architecto
          neque fuga iure, repudiandae ullam delectus amet autem eius corrupti?
          Voluptatem error quae asperiores at debitis. Consequuntur, laudantium
          obcaecati! Laudantium eligendi, molestias illum iure aliquid soluta
          omnis doloribus animi excepturi magni vitae odio eum nobis.
          Voluptatem, voluptate! Obcaecati, ipsa autem? Hic vel mollitia ullam
          accusantium nisi, at quibusdam ipsa commodi aperiam qui harum eaque
          quos dolorem corrupti ad, voluptatum eos perspiciatis nesciunt,
          repudiandae dolore id iste. Deserunt nulla doloremque temporibus?
        </p>

        <a href="/" className="main__link" onClick={handleLinkClick}>
          <img src="img/fff.png" alt="img" className="main__img-1" />
        </a>

        <p className="main__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          corrupti rerum, perferendis sed velit blanditiis sunt. Veniam incidunt
          ipsa modi non unde quia voluptate ex magni molestiae libero. Dolor, a?
        </p>

        <div className="main__banner">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
          sunt sed aut natus vero beatae exercitationem
        </div>

        <h3 className="main__text-h3">
          Lorem ipsum dolor sit amet consectetur
        </h3>

        <p className="main__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          corrupti rerum, perferendis sed velit blanditiis sunt. Veniam incidunt
          ipsa modi non unde quia voluptate ex magni molestiae libero. Dolor, a?
        </p>

        <div className="main__float">
          <a href="/" onClick={handleLinkClick}>
            <img src="img/fff.png" alt="img" className="main__img-float-left" />
          </a>

          <h3 className="main__text-h3">
            Lorem ipsum dolor sit amet consectetur
          </h3>

          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            corrupti rerum, perferendis sed velit blanditiis sunt. Veniam
            incidunt ipsa modi non unde quia voluptate ex magni molestiae
            libero. Dolor, a?
          </p>
        </div>

        <h3 className="main__text-h3">
          Lorem ipsum dolor sit amet consectetur
        </h3>

        <p className="main__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          corrupti rerum, perferendis sed velit blanditiis sunt. Veniam incidunt
          ipsa modi non unde quia voluptate ex magni molestiae libero. Dolor, a?
        </p>

        <div className="main__float">
          <a href="/" onClick={handleLinkClick}>
            <img
              src="img/fff.png"
              alt="img"
              className="main__img-float-right"
            />
          </a>

          <h3 className="main__text-h3">
            Lorem ipsum dolor sit amet consectetur
          </h3>

          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            corrupti rerum, perferendis sed velit blanditiis sunt. Veniam
            incidunt ipsa modi non unde quia voluptate ex magni molestiae
            libero. Dolor, a?
          </p>
        </div>

        <h3 className="main__text-h3">
          Lorem ipsum dolor sit amet consectetur
        </h3>

        <p className="main__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          corrupti rerum, perferendis sed velit blanditiis sunt. Veniam incidunt
          ipsa modi non unde quia voluptate ex magni molestiae libero. Dolor, a?
        </p>

        <form
          action=""
          method="get"
          className="form"
          onSubmit={onFormSubmit}
          id="formId"
        >
          <div className="form__container">
            <span className="icon icon--fav" />

            <div className="form__notification">
              <p className="form__text">
                <b>Some text</b>
              </p>
              <p className="form__text form__text--crossline">
                <b>9000 all</b>
              </p>
              <p className="form__text form__text--underline">
                <b>4500 all</b>
              </p>
            </div>
          </div>

          <h3 className="form__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </h3>

          <div className="form__timer">
            <b>{timer}</b>
          </div>

          <label htmlFor="email-input" className="form__label">
            Enter your email
            <input
              id="email-input"
              type="email"
              className="form__input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                handleEmailCghange(e.target.value);
              }}
            />
          </label>

          <label htmlFor="phone-input" className="form__label">
            Enter your phone number
            <input
              id="phone-input"
              type="phone"
              className="form__input"
              placeholder="Phone number"
              required
              value={phone}
              onChange={(e) => {
                handlePhoneChange(e.target.value);
              }}
            />
          </label>

          <button type="submit" className="form__button">
            Order now and save 50% from total price
          </button>
        </form>
      </section>
    </main>
  );
};
