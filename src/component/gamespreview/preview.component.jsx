import React from 'react';
import GamesItem from '../gamesitem/gamesitem.component';

import './preview.styles.scss';

const GamesPreview = ({title, items}) =>(
	<div className= 'games-preview'>
	<div className='title'><h1>{title.toUpperCase()}</h1></div>
	<div className='preview'>
	{
		items
		.filter((item,idx) =>idx < 4)
		.map(({id, ...otheritemsprops}) =>(
			<GamesItem key={id} {...otheritemsprops} />
			))
	}
	</div>
	</div>
	);

export default GamesPreview;