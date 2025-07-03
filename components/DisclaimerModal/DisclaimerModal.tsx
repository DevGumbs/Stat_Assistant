import React from 'react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }


  return (
    <div id="disclaimer" className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-40">
      <div className="border-4 border-blue-700 dark:border-yellow-400 rounded-xl shadow-xl w-[90vw] max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold text-blue-700 dark:text-yellow-400 hover:text-blue-900 dark:hover:text-yellow-300">×</button>
        <div className="text-center">
          <p className="mb-2 text-lg font-semibold text-blue-900 dark:text-yellow-400">Non-subscribers will need to provide their own unique API key from SportsData.io.</p>
          <p className="mb-2 text-gray-700 dark:text-gray-200">You can get a <span className="font-bold">FREE</span> API key from <a className="underline text-blue-700 dark:text-yellow-400 hover:text-blue-900 dark:hover:text-yellow-300" href='https://sportsdata.io/' target="_blank">SportsData.io</a>.</p>
          <p className="mb-2 text-gray-700 dark:text-gray-200">API keys are sports specific, so make sure you request a key for the right sport.</p>
          <span className="block text-xs text-gray-500 dark:text-gray-400 mb-4">* Data using a FREE API key can/may be scrambled/inaccurate *</span>
          <button onClick={onClose} className="mt-4 underline text-blue-700 dark:text-yellow-400 hover:text-blue-900 dark:hover:text-yellow-300">close</button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
