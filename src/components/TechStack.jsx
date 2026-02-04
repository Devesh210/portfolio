import { Container, Row, Col, Card } from "react-bootstrap";

const stack = [
  "Node.js", "Express", "MongoDB", "Redis",
  "JWT", "Socket.IO", "Docker", "AWS"
];

const TechStack = () => {
  return (
    <section id="skills" className="section-dark">
      <Container>
        <h2 className="section-title">Tech Stack</h2>

        <Row>
          {stack.map((tech) => (
            <Col md={3} sm={6} xs={6} key={tech} className="mb-4">
              <Card className="tech-card text-center">
                <Card.Body>{tech}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;
