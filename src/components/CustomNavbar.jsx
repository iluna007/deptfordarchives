import { useState } from "react";
import PropTypes from "prop-types";
import {
	Navbar as BootstrapNavbar,
	Nav,
	Container,
	Offcanvas,
	Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Styles/CustomNavbar.css";

const CustomNavbar = () => {
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const handleClose = () => setShowOffcanvas(false);
	const handleShow = () => setShowOffcanvas(true);

	return (
		<>
			<BootstrapNavbar
				bg='body-tertiary'
				expand={false}
				fixed='top'
				className='custom-navbar'
			>
				<Container fluid>
					<BootstrapNavbar.Brand as={Link} to='/'>
						<h2 className='mb-0'>Deptford Archives</h2>
					</BootstrapNavbar.Brand>
					<Button
						variant='primary'
						onClick={handleShow}
						aria-label='Toggle navigation'
						className='navbar-toggler'
					>
						<span className='navbar-toggler-icon'></span>
					</Button>
				</Container>
			</BootstrapNavbar>

			<Offcanvas
				show={showOffcanvas}
				onHide={handleClose}
				placement='end'
				id='offcanvasNavbar'
				aria-labelledby='offcanvasNavbarLabel'
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title id='offcanvasNavbarLabel'>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className='justify-content-end flex-column pe-3'>
						<Nav.Item>
							<Link className='nav-link' to='/' onClick={handleClose}>
								Home
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link
								className='nav-link'
								to='/fieldrecordings'
								onClick={handleClose}
							>
								Field Recordings
							</Link>
						</Nav.Item>
					</Nav>
					
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

CustomNavbar.propTypes = {
	artist: PropTypes.string,
};

CustomNavbar.defaultProps = {
	artist: "",
};

export default CustomNavbar;
