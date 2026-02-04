import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const sections = ["home", "skills", "projects", "experience", "contact"];

const NavbarComp = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Navbar fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          Devesh Verma | MERN Backend Developer
        </Navbar.Brand>

        <Nav className="ms-auto">
          {sections.map((link) => (
            <Nav.Link
              key={link}
              href={`#${link}`}
              className={active === link ? "nav-active" : ""}
            >
              {link}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
