import { Container } from "react-bootstrap";

const Experience = () => {
  return (
    <section id="experience" className="section-dark">
      <Container>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h5>Backend Developer</h5>
            <span>Company Name • 2023 — Present</span>
            <p>
              Built REST APIs, optimized DB queries,
              and implemented authentication systems.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
