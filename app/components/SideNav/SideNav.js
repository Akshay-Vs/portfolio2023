import React, { useState, useEffect } from 'react';

export const Sidenav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const sectionHeight = documentHeight / sections.length;

      const currentSection = Math.floor((scrollTop + windowHeight / 2) / sectionHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <div className="fixed top-0 bottom-0 right-0 w-10">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`h-20 mb-10 rounded-lg ${index === activeSection ? 'bg-red-500' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  );
};