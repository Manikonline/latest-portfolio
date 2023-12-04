export const educationData = [
    {
        id: 1,
        institution: 'Govt. Titumir College',
        course: 'BBA-Finance And Banking',
        startYear: '2020',
        endYear: '2025'
    },
    {
        id: 2,
        institution: 'Govt. Bangla College',
        course: 'Business Studies',
        startYear: '2018',
        endYear: '2019'
    },
    {
        id: 3,
        institution: 'Programming Hero',
        course: 'Complete Web Development Course With Jhankar Mahbub',
        startYear: '2022',
        endYear: '2023'
    },
]



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { FaGithub, FaMedium,FaLinkedinIn } from 'react-icons/fa';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
// import { themeData } from '../../data/themeData';
// import {contactsData} from '../../data/contactsData'
// import {socialsData} from '../../data/socialsData'

// import { useContext } from 'react';
// import { FiPhone, FiAtSign } from 'react-icons/fi';
// import { makeStyles } from '@material-ui/core';
// import { ThemeContext } from '../../contexts/ThemeContext';
// import './Contacts.css'
// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   const { theme } = useContext(ThemeContext);
//   const useStyles = makeStyles((t) => ({
//     input: {
//         border: `4px solid ${theme.primary80}`,
//         backgroundColor: `${theme.secondary}`,
//         color: `${theme.tertiary}`,
//         fontFamily: 'var(--primaryFont)',
//         fontWeight: 500,
//         transition: 'border 0.2s ease-in-out',
//         '&:focus': {
//             border: `4px solid ${theme.primary600}`,
//         },
//     },
//     message: {
//         border: `4px solid ${theme.primary80}`,
//         backgroundColor: `${theme.secondary}`,
//         color: `${theme.tertiary}`,
//         fontFamily: 'var(--primaryFont)',
//         fontWeight: 500,
//         transition: 'border 0.2s ease-in-out',
//         '&:focus': {
//             border: `4px solid ${theme.primary600}`,
//         },
//     },
//     label: {
//         backgroundColor: `${theme.secondary}`,
//         color: `${theme.primary}`,
//         fontFamily: 'var(--primaryFont)',
//         fontWeight: 600,
//         fontSize: '0.9rem',
//         padding: '0 5px',
//         transform: 'translate(25px,50%)',
//         display: 'inline-flex',
//     },
//     socialIcon: {
//         width: '45px',
//         height: '45px',
//         borderRadius: '50%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: '21px',
//         backgroundColor: theme.primary,
//         color: theme.secondary,
//         transition: '250ms ease-in-out',
//         '&:hover': {
//             transform: 'scale(1.1)',
//             color: theme.secondary,
//             backgroundColor: theme.tertiary,
//         },
//     },
//     detailsIcon: {
//         backgroundColor: theme.primary,
//         color: theme.secondary,
//         borderRadius: '50%',
//         width: '45px',
//         height: '45px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: '23px',
//         transition: '250ms ease-in-out',
//         flexShrink: 0,
//         '&:hover': {
//             transform: 'scale(1.1)',
//             color: theme.secondary,
//             backgroundColor: theme.tertiary,
//         },
//     },
//     submitBtn: {
//         backgroundColor: theme.primary,
//         color: theme.secondary,
//         transition: '250ms ease-in-out',
//         '&:hover': {
//             transform: 'scale(1.08)',
//             color: theme.secondary,
//             backgroundColor: theme.tertiary,
//         },
//     },
// }));

// const classes = useStyles();

//   return (
//     <div className='px-12 contact-section'
//     id='contacts'
//     >
//       <div className='about-description ps-20 pt-16'>
//         <h2>Contacts</h2>
//       </div>
//       <div className='grid md:grid-cols-2 sm:grid-cols-1 contact-item'>
//         <div>

//           <div className='contacts-details pt-32'>
//             <div className='flex py-5'>
//             <div className={classes.detailsIcon}>
//                <FiAtSign />
//               </div> <p className='mt-2 text-2xl ps-2 ' style={{ color: theme.tertiary }}>{contactsData.email}</p>
//             </div>

//             <div className='flex py-5'>
//              <div className={classes.detailsIcon}>
//                   <FiPhone />
//              </div>
//              <p className='mt-2 text-2xl ps-2' style={{ color: theme.tertiary }}>{contactsData.phone}</p>
//             </div>

//             <div className='flex py-5'>
//              <div className={classes.detailsIcon}>
//                 <HiOutlineLocationMarker />
//               </div>
//               <p className='mt-2 text-2xl ps-2' style={{ color: theme.tertiary }}>{contactsData.address}</p>
//             </div>
//           </div>

//         </div>
//         <div style={{ 
//     display: 'flex', 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     height: '100vh' 
//   }}>
//     <form 
//       onSubmit={handleSubmit(onSubmit)} 
//       style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         maxWidth: '480px', // Set maximum width to 480px
//         width: '90%', // Set width to 90% of the viewport width
//         padding: '20px', 
//         border: '1px solid #ccc', 
//         borderRadius: '8px' 
//       }}
//     >
//       <label style={{ marginBottom: '8px', fontWeight: 'bold' }}>First Name</label>
//       <input 
//         type="text" 
//         placeholder="Name" 
//         {...register("name", { required: true, maxLength: 80 })} 
//         style={{ 
//           padding: '8px', 
//           marginBottom: '16px', 
//           border: '1px solid #ccc', 
//           borderRadius: '4px' 
//         }} 
//       />
//       {errors.name && <p style={{ color: 'red' }}>First name is required</p>}

//       <label style={{ marginBottom: '8px', marginTop: '16px', fontWeight: 'bold' }}>Email</label>
//       <input 
//         type="text" 
//         placeholder="Email" 
//         {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
//         style={{ 
//           padding: '8px', 
//           marginBottom: '16px', 
//           border: '1px solid #ccc', 
//           borderRadius: '4px' 
//         }} 
//       />
//       {errors.email && (
//         <p style={{ color: 'red' }}>
//           {errors.email.type === 'required' ? 'Email is required' : 'Invalid email format'}
//         </p>
//       )}

//       <label style={{ marginBottom: '8px', marginTop: '16px', fontWeight: 'bold' }}>Message</label>
//       <textarea
//         {...register("message", { required: true })}
//         style={{ 
//           padding: '8px', 
//           marginBottom: '16px', 
//           border: '1px solid #ccc', 
//           borderRadius: '4px',
//           minHeight: '100px' 
//         }} 
//         placeholder="Type your message here..."
//       />
//       {errors.message && <p style={{ color: 'red' }}>Message is required</p>}

//       <input 
//         type="submit" 
//         style={{ 
//           backgroundColor: '#000000', 
//           color: 'white', 
//           padding: '10px', 
//           borderRadius: '4px', 
//           cursor: 'pointer' 
//         }} 
//       />
//     </form>
// </div>

//     </div>
//     </div>
//   );
// }
