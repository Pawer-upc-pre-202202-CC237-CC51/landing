/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Components from "./components";
import "./style.css";

export type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
	const divPreloader = React.useRef<HTMLDivElement | null>(null);

	// Preloader
	React.useEffect(() => {
		// Start
		const preloaderRemove = () => {
			if (divPreloader.current) {
				divPreloader.current.remove();
			}
		};
		window.addEventListener('load', preloaderRemove);

		// End
		return () => {
			window.removeEventListener('load', preloaderRemove);
		};
	}, [divPreloader]);

	return (
		<React.Fragment>
			<Components.Header />
			<Components.Principal />
			<main id="main">
				<Components.Nosotros />
				<Components.Metricas />
				<Components.Testimonios />
				<Components.Servicios />
				<Components.EmpiezaTuBusqueda />
				<Components.Equipo />
				<Components.Contacto />
			</main>
			<Components.Footer />
			<div ref={divPreloader} id="preloader"></div>
			<a href="#" className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</a>
		</React.Fragment>
	);
};