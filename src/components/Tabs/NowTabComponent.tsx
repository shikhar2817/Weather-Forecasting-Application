import './tabsStyles.css';
import { Tab , Tabs, Col, Row, Container } from 'react-bootstrap';
import { Sun } from '../../shared/WeatherIcons';

export default function NowTab() {
    return (
        <div className="make-visible">
            Now Component
            <Sun/>
        </div>
    );
};