import React from 'react';

const SearchCity = ({weatherSearch, onChange, onSubmit}) => {
	return (
		<div id="SearchCity" className="mb-5">
			<form onSubmit={onSubmit}>
				<div className="input-group">
					<input 
						onChange={onChange}
						value={weatherSearch}
						type="text" 
						className="form-control form-control-lg" 
						id="city" />

					<div className="input-group-append">
						<button className="btn btn-success btn-lg">Search</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SearchCity;
