import React,{Component} from "react";
import { BsThreeDots } from "react-icons/bs";
import { Row,Col, Container ,Card,Image} from "react-bootstrap";
import "./feed.css";

class Feed extends Component{
    render(){

 

  return (
    <>

    <Container>
    <Row className="cols-12">
        <Col >
        <Card >
            <Card.Header  className="d-flex m-0" as="h8">
            <Image src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80" roundedCircle  className="profilePic mr-2" />
           username
            <a className=" ml-auto " style={{color:"#262626"}}> <BsThreeDots/></a>
            </Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1562&q=80" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                
            </Card.Body>
        </Card>
        </Col>
    </Row>

    </Container>

    </>
  );
};
}


export default Feed;
