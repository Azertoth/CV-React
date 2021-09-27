import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Java", xp:0.8},
            {id: 4, value: "Javascript", xp:1.8},
            {id: 3, value: "PHP", xp:1},
            {id: 2, value: "SCSS", xp:1}
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.8},
            {id: 2, value: "Angular", xp:0.8},
            {id: 3, value: "Symfony", xp:1.2},
            {id: 4, value: "Spring", xp:0.8},
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="framworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;