/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ImgTeam1 from "./team-1.jpg";
import ImgTeam2 from "./team-2.jpg";
import ImgTeam3 from "./team-3.jpg";
import ImgTeam4 from "./team-4.jpg";
import "./style.css";

export type EquipoProps = {};

export const Equipo: React.FC<EquipoProps> = () => {
	return (
		<section id="team" className="team section-bg">
			<div className="container" data-aos="fade-up">

				<div className="section-title">
					<h2>Equipo</h2>
				</div>

				<div className="row">

					<div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
						<div className="member">
							<div className="member-img">
								<img src={ImgTeam1} className="img-fluid" alt="" />
								<div className="social">
									<a href="#team"><i className="bi bi-twitter"></i></a>
									<a href="#team"><i className="bi bi-facebook"></i></a>
									<a href="#team"><i className="bi bi-instagram"></i></a>
									<a href="#team"><i className="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div className="member-info">
								<h4>Hernan Aaron Razo Ballon</h4>
								<span>Líder</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
						<div className="member">
							<div className="member-img">
								<img src={ImgTeam2} className="img-fluid" alt="" />
								<div className="social">
									<a href=""><i className="bi bi-twitter"></i></a>
									<a href=""><i className="bi bi-facebook"></i></a>
									<a href=""><i className="bi bi-instagram"></i></a>
									<a href=""><i className="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div className="member-info">
								<h4>Cesar Rafael Sanchez Garay</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
						<div className="member">
							<div className="member-img">
								<img src={ImgTeam3} className="img-fluid" alt=""  />
								<div className="social">
									<a href=""><i className="bi bi-twitter"></i></a>
									<a href=""><i className="bi bi-facebook"></i></a>
									<a href=""><i className="bi bi-instagram"></i></a>
									<a href=""><i className="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div className="member-info">
								<h4>Daniel Barrionuevo Gutiérrez</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
						<div className="member">
							<div className="member-img">
								<img src={ImgTeam4} className="img-fluid" alt="" />
								<div className="social">
									<a href=""><i className="bi bi-twitter"></i></a>
									<a href=""><i className="bi bi-facebook"></i></a>
									<a href=""><i className="bi bi-instagram"></i></a>
									<a href=""><i className="bi bi-linkedin"></i></a>
								</div>
							</div>
							<div className="member-info">
								<h4>Jett Manuel Teixeira Walters</h4>
								<span>Integrante</span>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>
	);
};
