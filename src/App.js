import React from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';

import './App.css';

class App extends React.Component {
	state = { quote: '',}

	componentDidMount() {
		this.grabQuote();
	}

	grabQuote = () => {
		axios.get('https://api.adviceslip.com/advice')
			.then((response) => {
				const { advice } = response.data.slip
				
				this.setState({ quote: advice });
			})
			.catch((error) => {
				console.log(error);
			});
	}	
	render() {
		 return (
			<div className ="app">
				<div className="card">
					<h1 className ="heading">{this.state.quote}</h1>
						<button className="button" onClick={this.grabQuote}>
							<span>Generate Quote</span>
						</button>
						<span>
						<a href="https://www.linkedin.com/in/ryangormican/">
							<Icon icon="mdi:linkedin" color="#0e76a8" width="40" />
						</a>
						<a href="https://github.com/RyanGormican/QuotedFor">
							<Icon icon="mdi:github" color="white" width="40" />
						</a>
						<a href="https://ryangormicanportfoliohub.vercel.app/">
							<Icon icon="teenyicons:computer-outline" color="#199c35" width="40" />
						</a>
						</span>
				</div>
			</div>
		 );
	}
}

export default App;