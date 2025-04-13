import React from "react";
import "./ContactSection.css";
import message_icon from "../../assets/message.png";
import mail_icon from "../../assets/mail_icon.png";
import address_icon from "../../assets/address_icon.png";
import call_icon from "../../assets/call_icon.png";

export const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Отправка....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a4741da-6578-4725-ae58-28bff89c5c28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Отпралено");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h4>
          Отправтье нам сообщение <img src={message_icon} alt="message" />
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          cupiditate ullam debitis voluptas maxime exercitationem facilis iste
          eligendi sint quam! Nemo sapiente dolor quaerat nostrum ut molestias
          possimus laboriosam earum!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail" />
            email@mail.dev
          </li>
          <li>
            <img src={call_icon} alt="call" />8 (8452) 768-880
          </li>
          <li>
            <img src={address_icon} alt="location" />
            Саратов, тер. Вольский тракт, стр. 14
          </li>
        </ul>
        <div className="ati-block__info">
          <div className="ati-block__name">РАЙС, ООО</div>
          <div className="ati-block__icons">
            <img
              src="https://files.ati.su/static/icon-service-icons/stars/stars_1_5.0.svg"
              className="stars-icon"
              alt="Иконка"
            />
            <div className="ati-block__medals">
              <img
                src="https://files.ati.su/static/icon-service-icons/fstrafficlight/trafficLight_default.svg"
                className="icon"
                alt="Иконка светофора"
              />
              <img
                src="https://files.ati.su/static/icon-service-icons/top-rating/driver-city-third.svg"
                alt="simple_real_trucker_icon"
                title="4 ТС в собственности<br/>подтверждено"
                className="icon"
              />
              <img
                src="https://files.ati.su/static/icon-service-icons/ati-docs/activeAtiDoc.svg"
                className="icon"
                alt="Иконка"
              />
            </div>
          </div>
          <div className="ati-block__passport">
            <span>Паспорт участника{`\u00A0`} </span>
            <a href="https://ati.su/firms/2776129/rating" target="_blank">
              <span>ATI.SU</span>
              <svg width="9" height="9" viewBox="0 0 9 9">
                <path
                  fill="#8c969d"
                  fillRule=""
                  d="M259.64 1703.49c.18-.01.31.06.36.23v3.78c-.04.1-.08.21-.14.3-.08.12-.22.16-.36.2h-7.98c-.1-.05-.22-.08-.31-.14-.12-.08-.16-.23-.21-.36v-8.02c.05-.14.09-.27.22-.35.08-.06.19-.09.28-.13h3.78c.17.05.24.18.23.36v.42c0 .22-.11.33-.34.33h-3.03v6.75h6.74v-3.02c0-.24.11-.35.35-.35h.41zm.14-4.49c.11.04.18.11.22.22v2.92a.36.36 0 0 1-.1.15c-.11.11-.26.09-.39-.03l-.92-.92-.09-.1c-.02.04-.03.08-.06.1l-2.68 2.7c-.16.15-.35.16-.49 0a3.1 3.1 0 0 0-.32-.31c-.15-.14-.14-.33.01-.48l2.69-2.69.08-.07-.06-.07c-.3-.3-.59-.6-.9-.89-.18-.17-.19-.44.09-.53z"
                  transform="translate(-251 -1699)"
                ></path>
              </svg>
            </a>
            <span> , код 355328</span>
          </div>
        </div>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Ваше имя</label>
          <input type="text" name="name" placeholder="Введите имя" required />
          <label>Номер телефона</label>
          <input
            type="tel"
            name="phone"
            placeholder="Введите ваш телефон"
            required
          />
          <label>Ваше сообщение</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Введите текст"
            required
          />
          <button type="submit" className="btn">
            Отправить
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};
