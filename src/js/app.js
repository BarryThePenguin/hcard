import React from 'react';
import {Form} from './components/form';
import {Card} from './components/card';
import '../styles';

const app = {
	fieldGroups: [{
		heading: 'Personal Details',
		fields: [
			'Given Name',
			'Surname',
			'Email',
			'Phone'
		]
	}, {
		heading: 'Address',
		fields: [
			'House Name or #',
			'Street',
			'Suburb',
			'State',
			'Postcode',
			'Country'
		]
	}]
};

export class App extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
	}

	handleChange(input) {
		this.setState(input);
	}

	handleSubmit(data) {
		console.log('Submit: ', data);
	}

	handleImageChange(event) {
		event.preventDefault();
		if (event.target.files) {
			const file = event.target.files[0];
			const reader = new FileReader();

			reader.onloadend = () => {
				this.setState({file, previewUrl: reader.result});
			};

			reader.readAsDataURL(file);
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row row-height">
					<div className="builder col-xs-12 col-md-6">
						<h1>hCard Builder</h1>
						<Form fieldGroups={app.fieldGroups} onChange={this.handleChange} onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-sm-6 form-group">
									<label className="btn btn-lg btn-default btn-block">
										Upload Avatar <input style={{display: 'none'}} type="file" onChange={this.handleImageChange} accept="image/*"/>
									</label>
								</div>
								<div className="col-sm-6 form-group">
									<button className="btn btn-lg btn-info btn-block" type="submit">Create hCard</button>
								</div>
							</div>
						</Form>
					</div>
					<div className="card col-xs-12 col-md-6">
						<Card {...this.state}/>
					</div>
				</div>
			</div>
		);
	}
}
