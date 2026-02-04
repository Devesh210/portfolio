import { Container, Card } from "react-bootstrap";

const projects = [
  {
    title: "Food Delivery System",
    description: "Backend system for order processing and live tracking",
    stack: "Node • MongoDB • Redis",
    architecture: "Client → API → Services → DB"
  },
  {
    title: "Doctor Appointment Platform",
    description: "Role-based booking and real-time consultation",
    stack: "Node • MongoDB • Socket.io",
    architecture: "Web → Auth → Booking → DB"
  },
  {
    title: "Admin Analytics Dashboard",
    description: "Search, pagination, and data-heavy dashboards",
    stack: "React • Node • MongoDB",
    architecture: "UI → API → Aggregations"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <Container>
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Card key={i} className="project-card simple">
              <Card.Body>
                <h5 className="project-title">{p.title}</h5>

                <p className="project-desc">{p.description}</p>

                <div className="project-stack">{p.stack}</div>

                <div className="project-arch">{p.architecture}</div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
