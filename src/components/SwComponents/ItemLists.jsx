import React from 'react';
import {
    WithData,
    WithSwapiService,
    Compose,
    WithChildFunction,
} from '../HocHelpers';
import ItemList from '../ItemList';

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name }) => (
    <span>
        {name} ({model})
    </span>
);

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople,
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets,
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships,
    };
};

const PersonList = Compose(
    WithSwapiService(mapPersonMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const PlanetList = Compose(
    WithSwapiService(mapPlanetMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const StarshipList = Compose(
    WithSwapiService(mapStarshipMethodsToProps),
    WithData,
    WithChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
