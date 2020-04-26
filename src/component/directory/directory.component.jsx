import React from 'react';
import MenuItem from '../menu-item/menuitem.component';
import './directory.styles.scss'

class Directory extends React.Component{
	constructor(){
		super();
		this.state={
			sections: [
						  {
						    title: 'Solo',
						    imageUrl: 'http://pngimg.com/uploads/pubg/pubg_PNG45.png',
						    id: 1,
						    linkUrl: 'solo'
						  },
						  {
						    title: 'Duo',
						    imageUrl: 'http://pngimg.com/uploads/pubg/pubg_PNG22.png',
						    id: 2,
						    linkUrl: ''
						  },
						  {
						    title: 'Squad',
						    imageUrl: 'http://pngimg.com/uploads/pubg/pubg_PNG52.png',
						    id: 3,
						    size: 'large',
						    linkUrl: ''
						  },
						  
						]
					}
				}
		render(){
			return(
				<div className='directory-menu'>
				{
					this.state.sections.map(({id,...otherSectionProps}) =>(
						<MenuItem key={id} {...otherSectionProps}/>
						))
				}
				</div>
				);
		}
}

export default Directory;