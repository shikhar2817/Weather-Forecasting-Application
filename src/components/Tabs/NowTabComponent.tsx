import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import Moment from 'react-moment';


export default function NowTab(props: any) {
    console.log(props);

    const convertTimeStamp = (unixTimestamp: number) => {
        let dateObj = new Date(unixTimestamp * 1000); 
        let utcString = dateObj.toUTCString(); 
        let time = utcString; 
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
                <Row>
                    <Col md={6} className="clean-box">
                        High : {props.data.daily.data[0].temperatureHigh} °C
                    </Col>
                    <Col md={6} className="clean-box">
                        Low : {props.data.daily.data[0].temperatureLow} °C
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="clean-box">
                        Sunrise :  {convertTimeStamp(props.data.daily.data[0].sunriseTime)} , <Moment unix>{props.data.daily.data[0].sunriseTime}</Moment>
                    </Col>
                    <Col md={6} className="clean-box">
                        Sunset : <Moment unix>{props.data.daily.data[0].sunsetTime}</Moment>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="clean-box">
                        Wind :  {props.data.daily.data[0].windSpeed} m/sec
                    </Col>
                    <Col md={6} className="clean-box">
                        Visibility : {props.data.daily.data[0].visibility} Km
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="clean-box">
                        UV Index :  {props.data.daily.data[0].uvIndex} out of 10
                    </Col>
                    <Col md={6} className="clean-box">
                        Humidity : {Math.round(props.data.daily.data[0].humidity * 100)}% 
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="clean-box">
                        Pressure :  {props.data.daily.data[0].pressure} mb
                    </Col>
                    <Col md={6} className="clean-box">
                        Moon Phase : {props.data.daily.data[0].moonPhase}
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="clean-box">
                        Cloud Cover :  {props.data.daily.data[0].cloudCover * 100}%
                    </Col>
                    <Col md={6} className="clean-box">
                        Ozone : {props.data.daily.data[0].ozone} DU
                    </Col>
                </Row>
            </Container>
        </div>
    );
};