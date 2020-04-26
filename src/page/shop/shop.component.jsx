import React from 'react';
import GAMES_DATA from './shop.data.js';
import GamesPreview from '../../component/gamespreview/preview.component';

class Shop extends React.Component{
	constructor(){
		super();
		this.state={
			games: GAMES_DATA
		}
	}
	render(){
		const {games} = this.state;
		return(
			<div className='games-page'>
			{
				games.map(({id,...othergamesprops }) =>(
					<GamesPreview key={id} {...othergamesprops} />
					))
			}
			</div>
			);
	}
}

export default Shop;