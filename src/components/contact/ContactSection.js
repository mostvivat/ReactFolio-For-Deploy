import React from 'react';
import './styles/contactsection.css'; // Importing the CSS file
import { MdEmail, MdLocalPhone } from 'react-icons/md';
// import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from '../homepage/SectionTitle';

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+66971595272" />
            <ContactInfoItem icon={<MdEmail />} text="pokemost@gmail.com" />
            <ContactInfoItem text="Bangkok, Thailand" />
          </div>
          <div className="right">
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
