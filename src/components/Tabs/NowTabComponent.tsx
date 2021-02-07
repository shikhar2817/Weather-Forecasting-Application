import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import Moment from 'react-moment';


export default function NowTab(props: any) {
    console.log(props);

    const convertTimeStamp = (unixTimestamp: number) => {
        let time = new Date(unixTimestamp * 1000).toLocaleTimeString("en-US");
        return time;
    }

    return (
        <div className="make-visible">
            <h3>Now</h3>
            <Container>
                <Row>
                    <Col className="clean-box-cap">
                        {props.data.daily.data[0].summary} And also there is {props.data.daily.data[0].precipProbability * 100}% chance of rain.
                    </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>High : </Col>
                    <Col>{props.data.daily.data[0].temperatureHigh} °C</Col>
                    <Col>Low : </Col>
                    <Col>{props.data.daily.data[0].temperatureLow} °C</Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>Sunrise : </Col>
                    <Col>{convertTimeStamp(props.data.daily.data[0].sunriseTime)}</Col>
                    <Col>Sunset : </Col>
                    <Col>{convertTimeStamp(props.data.daily.data[0].sunsetTime)}</Col>
                </Row>
                
                <Row xs={2} md={4} className="clean-box">
                    <Col>Dew Point : </Col>
                    <Col> {props.data.daily.data[0].dewPoint}°C </Col>
                    <Col>Visibility : </Col>
                    <Col> {props.data.daily.data[0].visibility} Km </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>Wind : </Col>
                    <Col> {props.data.daily.data[0].windSpeed} m/sec </Col>
                    <Col>Wind Direction : </Col>
                    <Col> {props.data.daily.data[0].windBearing}° Km </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>Wind Gust : </Col>
                    <Col> {props.data.daily.data[0].windGust} m/sec </Col>
                    <Col>Wind Gust Time : </Col>
                    <Col> {convertTimeStamp(props.data.daily.data[0].windGustTime)} </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>UV Index : </Col>
                    <Col> {props.data.daily.data[0].uvIndex} out of 10 </Col>
                    <Col>Humidity : </Col>
                    <Col> {Math.round(props.data.daily.data[0].humidity * 100)}% </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>Pressure : </Col>
                    <Col> {props.data.daily.data[0].pressure} mb </Col>
                    <Col>Moon Phase : </Col>
                    <Col> {props.data.daily.data[0].moonPhase} </Col>
                </Row>
                <Row xs={2} md={4} className="clean-box">
                    <Col>Cloud Cover : </Col>
                    <Col> {props.data.daily.data[0].cloudCover * 100}% </Col>
                    <Col>Ozone : </Col>
                    <Col> {props.data.daily.data[0].ozone} DU </Col>
                </Row>
            </Container>
        </div>
    );
};