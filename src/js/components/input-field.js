import React from 'react';
import {camelCase, kebabCase} from 'lodash';

export const InputField = ({className, label, onChange}) => {
	const name = kebabCase(label);

	function handleChange(input) {
		const name = camelCase(input);
		return event => {
			onChange({[name]: event.target.value});
		};
	}

	return (
		<div className={`${className} form-group`}>
			<label htmlFor={name}>{label}</label>
			<input id={name} className="form-control" name={name} onChange={handleChange(name)}/>
		</div>
	);
};

InputField.propTypes = {
	className: React.PropTypes.string,
	label: React.PropTypes.string,
	onChange: React.PropTypes.func.isRequired
};
