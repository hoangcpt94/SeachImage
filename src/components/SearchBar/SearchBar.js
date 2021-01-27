import React from 'react';

const SearchBar = ({searchChange, searchField, searchSubmit}) => {
	return (
		<div className="ui segment" >
			<form onSubmit={searchSubmit} className="ui fluid icon input">
				<input 
					onChange={searchChange}
					value= {searchField}
					type="text" 
					placeholder="Image Search..." 
				/>
				<i onClick={searchSubmit} className="inverted circular search link icon"></i>
			</form>
		</div>
	)
};

export default SearchBar;













