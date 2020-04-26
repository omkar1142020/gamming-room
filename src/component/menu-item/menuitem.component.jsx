import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuitem.styles.scss';

const MenuItem = ({ title,imageUrl,size, history, linkUrl, match}) =>(
	<div className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div className='background-image'
		style={{
			backgroundImage:`url(${imageUrl})`
		}} />
		<div className='content'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<h2 className='subtitle'>Join Now</h2>
		</div>
	</div>
	);

export default withRouter(MenuItem);