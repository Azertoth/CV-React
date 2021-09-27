import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Tir à l'arc</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>AMHE - rapière</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Dessin - Peinture numérique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Crypto-monnaie</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;