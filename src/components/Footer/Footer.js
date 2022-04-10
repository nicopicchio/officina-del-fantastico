import mainLogo from '../../../src/images/main-logo.png';

function Footer() {
	return (
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
	);
}

export default Footer;
