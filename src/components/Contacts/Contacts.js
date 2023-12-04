import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { FaGithub, FaMedium, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Contacts.css';
import { contactsData } from '../../data/contactsData';
import Swal from 'sweetalert2';

export default function Contacts() {
  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_npf5h59', 'template_yhmc3r7', form.current, 'iNL1-Zac1PKMZ8p92')
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Messege Send Successfully",
          showConfirmButton: false,
          timer: 1500
        });
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  const { theme } = useContext(ThemeContext);

 
const useStyles = makeStyles((t) => ({
  input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
          border: `4px solid ${theme.primary600}`,
      },
  },
  message: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 500,
      transition: 'border 0.2s ease-in-out',
      '&:focus': {
          border: `4px solid ${theme.primary600}`,
      },
  },
  label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: 'var(--primaryFont)',
      fontWeight: 600,
      fontSize: '0.9rem',
      padding: '0 5px',
      transform: 'translate(25px,50%)',
      display: 'inline-flex',
  },
  socialIcon: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '21px',
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
          transform: 'scale(1.1)',
          color: theme.secondary,
          backgroundColor: theme.tertiary,
      },
  },
  detailsIcon: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '23px',
      transition: '250ms ease-in-out',
      flexShrink: 0,
      '&:hover': {
          transform: 'scale(1.1)',
          color: theme.secondary,
          backgroundColor: theme.tertiary,
      },
  },
  submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: '250ms ease-in-out',
      '&:hover': {
          transform: 'scale(1.08)',
          color: theme.secondary,
          backgroundColor: theme.tertiary,
      },
  },
}));

  const classes = useStyles();

  return (
    <div className='contact-section pb-24' id='contacts'>
      <div className='about-description ps-28 '>
        <h2>Contacts</h2>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 contact-item'>
        <div className='pb-5'>
          <div className='contacts-details'>
            <div className='flex py-8 info-icon'>
              <div className={classes.detailsIcon}>
                <FiAtSign />
              </div>
              <p className='mt-2 text-2xl ps-2 ' style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </div>

            <div className='flex py-8 info-icon'>
              <div className={classes.detailsIcon}>
                <FiPhone />
              </div>
              <p className='mt-2 text-2xl ps-2' style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </div>

            <div className='flex py-8 info-icon'>
              <div className={classes.detailsIcon}>
                <HiOutlineLocationMarker />
              </div>
              <p className='mt-2 text-2xl ps-2' style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>
          </div>
        </div>
        <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
       {/* form  */}
       <form 
  ref={form}
  onSubmit={sendEmail}
  style={{
    width: '100%', // Set the initial width to 100% for responsiveness
    maxWidth: '450px', // Set a maximum width for larger screens
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
  }}
>
  <label style={{ display: 'block', marginBottom: '10px' }}>Name</label>
  <input type="text" name="user_name" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />

  <label style={{ display: 'block', marginBottom: '10px' }}>Email</label>
  <input type="email" name="user_email" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />

  <label style={{ display: 'block', marginBottom: '10px' }}>Message</label>
  <textarea name="message" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />

  <input
    type="submit"
    value="Send"
    style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '12px 0',
      width: '100%',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  />
</form>





        </div>
      </div>
    </div>
  );
}
