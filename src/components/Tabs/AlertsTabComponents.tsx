import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';

export default function AlertsTab(props: any) {
    
    const [ok,setOk] = useState(false);

    return (
        <div className="make-visible">
            <h2>Alerts</h2> 
            {ok?"Loaded":"Not"}
        </div>
    );
};