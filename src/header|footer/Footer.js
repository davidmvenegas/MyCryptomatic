import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedin, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <h3 className="footer-header">Cryptomatic<span>&#8482;</span></h3>
                <p className="footer-disclaimer">Conduct your own due diligence, or consult a licensed financial advisor 
                or broker before making any and all investment decisions. Any investments, 
                trades, speculations, or decisions made on the basis of any information 
                found on this site, expressed or implied herein, are committed at your own risk, 
                financial or otherwise.</p>
                <ul className="footer-socials">
                    <li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a target="_blank" href="https://www.twitter.com/" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a target="_blank" href="https://www.youtube.com/" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li><a target="_blank" href="https://www.github.com/" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">Copyright &copy;2021 - Designed and Built By <span><a target="_blank" href="https://github.com/davidmvenegas" rel="noreferrer">David Venegas</a></span> & <span><a target="_blank" href="https://github.com/Escobar-Luis" rel="noreferrer">Luis Escobar</a></span></p>
            </div>
        </footer>
    )
}

export default Footer;