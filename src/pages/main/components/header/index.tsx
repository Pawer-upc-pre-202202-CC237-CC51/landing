/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./style.css";

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	const refNavar = React.useRef<HTMLDivElement>(null);
	const refMobileNav = React.useRef<HTMLElement>(null);

	// Check active
	const navbarlinksActive = () => {
		const position = window.scrollY + 200
		const navbarlinks = Array.from<HTMLAnchorElement>(document.querySelectorAll("#navbar .scrollto"));
		navbarlinks.forEach((navbarlink) => {
			// Not hash?
			if (!navbarlink.hash) {
				return;
			}

			// Obtener seccion
			let section = document.querySelector<HTMLDivElement>(navbarlink.hash);
			if (!section) {
				return;
			}

			// Cambiar clase
			if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
				navbarlink.classList.add('active')
			} else {
				navbarlink.classList.remove('active')
			}
		})
	}

	// Toggle nav onClick event
	const onClickTogggleNav: React.MouseEventHandler<HTMLDivElement> = function (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!refNavar.current) {
			return;
		}

		refNavar.current.classList.toggle("navbar-mobile");
		e.currentTarget.classList.toggle("bi-list");
		e.currentTarget.classList.toggle("bi-x");
	};

	// When click nav element
	const onClickNavElement:  React.MouseEventHandler<HTMLAnchorElement> = function (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		// Check redirect element
		const redirectElement = document.querySelector<HTMLDivElement>(e.currentTarget.hash);
		if (!redirectElement) {
			return;
		}

		// Prevent
		e.preventDefault();

		// Not refNavar or refMobileNav
		if (!refNavar.current || !refMobileNav.current) {
			return;
		}

		// Cambiar clases
		refNavar.current.classList.remove("navbar-mobile");
		refMobileNav.current.classList.toggle("bi-list");
		refMobileNav.current.classList.toggle("bi-x");

		// Redireccionar scroll
		const headerElement = document.querySelector<HTMLDivElement>("#header");
		if (!headerElement) {
			return;
		}

		window.scrollTo({
			top: redirectElement.offsetTop - headerElement.offsetTop,
			behavior: 'smooth'
		})
	};

	// Effect
	React.useEffect(() => {
		document.addEventListener("scroll", navbarlinksActive);

		return () => {
			document.removeEventListener("scroll", navbarlinksActive);
		};
	}, []);

	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center justify-content-between">
				<h1 className="logo"><a href="index.html">Pawme</a></h1>
				<nav ref={refNavar} id="navbar" className="navbar">
					<ul>
						<li><a onClick={onClickNavElement} className="nav-link scrollto active" href="#principal">Inicio</a></li>
						<li><a onClick={onClickNavElement} className="nav-link scrollto" href="#about">Nosotros</a></li>
						<li><a onClick={onClickNavElement} className="nav-link scrollto" href="#services">Servicios</a></li>
						<li><a onClick={onClickNavElement} className="nav-link scrollto o" href="#team">Equipo</a></li>
						<li><a onClick={onClickNavElement} className="nav-link scrollto o" href="#contact">Contacto</a></li>
						<li><a onClick={onClickNavElement} className="getstarted scrollto" href="#">Iniciar sesión</a></li>
					</ul>
					<i ref={refMobileNav} className="bi bi-list mobile-nav-toggle" onClick={onClickTogggleNav}></i>
				</nav>
			</div>
		</header>
	);
};
