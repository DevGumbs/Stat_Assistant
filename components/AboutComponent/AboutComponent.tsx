import React from 'react';
import { useState } from "react"
import EmailModal from '@/components/EmailModal/EmailModal';

const AboutComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleSubmit = async (name: string, email: string, subject: string, message: string) => {
     
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
  
      if (!response.ok) {
        alert('Failed to send email');
        throw new Error('Failed to send email');        
      }
  
      alert('Email sent successfully');      
    } catch (error: unknown) {
      alert('Failed to send email');    
    }
  };

  return (
    <div className="mt-[5rem]">
      <div className="text-center">
        <p className="text-3xl mb-[3rem]">About Us</p>
        <p>
          Bet Assistant is meant to provide up-to-date player and team statistics, to assist in making more informed bets.
          <br />
          <br />
          Our stats are provided by Sports Data IO. Usage of our platform with your personal
          API Key will return data based on the level of your API Key.
          <br /> 
          If you are using a free key data can/may be scrambled and/or inaccurate based on Sports Data IO&apos;s terms and conditions.
          <br />
          <br />
          We are constantly working on adding new sports leagues and statistics,&nbsp; 
            <span className="underline" onClick={toggleModal}>
            send us a message&nbsp; 
            </span> 
            <EmailModal isOpen={isModalOpen} onClose={toggleModal} onSubmit={handleSubmit} />
          and let us know what we should add next.
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;

