import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function Contact(){
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="https://www.skype.com/en/"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <p> </p>
            <p> </p>
            <hr/>
            
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <form>
                        <div className="form-group row">
                            <label  className="col-md-2 col-form-label">First Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label">Last Name</label>
                            <div className="col-md-10">
                                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-12 col-md-2 col-form-label">Contact Tel.</label>
                            <div className="col-5 col-md-3">
                                <input type="tel" className="form-control" id="areacode" name="areacode" placeholder="Area code"/>
                            </div>
                            <div className="col-7 col-md-7">
                                <input type="tel" className="form-control" id="telnum" name="telnum" placeholder="Tel. number"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label  className="col-md-2 col-form-label">Email</label>
                            <div className="col-md-10">
                                <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6 offset-md-2">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="approve" id="approve" value=""/>
                                    <label className="form-check-label"  >
                                        <strong>May we contact you?</strong>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-1">
                                <select className="form-control" name="" id="">
                                    <option value="">Telephone</option>
                                    <option value="">Email</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label">Your Feedback</label>
                            <div className="col-md-10">
                                <textarea className="form-control" id="feedback" name="feedback" rows={12}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-2 col-md-10">
                                <button type="submit" className="btn btn-primary">Send Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}