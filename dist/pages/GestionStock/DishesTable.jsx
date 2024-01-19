import { Table } from "react-bootstrap";
import { useRecipes } from "../../utils/context/Recipes/RecipesContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DishesTable = () => {
  const [sortedDishes, setSortedDishes] = useState([]);
  const [sortOrder, setSortOrder] = useState("🔺");
  const { recipesList } = useRecipes();
  const navigate = useNavigate();

  const sortDishesByName = () => {
    const sorted = [...recipesList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "🔺"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setSortedDishes(sorted);
    setSortOrder(sortOrder === "🔺" ? "🔻" : "🔺");
  };

  const navigateToEditPage = (dishId) => {
    navigate(`/edit/${dishId}`);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={sortDishesByName} style={{ cursor: "pointer" }}>
            Nom du plat {sortOrder === "🔺" ? "🔺" : "🔻"}
          </th>
          <th>Pays d origine</th>
          <th>Catégorie</th>
        </tr>
      </thead>
      <tbody>
        {(sortedDishes.length > 0 ? sortedDishes : recipesList).map((dish) => (
          <tr key={dish.id}>
            <td>
              <Link
                to={`/edit/${dish.id}`}
                onClick={() => navigateToEditPage(dish.id)}
              >
                {dish.name}
              </Link>
            </td>
            <td>{dish.cuisine}</td>
            <td>{dish.mealType.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DishesTable;
