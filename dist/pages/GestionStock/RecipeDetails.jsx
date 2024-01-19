import { useEffect, useState } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../../utils/context/Recipes/RecipesContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editedRecipe, setEditedRecipe] = useState({
    id: "",
    name: "",
    ingredients: [],
    instructions: [],
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: "",
    tags: [],
    userId: "",
    image: "",
    rating: "",
    reviewCount: "",
    mealType: [],
  });
  const { updateRecipe, deleteRecipe } = useRecipes();

  const handleDelete = (platId) => {
    deleteRecipe(platId);
    navigate("/dishes-list");
  };

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Plat non trouvé");
        }
        const data = await response.json();
        setRecipe(data);
        setEditedRecipe(data);
      } catch (error) {
        console.error(
          "Une erreur est survenue en essayant de récupérer le plat :",
          error.message
        );
      }
    };

    fetchRecipeDetails();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedRecipe(recipe);
  };

  const handleSaveEdit = () => {
    updateRecipe(editedRecipe);

    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeIngredient = (index, value) => {
    setEditedRecipe((prevData) => {
      const updatedIngredients = [...prevData.ingredients];
      updatedIngredients[index] = value;
      return {
        ...prevData,
        ingredients: updatedIngredients,
      };
    });
  };

  const handleChangeInstruction = (index, value) => {
    setEditedRecipe((prevData) => {
      const updatedInstructions = [...prevData.instructions];
      updatedInstructions[index] = value;
      return {
        ...prevData,
        instructions: updatedInstructions,
      };
    });
  };

  const handleChangeMealType = (index, value) => {
    setEditedRecipe((prevData) => {
      const updatedMealTypes = [...prevData.mealType];
      updatedMealTypes[index] = value;
      return {
        ...prevData,
        mealType: updatedMealTypes,
      };
    });
  };

  const handleChangeTags = (index, value) => {
    setEditedRecipe((prevData) => {
      const updatedTags = [...prevData.tags];
      updatedTags[index] = value;
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  if (!recipe) {
    return <div>Chargement...</div>;
  }

  return (
    <Row className="justify-content-md-center mt-4 mb-5">
      <Col md={8}>
        <Card>
          <Card.Img
            variant="top"
            src={isEditing ? editedRecipe.image : recipe.image}
            alt={isEditing ? editedRecipe.name : recipe.name}
            style={{ width: "100%", height: "auto" }}
          />
          {isEditing ? (
            <Form.Control
              type="text"
              value={editedRecipe.image}
              onChange={(e) => handleChange(e.target.value)}
            />
          ) : (
            <>{""}</>
          )}
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
            <Card.Text>
              <strong>Ingredients:</strong>
              <ul className="list-unstyled">
                {editedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        value={ingredient}
                        onChange={(e) =>
                          handleChangeIngredient(index, e.target.value)
                        }
                      />
                    ) : (
                      ingredient
                    )}
                  </li>
                ))}
              </ul>
            </Card.Text>
            <Card.Text>
              <strong>Instructions:</strong>
              <ul>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    {isEditing ? (
                      <Form.Control
                        type="text"
                        value={instruction}
                        onChange={(e) =>
                          handleChangeInstruction(index, e.target.value)
                        }
                      />
                    ) : (
                      instruction
                    )}
                  </li>
                ))}
              </ul>
            </Card.Text>
            <Row>
              <Col>
                <Card.Text>
                  <strong>Prep Time:</strong>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.prepTimeMinutes}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.prepTimeMinutes} minutes</>
                  )}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <strong>Cook Time:</strong>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.cookTimeMinutes}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.cookTimeMinutes} minutes</>
                  )}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <strong>Servings:</strong>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.servings}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.servings} minutes</>
                  )}
                </Card.Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Text>
                  <strong>Difficulty:</strong>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.difficulty}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.difficulty} minutes</>
                  )}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <strong>Cuisine:</strong>{" "}
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.cuisine}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.cuisine} minutes</>
                  )}
                </Card.Text>
              </Col>
            </Row>
            <Card.Text>
              <strong>Calories per Serving:</strong>{" "}
              {isEditing ? (
                <Form.Control
                  type="text"
                  value={editedRecipe.caloriesPerServing}
                  onChange={(e) => handleChange(e.target.value)}
                />
              ) : (
                <>{recipe.caloriesPerServing} minutes</>
              )}
            </Card.Text>
            {isEditing ? (
              editedRecipe.tags.map((tag, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  placeholder={`Tag ${index + 1}`}
                  value={tag}
                  onChange={(e) => handleChangeTags(index, e.target.value)}
                />
              ))
            ) : (
              <Card.Text>
                <strong>Tags:</strong> {recipe.tags.join(", ")}
              </Card.Text>
            )}
            <Row>
              <Col>
                <Card.Text>
                  <strong>Rating:</strong>{" "}
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.rating}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.rating} minutes</>
                  )}
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>
                  <strong>Review Count:</strong>
                  {isEditing ? (
                    <Form.Control
                      type="text"
                      value={editedRecipe.reviewCount}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  ) : (
                    <>{recipe.reviewCount} minutes</>
                  )}
                </Card.Text>
              </Col>
            </Row>
            {isEditing ? (
              editedRecipe.mealType.map((mealType, index) => (
                <Form.Control
                  key={index}
                  type="text"
                  placeholder={`Meal Type ${index + 1}`}
                  value={mealType}
                  onChange={(e) => handleChangeMealType(index, e.target.value)}
                />
              ))
            ) : (
              <Card.Text>
                <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
              </Card.Text>
            )}
            {isEditing ? (
              <Row>
                <Col>
                  <Button variant="success" onClick={handleSaveEdit}>
                    Sauvegarder
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={handleCancelEdit}>
                    Annuler
                  </Button>
                </Col>
              </Row>
            ) : (
              <>
                <Button variant="primary" onClick={handleEditClick}>
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(recipe.id)}
                >
                  Supprimer
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default RecipeDetails;
