import styles from './NavbarBrand.module.css';
import { Link } from 'react-router-dom';
const NavbarBrand = () => {
	return (
		<>
			<Link to={'/'}>
				<img
					src="https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/peluqueria%20gallery/qr9vmyzg8w5s7claghgo"
					alt="Emax Peluqueria Logo"
					className={styles.img}
				/>
			</Link>
		</>
	);
};
export default NavbarBrand;
