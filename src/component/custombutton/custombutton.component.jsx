import React from 'react';
import './custombutton.style.scss';

const CustomButton =({children,isgooglesignin, ...otherProps}) =>(
	<button className='custom-button' {...otherProps}>
	{children}
	</button>
	);

export default CustomButton;

