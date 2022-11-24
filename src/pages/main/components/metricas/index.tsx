import React from 'react';
import "./style.css";

export type MetricasProps = {};

export const Metricas: React.FC<MetricasProps> = () => {

	React.useEffect(() => {
		new (window as any).PureCounter();
	}, []);

	return (
		<section id="metricas" className="metricas section-bg">
			<div className="container">
				<div className="row justify-content-end">
					<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div className="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" className="purecounter"></span>
							<p>Casas de adopción</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div className="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="2" className="purecounter"></span>
							<p>Compañeros ideales</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div className="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="127" data-purecounter-duration="2" className="purecounter"></span>
							<p>Animales adoptados</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div className="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="52" data-purecounter-duration="2" className="purecounter"></span>
							<p>Animales encontrados</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};