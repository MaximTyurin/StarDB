import React from 'react';
import { PlanetDetails, PlanetList } from '../SwComponents';
import Row from '../Row';

class PlanetsPage extends React.Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );
    }
}

export default PlanetsPage;
