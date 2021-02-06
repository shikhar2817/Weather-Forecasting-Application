import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import { ClearDay } from '../../shared/WeatherIcons';

export default function NowTab(props: any) {
    console.log(props);
    return (
        <div className="make-visible">
            <h3>Now</h3>
            <Container>
                <Row>
                    <Col md={6}>
                        High/Low : {}
                    </Col>
                    <Col md={6}>
                        Some text 2
                    </Col>
                </Row>
            </Container>
        </div>
    );
};