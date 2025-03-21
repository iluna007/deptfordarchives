import { Routes, Route } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CustomNavbar from "./components/CustomNavbar"; // Actualiza la ruta según corresponda

import Home from "./pages/home";
import About from "./pages/about";
import FieldWorks from "./pages/fieldworks";
import FieldRecordings from "./pages/fieldrecordings";
import Resources from "./pages/Resources";

const App = () => {
	return (
		<div>
			<CustomNavbar artist='Nombre del artista' />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fieldrecordings' element={<FieldRecordings />} />
				<Route path='/fieldworks' element={<FieldWorks />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<ScrollToTopButton />
		</div>
	);
};

export default App;
