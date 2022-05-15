import React from 'react';
import { Location } from '@reach/router';

const BannerLabel = () => {
  return (
    <Location>
      {({ location }) => {
        if (location.pathname === '/about') {
          return 'about';
        }
        if (location.pathname === '/menu') {
          return 'menu';
        }
        if (location.pathname === '/contact') {
          return 'contact';
        }
        if (location.pathname === '/blog') {
          return 'blog';
        }
      }}
    </Location>
  );
};

export default BannerLabel;
