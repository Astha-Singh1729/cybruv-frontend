import React from 'react';
import Terminal from '@nitric/react-animated-term';
import '@nitric/react-animated-term/css/styles.css';

export const MyComponent = () => {
    const myCMD = [
        {
            text: 'Welcome to Cybros!',
            cmd: true,
        },
        {
            text: 'Official coding club of LNMIIT.',
            cmd: true,
        },
        {
            text: 'Enjoy coding and practice contests with us!',
            cmd: true,
        },
        {
            text: 'PLINTH is the annual inter-collegiate Techno-Management fest of LNMIIT.',
            cmd: true,
        },
        {
            text: 'Check out plinth page to know about our events lined up for plinth.',
            cmd: true,
        },
        {
            text: `Let's get started!`,
            color: 'green',
            cmd: false,
        },
    ];
    return <Terminal lines={myCMD} interval={80} />;
};
