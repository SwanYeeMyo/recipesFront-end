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
import Recipes from "./components/pages/user/Recipes";
import Account from "./components/pages/user/Account";
import Users from "./components/pages/Users";
import EditUser from "./components/pages/EditUser";
import DishTypes from "./components/pages/DishTypes/DishTypes";
import CreateDishType from "./components/pages/DishTypes/CreateDishType";
import EditDishType from "./components/pages/DishTypes/EditDishType";
import Details from "./components/pages/Details";
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
		"/account",
		"/account/recipes",
		"/account/recipes/create",
		"/account/recipes/edit",
		"/account/profile",
		"/users",
		"/dishtypes",
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
						<Route path="/account" element={<Account />} />
						<Route path="/users" element={<Users />} />
						<Route path="/users/:id" element={<EditUser />} />
						<Route path="/dishtypes" element={<DishTypes />} />
						<Route path="/dishtypes/create" element={<CreateDishType />} />
						<Route path="/dishtypes/:id" element={<EditDishType />} />
					</>
				)}
				{localStorage.getItem("type") !== "free" && (
					<Route path="/account/recipes" element={<Recipes />} />
				)}
				<Route path="/account/profile" element={<Account />}></Route>
				<Route path="/recipes/:id" element={<Details />}></Route>
			</Routes>
			{!isExcludedRoute && <Footer />}
		</>
	);
}

export default App;
