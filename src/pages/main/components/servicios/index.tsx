import React from 'react';
import "./style.css";

export type ServiciosProps = {};

export const Servicios: React.FC<ServiciosProps> = () => {

	return (
		<section id="services" className="services section-bg">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Servicios</h2>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
						<div className="icon-box iconbox-blue">
							<div className="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
								</svg>
								<i className="bx ri-bear-smile-line"></i>
							</div>
							<h4><a href="#services">Adopta tu compañero</a></h4>
							<p>Gracias a nuestro innovador motor de busquedas y una ficha detallada de su perfil podras buscar y adoptar a tu compañero segun tus necesidades</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
						<div className="icon-box iconbox-pink">
							<div className="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
								</svg>
								<i className="bx ri-home-heart-line"></i>
							</div>
							<h4><a href="#services">Expande tus fronteras</a></h4>
							<p>Agrega el catálogo de animales que tienes para adoptar y así poder llegar a más personas que estén buscando adoptar</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
						<div className="icon-box iconbox-teal">
							<div className="icon">
								<svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
									<path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
								</svg>
								<i className="bx ri-search-2-line"></i>
							</div>
							<h4><a href="#services">Encuentra a tu amigo perdido</a></h4>
							<p>Publica tu mascota perdida para que diferentes personas y casas de adopción puedan ayudarte en esta búsqueda y así ser informado cuando alguien lo haya encontrado</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};