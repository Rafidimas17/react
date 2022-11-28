import React from "react";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconTelegram,
  IconTwitter,
} from "../../../assets";
import "./footer.scss";
const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <p className="logo">MERN-Blog</p>
        </div>
        <div className="social-wrapper">
          <Icon img={IconFacebook} />
          <Icon img={IconTwitter} />
          <Icon img={IconInstagram} />
          <Icon img={IconTelegram} />
          <Icon img={IconGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
