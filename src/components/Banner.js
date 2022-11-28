import { Container, Row, Col, Button } from "react-bootstrap";
import icon1 from "../assets/images/gmail.svg";
import icon2 from "../assets/images/linkedin.svg";
import jamesfunk from "../assets/images/jamesfunk.jpg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col>
                <div>
                  <h1>{`James Funk`}</h1>

                  <Col>
                    
                        <div>
                          <img src={jamesfunk} alt="James Funk" height="240" width="190"/>
                        </div>
                      
                  </Col>

                  <p>
                    I am an aspiring software developer who wants to bring
                    collaborative skills to a fast-paced and rapid changing
                    environment.
                    <br /><br /><br />
                  </p>
                  <p>Connect with me at:</p>
                  <p>
                    <a href="https://www.linkedin.com/in/james-funk-a62a92220"><img src={icon2} height="50" width="50" /></a>

                    <a id="myEmail" href="mailto:1313jfun@gmail.com"><img src={icon1} height="50" width="50" /></a>
                  </p>
                  <br /><br /><br /><br /><br /><br />  
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
