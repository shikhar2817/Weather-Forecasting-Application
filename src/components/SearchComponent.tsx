import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default function Search(){
    return (
        <>
            <div style={{ backgroundImage: "url(images/weather.jpg)", width:"100%", height:"200px" }}>
                <div className="container" >
                    <br/><br/><br/>
                    <InputGroup>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <Input icon="search" placeholder="Search Location, Postal"/>
                                </div>
                                <div className="ml-0">
                                    <InputGroupAddon addonType="append">
                                        <Button color="secondary"> <i className="fa fa-map-marker" aria-hidden="true"></i></Button>
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