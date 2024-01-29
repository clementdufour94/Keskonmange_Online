import React, {useState} from 'react';
import {
  Accordion,
  Container,
  Row,
  Col,
  Form,
  Button,
  Collapse,
} from 'react-bootstrap';
import backgroundImage from '../img/bg-img/breadcumb3.jpg';
function RecipePost() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: '250px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '90%',
          margin: 'auto',
        }}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="breadcumb-text text-center">
                <h2 style={{color: 'white'}}>Recipe</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="receipe-post-area section-padding-80">
        <div className="receipe-content-area">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className="receipe-headline my-5">
                  <div
                    className="receipe-duration"
                    style={{
                      paddingLeft: '10px',
                    }}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="1">
                        <Accordion.Header bsPrefix={{background: '#fcfcfc'}}>
                          Les notes de la rédactrice
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Minus velit reiciendis nesciunt ea odio et
                          laboriosam optio voluptatem fuga, quia sunt vel qui
                          quaerat numquam perferendis, esse vero tempore
                          incidunt!
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <div
                    className="receipe-duration"
                    style={{
                      borderLeft: '3px solid green',
                      paddingLeft: '10px',
                    }}>
                    <div className="receipe-duration">
                      <h2>Vegetarian cheese salad</h2>
                    </div>
                    <div className="receipe-duration">
                      <h6>Préparation: 15 mins</h6>
                      <h6>Cuisson: 30 mins</h6>
                      <h6>Personnes: 4</h6>
                      <h6>Catégorie: 4</h6>
                    </div>
                  </div>

                  <div className="ingredients">
                    <Form.Check
                      type="checkbox"
                      id="customCheck"
                      label="Déjà Fait?"
                      defaultChecked
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={8}>
                <div className="single-preparation-step d-flex">
                  <h4>01.</h4>
                  <p style={{'text-align': 'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras at tortor enim. Phasellus posuere vestibulum ipsum,
                    eget lobortis purus. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.
                  </p>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  <Form.Check
                    type="checkbox"
                    id="customCheck1"
                    label="4g beuure"
                    Valid
                  />
                  <Form.Check
                    type="checkbox"
                    id="customCheck2"
                    label="5 oeufs"
                  />

                  <Form.Check
                    type="checkbox"
                    id="customCheck3"
                    label="1L de lait"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default RecipePost;
