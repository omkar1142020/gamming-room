import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../img/logo.svg'
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) =>(
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
	 {
	 	currentUser ?
	 	<div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
	 	:
	 	<Link className='option' to="/signin">SIGN IN</Link>
	 }
	 </div>
	</div>

	);

	export default Header;