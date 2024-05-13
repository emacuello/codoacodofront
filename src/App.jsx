import Navbar from './components/navbar/Navbar';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Footer from './components/footer/Footer';
import LandingPage from './views/Landin/LandingPage';
function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<LandingPage></LandingPage>}></Route>
				<Route path="/register" element={<Register></Register>}></Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="*" element={<ErrorPage></ErrorPage>}></Route>
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
