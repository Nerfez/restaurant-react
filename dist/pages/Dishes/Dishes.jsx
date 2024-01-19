import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useRecipes } from "../../utils/context/Recipes/RecipesContext";
import ListDishes from "./components/ListDishes";

const Dishes = () => {
  const { recipesList } = useRecipes();
  return (
    <>
      <Header></Header>
      <div style={{ marginTop: "20px" }}>
        <ListDishes dishes={recipesList} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dishes;
