import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, email: string, subject: string, message: string) => void;
}

const EmailModal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, subject, message);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="border modal p-6 rounded shadow-lg w-80">
        <div className="text-xl mb-4">Contact Us</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              className="modal w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              className="modal w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Subject</label>
            <input
              type="text"
              className="modal w-full px-3 py-2 border rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Message</label>
            <textarea
              className="modal w-full px-3 py-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="modal px-4 py-2 mr-2 border rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal px-4 py-2 border text-white rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;
