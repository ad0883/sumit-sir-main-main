import { FaLinkedinIn } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"

import "../../../css/components/footer/footer.css"
import { navData } from "../navbar/Navbar"
import logo from "../../assets/logonew.png"

const Footer = () => {
  const linkedin = ""
  const instagram = ""
  const currentYear = new Date().getFullYear()
  const contactNumber = "📞  +123 456 7890" // Add your contact number here

  return (
    <div className="super-container">
      <div className="footer-container">
        <div className="logo-section">
          <img src={logo || "/placeholder.svg"} alt="Sprint Code Logo" className="logo-image" />
        </div>

        <div className="right-side-content">
          <div className="links-section">
            <ul className="nav-links">
              {navData.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="footer-nav">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-section">
            <a href="mailto:hello@sprintcode.com" className="contact-link">✉ hello@sprintcode.com</a>
            <p className="contact-number">{contactNumber}</p>
            <div className="social-icons">
              <a href={linkedin} target="_blank" rel="noreferrer" className="social-icon-link">
                <FaLinkedinIn />
              </a>
              <a href={instagram} target="_blank" rel="noreferrer" className="social-icon-link">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright-section">
          <p>©{currentYear} Sprint Code. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer