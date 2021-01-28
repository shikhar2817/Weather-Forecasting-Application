import { Breadcrumb, BreadcrumbItem } from "reactstrap";
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
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <br/>
                        <address>
                        <i className="fa fa-home"></i>: Plot Number 271, Home Number 9/96,<br />
                        &nbsp; &nbsp;&nbsp; Indripuri Gandhi Gram, Kanpur-7<br />
                        &nbsp; &nbsp;&nbsp; Pin Code: 208007, <br/>
                        &nbsp; &nbsp;&nbsp; Uttar Pradesh, <br/>
                        &nbsp; &nbsp;&nbsp; India<br />
                        <br/>
                        <i className="fa fa-phone"></i>: +91 9140269982<br />
                        <br/>
                        <i className="fa fa-envelope"></i>: <a href="mailto:shikharsingh0076@gmail.com">shikharsingh0076@gmail.com</a>
                        </address>
                        <div>
                        <br/>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-success" href="tel:+91 9140269982"><i className="fa fa-phone"></i></a>
                            <a role="button" className="btn btn-danger" href="https://www.instagram.com/shikhar_singh_2817/"> <i className="fa fa-instagram"></i> </a>
                            <a role="button" href="https://github.com/shikhar2817" className="btn btn-dark"><i className="fa fa-github"></i> </a>
                            <a href="https://www.linkedin.com/in/shikhar-singh-b6134b137/" className="btn btn-primary"><i className="fa fa-linkedin"></i></a>
                            <a role="button" className="btn btn-danger" href="mailto:shikharsingh0076@gmail.com"><i className="fa fa-envelope-o"></i> </a>
                        </div>
                        <p></p>

                </div>
                </div>
                
                

                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Send us Your Feedback</h5>
                    <div className="row row-content">
                        <div className="col-12 col-md-9">
                            <form>
                                <div className="form-group row">
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-10">
                                        <input type="email" className="form-control" id="emailid" name="emailid" placeholder="Email"/>
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <div className="col-md-10">
                                        <textarea className="form-control" id="feedback" name="feedback" placeholder="Your Message" rows={6}></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6 ">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" name="approve" id="approve" value=""/>
                                            <label className="form-check-label"  >
                                                <strong>May we contact you?</strong>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className=" col-md-10">
                                        <button type="submit" className="btn btn-primary">Send Feedback</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <p> </p>
            <p> </p>
            <hr/>
            
            
        </div>
    );
}