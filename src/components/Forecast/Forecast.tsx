import { Component, SyntheticEvent } from 'react';
import './Forecast.css';
import ForecastTable from './ForecastTable/ForecastTable';
import ForecastJSON from './ForecastJSON/ForecasstJSON';

interface State {
    forecast: ForecastJSON,
    city: string
}

export default class Forecast extends Component <any, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            forecast: { cod: 200 },
            city: "London"
        };
    }

    componentDidMount() {
        this.getForecast(this.state.city);
    }

    updateCity = (event: SyntheticEvent) => {
        this.setState({city: (event.target as HTMLInputElement).value});
    }

    getForecast(city: string) {
        let key = '9eaf1cb25963c5f59244fa7e03c68cc8';
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + key;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({forecast: response}))
            .catch(() => { this.setState({ forecast: { cod: 404 } }); });
    }



    render() {
        return (
            <div id="forecast-container">

                <form id="choose-city">

                    <label htmlFor="city">Print your city</label>
                    <input type="text" id="city" name="city" placeholder={this.state.city} onChange={this.updateCity} />
                    <button id="show-forecast-button" onClick={(event: SyntheticEvent) => {

                        event.preventDefault();
                        this.getForecast(this.state.city);

                    }}>Show forecast</button>

                </form>

                <div id="forecast-table-container">
                    <ForecastTable forecast={this.state.forecast} />
                </div>

                <div id="logout-container">
                    <button onClick={() => {
                        localStorage.removeItem('username');
                        localStorage.removeItem('password');
                        window.location.reload();
                    }}>Logut</button>
                </div>

            </div>
        );
    }
}