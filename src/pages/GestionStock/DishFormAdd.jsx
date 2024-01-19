import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useRecipes } from "../../utils/context/Recipes/RecipesContext";
import { useNavigate } from "react-router-dom";

const DishFormAdd = () => {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();
  const ingredientsList = [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste",
  ];
  const tagsList = ["Cookies", "Dessert", "Baking", "Asian"];
  const mealTypeList = [
    "Breakfast",
    "Beverage",
    "Lunch",
    "Dinner",
    "Snack",
    "Side Dish",
  ];

  const instructionsList = [
    "Couper les tomates",
    "Faire cuire pendant 30 minutes",
  ];

  const [dishData, setDishData] = useState({
    name: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    cuisine: "",
    caloriesPerServing: "",
    tags: [],
    rating: "",
    reviewCount: "",
    mealType: [],
    ingredients: [],
    image: "",
    instructions: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    const updateArrayProperty = (propertyName, arrayValue) => {
      setDishData((prevData) => ({
        ...prevData,
        [propertyName]: checked
          ? [...prevData[propertyName], arrayValue]
          : prevData[propertyName].filter((item) => item !== arrayValue),
      }));
    };

    const propertyMappings = {
      ingredients: "ingredients",
      mealType: "mealType",
      tags: "tags",
      instructions: "instructions",
    };

    if (propertyMappings[name]) {
      updateArrayProperty(propertyMappings[name], value);
    } else {
      setDishData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDataComplete = Object.values(dishData).every(
      (value) => value !== "" && value !== null && value !== undefined
    );

    if (isDataComplete) {
      addRecipe(dishData);
      navigate("/dishes-list");

      setDishData({
        name: "",
        prepTimeMinutes: "",
        cookTimeMinutes: "",
        servings: "",
        cuisine: "",
        caloriesPerServing: "",
        tags: [],
        rating: "",
        reviewCount: "",
        mealType: [],
        ingredients: [],
        image: "",
        instructions: [],
      });
    } else {
      alert(
        "Veuillez remplir toutes les données avant de soumettre le formulaire."
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="dishName">
            <Form.Label>Nom du plat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom du plat"
              name="name"
              value={dishData.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="dishPrepTimeMin">
            <Form.Label>Temps de préparation (min)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le temps de préparation"
              name="prepTimeMinutes"
              value={dishData.prepTimeMinutes}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="dishCookTimeMin">
            <Form.Label>Temps de cuisson (min)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le temps de cuisson"
              name="cookTimeMinutes"
              value={dishData.cookTimeMinutes}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="dishPortions">
            <Form.Label>Portions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nombre de portions"
              name="servings"
              value={dishData.servings}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="dishCuisine">
            <Form.Label>Cuisine</Form.Label>
            <Form.Control
              type="text"
              placeholder="Origine type"
              name="cuisine"
              value={dishData.cuisine}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="dishCaloriesPerServing">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Calorie par portion"
              name="caloriesPerServing"
              value={dishData.caloriesPerServing}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="dishTags">
            <Form.Label>Tags</Form.Label>
            <Row>
              {tagsList.map((tag) => (
                <Col key={tag} xs={6}>
                  <Form.Check
                    type="checkbox"
                    label={tag}
                    name="tags"
                    value={tag}
                    checked={dishData.tags.includes(tag)}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="dishReviews">
            <Form.Label>Evaluations</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre d'évaluations"
              name="reviewCount"
              value={dishData.reviewCount}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="dishRatings">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Notes"
              name="rating"
              value={dishData.rating}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="dishType">
            <Form.Label>Type de repas</Form.Label>
            <Row>
              {mealTypeList.map((mealType) => (
                <Col key={mealType} xs={6}>
                  <Form.Check
                    type="checkbox"
                    label={mealType}
                    name="mealType"
                    value={mealType}
                    checked={dishData.mealType.includes(mealType)}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="platIngredients">
            <Form.Label>Ingredients</Form.Label>
            <Row>
              {ingredientsList.map((ingredient) => (
                <Col key={ingredient} xs={6}>
                  <Form.Check
                    type="checkbox"
                    label={ingredient}
                    name="ingredients"
                    value={ingredient}
                    checked={dishData.ingredients.includes(ingredient)}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="dishImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="url de l'image"
              name="image"
              value={dishData.image}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="dishInstructions">
            <Form.Label>Instructions</Form.Label>
            <Row>
              {instructionsList.map((instruction) => (
                <Col key={instruction} xs={6}>
                  <Form.Check
                    type="checkbox"
                    label={instruction}
                    name="instructions"
                    value={instruction}
                    checked={dishData.instructions.includes(instruction)}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Button variant="primary" type="submit">
            Ajouter le plat
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DishFormAdd;
