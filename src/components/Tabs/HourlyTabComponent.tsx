import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

export default function HourlyTab(props: any) {

    const [ok, setOk] = useState(false);

    useEffect(() => {
        if(props.data !== undefined || props.data !== null){
            setOk(true);
        }
    },[props]);

    return (
        <div className="make-visible">
            <h2 > Hourly Forecast </h2>
            {ok ? 
                <div>
                    {props.data.hourly.data.map((item:any) => {
                        let icon_path = "icons/" + item.icon + ".svg";
                        return(
                            <div className="clean-box">
                                
                                <Row>
                                    <Col xs={3}> <img className="minor-icons" src={icon_path} /> </Col>
                                    {/* <Col>Time : </Col>  */}
                                    <Col xs={5}> <Moment unix>{item.time}</Moment> </Col>
                                    <Col>{item.temperature} °C</Col>
                                </Row>
                                <Row >
                                    <Col>{item.summary} and there is {Math.round(item.precipProbability)*100}% chance of rain.</Col> 
                                    {/* <Col xs={5}> </Col> */}
                                </Row>
                                <Row xs={2} md={4} >
                                    <Col>Wind : </Col> <Col> {item.windSpeed} m/sec </Col>
                                    <Col xs={7}>Wind Direction : </Col> <Col xs={1}> {item.windBearing}° </Col>
                                    <Col>Humidity : </Col> <Col> {Math.round(item.humidity*100)}% </Col>
                                    <Col>UV Index : </Col> <Col> {item.uvIndex} out of 10 </Col>
                                    <Col>Clouds : </Col> <Col> {Math.round(item.cloudCover*100)}% </Col>
                                    <Col>Ozone : </Col> <Col> {item.ozone} DU </Col>

                                </Row>
                            </div>
                        );
                    } )}
                </div>
                : 
                <div>Loding...</div>
            } 
        </div>
    );
};