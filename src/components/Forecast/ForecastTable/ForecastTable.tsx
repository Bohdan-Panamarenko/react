import ForecastJSON from "../ForecastJSON/ForecasstJSON";

interface Props {
    forecast: ForecastJSON
}

export default function ForecastTable(props: Props) {
    const forecast = props.forecast;

    if (!(forecast.cod === 200)) {
        return (
            <div id="error-container">
                Oh, i'm sorry. <br />
                looks like we don't know such city
            </div>
        );
    }
    else {
        
        return (
            <table id="forecast-table">
                <tbody>

                    <tr>
                        <th>City</th>
                        <td>{forecast.name}</td>
                    </tr>
                    <tr>
                        <th>Weather</th>
                        <td>{forecast.weather ? forecast.weather[0].description : null}</td>
                    </tr>
                    <tr>
                        <th>Tempreture</th>
                        <td>{forecast.main?.temp}</td>
                    </tr>
                    <tr>
                        <th>Pressure</th>
                        <td>{forecast.main?.pressure}</td>
                    </tr>
                    <tr>
                        <th>Wind speed</th>
                        <td>{forecast.wind?.speed}</td>
                    </tr>

                </tbody>
            </table>
        );
    }
}