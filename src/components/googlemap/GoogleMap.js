import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      title='google maps embed of 4Thurlestone'
      width='100%'
      height={600}
      src='https://maps.google.com/maps?q=Thurlestone%20Parade,%20Shepperton%20TW17%209AR&t=&z=13&ie=UTF8&iwloc=&output=embed'
      style={{
        WebkitFilter: 'grayscale(100%)',
        filter: 'grayscale(100%)',
        mapTypeControl: false,
        streetViewControl: false,
        panControl: false,
        rotateControl: false,
        zoomControl: false,
        padding: '24px',
      }}
    />
  );
};

export default GoogleMap;
