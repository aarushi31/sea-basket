import React,{useState} from 'react'
import BlogElement from './BlogElement'
import { Container,Modal,Button } from 'react-bootstrap'
import './Blog.css'

function Blog() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
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
      
      <Container className="blog">
            <span className="blog-title">The right time</span>
            <p className="blog-content">Let your basket be delivered when and where it suits
you. In Bengaluru and its surroundings, we deliver in two hours. Choose delivery to your home or
office. We deliver orders to most places in Bengaluru either to your chosen address or to Sea Basket
POD’s  Point of delivery where you can conveniently collect in person.</p>
            <span className="read-more" onClick={handleShow2}>READ MORE <svg width="13.43" height="23.46" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{marginTop:"0px"}}
            >
            <path d="M2.62435 7.88062C2.8081 8.06437 3.10435 8.06437 3.2881 7.88062L6.40435 4.76437C6.5506 4.61812 6.5506 4.38187 6.40435 4.23562L3.2881 1.11937C3.10435 0.935621 2.8081 0.935621 2.62435 1.11937C2.4406 1.30312 2.4406 1.59937 2.62435 1.78312L5.33935 4.50187L2.6206 7.22062C2.4406 7.40062 2.4406 7.70062 2.62435 7.88062Z" fill="#0E79BD" stroke="#0E79BD"/>
            </svg></span>
        </Container>
        <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>The right time</Modal.Title>
        </Modal.Header>
        <Modal.Body><b>FAST AND ACCURATE DELIVERY</b><br/>
        <b>1. FILL YOUR BASKET a basket from our selection or create your own.</b> Our fish are
mostly vacuum-packed portion by portion. This simplifies your planning.<br/><br/>
<b>2. SELECT A DATE AND TIME</b> Let your basket be delivered when and where it suits
you. In Bengaluru and its surroundings, we deliver in two hours. Choose delivery to your home or
office. We deliver orders to most places in Bengaluru either to your chosen address or to Sea Basket
POD’s  Point of delivery where you can conveniently collect in person.<br/><br/>
<b>3.CHOOSE THE METHOD OF DELIVERY</b>Sea Basket delivers to your chosen address
or the closest POD.
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      <Container className="blog">
            <span className="blog-title">Health Benefits of Fish</span>
            <p className="blog-content">Fish is a low-fat high-quality protein. Fish is filled with omega-3 fatty acids and vitamins such as D and
B2 (riboflavin). Fish is rich in calcium and phosphorus and a great source of minerals, such as iron,
zinc, iodine, magnesium, and potassium. The American Heart Association recommends eating fish at
least two times per week as part of a healthy diet.</p>
            <span className="read-more" onClick={handleShow3}>READ MORE <svg width="13.43" height="23.46" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{marginTop:"0px"}}
            >
            <path d="M2.62435 7.88062C2.8081 8.06437 3.10435 8.06437 3.2881 7.88062L6.40435 4.76437C6.5506 4.61812 6.5506 4.38187 6.40435 4.23562L3.2881 1.11937C3.10435 0.935621 2.8081 0.935621 2.62435 1.11937C2.4406 1.30312 2.4406 1.59937 2.62435 1.78312L5.33935 4.50187L2.6206 7.22062C2.4406 7.40062 2.4406 7.70062 2.62435 7.88062Z" fill="#0E79BD" stroke="#0E79BD"/>
            </svg></span>
        </Container>
        <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Health Benefits of Fish</Modal.Title>
        </Modal.Header>
        <Modal.Body><b>Healthy Diet</b><br/><br/>
Fish is a low-fat high-quality protein. Fish is filled with omega-3 fatty acids and vitamins such as D and
B2 (riboflavin). Fish is rich in calcium and phosphorus and a great source of minerals, such as iron,
zinc, iodine, magnesium, and potassium. The American Heart Association recommends eating fish at
least two times per week as part of a healthy diet. Fish is packed with protein, vitamins, and nutrients
that can lower blood pressure and help reduce the risk of a heart attack or stroke.<br/><br/>

<b>Healthy Heart and Brain</b><br/><br/>
Eating fish is an important source of omega-3 fatty acids. These essential nutrients keep our heart
and brain healthy. Two omega-3 fatty acids found in fish are EPA (eicosapentaenoic acid) and DHA
(docosahexaenoic acid). Our bodies don&#39;t produce omega-3 fatty acids so we must get them through
the food we eat. Omega-3 fatty acids are found in every kind of fish, but are especially high in fatty
fish. Some good choices are salmon, trout, sardines, herring, mackerel, light tuna, and oysters.
Omega-3 Fatty Acids:
<ul>
    <li>Help maintain a healthy heart by lowering blood pressure and reducing the risk of sudden death, heart
attack, abnormal heart rhythms, and strokes.</li>
<li>Aid healthy brain function and infant development of vision and nerves during pregnancy.</li>
<li>May decrease the risk of depression, ADHD, Alzheimer’s disease, dementia, and diabetes.</li>
<li>May prevent inflammation and reduce the risk of arthritis.</li>
</ul>
 </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
        </Container>
    )
}

export default Blog
