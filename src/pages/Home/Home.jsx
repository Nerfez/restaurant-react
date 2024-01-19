import { Button, Carousel, Container } from "react-bootstrap";
import { useRecipes } from "../../utils/context/Recipes/RecipesContext";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useCart } from "../../utils/context/Cart/CartContext";

function Home() {
  const { addToCart } = useCart();
  const { recipesList } = useRecipes();
  const [top5Recipes, setTop5Recipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledRecipes = shuffleArray([...recipesList]);
    const selectedRecipes = shuffledRecipes.slice(0, 5);
    setTop5Recipes(selectedRecipes);
  }, [recipesList]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleCommanderClick = () => {
    const selectedRecipe = recipesList[activeIndex];
    addToCart(selectedRecipe);
    navigate("/cart");
  };

  return (
    <>
      <Header></Header>
      {top5Recipes.length > 0 ? (
        <div>
          <div className="custom-carousel-container">
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
              {top5Recipes.map((recipe) => (
                <Carousel.Item key={recipe.id}>
                  <img
                    className="d-block w-100 custom-image"
                    src={recipe.image}
                    alt={`Slide ${recipe.id}`}
                  />
                  <Carousel.Caption>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.instructions[0]}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <Container className="d-flex justify-content-center mt-4">
            <Button variant="primary" size="lg" onClick={handleCommanderClick}>
              Commander maintenant
            </Button>
          </Container>
        </div>
      ) : (
        <h1>Aucune donnée retrouvée</h1>
      )}
      <Footer></Footer>
    </>
  );
}

export default Home;
