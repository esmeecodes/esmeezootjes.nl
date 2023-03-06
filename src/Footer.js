import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footerprops">
      <p className="footerInfo">Esmée Zootjes</p>
      <p className="footerInfo">
        {" "}
        Creative digital marketer <br />& front-end developer
      </p>
      <p className="footerInfo">
        <a href="#" target="_blank">
          Algemene voorwaarden
        </a>
      </p>
      <p className="footerInfo">
        <a href="#" target="_blank">
          Cookie policy
        </a>
      </p>
      <p className="footerInfo">
        <a href="mailto:hello@esmeezootjes.nl">Get in touch</a>
      </p>
      <p className="footerInfo">
        Coded by{" "}
        <a href="https://nl.linkedin.com/in/esmeezootjes" target="_blank">
          Esmée Zootjes
        </a>
      </p>
    </div>
  );
}
