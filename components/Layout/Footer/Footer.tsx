import React from 'react';
import { useState } from "react"
import Link from 'next/link';
import EmailModal from '@/components/EmailModal/EmailModal';

const Footer = () => {
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
    <div className="w-[85%] mx-auto mt-[2rem] border-t-2 pt-3">
      <div className="flex justify-around">
        <Link href="/about">
          <div>About</div>
        </Link>        
        <div onClick={toggleModal}>Contact</div>
        <EmailModal isOpen={isModalOpen} onClose={toggleModal} onSubmit={handleSubmit} />
      </div>
      <div className="text-center mt-[2rem]">
        Bet Assistant &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;