import React from 'react';
import "./style.css";

export type NosotrosProps = {};

export const Nosotros: React.FC<NosotrosProps> = () => {
	return (
		<section id="about" className="about">
			<div className="container" data-aos="fade-up">

				<div className="section-title">
					<h2>Nosotros</h2>
					<p>Brindar soluciones que mejoren el bienestar de los animales a través de soluciones tecnológicas</p>
				</div>

				<div className="row content">
					<div className="col-lg-6">
						<p>
							Pawer es la empresa detras de Pawme conformada por 5 estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC). Tiene como propósito brindar diferentes soluciones tecnológicas para los animales del hogar con el fin de cubrir diferentes problemas y necesidades
						</p>
						<ul>
							<li><i className="ri-check-double-line"></i><b>Misión:</b> Brindar soluciones que mejoren el bienestar de los animales a través de soluciones tecnológicas</li>
							<li><i className="ri-check-double-line"></i><b>Visión:</b> Ser la empresa número uno en brindar soluciones innovadoras que transformen la vida de los animales en Perú dentro los próximos 5 años</li>
						</ul>
					</div>
					<div className="col-lg-6 pt-4 pt-lg-0">
						<p>
							Pawme es una solución que busca unir a personas con animales sin hogar para brindarles una mejor calidad de vida y un compañero ideal. Además, ofrecemos un servicio de reporte de animales perdidos para que puedan ser encontrados en conjunto.
						</p>
						<ul>
							<li><i className="ri-check-double-line"></i> Encontrar animales en adopción </li>
							<li><i className="ri-check-double-line"></i> Encontrar animales perdidos</li>
						</ul>
					</div>
				</div>

			</div>
		</section>
	);
};