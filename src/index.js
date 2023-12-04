import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
      // <div id ="skills"className="skills" style={{backgroundColor: theme.secondary}}>
        //     <div className="skillsHeader">
        //         <h2 style={{color: theme.primary}}>Skills</h2>
        //     </div>
        //     <div className="skillsContainer">
        //         <div className="skill--scroll">
        //             <Marquee 
        //                 gradient={false} 
        //                 speed={80} 
        //                 pauseOnHover={true}
        //                 pauseOnClick={true} 
        //                 delay={0}
        //                 play={true} 
        //                 direction="left"
        //             >
        //                 {skillsData.map((skill, id) => (
        //                     <div className="skill--box" key={id} style={skillBoxStyle}>
        //                         <img src={skillsImage(skill)} alt={skill} />
        //                         <h3 style={{color: theme.tertiary}}>
        //                             {skill}
        //                         </h3>
        //                     </div>
        //                 ))}
        //             </Marquee>
        //         </div>
        //     </div>

        // </div>