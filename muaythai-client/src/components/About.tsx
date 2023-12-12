import { FunctionComponent } from "react";
import muaythaiImage from '../images/muaythai.png';

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {

    return (<>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <img src={muaythaiImage} alt="Muay Thai" className="img-fluid mt-3 mb-3" />
                </div>
            </div>
        </div>
        <div>
            <h1 className="AMT"><strong>About Muay Thai</strong></h1>
            <div className="SMT">
                <p>
                    Muay Thai is a traditional Thai martial art and combat sport known for its striking techniques. It's a popular sport that utilizes techniques of striking developed over the years.
                </p>
                <p>
                    Muay Thai techniques include punches, kicks, knees, and elbows. Training in Muay Thai requires both physical and mental conditioning and involves pad work, sparring, and various drills.
                </p>
                <p>
                    Muay Thai has its own set of rules and scoring system, including the use of clinching and the significance of precision and power in striking.
                </p>
                <p>
                    Muay Thai is also associated with cultural elements, such as the "Wai Kru" dance performed by fighters before a match and the importance of respect in the sport.
                </p>
                <p>
                    In modern times, Muay Thai has gained popularity worldwide and plays a significant role in the world of combat sports, often integrated into mixed martial arts (MMA). The sport has expanded with gyms and competitions around the globe.
                </p>
                <p>
                    On our website, we provide comprehensive information about Muay Thai, including articles, images, and resources for both fighters and enthusiasts. The site is designed to cater to anyone interested in exploring the world of Muay Thai, whether you're an experienced fighter or someone looking to get started.
                </p>
                <p>
                    We extend our gratitude to the team that worked on creating this content and to everyone who supported and contributed to our project. We invite you to browse our site, read the articles, and connect with us.
                </p>
            </div>
        </div>
    </>);
}

export default About;