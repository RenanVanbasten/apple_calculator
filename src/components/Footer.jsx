import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import "./styles.css";

import Whatsapp from './assets/whatsapp.png';
import Insta from './assets/insta.png';
import Github from './assets/github.png';
import Linkedin from './assets/linkedin.png';


const Footer = () =>{
    return(
        <footer className='footer'>
        <p>Desenvolvido por Renan Vanbasten</p>

        <div class="rodape">
            <Router> 
                <a target="_blank" rel='noreferrer' href='https://web.whatsapp.com/send?phone=5581996843923'><img src={Whatsapp} alt=""/></a>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/renanvanbasten/'><img src={Insta} alt=""/></a>
                <a target="_blank" rel='noreferrer' href='https://github.com/RenanVanbasten'><img src={Github} alt=""/></a>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/renan-vanbasten-bb899817b/'><img src={Linkedin} alt=""/></a>
            </Router>
        </div>
    </footer>
    )
}

export default Footer;