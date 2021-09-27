// import React, { Component } from 'react';
// import { portfolioDataDessins } from '../../data/portfolioDataDessins';
// import Project from './Project';

// class ProjectsListDessins extends Component {
//     state = {
//         projects: portfolioDataDessins,
//         radios: [
//             {id: 1, value: "Photoshop"}
        
//         ],
//         selectedRadio: 'Photoshop'
//     };

//     handleRadio = (event) => {
//         let radio = event.target.value;
//         this.setState({selectedRadio: radio});
//     };

//     render() {
//         let {projects, radios, selectedRadio} = this.state;

//         return (
//             <div className="portfolioContent">
//                 <ul className="radioDisplay">
//                     {
//                         radios.map((radio) => {
//                             return (
//                                 <li key={radio.id}>
//                                     <input type="radio" name="radio" 
//                                         checked={radio.value === selectedRadio}
//                                         value={radio.value}
//                                         id={radio.value}
//                                         onChange={this.handleRadio}
//                                         />
//                                     <label htmlFor={radio.value}>{radio.value}</label>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//                 <div className="projects">
//                     {
//                         projects
//                             .filter(item => item.logiciel.includes(selectedRadio))
//                             .map((item) => {
//                                 return (
//                                     <Project key={item.id} item={item}/>
//                                 )
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// export default ProjectsListDessins;