/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";

export type EmpiezaTuBusquedaProps = {};

export const EmpiezaTuBusqueda: React.FC<EmpiezaTuBusquedaProps> = () => {
	return (
		<section id="cta" className="cta">
			<div className="container" data-aos="zoom-in">
				<div className="text-center">
					<h3>Empieza tu búsqueda</h3>
					<p> Empieza a buscar a tu compañero a través del catálogo de animales y casas de adopción que tenemos o ayuda en la búsqueda de animales perdidos.</p>
					<a className="cta-btn" href="#">Empezar</a>
				</div>
			</div>
		</section>
	);
};
