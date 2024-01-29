import React from 'react';
import {Card, Form, Button} from 'react-bootstrap';

const LoginComponent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{height: '50vh'}}>
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title className="text-center">Connexion</Card.Title>
          <Form>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInput"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Adresse e-mail</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPassword"
                type="password"
                placeholder="Mot de passe"
              />
              <label htmlFor="floatingPassword">Mot de passe</label>
            </Form.Floating>
            <Button variant="primary" type="submit" className="mt-3 w-100">
              Se connecter
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default LoginComponent;
