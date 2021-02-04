import './WeatherIcons.css';

export const Sun = () => {
    return (
        <div className="container">
            <div className="weather-sun">
                <div className="sun">
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                </div>
            </div>
        </div>
    );
}

export const Snow = () => {
    return (
        <div className="container">
            <div className="weather-snow">
                <div className="snow">
                    <div className="f"></div>
                </div>
            </div>
        </div>
    );
}

export const CloudAndSun = () => {
    return (
        <div className="container">
            <div className="weather-cloudAndSun">
                <div className="cloud"></div>
                <div className="sun">
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                    <div className="rays"></div>
                </div>
            </div>
        </div>
    );
}

export const Clouds = () => {
    return (
        <div className="container">
            <div className="weather-cloud">
				<div className="cloud"></div>
				<div className="cloud"></div>
			</div>
        </div>
    );
};

export const Rain = () => {
    return(
        <div className="container">
            <div className="weather-rain">
				<div className="cloud"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
				<div className="rain"></div>
			</div>
        </div>
    );
};