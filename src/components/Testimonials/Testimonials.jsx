import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const testimonialsData = [
	{
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi distinctio ad, accusamus sit error aliquid.',
		author: 'Jan Kowalski',
		position: 'Team Leader',
		company: 'Firma XYZ',
		imgSrc: 'img/testimonial1.webp',
	},
	{
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, blanditiis, cum facilis quae natus, quod sapiente officiis impedit aspernatur doloremque eos totam quas quos ad hic dignissimos ipsum ut dolores!',
		author: 'Robert Nowak',
		position: 'CEO',
		company: 'Firma XYZ',
		imgSrc: 'img/testimonial2.webp',
	},
	{
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, blanditiis, cum facilis quae natus, quod sapiente officiis impedit aspernatur doloremque eos totam quas quos ad hic dignissimos ipsum ut dolores!',
		author: 'Amar Smith',
		position: 'Sales Manager',
		company: 'Firma XYZ',
		imgSrc: 'img/testimonial3.webp',
	},
];

const Testimonials = () => {
	return (
		<section className='testimonials' id='testimonials'>
			<div className='testimonials__wrapper container'>
				<h2 className='testimonials__title text-gradient'>Opinie</h2>
				<Splide
					options={{
						type: 'loop',
						perPage: 1,
						autoplay: true,
                        arrows: false,
						interval: 3000,
					}}
					className='testimonials__slider'
				>
					{testimonialsData.map((testimonial, index) => (
						<SplideSlide key={index}>
							<div className='testimonial'>
								<div className='testimonial__content'>
									<p className='testimonial__text'>{testimonial.text}</p>
									<div className='testimonial__author'>
										<p className='testimonial__author-name'>{testimonial.author}</p>
										<p className='testimonial__author-position'>{testimonial.position}</p>
										<p className='testimonial__author-company'>{testimonial.company}</p>
									</div>
								</div>
								<div className='testimonial__img'>
									<img src={testimonial.imgSrc} alt={testimonial.author} />
								</div>
							</div>
						</SplideSlide>
					))}
				</Splide>
				<div className='testimonials__quote'>
					<FontAwesomeIcon icon={faQuoteRight} />
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
