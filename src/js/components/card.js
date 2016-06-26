import React from 'react';
import avatar from '../../img/avatar.png';

export const Card = ({
	previewUrl,
	givenName,
	surname,
	houseNameOr,
	street,
	suburb,
	state,
	email,
	phone,
	postcode,
	country
}) => {
	const address = {
		line1: `${houseNameOr} ${street}`,
		line2: suburb && state ? `${suburb}, ${state}` : `${suburb}${state}`
	};

	return (
		<div className="card-container">
			<h2>hCard Preview</h2>
			<div className="card-header">
				<h3 className="card-name">{`${givenName} ${surname}`}</h3>
				<div className="card-avatar">
					<div className="avatar" style={{backgroundImage: `url(${previewUrl})`}}/>
				</div>
			</div>
			<div className="card-details">
				<div>
					Email	<span>{email}</span>
				</div>
				<div>
					Phone <span>{phone}</span>
				</div>
				<div>
					Address <span>{address.line1}</span>
				</div>
				<div>
					<span>{address.line2}</span>
				</div>
				<div>
					Postcode <span>{postcode}</span>
				</div>
				<div>
					Country <span>{country}</span>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	previewUrl: React.PropTypes.string,
	givenName: React.PropTypes.string,
	surname: React.PropTypes.string,
	houseNameOr: React.PropTypes.string,
	street: React.PropTypes.string,
	suburb: React.PropTypes.string,
	state: React.PropTypes.string,
	email: React.PropTypes.string,
	phone: React.PropTypes.string,
	postcode: React.PropTypes.string,
	country: React.PropTypes.string
};

Card.defaultProps = {
	previewUrl: avatar,
	givenName: '',
	surname: '',
	houseNameOr: '',
	street: '',
	suburb: '',
	state: '',
	email: '',
	phone: '',
	postcode: '',
	country: ''
};
