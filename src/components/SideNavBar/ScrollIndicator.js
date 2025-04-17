import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";
import { FaMoon, FaSun } from "react-icons/fa";

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [showIndicator, setShowIndicator] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrollPercent);

            const bannerHeight = 400; // banner geçiş yüksekliği
            setShowIndicator(scrollTop > bannerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.classList.toggle("dark-theme", newMode);
    };

    return (
        <div className={`scroll-indicator full ${showIndicator ? "visible" : "hidden"}`}>
            {/* 🌙☀️ Tema geçişi */}
            <div className="theme-toggle" onClick={toggleTheme}>
                <div className={`toggle-circle ${darkMode ? "top" : "bottom"}`} />

                <div className="toggle-icon-wrapper">
                    <FaMoon className={`toggle-icon ${darkMode ? "active" : "inactive"}`} />
                </div>

                <div className="toggle-icon-wrapper">
                    <FaSun className={`toggle-icon ${!darkMode ? "active" : "inactive"}`} />
                </div>
            </div>
        </div>

    );
};

export default ScrollIndicator;
