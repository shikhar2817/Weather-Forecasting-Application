import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function About(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>About Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-6">
                        <p>Hello there, I am Shikhar Singh Bhadauria, a computer science student at SRM Institute of Science and Technology and creator of this application.</p>
                        <p>Ever since I was a little kid, software development has been my passion. I still remember sitting in front of my brother's computer, my brother told me about programming, making it print "Hello, Shikhar" for the very first time. As I went through the BASIC tutorial, it was almost magic, being able to get the computer to do whatever I wanted, just by typing in these funny little symbols, limited only by my imagination and ingenuity. Throughout my college, I latched on to any ideas for projects I could get, moving from "Hello World" to a simple web applications, with dozens of projects in between. I learned Development, tearing through any books I could find on anything remotely related to software development. Now I am looking for an opportunity to progress as much as I can. There's certainly yet more to learn, yet more problems to solve, and yet more to build. And for this, I am very grateful.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <Card>
                            <CardHeader className="bg-primary text-white"> Quick Project Details</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Developer Name</dt>
                                    <dd className="col-6">Shikhar Singh Bhadauria</dd>
                                    <dt className="col-6">Started</dt>
                                    <dd className="col-6">12 January 2021</dd>
                                    <dt className="col-6">College</dt>
                                    <dd className="col-6">SRM Institute of Science and Technology</dd>
                                    <div className="col-12">
                                        <a href="https://www.linkedin.com/in/shikhar-singh-b6134b137/" className="btn btn-primary"><i className="fa fa-linkedin">  </i> </a> &nbsp;
                                        <a role="button" href="https://github.com/shikhar2817" className="btn btn-dark"><i className="fa fa-github"> </i> </a> &nbsp;
                                        <a role="button" className="btn btn-success" href="mailto:shikharsingh0076@gmail.com"><i className="fa fa-envelope-o"> </i> </a> &nbsp;
                                        <a role="button" className="btn btn-danger" href="https://www.instagram.com/shikhar_singh_2817/"> <i className="fa fa-instagram"> </i> </a> &nbsp;
                                    </div>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <p className="mb-0">Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.</p>
                                    <footer className="blockquote-footer"> Martin Golding,
                                    <cite title="Source Title"> Usage of comma operator, thread, 1991</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}