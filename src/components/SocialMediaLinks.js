// src/components/SocialMediaLinks.js

import React from 'react';

function SocialMediaLinks() {
  const socialMedia = [
    { name: 'GitHub', icon: '/github.png', link: 'https://github.com/sanjayavinash1604' },
    { name: 'LinkedIn', icon: '/linkedin.png', link: 'https://www.linkedin.com/in/sagar-sanjay-avinash-govindu-383614250/' },
 
  ];

  return (
    <div className="social-media-links">
      {socialMedia.map((platform, index) => (
        <a key={index} href={platform.link} target="_blank" rel="noopener noreferrer">
          <img src={platform.icon} alt={platform.name} />
        </a>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
