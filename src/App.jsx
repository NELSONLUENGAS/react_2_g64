import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Productos } from './views/Productos';
import { ProductDetail } from './views/ProductDetail';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Productos />}
					/>
					<Route
						path="/producto/:product_id"
						element={<ProductDetail />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
