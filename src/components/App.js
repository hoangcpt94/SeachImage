import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

class App extends Component {
	state = {
		searchField: '',
		images: []
	};
	
	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	};

/*	onSearchSubmit = (event) => {
		event.preventDefault()
		const query = this.state.searchField
		console.log(query)
		fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
			method: 'GET',
			headers: {
				Authorization: 'Client-ID QOpQVJRE10fQ3ep8Xz-aU7blFHpMGp5JruuvSqbisG8'
			}
		}).then(response => response.json())
	}	*/

/*	onSearchSubmit = async (event) => {
		event.preventDefault()
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query: this.state.searchField},
			headers: {
				Authorization: 'Client-ID QOpQVJRE10fQ3ep8Xz-aU7blFHpMGp5JruuvSqbisG8'
			}
		})
		this.setState({images: response.data.results})
		console.log(this.state.images)	
	}*/
	onSearchSubmit = async (event) => {
		event.preventDefault()
		const response = await unsplash.get('/search/photos', {
			params: {query: this.state.searchField}
		});
		this.setState({ images: response.data.results})
	}

	render() {
		return(
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar 
					seachField={this.state.searchField} 
					searchChange={this.onSearchChange}
					searchSubmit={this.onSearchSubmit}
				/>
				<ImageList images={this.state.images} />
			</div>
		)
	}
};

export default App;