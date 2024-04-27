import React, { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const [mode, setMode] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem('theme');

        const handleChange = () => {
            const newMode = userPref || (mediaQuery.matches ? 'dark' : 'light');
            setMode(newMode);
        };

        mediaQuery.addEventListener('change', handleChange);
        handleChange(); // Initial setup based on current state

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        // Update localStorage and apply/remove 'dark' class based on mode
        if (mode === 'dark') {
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            console.log('mode:  ', mode)
        } else {
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            console.log('mode:  ', mode)
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
