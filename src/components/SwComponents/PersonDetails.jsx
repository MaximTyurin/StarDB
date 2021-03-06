import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { WithSwapiService } from '../HocHelpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage,
    };
};

export default WithSwapiService(mapMethodsToProps)(PersonDetails);
