import { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import useScrollReveal from "../hooks/useScrollReveal";
import useMouseParallax from "../hooks/useMouseParallax";
import useTypewriter from "../hooks/useTypewriter";
import useStreamingLogs from "../hooks/useStreamingLogs";

const apiResponse = `{
  "status": 200,
  "auth": "ok",
  "userId": "u_9231"
}`;

const logs = [
  "[INFO] POST /auth/login",
  "[AUTH] Token verified",
  "[DB] User fetched (u_9231)",
  "[CACHE] HIT (redis)",
  "[SERVICE] Permissions loaded",
  "[RESP] 200 OK (118ms)",
  "[METRIC] ap-south-1",
];

const Hero = () => {
  const apiRef = useRef(null);
  const logRef = useRef(null);
  const [ref, visible] = useScrollReveal();
  useMouseParallax();
  useTypewriter(apiRef, apiResponse);
  useStreamingLogs(logRef, logs, 600);

  return (
    <section
      id="home"
      ref={ref}
      className={`hero-section reveal ${visible ? "reveal-visible" : ""}`}
    >
      <Container className="hero-content">
        <h1>
          Backend-Focused <span>MERN</span> Developer
        </h1>

        <p>
          I design scalable Node.js APIs, real-time systems,
          and production-ready backend architectures.
        </p>

        <div className="hero-actions">
          <Button variant="outline-info">View Projects</Button>
          <Button variant="outline-light">GitHub</Button>
        </div>

        <div className="api-flow">
          API → Auth → Services → DB
        </div>
      </Container>

      {/* Floating API Cards */}
       <div className="api-card api-card-2">
      <pre ref={logRef} className="stream-logs" />
    </div>

      <div className="api-float-layer">
         <div className="api-card api-card-1">
      <pre ref={apiRef} />
    </div>

        <div className="api-card api-card-3">
          <pre>
{`POST /orders
✓ validated
✓ persisted
✓ notified`}
          </pre>
        </div>

        <div className="api-card api-card-4">
          <pre>
{`latency: 118ms
cache: HIT
region: ap-south`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
