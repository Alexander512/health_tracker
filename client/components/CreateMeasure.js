import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createMeasure } from '../store';

class CreateMeasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      unit: '',
      lowerLimit: '',
      intermediateLimit: '',
      upperLimit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { auth } = this.props;
    const { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.state;
    this.props.createMeasure({ 
      name: name,
      unit: unit,
      lowerLimit: lowerLimit,
      intermediateLimit: intermediateLimit,
      upperLimit: upperLimit,
      userId: auth.id
    }); 
    this.setState({
      name: '',
      unit: '',
      lowerLimit: '',
      intermediateLimit: '',
      upperLimit: ''
    });
  }
  render() {
    const { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Fragment> 
        <h1>Create new biometric measurement:</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Measurement name: </label><br />
          <input name='name' type='text' value={name} onChange={handleChange} /><br />
          <label htmlFor='unit'>Measurement units: </label><br />
          <input name='unit' type='text' value={unit} onChange={handleChange} /><br />
          <label htmlFor='upperLimit'>Add an upper limit: </label><br />
          <input name='upperLimit' type='number' value={upperLimit} onChange={handleChange} /><br />
          <label htmlFor='intermediateLimit'>Add an intermediate limit: </label><br />
          <input name='intermediateLimit' type='number' value={intermediateLimit} onChange={handleChange} /><br />
          <label htmlFor='lowerLimit'>Add a lower limit: </label><br />
          <input name='lowerLimit' type='number' value={lowerLimit} onChange={handleChange} /><br />
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMeasure: (measure) => {
      dispatch(createMeasure(measure));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeasure);
