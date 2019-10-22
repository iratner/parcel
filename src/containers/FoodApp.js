import React from 'react';

import placesRequests from '../requests/placesRequests';

export default class FoodApp extends React.Component {
    state = {
        places: []
    };

    componentDidMount() {
        const { getPlace } = placesRequests;

        getPlace("Harvest Pizza 43202")
            .then( data => {
                 this.setState({
                     places: data
                 });
            });
    }

    render() {
        // console.log(this.state.places);


        return (
            <div> This is the food app </div>

        );
    }
}