
import { FunctionComponent } from "react";
import { Card, CardGroup } from "react-bootstrap";
import priceImage from '../images/price.png';

interface PricingProps {

}

const Pricing: FunctionComponent<PricingProps> = () => {
    return (
        <div className="container">
            <h1 className="text-white text-center ">Our Prices</h1>
            <div className=" price">
                <img className="priceimg" src={priceImage} alt="Price" />
                <CardGroup>
                    <Card>
                        <Card.Body className="">
                            <Card.Title>Monthly</Card.Title>
                            <Card.Text>
                                * Price per month is about NIS 300<br />
                                * Can come to Sunday-Thursday <br />

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Yearly</Card.Title>
                            <Card.Text>
                                * Price for the year is about NIS 250 per month <br />
                                * Can come to Sunday-Thursday
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
}

export default Pricing;