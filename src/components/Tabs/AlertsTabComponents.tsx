import './tabsStyles.css';
import { Col, Row} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

export default function AlertsTab(props: any) {
    
    const [ok,setOk] = useState(false);

    useEffect(() => {
        if(props.data.alerts !== undefined){
            setOk(true);
        }

    },[props]); 

    return (
        <div className="make-visible">
            <h2>Alerts</h2> 
            {
                ok  ? 
                <div>
                    {
                        props.data.alerts.map((item:any) => {
                            return(
                                <div className="alert-div"> 
                                    <a href={item.uri} className="alert-deco">
                                        <div className="clean-box">
                                            <h4 style={{fontWeight:"bolder"}}> {item.title}</h4>
                                            <hr/>
                                            <p>From : <Moment unix>{item.time}</Moment> <br/> To : <Moment unix>{item.expires}</Moment> </p>
                                            <hr/>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );
                        } )
                    }
                </div> 
                :
                <Row>
                    <Col><h4>There are no Alert for your location.</h4> </Col>
                    <Col> <i className="fa fa-bell-slash fa-5x"></i> </Col>
                </Row>
            }
            <br/>
        </div>
    );
};