import React from 'react';
import "./style.css";

export type PrincipalProps = {};

export const Principal: React.FC<PrincipalProps> = () => {
	return (
		<section id="principal" className="d-flex align-items-center">
			<div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-9 text-center">
						<h1>Encuentra a tu compañero perfecto</h1>
						<h2>Busca, adopta, cuida</h2>
					</div>
				</div>
				<div className="text-center">
					<a href="#about" className="btn-get-started scrollto">Iniciar sesión</a>
				</div>

				<div className="row icon-boxes">
					<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
						data-aos-delay="200">
						<div className="icon-box">
							<div className="icon"><i className="ri-home-7-line"></i></div>
							<h4 className="title">Casas de adopción</h4>
							<p className="description">Encuentra a tu compañero ideal en diferentes casas de adopción
								ubicadas en tu localidad</p>
						</div>
					</div>

					<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
						data-aos-delay="300">
						<div className="icon-box">
							<div className="icon"><i className="ri-file-info-line"></i></div>
							<h4 className="title">Transparencia</h4>
							<p className="description">Encontrará una ficha técnica de cada uno de los animales</p>
						</div>
					</div>

					<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
						data-aos-delay="400">
						<div className="icon-box">
							<div className="icon"><i className="ri-nurse-line"></i></div>
							<h4 className="title">Expertos</h4>
							<p className="description">Encuentra asesoramiento durante el cuidado de tu mascota</p>
						</div>
					</div>

					<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in"
						data-aos-delay="500">
						<div className="icon-box">
							<div className="icon"><i className="ri-question-line"></i></div>
							<h4 className="title">Animales perdidos</h4>
							<p className="description">Encuentra animales perdidos en tu localidad</p>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
	};