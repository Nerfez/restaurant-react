import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute";
import Accueil from "./pages/Home/Home";
import Presentation from "./pages/Presentation/Presentation";
import Carte from "./pages/Dishes/Dishes";
import Panier from "./pages/Dishes/components/Cart";
import Localisation from "./pages/Localisation/Localisation";
import ListePlats from "./pages/GestionStock/DishesTable";
import AjouterPlatForm from "./pages/GestionStock/DishFormAdd";
import RecipeDetails from "./pages/GestionStock/RecipeDetails";
import { UserContextProvider } from "./utils/context/User/UserContext";
import { PanierProvider } from "./utils/context/Cart/CartContext";
import { RecipesProvider } from "./utils/context/Recipes/RecipesContext";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <RecipesProvider>
          <PanierProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Accueil />} />
              <Route path="/presentation" element={<Presentation />} />
              <Route path="/card" element={<Carte />} />
              <Route path="/cart" element={<Panier />} />
              <Route path="/localisation" element={<Localisation />} />
              <Route
                path="/dishes-list"
                element={
                  <PrivateRoute>
                    <ListePlats />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dishes-add"
                element={
                  <PrivateRoute>
                    <AjouterPlatForm />
                  </PrivateRoute>
                }
              />{" "}
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <RecipeDetails />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </PanierProvider>
        </RecipesProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
