import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default function Search(){
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <>
            <div className="container">
                <h2></h2>
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
                <h2></h2>
            </div>
        </>
    );
}