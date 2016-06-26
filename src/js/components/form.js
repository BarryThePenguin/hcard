import React from 'react';
import {InputField} from './input-field';

export const Form = ({fieldGroups, onChange, onSubmit, children}) => {
	function handleSubmit(event) {
		event.preventDefault();
		onSubmit({
			data: new FormData(event.target)
		});
	}
	return (
		<form onSubmit={handleSubmit}>
			{fieldGroups.map(({
				heading,
				fields
			}, key) => {
				return (
					<div key={key} className="form-group">
						<h2>{heading}</h2>
						<div className="row">
							{fields.map((label, key) => <InputField key={key} className="col-xs-12 col-sm-6" label={label} onChange={onChange}/>)}
						</div>
					</div>
				);
			})}
			{children}
		</form>
	);
};

Form.propTypes = {
	children: React.PropTypes.node,
	fieldGroups: React.PropTypes.arrayOf(React.PropTypes.shape({
		heading: React.PropTypes.string.isRequired,
		fields: React.PropTypes.arrayOf(React.PropTypes.string)
	})),
	onChange: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired
};
