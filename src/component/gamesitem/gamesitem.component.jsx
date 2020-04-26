import React from 'react';
import './gamesitem.styles.scss';

const GamesItem = ({ price,name,imageUrl}) =>(
	<div className='games-item'>
		<div className='image'
		style={{
			backgroundImage:`url(${imageUrl})`
		}}
		/>
		<div className='games-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</div>
	</div>
	);

export default GamesItem;