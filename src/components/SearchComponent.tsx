import { useEffect, useState , useRef} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { mapboxAccessToken } from '../shared/API';
import './styles/componentStyles.css';
import Alert from 'react-bootstrap/Alert';
import { act } from 'react-dom/test-utils';

interface LocationData {
    place_name: string,
    coordinates: [number,number]
}

const Search = (props:any) => {

    const [place, setPlace] = useState('');
    const [optionData, setOptionData] = useState<LocationData[]>([]);
    const [options, setOptions] = useState([<div></div>]);
    const [isActive , setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const searchBarRef = useRef<any>(null);
    
    useEffect( () => {
        document.addEventListener("mousedown", (event) => {
            if(!searchBarRef.current.contains(event.target)){
                setIsActive(false);
            }
        });
    },[]);

    useEffect( () => {
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxAccessToken}`)
                .then(response => response.json())
                .then(data => {
                    let len = 0;
                    if (data !== null && data.features) len = data.features.length;
                    let placesOption = [];
                    let dataPlacesOption = [];

                    for(let i = 0 ; i < Math.min(5,len); ++i){
                        let option = data.features[i].place_name;
                        let coords = data.features[i].geometry.coordinates;
                        console.log(data.features[i].geometry.coordinates);
                        const className = activeIndex === i ? 'autocomplete-item-active' : 'autocomplete-item'; 
                        placesOption.push(
                            <div className={className} onClick={() => handleClickSearch(i) } >
                                <strong> {option.substr(0, place.length)}</strong>{option.substr(place.length)}
                            </div>
                        );
                        dataPlacesOption.push({
                            place_name: option,
                            coordinates: coords
                        });
                    }
                    
                    setOptionData(dataPlacesOption);
                    setOptions(placesOption); 
                    console.log(placesOption);
                }
            );
        
    },[place,activeIndex]);

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }else{
            console.log("Location Access Denied!!!");
        }
    }

    const handleClickSearch = (index: number) => {
        console.log('The link was clicked.');

        let data = optionData[index];
        console.log(data);
        props.onChangeInput(data.place_name);
        props.onChangeLocation(data.coordinates);
        
        setPlace("");
        setActiveIndex(-1);

    }

    const getCoordinates = (position: any) => {
        // console.log(props);
        // console.log(position);
        props.onChangeLocation([position.coords.latitude , position.coords.longitude]);
    }

    const changeIndex = (keyCode: number) => {
        console.log(keyCode);
        console.log(activeIndex);

        if(keyCode === 40 ){
            // downpress
            setActiveIndex((activeIndex+1)%options.length);
        }
        else if(keyCode === 38){
            // uppress
            setActiveIndex(Math.abs((activeIndex+options.length-1)%options.length));
        }
        else if(keyCode === 13){
            // enterpress
            handleClickSearch(activeIndex);

        }else{
            setActiveIndex(-1);
        }
    }

    return (
        <>
            <div style={{ backgroundImage: "url(images/weather.jpg)", width:"100%", height:"270px" }}>
                <div className="container" >
                    <br/>
                    <InputGroup>
                        
                        <div className="container">
                            <div className="popcorn">
                                <Alert variant="success">
                                    <Alert.Heading>Search Location by</Alert.Heading>
                                    <p>
                                        <hr/>
                                        Address, Neighbourhood, Locality, Postcode, Place, District, Region, and Country.
                                    </p>
                                </Alert>
                            </div>
                            
                            <div className="row">
                                <div ref={searchBarRef} className="col" onFocus={() => setIsActive(true)}>
                                    <div >
                                        <Input 
                                            onKeyDown={e => changeIndex(e.keyCode)}  
                                            icon="search" 
                                            placeholder="Search Location" 
                                            value={place}
                                            onChange={event => setPlace(event.target.value)} 
                                        />
                                        <div>
                                            {(isActive)? options : <div></div>}
                                        </div>
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