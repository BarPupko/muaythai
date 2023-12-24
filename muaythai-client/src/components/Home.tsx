import { FunctionComponent } from "react";
import Pricing from "./Pricing";
import muayt from '../images/muayt.jpg';

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

    </>);
}

export default Home;