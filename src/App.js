import { Routes, Route } from 'react-router-dom';
import mainLogo from '../src/images/main-logo.png';
import img1 from '../src/images/image-1.jpg';
import img2 from '../src/images/image-2.jpg';

function App() {
	return (
		<div className='main-page-container'>
			<header>
				<div className='header-left'>
					<img src={mainLogo} alt='main logo' width='300px' />
				</div>
				<div className='header-right'>
					<nav>
						<ul className='navigation'>
							<li className='nav-links'>Project</li>
							<li className='nav-links'>Tours</li>
							<li className='nav-links'>About</li>
							<li className='nav-links'>Partner</li>
							<li className='nav-links'>Contact</li>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<section className='main-section-links'>
					<h2>CALENDARIO</h2>
					<h2>PIANIFICA TOUR</h2>
				</section>
			</main>
			<footer>
				<section className='footer-section-left'>
					<br />
					<h3>OFFICINA DEL FANTASTICO</h3>
					<br />
					<h3>+39 331 3308032</h3>
					<h4>gobbo@inter.merda</h4>
					<h4>P.IVA evasore</h4>
					<br />
				</section>
				<section className='footer-section-social'></section>
				<section className='footer-section-right'>
					<img src={mainLogo} alt='company logo' width='120px' />
				</section>
			</footer>
		</div>
	);
}

export default App;
