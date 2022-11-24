import React from 'react';
import ImgTestimonio1 from "./testimonials-1.jpg";
import ImgTestimonio2 from "./testimonials-2.jpg";
import ImgTestimonio3 from "./testimonials-3.jpg";
import ImgTestimonio4 from "./testimonials-4.jpg";
import "./style.css";

export type TestimoniosProps = {};

export const Testimonios: React.FC<TestimoniosProps> = () => {
	const slider =  React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		if (slider.current) {
			console.log(slider.current.className);
		}
		new (window as any).Swiper('.testimonials-slider', {
			speed: 600,
			loop: true,
			autoplay: {
			  delay: 5000,
			  disableOnInteraction: false
			},
			slidesPerView: 'auto',
			pagination: {
			  el: '.swiper-pagination',
			  type: 'bullets',
			  clickable: true
			},
			breakpoints: {
			  320: {
				slidesPerView: 1,
				spaceBetween: 20
			  },

			  1200: {
				slidesPerView: 3,
				spaceBetween: 20
			  }
			}
		});
	}, []);

	return (
		<section id="testimonials" className="testimonials">
			<div className="container" data-aos="fade-up">

				<div className="section-title">
					<h2>Testimonios</h2>
				</div>

				<div ref={slider} className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
					<div className="swiper-wrapper">

						<div className="swiper-slide">
							<div className="testimonial-item">
								<p>
									<i className="bx bxs-quote-alt-left quote-icon-left"></i>
									Desde que publique mi lista de animales en Pawme me han empezado a contactar muchas más personas buscando animales para adoptar.
									<i className="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src={ImgTestimonio1} className="testimonial-img" alt="" />
								<h3>Hernan Campos</h3>
								<h4>Casita de Gatos</h4>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="testimonial-item">
								<p>
									<i className="bx bxs-quote-alt-left quote-icon-left"></i>
									Siempre quise un gato, no sabía por donde empezar ni donde buscar. Gracias a Pawme pude encontrar una casa de adopción de gatos a dos cuadras de mi casa. Ahora Lucas es mi gran compañero en mis largas noches junto al computador.
									<i className="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src={ImgTestimonio2} className="testimonial-img" alt="" />
								<h3>Sara Cespedes</h3>
								<h4>Designer</h4>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="testimonial-item">
								<p>
									<i className="bx bxs-quote-alt-left quote-icon-left"></i>
									Gracias a Pawme puedo llegar a más personas. Incluso he llegado a recibir donaciones y llamadas con animales que necesitan un refugio y alimento.
									<i className="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src={ImgTestimonio3} className="testimonial-img" alt="" />
								<h3>Carla Rodriguez</h3>
								<h4>Casa de adopción</h4>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="testimonial-item">
								<p>
									<i className="bx bxs-quote-alt-left quote-icon-left"></i>
									Un día Rayito salió corriendo de mi casa cuando tenía la puerta abierta. Puse publicaciones por diferentes redes sociales, pero gracias a una publicación en Pawme fui capas de encontrarlo. Ahora Rayito y yo somos inseparables y siempre estamos para cuidarnos.
									<i className="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src={ImgTestimonio4} className="testimonial-img" alt=""/>
								<h3>Matias Pastor</h3>
								<h4>Estudiante</h4>
							</div>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>

			</div>
		</section>
	);
};