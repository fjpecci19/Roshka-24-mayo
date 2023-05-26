import React from "react";
import "./coso.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Coso({}){
    return (
    <div className="container">
      <div className="column">
        
      </div>
      <div>
        Products<br /><br />
        <div className="coso">ICM</div><br />
        <div className="coso">DMS</div><br />
        <div className="coso">CRM</div>
      </div>
      <div>
        Resources<br /><br />
        <div className="coso">Case Studies</div><br />
        <div className="coso">FAQ'S</div><br />
        <div className="coso">Newsletter</div><br />
        <div className="coso">Release Notes</div><br />
        <div className="coso">Developer's Guide</div>
      </div>
      <div>
        Company<br /><br />
        <div className="coso">About</div><br />
        <div className="coso">Our Experts</div><br />
        <div className="coso">Terms & Conditions</div><br />
        <div className="coso">Schedule a Demo</div><br />
        <div className="coso">Privacy Policy</div>
      </div>
      <div>
        Contact us <br /><br /><br />
        <Link to="https://es-la.facebook.com/"><img src="images/Facebook.jpg"/></Link> <Link to="https://es.linkedin.com/"><img src="images/Linkedin.jpg"/></Link> <Link to="https://twitter.com/?lang=es"><img src="images/Twitter.jpg"/></Link><br /><br /><br />
        --------------------------------- <br />
        @2023.  All rights reserved
      </div>
    </div>
    )
}

export default Coso