import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ListGroup } from "react-bootstrap";

class About extends Component {

  render () {
    /* TODO: render information about the developers */
    return (
      <>
        <Header />
        <ListGroup>
          <ListGroup.Item>Main Developer : Zaid Alshibi</ListGroup.Item>
          <ListGroup.Item>
            Contact :
            <a href="mailto:zaidealshibi@gmail.com">
              Email me
              </a> | 
              <a href="https://www.linkedin.com/in/zaidealshibi/">
                LinkedIn
                </a> |
                <a href="https://github.com/zaidalshibi">
                  GitHub
                  </a>
            </ListGroup.Item>
          <ListGroup.Item>Regards Code Fellow</ListGroup.Item>
        </ListGroup>
        <Footer />
      </>
    );
  }
};

export default About;
