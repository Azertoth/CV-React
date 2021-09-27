import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsList from '../components/portfolio/ProjectsList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Navigation/>
            <ProjectsList/>
        </div>
    );
};

export default Portfolio;