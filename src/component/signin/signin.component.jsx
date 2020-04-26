import React from 'react';
import './signin.style.scss'
import FormInput from  '../forminput/forminput.component';
import CustomButton from '../custombutton/custombutton.component';

class Signin extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			email: '',
			password: ''
		}
	}

	handleSubmit = async event =>{
		event.preventDefault();

		this.setState({email: '', password:''});

	}

	handleChange = event =>{
		const {value, name} = event.target;
		this.setState({[name]: value})
	}

	render(){
		return(
			<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sigin with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
					type='email'
					name='email'
					label='Email'
					value={this.state.email}
					onChange={this.handleChange}
					required
					/>

					<FormInput
					type='password'
					name='password'
					label='Password'
					value={this.state.password}
					onChange={this.handleChange}
					required
					/>
					<CustomButton type='submit'>
					Signin
				    </CustomButton>
				</form>
			
		</div>
		);

	}
}

export default Signin;