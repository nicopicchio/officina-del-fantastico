import { Routes, Route } from 'react-router-dom';
import mainLogo from '../src/images/main-logo.png';

function App() {
	return (
		<div className='main-page-container'>
			<header>
				<div className='header-left'>
          <img src={mainLogo} alt="main logo" width="300px" />
        </div>
				<div className='header-right'>
					<nav>
						<ul className='navigation'>
							<li>Progetto</li>
							<li>Tours</li>
							<li>About</li>
							<li>Partner</li>
							<li>Contact</li>
						</ul>
					</nav>
				</div>
			</header>
			<main></main>
			<footer></footer>
		</div>
	);
}

export default App;
