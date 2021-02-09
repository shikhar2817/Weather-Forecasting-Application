import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

export default function DailyTab(props: any) {
    const [ok, setOk] = useState(false);

    useEffect(() => {
        if(props.data !== undefined || props.data !== null){
            setOk(true);
        }
    },[props]);

    const convertTimeStamp = (unixTimestamp: number) => {
        let time = new Date(unixTimestamp * 1000).toLocaleTimeString("en-US");
        return time;
    }

    return (
        <div className="make-visible">
            <h2>Daily Forecast</h2>
            {ok ? 
                <div>
                    {props.data.daily.data.map((item:any) => {
                        let icon_path = "icons/" + item.icon + ".svg";
                        return(
                            <Container className="clean-box">
                                <Row>
                                    <Col xs={3}> <img className="minor-icons" src={icon_path} /> </Col>
                                    {/* <Col>Time : </Col>  */}
                                    <Col > <Moment unix>{item.time}</Moment> </Col>
                                    <Col >{item.summary} and there is {Math.round(item.precipProbability)*100}% chance of rain.</Col> <Col xs={8}></Col>
                                    
                                </Row>
                                <Row xs={2} md={4} >
                                    <Col>Max : </Col> <Col> {item.temperatureMax} °C</Col>
                                    <Col>Min : </Col> <Col> {item.temperatureMin} °C </Col>
                                    
                                    <Col>Sunrise : </Col> <Col> {convertTimeStamp(item.sunriseTime)} </Col>
                                    <Col>Sunset : </Col> <Col> {convertTimeStamp(item.sunsetTime)} </Col>
                                    
                                    <Col>Pressure : </Col> <Col> {item.pressure} mb </Col>
                                    <Col>Visibility : </Col> <Col> {item.visibility} Km </Col>
                                    
                                    <Col>Wind : </Col> <Col> {item.windSpeed} m/sec </Col>
                                    <Col xs={7}>Wind Direction : </Col> <Col xs={1}> {item.windBearing}° </Col>
                                    <Col>Humidity : </Col> <Col> {Math.round(item.humidity*100)}% </Col>
                                    <Col>UV Index : </Col> <Col> {item.uvIndex} out of 10 </Col>
                                    <Col>Clouds : </Col> <Col> {Math.round(item.cloudCover*100)}% </Col>
                                    <Col>Ozone : </Col> <Col> {item.ozone} DU </Col>

                                    <Col>Moon Phase : </Col> <Col> {item.moonPhase*100}% </Col>
                                    <Col>Dew Point : </Col> <Col> {item.dewPoint} °C </Col>
                                    
                                </Row>
                            </Container>
                        );
                    } )}
                </div>
                : 
                <div>Loding...</div>
            } 
        </div>
    );
};