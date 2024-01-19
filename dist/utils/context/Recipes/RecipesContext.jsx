import { createContext, useContext, useState } from "react";
import { useFetchData } from "./hooksRecipes";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const { data: recipesList, fetchData } = useFetchData(
    "http://localhost:3000/recipes"
  );
  const [sortList, setSortedRecipes] = useState(null);

  const setRecipes = () => {
    fetchData();
  };

  const sortRecipes = () => {
    const newList = [...recipesList];
    newList.sort((a, b) =>
      sortList === "asc"
        ? a.author.localeCompare(b.author)
        : b.author.localeCompare(a.author)
    );
    setSortedRecipes(sortList === "asc" ? "desc" : "asc");
    fetchData();
  };

  const addRecipe = async (newRecipe) => {
    newRecipe.id = recipesList[recipesList.length - 1].id + 1;
    const response = await fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (response.ok) {
      fetchData();
      console.log("adding OK");
    }
  };

  const deleteRecipe = async (recipeId) => {
    const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchData();
      console.log("delete OK");
    }
  };

  const updateRecipe = async (updatedRecipe) => {
    const response = await fetch(
      `http://localhost:3000/recipes/${updatedRecipe.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      }
    );

    if (response.ok) {
      fetchData();
      console.log("UPDATE OK");
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        recipesList,
        setRecipes,
        deleteRecipe,
        addRecipe,
        updateRecipe,
        sortRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (!context) {
    throw new Error("useRecipes n'est pas utilisé dans son provider");
  }
  return context;
};
