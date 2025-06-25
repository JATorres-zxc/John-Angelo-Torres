import React, { useEffect, useState, useRef } from 'react';

const ProjectModal = ({ isOpen, onClose, projectLink, projectTitle }) => {
  const [progress, setProgress] = useState(0); // 0 to 100
  const [checked, setChecked] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    setProgress(0);
    setChecked(false);
    setCanProceed(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    let start = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / 10000) * 100, 100);
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(intervalRef.current);
        setCanProceed(checked);
      }
    }, 50);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    if (progress >= 100 && checked) setCanProceed(true);
    else setCanProceed(false);
  }, [progress, checked]);

  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(projectLink, '_blank');
    onClose();
  };

  const handleContact = () => {
    const subject = encodeURIComponent(`Potential Client Inquiry about ${projectTitle}`);
    const body = encodeURIComponent(
      `Hey, I'm a potential client. I noticed an issue with the project "${projectTitle}".\n\nDescribe the issue here...`
    );
    window.location.href = `mailto:jbtorres6@up.edu.ph?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70">
      <div className="bg-light dark:bg-dark rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-2xl text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold mb-2 text-dark dark:text-light text-center">Notice: Possible Cold Start</h3>
        <p className="mb-4 text-dark dark:text-light text-center">
          This project is hosted on a free tier (Render/Vercel). It may take a while to load due to cold start if it hasn't been visited recently.
        </p>
        <div className="mb-4">
          <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary dark:bg-primaryDark transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="understand"
            className="mr-2 accent-primary dark:accent-primaryDark"
            checked={checked}
            disabled={progress < 100}
            onChange={e => setChecked(e.target.checked)}
          />
          <label htmlFor="understand" className="text-dark dark:text-light select-none">
            I understand and want to proceed
          </label>
        </div>
        <button
          className="w-full mb-2 py-2 rounded-lg font-semibold bg-dark text-light dark:bg-light dark:text-dark border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition-colors disabled:opacity-50"
          disabled={!canProceed}
          onClick={handleProceed}
        >
          Proceed to Project
        </button>
        <button
          className="w-full py-2 rounded-lg font-semibold bg-primary text-light dark:bg-primaryDark dark:text-dark mt-2 hover:opacity-90 transition-opacity"
          onClick={handleContact}
        >
          Contact Me About This Project
        </button>
      </div>
    </div>
  );
};

export default ProjectModal; 