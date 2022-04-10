import img1 from '../../../src/images/image-1.jpg';
import img2 from '../../../src/images/image-2.jpg';
import img3 from '../../../src/images/image-3.jpg';
import img4 from '../../../src/images/image-4.jpg';
import img5 from '../../../src/images/image-5.jpg';

function Main() {
	return (
		<main>
			<section className='main-section-links'>
				<h2>CALENDARIO</h2>
				<h2>PIANIFICA TOUR</h2>
			</section>
			<section className='main-img-container'>
				<div className='main-single-img-container'>
					<img src={img1} alt='' width='100%'/>
				</div>
				<div className='main-single-img-container'>
					<img src={img2} alt='' width='100%'/>
				</div>
				<div className='main-single-img-container'>
					<img src={img5} alt='' width='100%'/>
				</div>
				<div className='main-single-img-container'>
					<img src={img4} alt='' width='100%'/>
				</div>
				<div className='main-single-img-container'>
					<img src={img3} alt='' width='100%'/>
				</div>
			</section>
		</main>
	);
}

export default Main;
