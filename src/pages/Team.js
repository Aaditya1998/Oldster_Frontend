import { Card, Row } from "react-bootstrap";

export default function Team() {
  return (
    <div className="mt-5 mx-auto p-4" style={{ minHeight: "200px", width: "96%", background: "white" }}>
      <Row>
        <h2 className="text-center">Meet Our Team</h2>
        <p className="text-center">Oldster Care Provider team brings you transperancy & service at your doorsteps!.We have dedicated our service
          to give you best experience
        </p>
        <Card style={{ width: '15rem' }} className="me-2 outline-warning">
          <Card.Img style={{ height: '300px' }} variant="top" src={require("./images/aniket.jpg")} />
          <Card.Body className="text-center">
            <Card.Title>Aniket Kanchane</Card.Title>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '15rem' }} className="me-2">
          <Card.Img style={{ height: '300px' }} variant="top" src={require("./images/kiran.jpeg")} />
          <Card.Body className="text-center">
            <Card.Title>Kiran Yadav</Card.Title>
           

          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }} className="me-2">
          <Card.Img style={{ height: '300px' }} variant="top" src={require("./images/meet.jpeg")} />
          <Card.Body className="text-center">
            <Card.Title>Meet Patolia</Card.Title>
           

          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }} className="me-2">
          <Card.Img style={{ height: '300px' }} variant="top" src={require("./images/aditya.jpeg")} />
          <Card.Body className="text-center">
            <Card.Title>Aditya Ninave</Card.Title>
            

          </Card.Body>
        </Card>

        <Card style={{ width: '15rem' }} className="me-2">
          <Card.Img style={{ height: '300px' }} variant="top" src={require("./images/vivek.jpeg")} />
          <Card.Body className="text-center">
            <Card.Title>Vivek Kadamr</Card.Title>
            

          </Card.Body>
        </Card>

      </Row>

    </div>
  );
}