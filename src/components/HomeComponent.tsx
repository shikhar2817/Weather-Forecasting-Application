import React, { useState } from 'react';
import Search from './SearchComponent';
import Promotion from './PromotionComponent';
import { Tab , Tabs, Col, Row } from 'react-bootstrap';

function InformationTabs(){
    return (
        <div className="container mt-1">
            <Tabs defaultActiveKey="now" transition={false} id="noanim-tab-example">
                <Tab eventKey="now" title="Now">
                    <h1>Now Component</h1>
                </Tab>
                <Tab eventKey="hourly" title="Hourly">
                    <h1>Hourly Component</h1>
                    
                </Tab>
                <Tab eventKey="daily" title="Daily">
                    <h1>Daily Component</h1>
                </Tab>
                <Tab eventKey="monthly" title="Monthly">
                    <h1>Monthly Component</h1>
                </Tab>
                <Tab eventKey="airquality" title="Airquality">
                    <h1>Airquality Component</h1>
                </Tab>
                <Tab eventKey="radar" title="Radar">
                    <h1>Radar Component</h1>
                </Tab>
            </Tabs>
        </div>
    );  
}

export default function Home () {

    const [coords , setCoords] = useState([28.6139,77.2090]);
    const [location , setLocation] = useState('New Delhi');

    return (
        <div>
            <Row noGutters={true} >
                <Col sm={5}> 
                    <Promotion/> 
                </Col>
                <Col sm={7}> 
                    <Search onChangeInput={(value: string) => setLocation(value)} onChangeLocation={(value: any) => setCoords(value)} /> 
                </Col>
            </Row>
            {coords[0]} and {coords[1]}
            <InformationTabs/>
        </div>
    );
}