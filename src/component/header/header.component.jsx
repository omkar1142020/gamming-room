import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../img/logo.svg'

const Header = () =>(
	<div className='header'>
	 <Link className='logo-container' to="/">
	 	<Logo className='Logo' />
	 </Link>
	 <div className='options'>
	 <Link className='option' to="/shop">
	 JOIN
	 </Link>
	 <Link className='option' to="/contact">
	 CONTACT
	 </Link>
	 </div>
	</div>

	);

	export default Header;