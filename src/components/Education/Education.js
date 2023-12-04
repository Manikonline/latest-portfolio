import React, { useContext } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../src/assets/lottie/Animation - 1701609628573.json';
import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'
const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image me-16">
                <Lottie options={lottieOptions} height={365} width={450} />
                </div>
            </div>
        </div>
    )
}

export default Education


