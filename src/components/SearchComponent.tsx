import { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const Search = (props:any) => {
    
    
    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getCoordinates);
        }else{
            console.log("Location Access Denied!!!");
        }
    }

    const getCoordinates = (position: any) => {
        console.log(props);
        console.log(position);
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
                                    <Input icon="search" placeholder="Search Location, Postal" onChange={event => props.onChangeInput(event.target.value)} />
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