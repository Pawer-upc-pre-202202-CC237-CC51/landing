/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">

						<div className="col-lg-4 col-md-6 footer-contact">
							<h3>Pawer</h3>
							<p>
								Av Primavera 2390, Santiago de Surco <br/>
								Santiago de Surco, Lima 15023<br/>
								Perú <br/><br/>
								<strong>Celular:</strong> +51 991 234 567<br/>
								<strong>Correo:</strong> contacto@pawme.com<br/>
							</p>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h4>Links</h4>
							<ul>
								<li><i className="bx bx-chevron-right"></i> <a href="#principal">Inicio</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#about">Nosotros</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#services">Servicios</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#">Terminos y Condiciones</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#">Politica de Privacidad</a></li>
							</ul>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h4>Servicios</h4>
							<ul>
								<li><i className="bx bx-chevron-right"></i> <a href="#services">Adopta tu compañero</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#services">Expande tus fronteras</a></li>
								<li><i className="bx bx-chevron-right"></i> <a href="#services">Encuentra a tu amigo perdido</a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>

			<div className="container d-md-flex py-4">

				<div className="me-md-auto text-center text-md-start">
					<div className="copyright">
						2022 &copy; Copyright <strong><span>Pawer</span></strong>. All Rights Reserved
					</div>
				</div>
				<div className="social-links text-center text-md-right pt-3 pt-md-0">
					<a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
					<a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
					<a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
					<a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
					<a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
				</div>
			</div>
		</footer>
	);
};
