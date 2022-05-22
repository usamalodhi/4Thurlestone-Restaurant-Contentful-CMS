import React from 'react';
import { Location } from '@reach/router';

const BannerLabel = () => {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname === '/about') {
          return 'About';
        }
        if (location.pathname === '/menu') {
          return 'Menu';
        }
        if (location.pathname === '/contact') {
          return 'Contact';
        }
        if (location.pathname === '/blog') {
          return 'Blog';
        }
      }}
    </Location>
  );
};

export default BannerLabel;
