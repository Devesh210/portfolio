import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="section text-center">
      <Container>
        <h2 className="section-title">Let’s Build Something Solid</h2>
        <p>Open to backend roles and freelance projects.</p>

        <div className="contact-actions">
          <Button variant="outline-light">Email</Button>
          <Button variant="outline-light">GitHub</Button>
          <Button variant="outline-light">LinkedIn</Button>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
