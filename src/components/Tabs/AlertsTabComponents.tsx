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
                                    <a href="http://alerts.weather.gov/cap/wwacapget.php?x=WA1255E4DB8494.FloodWatch.1255E4DCE35CWA.SEWFFASEW.38e78ec64613478bb70fc6ed9c87f6e6" className="alert-deco">
                                        <div className="clean-box">
                                            <h4 style={{fontWeight:"bolder"}}> Flood Watch for Mason, WA</h4>
                                            <hr/>
                                            <p>From : <Moment unix>{1509993360}</Moment> <br/> To : <Moment unix>{1510036680}</Moment> </p>
                                            <hr/>
                                            <p>
                                                ...FLOOD WATCH REMAINS IN EFFECT THROUGH LATE MONDAY NIGHT...\nTHE FLOOD WATCH CONTINUES FOR\n* A PORTION OF NORTHWEST WASHINGTON...INCLUDING THE FOLLOWING\nCOUNTY...MASON.\n* THROUGH LATE FRIDAY NIGHT\n* A STRONG WARM FRONT WILL BRING HEAVY RAIN TO THE OLYMPICS\nTONIGHT THROUGH THURSDAY NIGHT. THE HEAVY RAIN WILL PUSH THE\nSKOKOMISH RIVER ABOVE FLOOD STAGE TODAY...AND MAJOR FLOODING IS\nPOSSIBLE.\n* A FLOOD WARNING IS IN EFFECT FOR THE SKOKOMISH RIVER. THE FLOOD\nWATCH REMAINS IN EFFECT FOR MASON COUNTY FOR THE POSSIBILITY OF\nAREAL FLOODING ASSOCIATED WITH A MAJOR FLOOD.\n
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