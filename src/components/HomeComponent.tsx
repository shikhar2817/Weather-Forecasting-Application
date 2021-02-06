import React, { useState, useEffect } from 'react';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';

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
import MonthlyTab from './Tabs/MonthlyTabComponent';
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
    const [date, setDate] = useState<string>('');
    // tabs
    const [isNowActive, setIsNowActive] = useState(true);
    const [isHourlyActive, setIsHourlyActive] = useState(false);
    const [isDailyActive, setIsDailyActive] = useState(false);
    const [isMonthlyActive, setIsMonthlyActive] = useState(false);
    const [isAirqualityActive, setIsAirqualityActive] = useState(false);
    const [isRadarActive, setIsRadarActive] = useState(false);
    const [isNewsActive, setIsNewsActive] = useState(false);
    const [isAlertsActive, setIsAlertsActive] = useState(false);

    useEffect( () => {
        fetch(`https://api.darksky.net/forecast/${darkSkyKey}/${coords[0]},${coords[1]}?units=si`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                setOk(true);
                let icon_path = "icons/" + data.currently.icon + ".svg";
                setIcon(icon_path);
                const date = new Date();
                setDate(date.toString());
            });
    },[location,coords]);

    const handleActive = (tabName: string) => {
        if(tabName === "airquality"){
            setIsAirqualityActive(true);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "alert"){
            setIsAirqualityActive(false);
            setIsAlertsActive(true);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "daily"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(true);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "hourly"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(true);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "radar"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(true);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "monthly"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(true);
            setIsNowActive(false);
            setIsNewsActive(false);
        }else if(tabName === "now"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(true);
            setIsNewsActive(false);
        }else if(tabName === "news"){
            setIsAirqualityActive(false);
            setIsAlertsActive(false);
            setIsDailyActive(false);
            setIsHourlyActive(false);
            setIsRadarActive(false);
            setIsMonthlyActive(false);
            setIsNowActive(false);
            setIsNewsActive(true);
        }
        
    }

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
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                >
                    <source src={day} />
                </video>
                
                <Container style={{marginTop:'20px'}} >
                    {ok ?
                        <Container style={{color:'floralwhite'}}>
                            <br/>
                            <h2> {location} </h2>
                            <p> Latitude: {data.latitude}, Longitude: {data.longitude}</p>
                            <p> {date}</p>
                            
                                <Row style={{marginLeft:'15px'}}>
                                    <img className="major-icons" src={icon} />
                                    <Col style={{marginLeft:'15px'}}>
                                        <h2> {data.currently.temperature} °C</h2>
                                        <p style={{marginTop:'-10px'}}> Feels like</p>
                                        <p style={{marginTop:'-10px'}}> <h3> {data.currently.summary} </h3> </p>
                                        <h4 style={{marginTop:'-10px'}}>{data.currently.precipProbability * 100}% chance of rain </h4>
                                    </Col>
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
                            <div className="tab-btn" onClick={() => handleActive('monthly')}> Monthy </div>
                            <div className="tab-btn" onClick={() => handleActive('airquality')}> Airquality </div>
                            <div className="tab-btn" onClick={() => handleActive('radar')}> Radar </div>
                            <div className="tab-btn" onClick={() => handleActive('news')}> News </div>
                            <div className="tab-btn" onClick={() => handleActive('alert')}> Alerts </div>
                        </Row>
                        <hr/>
                        <Container>
                            {isNowActive ? <NowTab data={data.currently}/> : <div></div>}
                            {isHourlyActive ? <HourlyTab/> : <div></div>}
                            {isDailyActive ? <DailyTab/> : <div></div>}
                            {isMonthlyActive ? <MonthlyTab/> : <div></div>}
                            {isAirqualityActive ? <AirqualityTab/> : <div></div>}
                            {isRadarActive ? <RadarTab/> : <div></div>}
                            {isNewsActive ? <NewsTab/> : <div></div>}
                            {isAlertsActive ? <AlertsTab/> : <div></div>}
                            
                        </Container>
                    </div>
                </Container>
            </div>    
        </>
    );
}