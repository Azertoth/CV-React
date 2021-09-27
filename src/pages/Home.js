import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                   <h1>Lionel Luthy</h1>
                   <h2>Développeur d'applications</h2> 
                   <div className="pdf">
                       <a href="./media/Lionel_Luthy_CV.pdf" target="_blank">Accès CV</a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;