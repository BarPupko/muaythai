import { FunctionComponent } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import Pricing from "./Pricing";
import muayt from '../images/muayt.jpg';
import motivation from '../images/motivation.png';
import community from '../images/community.png';
import confidence from '../images/confidence.png';
import Respect from '../images/Respect.png';
import strong from '../images/strong.png';

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (<>
        <div className="container">
            <h4 className="text-white text-center">Welcome!</h4>
            <h2 className="text-white text-center">Muay-Thai</h2>
            <p className="text-white text-center">We strive to provide the highest level of insightful, targeted training through our experience and environment— providing our students with tools and lessons to grow, thrive and to create an unwavering level of self-respect. We build students that are confident, yet humble and altogether a better version of themselves through teaching martial arts in Karmiel, Israel. We’re attentive to everyone of all skill levels and ages and provide a sense of belonging because we truly do care about their journey.
            </p>
        </div>
        <div className="muayt-container">
            <img className="muayt" src={muayt} alt="Price" />
        </div>
        <Pricing />
        <br />
        <section className="page-section page-section-hightlights bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12 page-section-header">
                        <h4></h4>
                        <h2 className="text-center">Why It Matters </h2>
                        <br />
                    </div>
                    <div className="header-content">
                    </div>
                </div>
            </div>
            <div id="highlight">
                <div className="container ">
                    <div className="row justify-content-md-center">
                        <div className="col-md-4">
                            <div className="highlight">

                                <div className="highlight-image text-center">
                                    <div className="highlight-image-box d-flex align-items-center justify-content-center">
                                        <img className="community" src={community} alt="Inclusive Icon" width="auto" height="auto" />
                                    </div>
                                </div>
                                <h5 className="text-center">Inclusive</h5>

                                <p className="text-center"><span data-testid="comment-base-item-42187">Groundswell Muay Thai is ready to provide both eager beginners and confident, seasoned athletes with the best training regardless of their age or experience.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="highlight">

                                <div className="highlight-image text-center">
                                    <div className="highlight-image-box d-flex align-items-center justify-content-center">
                                        <img className="strong" src={strong} alt="Strong Icon" width="auto" height="auto" />
                                    </div>
                                </div>
                                <h5 className="text-center">Strong</h5>

                                <p className="text-center"><span data-testid="comment-base-item-42187">Through our martial arts classes, you will not only strengthen your body, but your mentality as well.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="highlight">

                                <div className="highlight-image text-center">
                                    <div className="highlight-image-box d-flex align-items-center justify-content-center">
                                        <img className="Respect" src={Respect} alt="Experienced Icon" width="auto" height="auto" />
                                    </div>
                                </div>
                                <h5 className="text-center">Experienced</h5>

                                <p className="text-center"><span data-testid="comment-base-item-42187">Our coaches are well-equipped to provide you with top-notch, technically sound training.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="highlight">

                                <div className="highlight-image text-center">
                                    <div className="highlight-image-box d-flex align-items-center justify-content-center">
                                        <img className="confidence" src={confidence} alt="Confident Icon" width="auto" height="auto" />
                                    </div>
                                </div>
                                <h5 className="text-center">Confident</h5>

                                <p className="text-center"><span data-testid="comment-base-item-42187">The uplifting environment you’ll find at Groundswell Muay Thai will provide you with a new sense of self.</span></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="highlight">

                                <div className="highlight-image text-center">
                                    <div className="highlight-image-box d-flex align-items-center justify-content-center">
                                        <img className="motivation" src={motivation} alt="Proud Icon" width="auto" height="auto" />
                                    </div>
                                </div>
                                <h5 className="text-center">Proud</h5>

                                <p className="text-center"><span data-testid="comment-base-item-42187">Revel in your success and progress after dedicating hard work and time towards your goals.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container highlights-tagline">
                <h5></h5>
            </div>
        </section>

        <section>
            <div className="container">
                <Container className="my-5 p-5 shadow-lg bg-white rounded">
                    <h1 className="text-center mb-4">Get in Touch</h1>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                        </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                <br />
            </div>
        </section>
    </>);
}

export default Home;