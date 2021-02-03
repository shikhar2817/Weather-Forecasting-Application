import React, { useState } from 'react';
import Search from './SearchComponent';
import Promotion from './PromotionComponent';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import './styles/componentStyles.css';


export default function Home () {

    const [coords , setCoords] = useState([77.2090,28.6139]); // format longitute, latitude
    const [location , setLocation] = useState('New Delhi');
    const [day, setDay] = useState('videos/SunnyDay.mp4');
    // tabs
    const [isNowActive, setIsNowActive] = useState(true);
    const [isHourlyActive, setIsHourlyActive] = useState(true);
    const [isDailyActive, setIsDailyActive] = useState(true);
    const [isMonthylActive, setIsMonthylActive] = useState(true);
    const [isAirqualityActive, setIsAirqualityActive] = useState(true);
    const [isRadarActive, setIsRadarActive] = useState(true);
    const [isNewsActive, setIsNewsActive] = useState(true);
    const [isAlertsActive, setIsAlertsActive] = useState(true);


    useState( () => {
        fetch(`someUrl`)
            .then(response => response.json())
            .then(data => {

            });
    } );

    return (
        <>
            <Row noGutters={true} >
                <Col sm={5}> 
                    <Promotion/> 
                </Col>
                <Col sm={7}> 
                    <Search onChangeInput={(value: string) => setLocation(value)} onChangeLocation={(value: any) => setCoords(value)} /> 
                </Col>
            </Row>
            <div className="weather-video">
                <video
                    autoPlay
                    loop
            
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '45%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={day} />
                </video>
                <Container style={{marginTop:'20px'}} >
                    <h2> {location} </h2>
                    {coords[0]} and {coords[1]}
                    <hr/>
                    <div style={{zIndex:20}} className="container mt-1 ml-1">
                        <Row>
                            <div className="tab-btn"> Now </div>
                            <div className="tab-btn"> Hourly </div>
                            <div className="tab-btn"> Daily </div>
                            <div className="tab-btn"> Monthy </div>
                            <div className="tab-btn"> Airquality </div>
                            <div className="tab-btn"> Radar </div>
                            <div className="tab-btn"> News </div>
                            <div className="tab-btn"> Alerts </div>
                        </Row>
                        <Row>
                            {isNowActive}
                        </Row>
                    </div>
                </Container>
            </div>    
        </>
    );
}