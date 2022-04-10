import mainLogo from '../../../src/images/main-logo.png';

function Header() {
	return (
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
	);
}

export default Header;
