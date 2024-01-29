import React, {useState} from 'react';
import {Card, Container, Row, Col, Pagination} from 'react-bootstrap';
import img1 from '../assets/images/1.jpg';
import {useNavigate} from 'react-router-dom';

const HomeComponent = () => {
  // Données en dur pour les recettes
  const recipes = [
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
  const navigate = useNavigate();

  // État pour la page courante
  const [currentPage, setCurrentPage] = useState(1);

  // Nombre de recettes par page
  const recipesPerPage = 6;

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // Obtenir les recettes pour la page courante
  const currentRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage,
  );

  // Fonction pour gérer le changement de page
  const onPageChange = page => {
    setCurrentPage(page);
  };
  return (
    <>
      <section className="best-receipe-area">
        <Container>
          <Row>
            <Col xs={12} style={{textAlign: 'center', marginTop: '20px'}}>
              {' '}
              {/* Changez ici */}
              <div className="section-heading">
                <h2>Les dernières recettes</h2>
              </div>
            </Col>
          </Row>

          <Row>
            {currentRecipes.map(recipe => (
              <Col
                xs={12}
                sm={8}
                md={6}
                lg={4}
                key={recipe.id}
                className="d-flex justify-content-center">
                <Card
                  className="single-best-receipe-area mb-30"
                  style={{
                    width: '80%',
                    marginBottom: '20px',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`/recipe`)}>
                  <Card.Img variant="top" src={recipe.img} />
                  <Card.Body className="receipe-content">
                    <Card.Title>{recipe.titre}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Pagination>
            {currentPage > 1 && (
              <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} />
            )}
            {currentPage < totalPages && (
              <Pagination.Next onClick={() => onPageChange(currentPage + 1)} />
            )}
          </Pagination>
        </Container>
      </section>
    </>
  );
};
export default HomeComponent;
