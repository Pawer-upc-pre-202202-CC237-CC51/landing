/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import "./style.css";

export type ContactoProps = {};

export const Contacto: React.FC<ContactoProps> = () => {
	return (
		<section id="contact" className="contact">
			<div className="container" data-aos="fade-up">

				<div className="section-title">
					<h2>Contacto</h2>
				</div>

				<div>
					<iframe style={{border: 0, width: "100%", height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.124649895739!2d-76.96531668457038!3d-12.103618146257629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c71b74419515%3A0x35b9021e227d4282!2sUPC%20monterrico!5e0!3m2!1sen!2sus!4v1664467573003!5m2!1sen!2sus" frameBorder={0} title="googlemaps" allowFullScreen></iframe>
				</div>

				<div className="row mt-5">

					<div className="col-lg-4">
						<div className="info">
							<div className="address">
								<i className="bi bi-geo-alt"></i>
								<h4>Ubicación:</h4>
								<p>Av Primavera 2390, Monterrico, Santiago de Surco 15023, Perú</p>
							</div>

							<div className="email">
								<i className="bi bi-envelope"></i>
								<h4>Correo:</h4>
								<p>contacto@pawme.com</p>
							</div>

							<div className="phone">
								<i className="bi bi-phone"></i>
								<h4>Celular:</h4>
								<p>+51 991 234 567</p>
							</div>

						</div>

					</div>

					<div className="col-lg-8 mt-5 mt-lg-0">

						<form action="#" method="post" role="form" className="php-email-form">
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required />
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="email" id="email" placeholder="Correo" required />
								</div>
							</div>
							<div className="form-group mt-3">
								<input type="text" className="form-control" name="subject" id="subject" placeholder="Titulo" required />
							</div>
							<div className="form-group mt-3">
								<textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required></textarea>
							</div>
							<div className="my-3">
								<div className="loading">Loading</div>
								<div className="error-message"></div>
								<div className="sent-message">Gracias! Tu mensaje ha sido enviado.</div>
							</div>
							<div className="text-center"><button type="submit">Enviar</button></div>
						</form>

					</div>

				</div>

			</div>
		</section>
	);
};
