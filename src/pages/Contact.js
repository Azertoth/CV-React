import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div  className="contactContent">
                <div className="header">

                </div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Nantes</span>
                        </li> 
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0686580217">
                                <span className="clickInput" onClick={() => {alert("num de téléphone copié !")}}>
                                    06 86 58 02 17
                                </span>
                            </CopyToClipboard>
                        </li>   
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="lionel.luthy@gmail.com">
                                <span className="clickInput" onClick={() => {alert("email copié !")}}>
                                    lionel.luthy@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>   
                    </ul>
                    <div className="socialNetwork">
                        <ul>
                            
                                <a href="https://www.linkedin.com/in/lionel-luthy-a10260173" target="_blank" rel="noopener noreferrer">
                                    <h4>LinkedIn</h4>
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            
                            
                                <a href="https://github.com/Azertoth" target="_blank" rel="noopener noreferrer">
                                    <h4>  Github  </h4>
                                    <i className="fab fa-github"></i>
                                </a>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;