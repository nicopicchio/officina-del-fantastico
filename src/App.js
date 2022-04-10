import { Routes, Route } from 'react-router-dom';
import img1 from '../src/images/image-1.jpg';
import img2 from '../src/images/image-2.jpg';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='main-page-container'>
			<Header />
			<Routes>
				<Route path='/' element={<Main/>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
