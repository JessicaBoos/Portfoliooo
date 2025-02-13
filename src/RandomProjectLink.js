import React from "react";

const projectLinks = [
  "https://dicttionary.netlify.app",
  "https://doodle-weather.netlify.app",
  "https://travel-to-prague.netlify.app",
];

const RandomProjectLink = () => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * projectLinks.length);
    window.location.href = projectLinks[randomIndex];
  };

  return (
    <button
      onClick={handleClick}
      className="nav-link active"
      target="_blank"
      rel="noreferrer"
    >
      Projekt
    </button>
  );
};

export default RandomProjectLink;
