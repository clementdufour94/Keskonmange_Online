import React, {useState, useEffect} from 'react';
import {
  Card,
  Form,
  Col,
  Row,
  Accordion,
  Container,
  Button,
} from 'react-bootstrap';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {X} from 'react-bootstrap-icons';
const AddRecipeComponent = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    category: '',
    subCategory: '',
    notes: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    titlesteps: '',
    steps: [],
    titlesubsteps: '',
    substeps: [],
    titleingredient: '',
    ingredients: [],
    titlesubingredient: '',
    subingredients: [],
  });
  const [step, setStep] = useState('');
  const [substep, setSubStep] = useState('');

  const [ingredient, setIngredient] = useState('');
  const [subingredient, setSubIngredient] = useState('');

  const [isNewCategory, setIsNewCategory] = useState(true);
  const [newCategory, setNewCategory] = useState('');

  const handleChange = e => {
    setRecipe({...recipe, [e.target.name]: e.target.value});
    setIsNewCategory(e.target.value === '');
  };

  const handleRemoveIngredients = index => {
    const newIngredients = [...recipe.ingredients];
    newIngredients.splice(index, 1);
    setRecipe({...recipe, ingredients: newIngredients});
  };
  const handleRemoveSubIngredients = index => {
    const newSubIngredients = [...recipe.subingredients];
    newSubIngredients.splice(index, 1);
    setRecipe({...recipe, subingredients: newSubIngredients});
  };

  const handleRemoveStep = index => {
    const newSteps = [...recipe.steps];
    newSteps.splice(index, 1);
    setRecipe({...recipe, steps: newSteps});
  };
  const handleRemoveSubStep = index => {
    const newSubSteps = [...recipe.substeps];
    newSubSteps.splice(index, 1);
    setRecipe({...recipe, substeps: newSubSteps});
  };
  const handleDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(recipe.steps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRecipe({...recipe, steps: items});
  };

  const handleDragEndSubStep = result => {
    if (!result.destination) return;
    const items = Array.from(recipe.substeps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setRecipe({...recipe, substeps: items});
  };

  const handleStepChange = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setRecipe({...recipe, steps: [...recipe.steps, step]});
      setStep('');
    } else {
      setStep(e.target.value);
    }
  };

  const handleSubStepChange = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setRecipe({...recipe, substeps: [...recipe.substeps, substep]});
      setSubStep('');
    } else {
      setSubStep(e.target.value);
    }
  };

  const handleIngredientChange = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setRecipe({...recipe, ingredients: [...recipe.ingredients, ingredient]});
      setIngredient('');
    } else {
      setIngredient(e.target.value);
    }
  };

  const handleSubIngredientChange = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setRecipe({
        ...recipe,
        subingredients: [...recipe.subingredients, subingredient],
      });
      setSubIngredient('');
    } else {
      setSubIngredient(e.target.value);
    }
  };

  const handleNewCategoryChange = e => {
    const newCategoryName = e.target.value;
    setNewCategory(newCategoryName);
    setRecipe({...recipe, category: newCategoryName});
  };

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingTitle"
                type="text"
                placeholder="Titre de la recette"
                name="title"
                value={recipe.title}
                onChange={handleChange}
              />
              <label htmlFor="floatingTitle">Titre de la recette</label>
            </Form.Floating>
            {/* Ajoutez ici d'autres champs de formulaire comme ci-dessus */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingNotes"
                type="text"
                placeholder="Note de la rédactrice"
                name="notes"
                value={recipe.notes}
                onChange={handleChange}
              />
              <label htmlFor="floatingNotes">Note de la rédactrice</label>
            </Form.Floating>
            {/* Ajoutez ici d'autres champs de formulaire comme ci-dessus */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingPrep"
                type="text"
                placeholder="Temps de préparation"
                name="prepTime"
                value={recipe.prepTime}
                onChange={handleChange}
              />
              <label htmlFor="floatingPrep">Temps de préparation</label>
            </Form.Floating>
            {/* Ajoutez ici d'autres champs de formulaire comme ci-dessus */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingHoven"
                type="text"
                placeholder="Temps de cuisson"
                name="cookTime"
                value={recipe.cookTime}
                onChange={handleChange}
              />
              <label htmlFor="floatingHoven">Temps de cuisson</label>
            </Form.Floating>
            {/* Ajoutez ici d'autres champs de formulaire comme ci-dessus */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingServing"
                type="text"
                placeholder="Nombre de personnes"
                name="servings"
                value={recipe.servings}
                onChange={handleChange}
              />
              <label htmlFor="floatingServing">Nombres de personnes</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Select
                id="floatingCategory"
                name="category"
                value={recipe.category}
                onChange={handleChange}>
                <option value="">Nouvelle Catégorie</option>
                <option value="cat1">Catégorie 1</option>
                <option value="cat2">Catégorie 2</option>
                {/* Ajoutez ici d'autres options de catégorie */}
              </Form.Select>
              <label htmlFor="floatingCategory">Catégorie</label>
            </Form.Floating>
            {isNewCategory && (
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingNewCategory"
                  name="newCategory"
                  type="text"
                  placeholder="Nom de la nouvelle catégorie"
                  value={newCategory}
                  onChange={handleNewCategoryChange}
                />
                <label htmlFor="floatingNewCategory">
                  Nom de la nouvelle catégorie
                </label>
              </Form.Floating>
            )}
            {/* Vos autres champs de formulaire ici */}
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingStep"
                type="text"
                placeholder="Ajouter une étape"
                value={step}
                onChange={handleStepChange}
                onKeyDown={handleStepChange}
                style={{height: 'auto'}}
              />
              <label htmlFor="floatingStep">Ajouter une étape</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingIngredient"
                type="text"
                placeholder="Ajouter un ingrédient"
                value={ingredient}
                onChange={handleIngredientChange}
                onKeyDown={handleIngredientChange}
              />
              <label htmlFor="floatingIngredient">Ajouter un ingrédient</label>
            </Form.Floating>

            <Accordion style={{textAlign: 'justify'}} defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  bsPrefix={{
                    background: '#fcfcfc',
                  }}>
                  Ajouter des sous étapes et des sous ingrédients{' '}
                </Accordion.Header>
                <Accordion.Body>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingTitleSteps"
                      type="text"
                      placeholder="Titre de l'étape"
                      name="titlesteps"
                      value={recipe.titlesteps}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingTitleSteps">Titre de l'étape</label>
                  </Form.Floating>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingTitleSubSteps"
                      type="text"
                      placeholder="Titre de la sous-étape"
                      name="titlesubsteps"
                      value={recipe.titlesubsteps}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingTitleSubSteps">
                      Titre de la sous-étape
                    </label>
                  </Form.Floating>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingSubStep"
                      type="text"
                      placeholder="Ajouter une sous-étape"
                      value={substep}
                      onChange={handleSubStepChange}
                      onKeyDown={handleSubStepChange}
                      style={{height: 'auto'}}
                    />
                    <label htmlFor="floatingSubStep">
                      Ajouter une sous-étape
                    </label>
                  </Form.Floating>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingTitleIngredients"
                      type="text"
                      placeholder="Titre des sous-ingrédients"
                      name="titleingredient"
                      value={recipe.titleingredient}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingTitleIngredients">
                      Titre des ingrédients
                    </label>
                  </Form.Floating>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingTitleSubIngredients"
                      type="text"
                      placeholder="Titre des sous-ingrédients"
                      name="titlesubingredient"
                      value={recipe.titlesubingredient}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingTitleSubIngredients">
                      Titre des sous-ingrédients
                    </label>
                  </Form.Floating>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingSubIngredient"
                      type="text"
                      placeholder="Ajouter un ingrédient"
                      value={subingredient}
                      onChange={handleSubIngredientChange}
                      onKeyDown={handleSubIngredientChange}
                    />
                    <label htmlFor="floatingSubIngredient">
                      Ajouter un sous-ingrédient
                    </label>
                  </Form.Floating>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <div className="">
                    {recipe.notes && (
                      <Accordion
                        style={{textAlign: 'justify'}}
                        defaultActiveKey="1">
                        <Accordion.Item eventKey="1">
                          <Accordion.Header
                            bsPrefix={{
                              background: '#fcfcfc',
                            }}>
                            Les notes de la rédactrice
                          </Accordion.Header>
                          <Accordion.Body>{recipe.notes}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )}

                    <div
                      className="receipe-duration"
                      style={{
                        borderLeft: '3px solid green',
                        paddingLeft: '10px',
                      }}>
                      <div className="receipe-duration">
                        <h2>{recipe.title}</h2>
                      </div>
                      <div className="receipe-duration">
                        {recipe.prepTime && (
                          <h6>Préparation: {recipe.prepTime}</h6>
                        )}
                        {recipe.cookTime && <h6>Cuisson: {recipe.cookTime}</h6>}
                        {recipe.servings && (
                          <h6>Personnes: {recipe.servings}</h6>
                        )}
                        {recipe.category && (
                          <h6>Catégorie: {recipe.category}</h6>
                        )}
                      </div>
                    </div>

                    {(recipe.prepTime ||
                      recipe.cookTime ||
                      recipe.servings ||
                      recipe.title ||
                      recipe.notes ||
                      recipe.category) && (
                      <div className="ingredients">
                        <Form.Check
                          type="checkbox"
                          id="customCheck"
                          label="Déjà Fait?"
                          defaultChecked
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={8}>
                  <h6>{recipe.titlesteps}</h6>

                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="recipe.steps">
                      {provided => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}>
                          {recipe.steps.map((step, index) => (
                            <Draggable
                              key={step.id}
                              draggableId={`step-${index}`}
                              index={index}>
                              {provided => (
                                <div
                                  className="single-preparation-step d-flex"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}>
                                  <X
                                    onClick={() => handleRemoveStep(index)}
                                    color="red"
                                    size={35}
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                  />
                                  <h4>{index + 1}.</h4>
                                  <p style={{textAlign: 'justify'}}>{step}</p>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  <h6>{recipe.titlesubsteps}</h6>
                  <DragDropContext onDragEnd={handleDragEndSubStep}>
                    <Droppable droppableId="recipe.substeps">
                      {provided => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}>
                          {recipe.substeps.map((substep, index) => (
                            <Draggable
                              key={substep.id}
                              draggableId={`substep-${index}`}
                              index={index}>
                              {provided => (
                                <div
                                  className="single-preparation-step d-flex"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}>
                                  <X
                                    onClick={() => handleRemoveSubStep(index)}
                                    color="red"
                                    size={35}
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                  />
                                  <h4>{index + 1}.</h4>
                                  <p style={{textAlign: 'justify'}}>
                                    {substep}
                                  </p>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </Col>

                <Col xs={12} lg={4}>
                  <div className="ingredients">
                    {recipe.ingredients[0] && <h4>Ingredients</h4>}
                    <h6>{recipe.titleingredient}</h6>
                    {recipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="ingredient-item">
                        <X
                          onClick={() => handleRemoveIngredients(index)}
                          color="red"
                          size={35}
                          style={{
                            cursor: 'pointer',
                          }}
                        />
                        <span>{ingredient}</span>
                      </div>
                    ))}
                  </div>

                  <div className="ingredients">
                    <h6>{recipe.titlesubingredient}</h6>
                    {recipe.subingredients.map((subingredient, index) => (
                      <div key={index} className="ingredient-item">
                        <X
                          onClick={() => handleRemoveSubIngredients(index)}
                          color="red"
                          size={35}
                          style={{
                            cursor: 'pointer',
                          }}
                        />
                        <span>{subingredient}</span>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
            {/* Ajoutez ici d'autres éléments de visualisation de la recette */}
          </Col>
        </Row>
      </Card.Body>
      <Card>
        <Button variant="success">Ajouter la recette</Button>
      </Card>
    </Card>
  );
};

export default AddRecipeComponent;
