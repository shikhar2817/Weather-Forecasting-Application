import React, { useState, useEffect } from 'react';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import Moment from 'react-moment';

// APIs
import { openweathermapKey, darkSkyKey } from '../shared/API';

// components
import Search from './SearchComponent';
import Promotion from './PromotionComponent';
import './styles/componentStyles.css';

// tabs components
import NowTab from './Tabs/NowTabComponent';
import HourlyTab from './Tabs/HourlyTabComponent';
import DailyTab from './Tabs/DailyTabComponent';
import AirqualityTab from './Tabs/AirqualityTabComponent';
import RadarTab from './Tabs/RadarTabComponent';
import NewsTab from './Tabs/NewsTabComponent';
import AlertsTab from './Tabs/AlertsTabComponents';

export default function Home () {

    const days = {
        default: 'videos/SunnyDay.mp4',
        clouds: 'videos/Clouds.mp4',
        heavyRain: 'videos/HeavyRain.mp4',
        lightRain: 'videos/LightRain.mp4',
        mist: 'videos/Mist.mp4',
        moon: 'videos/Moon.mp4',
        snow: 'videos/Snowfall.mp4',
        storm: 'videos/Storm.mp4' 
    }

    const [icon, setIcon] = useState<string>('icons/01d.svg');
    const [ok, setOk] = useState(false);
    const [coords , setCoords] = useState<number[]>([28.6139,77.2090]); // format longitute, latitude
    const [location , setLocation] = useState('New Delhi, India');
    const [day, setDay] = useState(days.default);
    const [data, setData] = useState<any>('');
    const [date, setDate] = useState<number>();
    // tabs
    const [isNowActive, setIsNowActive] = useState(true);
    const [isHourlyActive, setIsHourlyActive] = useState(false);
    const [isDailyActive, setIsDailyActive] = useState(false);
    const [isAirqualityActive, setIsAirqualityActive] = useState(false);
    const [isRadarActive, setIsRadarActive] = useState(false);
    const [isNewsActive, setIsNewsActive] = useState(false);
    const [isAlertsActive, setIsAlertsActive] = useState(false);

    useEffect( () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/${coords[0]},${coords[1]}?units=si`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                setOk(true);
                let icon_path = "icons/" + data.currently.icon + ".svg";
                setIcon(icon_path);
                setDate(data.currently.time);
            });
    },[location,coords]);

    const handleActive = (tabName: string) => {
        if(tabName === "airquality"){
            setIsAirqualityActive(true);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "alert"){
            setIsAirqualityActive(false);
            setIsAlertsActive(true);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "daily"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(true);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "hourly"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(true);
            setIsRadarActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "radar"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(true);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "monthly"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "now"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsNowActive(true);
            setIsNewsActive(false);
        }else if(tabName === "news"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsNowActive(false);
            setIsNewsActive(true);
        }
        
    }

    return (
        <div className="weather-video">
            <video
                autoPlay
                loop
                
                style={{
                    marginTop: '-60px',
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -2,
                }}
            >
                <source src={day} />
            </video>
            <Row noGutters={true} >
                <Col sm={5}> 
                    <Promotion/> 
                </Col>
                <Col sm={7}> 
                    <Search onChangeInput={(value: string) => setLocation(value)} onChangeLocation={(value: any) => setCoords(value)} /> 
                </Col>
            </Row>
            <div>
                {/* <video
                    autoPlay
                    loop
                    
                    style={{
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={day} />
                </video> */}
                
                <Container style={{marginTop:'20px'}} >
                    {ok ?
                        <Container style={{color:'floralwhite'}}>
                            <br/>
                            <h2> {location} </h2>
                            <p> Latitude: {data.latitude}, Longitude: {data.longitude}</p>
                            <p> <Moment unix>{date}</Moment> ( {data.timezone} ) </p>
                            
                                <Row style={{marginLeft:'15px'}}>
                                    <img className="major-icons" src={icon} />
                                    <Col style={{marginLeft:'15px'}}>
                                        <h2> {data.currently.temperature} °C</h2>
                                        <p style={{marginTop:'-10px'}}> Feels like</p>
                                        <p style={{marginTop:'-10px'}}> <h3> {data.currently.summary} </h3> </p>
                                        <div style={{marginTop:'-10px'}}>{Math.round(data.currently.precipProbability * 100)}% chance of rain right now </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col> <img className="mini-icons" src={`icons/${data.hourly.icon}.svg`} /> {data.hourly.summary} </Col>
                                    <Col> <img className="mini-icons" src={`icons/${data.daily.icon}.svg`} /> {data.daily.summary} </Col>
                                </Row>
                               
                            
                        </Container>
                        :<div></div>
                    } 
                    <hr/>
                    {/* {coords[0]} and {coords[1]} */}
                    <div style={{zIndex:0}} className="container mt-1 ml-1">
                        <Row>
                            <div className="tab-btn" onClick={() => handleActive('now')}> Now </div>
                            <div className="tab-btn" onClick={() => handleActive('hourly')}> Hourly </div>
                            <div className="tab-btn" onClick={() => handleActive('daily')}> Daily </div>
                            <div className="tab-btn" onClick={() => handleActive('airquality')}> Airquality </div>
                            <div className="tab-btn" onClick={() => handleActive('radar')}> Radar </div>
                            <div className="tab-btn" onClick={() => handleActive('news')}> News </div>
                            <div className="tab-btn" onClick={() => handleActive('alert')}> Alerts </div>
                        </Row>
                        <hr/>
                        {ok ? 
                            <Container>
                                {isNowActive ? <NowTab data={data}/> : <div></div>}
                                {isHourlyActive ? <HourlyTab data={data}/> : <div></div>}
                                {isDailyActive ? <DailyTab data={data}/> : <div></div>}
                                {isAirqualityActive ? <AirqualityTab data={data}/> : <div></div>}
                                {isRadarActive ? <RadarTab data={data}/> : <div></div>}
                                {isNewsActive ? <NewsTab data={data}/> : <div></div>}
                                {isAlertsActive ? <AlertsTab data={data}/> : <div></div>}
                            
                            </Container>
                            : <div></div>
                        }
                    </div>
                </Container>
            </div>    
        </div>
    );
}