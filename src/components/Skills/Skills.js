/* eslint-disable react-hooks/exhaustive-deps */
// Skills.js

import React, { useState, useEffect, useRef } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './Skills.css';

function Skills() {
  const skillsData = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'Tailwinds', value: 80 },
    { name: 'Bootstrap', value: 80 },
    { name: 'MUI', value: 70 },
    { name: 'JavaScript', value: 70 },
    { name: 'ReactJS', value: 85 },
    { name: 'NodeJS', value: 80 },
    { name: 'Express.JS', value: 80 },
    { name: 'MongoDB', value: 75 },
    { name: 'Firebase', value: 80 },
    { name: 'NextJS', value: 70 },
    { name: 'TypeScript', value: 65 },
  ];

  const [animationValues, setAnimationValues] = useState(Array(skillsData.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillsSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); // Set flag to indicate animation has started

            const intervals = skillsData.map((skill, index) => {
              const interval = setInterval(() => {
                setAnimationValues((prevValues) => {
                  const newValues = [...prevValues];
                  newValues[index] = newValues[index] + 2; // Increase the value here to speed up the animation
                  return newValues.map((value, i) => (value > skillsData[i].value ? skillsData[i].value : value));
                });
              }, 10); // Decreased interval duration for faster animation

              // Cleanup the interval when the animation reaches the target value
              return () => {
                clearInterval(interval);
              };
            });

            return () => {
              intervals.forEach((interval) => clearInterval(interval));
            };
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [skillsData, hasAnimated]);

  useEffect(() => {
    if (location.pathname === '/skills') {
      // Reset animation when navigating to the skills section
      setHasAnimated(false);
      setAnimationValues(Array(skillsData.length).fill(0));
    }
  }, [location.pathname, skillsData]);

  const midIndex = Math.ceil(skillsData.length / 2);
  const firstRowSkills = skillsData.slice(0, midIndex);
  const secondRowSkills = skillsData.slice(midIndex);

  return (
    <div className='skills-section' id='skills'>
      <div className="about-description ">
        <h2 className='skill-title ps-28'>Skills</h2>
      </div>

      {/* First Row */}
      <div className="skills ps-28" ref={skillsSectionRef}>
        <div className='flex gap-16'>
          {firstRowSkills.map((skills, index) => (
            <Box key={skills.name} textAlign="center" mb={4} className="skill-container">
              <div className="circular-progress">
                <CircularProgress
                  variant="determinate"
                  value={animationValues[index]}
                  size={80}
                  thickness={4}
                  style={{
                    color:'#800080',

                  }}
                />
                <div className="label">
                  <Typography variant="body2" color="textSecondary" className='skill-level' component="p">
                    {`${animationValues[index]}%`}
                  </Typography>
                </div>
              </div>
              <Typography variant="h6" gutterBottom>
                {skills.name}
              </Typography>
            </Box>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="skill ms-44 " ref={skillsSectionRef}>
        <div className='flex gap-16'>
          {secondRowSkills.map((skill, index) => (
            <Box key={skill.name} textAlign="center" mb={4} className="skills-container">
              <div className="circular-progress">
                <CircularProgress
                  variant="determinate"
                  value={animationValues[midIndex + index]}
                  size={80}
                  thickness={4}
                  style={{
                    color: '#800080',
                  }}
                />
                <div className="label">
                  <Typography variant="body2" color="textSecondary" component="p">
                    {`${animationValues[midIndex + index]}%`}
                  </Typography>
                </div>
              </div>
              <Typography variant="h6" gutterBottom>
                {skill.name}
              </Typography>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
