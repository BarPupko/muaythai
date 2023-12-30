import { FunctionComponent } from "react";
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
        <h1 className="text-white text-center ">Wellcome to Muay-Thai</h1>
        <p className="text-white text-center">our website is about what we are teaching<br />
            we teaching self-defense, muay-thai, boxing and kickboxing
        </p>
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

                                <p className="text-center"><span data-testid="comment-base-item-42187">Groundswell Mixed Martial Arts is ready to provide both eager beginners and confident, seasoned athletes with the best training regardless of their age or experience.</span></p>
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

                                <p className="text-center"><span data-testid="comment-base-item-42187">The uplifting environment you’ll find at Groundswell MMA will provide you with a new sense of self.</span></p>
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
    </>);
}

export default Home;