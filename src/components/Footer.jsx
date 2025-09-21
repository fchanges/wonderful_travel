import "../styles/Footer.css";

function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-flex">
        <div className="footer-items-logo">
          <img src="images/logo_Wonderful_Travel.png" alt="" />
        </div>
        <div className="footer-items-text">
          <p>Copyright &copy; 2025. All Right Reserved.</p>
          <p>Jl. Agung Permata No.14</p>
          <p>Komp-Apple, Kota Kayangan</p>
          <p>Republik Semesta</p>
          <br />
          <div className="icons">
            <a href="#facebook">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a href="#whatsapp">
              <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            </a>
            <a href="#instagram">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a href="#linkedin">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="#youtube">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// FONT AWESOME AREA //

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // For all brand icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab); // Adds all brand icons
// FONT AWESOME AREA //
