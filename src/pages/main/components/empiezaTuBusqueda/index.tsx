import React from 'react';
import "./style.css";

export type EmpiezaTuBusquedaProps = {};

export const EmpiezaTuBusqueda: React.FC<EmpiezaTuBusquedaProps> = () => {
	return (
		<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Pawme - Adopta y encuentra mascotas sin hogar</title>

	<!-- Favicons -->
	<link href="assets/img/favicon.png" rel="icon">
	<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

	<!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

	<!-- Vendor CSS Files -->
	<link href="assets/vendor/aos/aos.css" rel="stylesheet">
	<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
	<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
	<link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
	<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

	<!-- Main CSS -->
	<link href="assets/css/main.css" rel="stylesheet">
</head>
<body>
	<!-- ======= Header ======= -->
	<header id="header" class="fixed-top">
		<div class="container d-flex align-items-center justify-content-between">
			<h1 class="logo"><a href="index.html">Pawme</a></h1>
			<nav id="navbar" class="navbar">
				<ul>
					<li><a class="nav-link scrollto active" href="#principal">Inicio</a></li>
					<li><a class="nav-link scrollto" href="#about">Nosotros</a></li>
					<li><a class="nav-link scrollto" href="#services">Servicios</a></li>
					<li><a class="nav-link scrollto o" href="#team">Equipo</a></li>
					<li><a class="nav-link scrollto o" href="#contact">Contacto</a></li>
					<li><a class="getstarted scrollto" href="#">Iniciar sesión</a></li>
				</ul>
				<i class="bi bi-list mobile-nav-toggle"></i>
			</nav>
		</div>
	</header>

	<!-- ======= Pricipal ======= -->
	<section id="principal" class="d-flex align-items-center">
		<div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
			<div class="row justify-content-center">
				<div class="col-xl-7 col-lg-9 text-center">
					<h1>Encuentra a tu compañero perfecto</h1>
					<h2>Busca, adopta, cuida</h2>
				</div>
			</div>
			<div class="text-center">
				<a href="#about" class="btn-get-started scrollto">Iniciar sesión</a>
			</div>

			<div class="row icon-boxes">
				<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
					<div class="icon-box">
						<div class="icon"><i class="ri-home-7-line"></i></div>
						<h4 class="title">Casas de adopción</h4>
						<p class="description">Encuentra a tu compañero ideal en diferentes casas de adopción ubicadas en tu localidad</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
					<div class="icon-box">
						<div class="icon"><i class="ri-file-info-line"></i></div>
						<h4 class="title">Transparencia</h4>
						<p class="description">Encontrará una ficha técnica de cada uno de los animales</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
					<div class="icon-box">
						<div class="icon"><i class="ri-nurse-line"></i></div>
						<h4 class="title">Expertos</h4>
						<p class="description">Encuentra asesoramiento durante el cuidado de tu mascota</p>
					</div>
				</div>

				<div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
					<div class="icon-box">
						<div class="icon"><i class="ri-question-line"></i></div>
						<h4 class="title">Animales perdidos</h4>
						<p class="description">Encuentra animales perdidos en tu localidad</p>
					</div>
				</div>

			</div>
		</div>
	</section>
	<main id="main">
		<!-- ======= Nosotros ======= -->
		<section id="about" class="about">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>Nosotros</h2>
					<p>Brindar soluciones que mejoren el bienestar de los animales a través de soluciones tecnológicas</p>
				</div>

				<div class="row content">
					<div class="col-lg-6">
						<p>
							Pawer es la empresa detras de Pawme conformada por 5 estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC). Tiene como propósito brindar diferentes soluciones tecnológicas para los animales del hogar con el fin de cubrir diferentes problemas y necesidades
						</p>
						<ul>
							<li><i class="ri-check-double-line"></i><b>Misión:</b> Brindar soluciones que mejoren el bienestar de los animales a través de soluciones tecnológicas</li>
							<li><i class="ri-check-double-line"></i><b>Visión:</b> Ser la empresa número uno en brindar soluciones innovadoras que transformen la vida de los animales en Perú dentro los próximos 5 años</li>
						</ul>
					</div>
					<div class="col-lg-6 pt-4 pt-lg-0">
						<p>
							Pawme es una solución que busca unir a personas con animales sin hogar para brindarles una mejor calidad de vida y un compañero ideal. Además, ofrecemos un servicio de reporte de animales perdidos para que puedan ser encontrados en conjunto.
						</p>
						<ul>
							<li><i class="ri-check-double-line"></i> Encontrar animales en adopción </li>
							<li><i class="ri-check-double-line"></i> Encontrar animales perdidos</li>
						</ul>
					</div>
				</div>

			</div>
		</section>
		<!-- ======= Metricas ======= -->
		<section id="metricas" class="metricas section-bg">
			<div class="container">
				<div class="row justify-content-end">
					<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div class="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="2" class="purecounter"></span>
							<p>Casas de adopción</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div class="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="2" class="purecounter"></span>
							<p>Compañeros ideales</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div class="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="127" data-purecounter-duration="2" class="purecounter"></span>
							<p>Animales adoptados</p>
						</div>
					</div>
					<div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
						<div class="metricas-box">
							<span data-purecounter-start="0" data-purecounter-end="52" data-purecounter-duration="2" class="purecounter"></span>
							<p>Animales encontrados</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ======= Testimonios ======= -->
		<section id="testimonials" class="testimonials">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>Testimonios</h2>
				</div>

				<div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
					<div class="swiper-wrapper">

						<div class="swiper-slide">
							<div class="testimonial-item">
								<p>
									<i class="bx bxs-quote-alt-left quote-icon-left"></i>
									Desde que publique mi lista de animales en Pawme me han empezado a contactar muchas más personas buscando animales para adoptar.
									<i class="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
								<h3>Hernan Campos</h3>
								<h4>Casita de Gatos</h4>
							</div>
						</div><!-- End testimonial item -->

						<div class="swiper-slide">
							<div class="testimonial-item">
								<p>
									<i class="bx bxs-quote-alt-left quote-icon-left"></i>
									Siempre quise un gato, no sabía por donde empezar ni donde buscar. Gracias a Pawme pude encontrar una casa de adopción de gatos a dos cuadras de mi casa. Ahora Lucas es mi gran compañero en mis largas noches junto al computador.
									<i class="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
								<h3>Sara Cespedes</h3>
								<h4>Designer</h4>
							</div>
						</div><!-- End testimonial item -->

						<div class="swiper-slide">
							<div class="testimonial-item">
								<p>
									<i class="bx bxs-quote-alt-left quote-icon-left"></i>
									Gracias a Pawme puedo llegar a más personas. Incluso he llegado a recibir donaciones y llamadas con animales que necesitan un refugio y alimento.
									<i class="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
								<h3>Carla Rodriguez</h3>
								<h4>Casa de adopción</h4>
							</div>
						</div><!-- End testimonial item -->

						<div class="swiper-slide">
							<div class="testimonial-item">
								<p>
									<i class="bx bxs-quote-alt-left quote-icon-left"></i>
									Un día Rayito salió corriendo de mi casa cuando tenía la puerta abierta. Puse publicaciones por diferentes redes sociales, pero gracias a una publicación en Pawme fui capas de encontrarlo. Ahora Rayito y yo somos inseparables y siempre estamos para cuidarnos.
									<i class="bx bxs-quote-alt-right quote-icon-right"></i>
								</p>
								<img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
								<h3>Matias Pastor</h3>
								<h4>Estudiante</h4>
							</div>
						</div><!-- End testimonial item -->
					</div>
					<div class="swiper-pagination"></div>
				</div>

			</div>
		</section>
		<!-- ======= Servicios ======= -->
		<section id="services" class="services section-bg">
			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>Servicios</h2>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
						<div class="icon-box iconbox-blue">
							<div class="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
								</svg>
								<i class="bx ri-bear-smile-line"></i>
							</div>
							<h4><a href="#services">Adopta tu compañero</a></h4>
							<p>Gracias a nuestro innovador motor de busquedas y una ficha detallada de su perfil podras buscar y adoptar a tu compañero segun tus necesidades</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
						<div class="icon-box iconbox-pink">
							<div class="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
								</svg>
								<i class="bx ri-home-heart-line"></i>
							</div>
							<h4><a href="#services">Expande tus fronteras</a></h4>
							<p>Agrega el catálogo de animales que tienes para adoptar y así poder llegar a más personas que estén buscando adoptar</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
						<div class="icon-box iconbox-teal">
							<div class="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
								</svg>
								<i class="bx ri-search-2-line"></i>
							</div>
							<h4><a href="#services">Encuentra a tu amigo perdido</a></h4>
							<p>Publica tu mascota perdida para que diferentes personas y casas de adopción puedan ayudarte en esta búsqueda y así ser informado cuando alguien lo haya encontrado</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- ======= Empieza tu búsqueda ======= -->
		<section id="cta" class="cta">
			<div class="container" data-aos="zoom-in">
				<div class="text-center">
					<h3>Empieza tu búsqueda</h3>
					<p> Empieza a buscar a tu compañero a través del catálogo de animales y casas de adopción que tenemos o ayuda en la búsqueda de animales perdidos.</p>
					<a class="cta-btn" href="#">Empezar</a>
				</div>
			</div>
		</section>
		<!-- ======= Equipo ======= -->
		<section id="team" class="team section-bg">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>Equipo</h2>
				</div>

				<div class="row">

					<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
						<div class="member">
							<div class="member-img">
								<img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
								<div class="social">
									<a href="#team"><i class="bi bi-twitter"></i></a>
									<a href="#team"><i class="bi bi-facebook"></i></a>
									<a href="#team"><i class="bi bi-instagram"></i></a>
									<a href="#team"><i class="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div class="member-info">
								<h4>Hernan Aaron Razo Ballon</h4>
								<span>Líder</span>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
						<div class="member">
							<div class="member-img">
								<img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
								<div class="social">
									<a href=""><i class="bi bi-twitter"></i></a>
									<a href=""><i class="bi bi-facebook"></i></a>
									<a href=""><i class="bi bi-instagram"></i></a>
									<a href=""><i class="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div class="member-info">
								<h4>Cesar Rafael Sanchez Garay</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
						<div class="member">
							<div class="member-img">
								<img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
								<div class="social">
									<a href=""><i class="bi bi-twitter"></i></a>
									<a href=""><i class="bi bi-facebook"></i></a>
									<a href=""><i class="bi bi-instagram"></i></a>
									<a href=""><i class="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div class="member-info">
								<h4>Daniel Barrionuevo Gutiérrez</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

					<div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
						<div class="member">
							<div class="member-img">
								<img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
								<div class="social">
									<a href=""><i class="bi bi-twitter"></i></a>
									<a href=""><i class="bi bi-facebook"></i></a>
									<a href=""><i class="bi bi-instagram"></i></a>
									<a href=""><i class="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div class="member-info">
								<h4>Jett Manuel Teixeira Walters</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
		<!-- ======= Contacto ======= -->
		<section id="contact" class="contact">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>Contacto</h2>
				</div>

				<div>
					<iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.124649895739!2d-76.96531668457038!3d-12.103618146257629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c71b74419515%3A0x35b9021e227d4282!2sUPC%20monterrico!5e0!3m2!1sen!2sus!4v1664467573003!5m2!1sen!2sus" frameborder="0" allowfullscreen></iframe>
				</div>

				<div class="row mt-5">

					<div class="col-lg-4">
						<div class="info">
							<div class="address">
								<i class="bi bi-geo-alt"></i>
								<h4>Ubicación:</h4>
								<p>Av Primavera 2390, Monterrico, Santiago de Surco 15023, Perú</p>
							</div>

							<div class="email">
								<i class="bi bi-envelope"></i>
								<h4>Correo:</h4>
								<p>contacto@pawme.com</p>
							</div>

							<div class="phone">
								<i class="bi bi-phone"></i>
								<h4>Celular:</h4>
								<p>+51 991 234 567</p>
							</div>

						</div>

					</div>

					<div class="col-lg-8 mt-5 mt-lg-0">

						<form action="#" method="post" role="form" class="php-email-form">
							<div class="row">
								<div class="col-md-6 form-group">
									<input type="text" name="name" class="form-control" id="name" placeholder="Nombre" required>
								</div>
								<div class="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" class="form-control" name="email" id="email" placeholder="Correo" required>
								</div>
							</div>
							<div class="form-group mt-3">
								<input type="text" class="form-control" name="subject" id="subject" placeholder="Titulo" required>
							</div>
							<div class="form-group mt-3">
								<textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
							</div>
							<div class="my-3">
								<div class="loading">Loading</div>
								<div class="error-message"></div>
								<div class="sent-message">Gracias! Tu mensaje ha sido enviado.</div>
							</div>
							<div class="text-center"><button type="submit">Enviar</button></div>
						</form>

					</div>

				</div>

			</div>
		</section>
	</main>

	<!-- ======= Footer ======= -->
	<footer id="footer">

		<div class="footer-top">
			<div class="container">
				<div class="row">

					<div class="col-lg-4 col-md-6 footer-contact">
						<h3>Pawer</h3>
						<p>
							Av Primavera 2390, Santiago de Surco <br>
							Santiago de Surco, Lima 15023<br>
							Perú <br><br>
							<strong>Celular:</strong> +51 991 234 567<br>
							<strong>Correo:</strong> contacto@pawme.com<br>
						</p>
					</div>

					<div class="col-lg-4 col-md-6 footer-links">
						<h4>Links</h4>
						<ul>
							<li><i class="bx bx-chevron-right"></i> <a href="#principal">Inicio</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#about">Nosotros</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#services">Servicios</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Terminos y Condiciones</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Politica de Privacidad</a></li>
						</ul>
					</div>

					<div class="col-lg-4 col-md-6 footer-links">
						<h4>Servicios</h4>
						<ul>
							<li><i class="bx bx-chevron-right"></i> <a href="#services">Adopta tu compañero</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#services">Expande tus fronteras</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#services">Encuentra a tu amigo perdido</a></li>
						</ul>
					</div>

				</div>
			</div>
		</div>

		<div class="container d-md-flex py-4">

			<div class="me-md-auto text-center text-md-start">
				<div class="copyright">
					2022 &copy; Copyright <strong><span>Pawer</span></strong>. All Rights Reserved
				</div>
			</div>
			<div class="social-links text-center text-md-right pt-3 pt-md-0">
				<a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
				<a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
				<a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
				<a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
				<a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
			</div>
		</div>
	</footer>

	<!-- ======= Preloader & Back-To-Top ======= -->
	<div id="preloader"></div>
	<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

	<!-- Vendor JS -->
	<script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
	<script src="assets/vendor/aos/aos.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
	<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

	<!-- Main JS -->
	<script src="assets/js/main.js"></script>
</body>
</html>

	);
};