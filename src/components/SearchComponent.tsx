import { useEffect, useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { mapboxAccessToken } from '../shared/API';
import './styles/componentStyles.css';

const Search = (props:any) => {


    
    const [place, setPlace] = useState('');
    const [options, setOptions] = useState([<div></div>]);

    useEffect( () => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxAccessToken}`)
            .then(response => response.json())
            .then(data => {
                let len = 0;
                // console.log(data.features.length);
                if (data !== null && data.features) len = data.features.length;
                let placesOption = [];

                for(let i = 0 ; i < Math.min(5,len); ++i){
                    let option = data.features[i].place_name;
                    placesOption.push(
                        
                        <div className="autocomplete-item">
                            <strong> {option.substr(0, place.length)} </strong> {option.substr(place.length)};
                        </div>
                    );
                }
                
                setOptions(placesOption); 
                console.log(placesOption);
            });
    },[place]);

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }else{
            console.log("Location Access Denied!!!");
        }
    }

    const getCoordinates = (position: any) => {
        // console.log(props);
        // console.log(position);
        props.onChangeLocation([position.coords.latitude , position.coords.longitude]);
    }

    return (
        <>
            <div style={{ backgroundImage: "url(images/weather.jpg)", width:"100%", height:"270px" }}>
                <div className="container" >
                    <br/><br/><br/><br/><br/>
                    <InputGroup>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="">
                                        <Input icon="search" placeholder="Search Location, Postal" onChange={event => setPlace(event.target.value)} />
                                        {options}
                                    </div>
                                </div>
                                <div className="ml-0">
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary" onClick={getLocation}> <i className="fa fa-map-marker" aria-hidden="true"></i></Button>
                                    </InputGroupAddon>
                                </div>
                                <div className="ml-1">
                                    <InputGroupAddon addonType="append">
                                        <Button color="success"> <i className="fa fa-search "> Search</i> </Button>  
                                    </InputGroupAddon>
                                </div>
                            </div>
                        </div>
                    </InputGroup>
                </div>
            </div>
        </>
    );
}

export default Search;