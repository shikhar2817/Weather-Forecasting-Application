import React from 'react';
import Search from './SearchComponent';
import Promotion from './PromotionComponent';
import { Tab , Tabs, Container, Col, Row } from 'react-bootstrap';

function InformationTabs(){
    return (
        <div className="container mt-1">
            <Tabs defaultActiveKey="now" transition={false} id="noanim-tab-example">
                <Tab eventKey="now" title="Now">
                    <h1>Hello</h1>
                </Tab>
                <Tab eventKey="hourly" title="Hourly">
                    <h1>There</h1>
                    
                </Tab>
                <Tab eventKey="daily" title="Daily">
                    <h1>Yoyo</h1>
                </Tab>
                <Tab eventKey="monthly" title="Monthly">
                    <h1>Yoyo</h1>
                </Tab>
                <Tab eventKey="airquality" title="Airquality">
                    <h1>Yoyo</h1>
                </Tab>
                <Tab eventKey="radar" title="Radar">
                    <h1>Yoyo</h1>
                </Tab>
            </Tabs>
        </div>
    );  
}

export default function Home () {
    return (
        <div>
            <Row noGutters={true} >
                <Col sm={5}> <Promotion/> </Col>
                <Col sm={7}> <Search/> </Col>
            </Row>
            <InformationTabs/>
        </div>
    );
}