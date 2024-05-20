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
    <div id="disclaimer" className="absolute top-[40%] left-[15%] md:left-[40%] p-3 border border-1 border-black w-[300px] h-[300px]">
      <div onClick={onClose} className="flex justify-end mr-5px mb-10px">x</div>
      <div className="text-center">
        Non subscribers will need to provide their own unique api key from sports data io.
        You can get a FREE api key from <a className="underline" href='https://sportsdata.io/' target="blank" >SportsData.io</a>.
        <br />
        Api keys are sports specific, so make sure you request a key for the right sport.
        <br />       
        <span className="text-xxs">* Data using a FREE api key can/may be scrambled/inaccurate *</span>
        <div onClick={onClose} className="mt-[45px] underline">close</div>
      </div>            
    </div>
  );
};

export default DisclaimerModal;
