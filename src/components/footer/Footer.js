import React from 'react';
import { Grid } from '@chakra-ui/react';
import FollowSocial from '../abstract/FollowSocial';
import OpeningHours from '../abstract/OpeningHours';
import NameAddress from '../abstract/Name_Address';

// .container {
//   display: grid;
//   grid-auto-columns: 1fr;
//   grid-template-columns: 1fr;
//   grid-template-rows: min-content min-content min-content;
//   gap: 0px 0px;
//   grid-template-areas:
//     "BoxB"
//     "BoxA"
//     "BoxC";
// }
// .BoxB { grid-area: BoxB; }
// .BoxA { grid-area: BoxA; }
// .BoxC { grid-area: BoxC; }

const Footer = () => {
  return (
    <Grid
      as='footer'
      layerStyle='footer'
      gridTemplateColumns={{
        base: '1fr',
        sm: '1fr',
        md: '0.25fr 0.5fr 0.25fr',
      }}
      gridTemplateRows={{
        base: 'min-content, min-content, min-content',
        sm: 'min-content, min-content, min-content',
        md: 'min-content',
      }}
      gridTemplateAreas={{
        base: `'BoxB' 'BoxA' 'BoxC'`,
        sm: `'BoxB' 'BoxA' 'BoxC'`,
        md: `'BoxA BoxB BoxC'`,
      }}
    >
      <OpeningHours />
      <NameAddress />
      <FollowSocial />
    </Grid>
  );
};

export default Footer;
