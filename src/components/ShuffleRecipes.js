import React, {useState, useEffect} from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import img1 from '../assets/images/1.jpg';
import {useNavigate} from 'react-router-dom';

function ShuffleRecipes() {
  // Données en dur pour les recettes
  const allRecipes = [
    {id: 1, titre: 'Recette 1', img: img1},
    {id: 2, titre: 'Recette 2', img: img1},
    {id: 3, titre: 'Recette 2', img: img1},
    {id: 4, titre: 'Recette 2', img: img1},
    {id: 5, titre: 'Recette 2', img: img1},
    {id: 6, titre: 'Recette 2', img: img1},
    {id: 7, titre: 'Recette 2', img: img1},
    {id: 8, titre: 'Recette 2', img: img1},
    {id: 9, titre: 'Recette 2', img: img1},
    {id: 10, titre: 'Recette 2', img: img1},
    {id: 11, titre: 'Recette 2', img: img1},
    {id: 12, titre: 'Recette 2', img: img1},
    {id: 13, titre: 'Recette 2', img: img1},
    // Ajoutez plus de recettes ici...
  ];
  // État pour les recettes aléatoires
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Fonction pour mélanger un tableau
  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Tant qu'il reste des éléments à mélanger...
    while (0 !== currentIndex) {
      // Choisissez un élément restant...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Et échangez-le avec l'élément actuel.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // Mélanger les recettes et prendre les 6 premières
  const refreshRecipes = () => {
    setRecipes(shuffle(allRecipes).slice(0, 6));
  };

  // Mélanger les recettes lorsque le composant est monté
  useEffect(refreshRecipes, []);

  return (
    <section className="best-receipe-area">
      <Container>
        <Row>
          <Col xs={12} style={{textAlign: 'center', marginTop: '20px'}}>
            <div className="section-heading">
              <h3>Recettes Aléatoires</h3>
              <Button
                variant="primary"
                onClick={refreshRecipes}
                style={{marginTop: '10px'}}>
                Actualiser
              </Button>
            </div>
          </Col>
        </Row>

        <Row style={{marginTop: '10px'}}>
          {recipes.map(recipe => (
            <Col
              xs={12}
              sm={8}
              md={6}
              lg={4}
              key={recipe.id}
              className="d-flex justify-content-center">
              <Card
                className="single-best-receipe-area mb-30"
                style={{width: '80%', marginBottom: '20px', cursor: 'pointer'}}
                onClick={() => navigate(`/recipe`)}>
                <Card.Img variant="top" src={recipe.img} />
                <Card.Body className="receipe-content">
                  <Card.Title>{recipe.id}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ShuffleRecipes;
