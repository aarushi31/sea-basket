import React,{useState} from 'react'
import BlogElement from './BlogElement'
import { Container,Modal,Button } from 'react-bootstrap'
import './Blog.css'

function Blog() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Container className="blog-cont">
            <h2 style={{fontSize:"30px",fontWeight:"600",color:'#0E79BD'}}>HAVE A READ</h2>
            {/* <BlogElement title="The right quality"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            />
            <BlogElement title="The right time"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            />
            <BlogElement title="The basis of a balanced diet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            
            /> */}

            <Container className="blog">
            <span className="blog-title">The right quality</span>
            <p className="blog-content">We shall supply high quality seafood from sustainable fisheries/fishermen. It is important to secure
            sustainable seafood stock for the generations to come. We work only with suppliers that have the
            same view on this important factor as our self.</p>
            <span className="read-more" onClick={handleShow}>READ MORE <svg width="13.43" height="23.46" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{marginTop:"0px"}}
            >
            <path d="M2.62435 7.88062C2.8081 8.06437 3.10435 8.06437 3.2881 7.88062L6.40435 4.76437C6.5506 4.61812 6.5506 4.38187 6.40435 4.23562L3.2881 1.11937C3.10435 0.935621 2.8081 0.935621 2.62435 1.11937C2.4406 1.30312 2.4406 1.59937 2.62435 1.78312L5.33935 4.50187L2.6206 7.22062C2.4406 7.40062 2.4406 7.70062 2.62435 7.88062Z" fill="#0E79BD" stroke="#0E79BD"/>
            </svg></span>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The right quality</Modal.Title>
        </Modal.Header>
        <Modal.Body><b>High Quality &amp; Sustainability</b><br/>
We shall supply high quality seafood from sustainable fisheries/fishermen. It is important to secure
sustainable seafood stock for the generations to come. We work only with suppliers that have the
same view on this important factor as our self. Being able to harvest from sustainable resources we
believe these products deserve to be treated with high quality and respect.<br/>
<b>Quality &amp; Safety</b><br/>
To deliver the best quality of products we adhere to every legal food safety requirement throughout all
our business processes, and use a fully documented Hazard Analysis &amp; Critical Control Points
(HACCP) system.
We have an in-house team laboratory and QC Team to ensure the highest quality standards are met
by performing various tests on our products to ensure no antibiotics/contaminants are found.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
        </Container>
    )
}

export default Blog
