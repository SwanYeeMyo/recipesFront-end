import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Aboutus } from "./components/pages/Aboutus";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import NotFound from "./components/404/NotFound";
import SignUp from "./components/pages/SignUp";
import Navbar from "./components/layouts/Navbar";
import Recipe from "./components/pages/Recipe";
import Footer from "./components/layouts/Footer";
import SideBar from "./components/pages/SideBar";
import Recipes from "./components/pages/recipes/Recipes";
import Account from "./components/pages/user/Account";
import Users from "./components/pages/admin/users/Users";
import EditUser from "./components/pages/admin/users/EditUser";
import DishTypes from "./components/pages/admin/DishTypes/DishTypes";
import CreateDishType from "./components/pages/admin/DishTypes/CreateDishType";
import EditDishType from "./components/pages/admin/DishTypes/EditDishType";
import Details from "./components/pages/Details";
import RecipeSearch from "./components/pages/RecipeSearch";
import UserRecipe from "./components/pages/recipes/UserRecipe";
import AdminRecipes from "./components/pages/admin/recipes/AdminRecipes";
import CreateUser from "./components/pages/admin/users/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  // Array of routes where Navbar should not be shown
  const excludedRoutes = [
    "/dashboard",
    "/account",
    "/account/recipes",
    "/account/recipes/create",
    "/account/recipes/edit",
    "/account/profile",
    "/users",
    "/dishtypes",
    "/dishtypes/:id",
  ];

  // Check if the current route is one of the excluded routes
  const isExcludedRoute = excludedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {/* Render Navbar only if the route is not excluded */}
      {!isExcludedRoute && <Navbar />}
      {isExcludedRoute && <SideBar />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        {!localStorage.getItem("token") && (
          <Route path="/signup" element={<SignUp />} />
        )}
        {!localStorage.getItem("token") && (
          <Route path="/login" element={<Login />} />
        )}

        {localStorage.getItem("token") && (
          <>
            <Route path="/dashboard" element={<Account />} />

            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/users/create" element={<CreateUser />} />
            <Route path="/dashboard/users/:id" element={<EditUser />} />

            <Route path="/dashboard/dishtypes" element={<DishTypes />} />
            <Route path="/dashboard/dishtypes/create" element={<CreateDishType />} />
            <Route path="/dashboard/dishtypes/:id" element={<EditDishType />} />


            <Route path="/dashboard/recipes" element={<AdminRecipes />} />
            <Route path="/dashboard/recipes/create" element={<Recipes />} />
            <Route path="/dashboard/recipes/:id/update" element={<Recipes />} />

            <Route path="/account" element={<Account />} />
            <Route path="/account/recipes" element={<UserRecipe />} />
          </>
        )}
        {localStorage.getItem("type") !== "free" && (
          <Route path="/account/recipes/create" element={<Recipes />} />
        )}
        <Route path="/account/profile" element={<Account />}></Route>
        <Route path="/recipes/:id" element={<Details />}></Route>
        <Route
          path="/recipes/search/:recipe"
          element={<RecipeSearch />}
        ></Route>
      </Routes>
      {!isExcludedRoute && <Footer />}
    </>
  );
}

export default App;
