import Carousel from 'react-bootstrap/Carousel';
import styles from './LandingPage.module.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const LandingPage = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<div className={styles.divContainer}>
				<Carousel fade>
					<Carousel.Item>
						<img
							className={styles.imgCarrousel}
							src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/jpeg-optimizer_Peluqueria1_ebqweo"
							alt="Peluqueria1"
						/>
						<Carousel.Caption className={styles.caption}>
							<h3 className={styles.h3Lan}>Emax Peluqueria!</h3>
							<p className={styles.pLan}>
								Nuestra gran esperada apertura ya esta llegando!
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className={styles.imgCarrousel}
							src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/jpeg-optimizer_Peluqueria2_hnsrbo"
							alt="Peluqueria2"
						/>
						<Carousel.Caption className={styles.caption}>
							<h3 className={styles.h3Lan}>Emax Peluqueria!</h3>
							<p className={styles.pLan}>
								Nuestra gran esperada apertura ya esta llegando!
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className={styles.imgCarrousel}
							src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/jpeg-optimizer_Peluqueria3_iazwk4"
							alt="Peluqueria3"
						/>
						<Carousel.Caption className={styles.caption}>
							<h3 className={styles.h3Lan}>Emax Peluqueria!</h3>
							<p className={styles.pLan}>
								Nuestra gran esperada apertura ya esta llegando!
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div
				className="text-center fs-1 container fst-italic font-monospace mt-5"
				data-aos="fade-up"
			>
				Transforma tu estilo, eleva tu confianza: donde el arte se
				encuentra con la belleza en cada corte.
				<div>
					<img
						src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/peluqueria%20gallery/qr9vmyzg8w5s7claghgo"
						alt=""
					/>
				</div>
			</div>
			<div className="container mb-5 pb-5">
				<div className="row">
					<div
						className="col-sm-6 text-end fs-3 font-monospace"
						data-aos="fade-right"
					>
						En el corazón de nuestra peluquería reside una pasión
						inquebrantable por realzar la belleza de cada cliente,
						combinada con un compromiso inquebrantable con la
						excelencia y la atención personalizada.
					</div>
					<div className="col-sm-6" data-aos="fade-left">
						<img
							className={styles.imgLeyends}
							src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/q7vrqiuabcoxvibpe8ox"
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default LandingPage;
