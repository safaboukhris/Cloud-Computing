import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Intro.css';

const Intro = () => {
return (
    <Container>
        <Row>
        {/* Card 1 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
                <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/34235.jpg" style={{ width: '21rem' , height:'18rem' }} />
                <Card.Body>
                <Card.Title className='title'>Positive impact</Card.Title>
                <Card.Text>
                    Many travel companies talk about minimizing their impact.
                    We aim to maximize ours. That's because all our trips are designed to do good.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        {/* Card 2 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
            {/* Add the image source for the second card */}
            <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/2342.jpg" style={{ width: '21rem' , height:'18rem' }} />
            <Card.Body>
                <Card.Title className='title'>Small group travel</Card.Title>
                <Card.Text>
                    Our trips allowing
                    us to offer behind-the-scenes experiences that simply can't be had with larger groups.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        {/* Card 3 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
            {/* Add the image source for the third card */}
            <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/435234.jpg" style={{ width: '21rem' , height:'18rem' }} />
            <Card.Body>
                <Card.Title className='title'>Special access</Card.Title>
                <Card.Text>
                Our trips are capped at 12-14 travelers, allowing
                us to offer experiences that simply can't be had with larger groups.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        {/* Card 4 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
                <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/4564.jpg" style={{ width: '21rem' , height:'18rem' }} />
                <Card.Body>
                <Card.Title className='title'>Curious co-travelers</Card.Title>
                <Card.Text>
                    Our ​travelers are curious, adventurous, and
                    eager for the kinds of experiences that can't be found on a typical group tour.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        {/* Card 5 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
            {/* Add the image source for the 5 card */}
            <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/34534.jpg" style={{ width: '21rem' , height:'18rem' }} />
            <Card.Body>
                <Card.Title className='title'>Places no one else goes</Card.Title>
                <Card.Text>
                    We uncover hidden wonders where you least
                    expect them, seeking out the most incredible places that others overlook.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        {/* Card 6 */}
        <Col md={4} className="mt-3">
            <Card style={{ width: '21rem' }} className="border-0">
            {/* Add the image source for the 6 card */}
            <Card.Img variant="top" src="https://assets.nicepagecdn.com/d2cc3eaa/1644434/images/456654.jpg" style={{ width: '21rem' , height:'18rem' }} />
            <Card.Body>
                <Card.Title className='title'>Transcends the ordinary</Card.Title>
                <Card.Text>
                    Our travel agency is not just about destinations;
                    it's about fostering connections and creating lifelong memories.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>


        </Row>
    </Container>
)
}

export default Intro
