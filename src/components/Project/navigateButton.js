import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
const NavigateButton = ({ url }) => (
    <Button as='a' href={url} target='_blank' className="hvr-ripple-out" basic size='large' primary style={{ marginTop: '5%' }}>
        View more..
    </Button>
);
export default NavigateButton;