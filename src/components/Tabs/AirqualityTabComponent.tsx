import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

export default function AirqualityTab(props: any) {
    
    // const [ok, setOk] = useState(false);
    const [status,setStatus] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [caution, setCaution] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [date,setDate] = useState();
    
    useEffect(()=> {
        // console.log(props);
        // setOk(true);
    
        let airQ = props.data.list[0].main.aqi;
        setDate(props.data.list[0].dt);
        if(airQ === 1) {
            setStatus("Good");
            setMessage("Air quality is considered satisfactory, and air pollution poses little or no risk.");
            setCaution("None");
            setColor("#1eff005e");
        }
        if(airQ === 2) {
            setStatus("Fair");
            setMessage("Air quality is acceptable. However, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.");
            setCaution("Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.");
            setColor("#ffd00085");
        }
        if(airQ === 3) {
            setStatus("Moderate");
            setMessage("Members of sensitive groups may experience health effects. The general public is not likely to be affected.");
            setCaution("Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.");
            setColor("#ff880065");
        }
        if(airQ === 4) {
            setStatus("Poor");
            setMessage("Everyone may begin to experience health effects. members of sensitive groups may experience more serious health effects");
            setCaution("Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion");
            setColor("#4400ff69");
        }
        if(airQ === 5) {
            setStatus("Very Poor");
            setMessage("Health alert : everyone may experience more serious health effects");
            setCaution("Everyone should avoid all outdoor exertion");
            setColor("#ff000069");
        }
    },[props]);

    return (
        <div className="make-visible">
            <h3>Air Quality</h3>
            {/* {ok? */}

            <div>
                <p> Air Quality Index : {props.data.list[0].main.aqi} out of 5 </p>
                <p> <Moment unix>{date}</Moment> </p>
                <Container>
                    <Container className="aqi-badge" style={{backgroundColor:`${color}`}}>
                        <h4 style={{fontWeight:"bolder"}}>Air Quality is {status} </h4>
                        <p>{message}</p>
                        <p>{caution}</p>
                    </Container>
                    <Row xs={2} md={4} className="clean-box">
                        <Col>Carbon monoxide(CO₂) : </Col>
                        <Col>{props.data.list[0].components.co} μg/m³</Col>
                        <Col>Ammonia(NH₃) : </Col>
                        <Col>{props.data.list[0].components.nh3} μg/m³</Col>
                    </Row>
                    <Row xs={2} md={4} className="clean-box">
                        <Col>Nitrogen monoxide(NO) : </Col>
                        <Col>{props.data.list[0].components.no} μg/m³</Col>
                        <Col>Nitrogen dioxide(NO₂) : </Col>
                        <Col>{props.data.list[0].components.no2} μg/m³</Col>
                    </Row>
                    <Row xs={2} md={4} className="clean-box">
                        <Col>Ozone(O₃) : </Col>
                        <Col>{props.data.list[0].components.o3} μg/m³</Col>
                        <Col>Sulphur dioxide(SO₂) : </Col>
                        <Col>{props.data.list[0].components.so2} μg/m³</Col>
                    </Row>
                    <Row xs={2} md={4} className="clean-box">
                        <Col>Fine particles matter(PM₂.₅) : </Col>
                        <Col>{props.data.list[0].components.pm2_5} μg/m³</Col>
                        <Col>Coarse particulate matter(PM₁₀) : </Col>
                        <Col>{props.data.list[0].components.pm10} μg/m³</Col>
                    </Row>
                </Container>
            </div> 
            {/* :  */}
            {/* <div> Loading... </div> */}
            {/* } */}
        </div>
    );
};