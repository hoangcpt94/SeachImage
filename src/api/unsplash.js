import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID QOpQVJRE10fQ3ep8Xz-aU7blFHpMGp5JruuvSqbisG8'
			}
});