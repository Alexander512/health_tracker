import React, { Component } from 'react';
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
    let { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.state;
    if (lowerLimit === '') lowerLimit = null;
    if (intermediateLimit === '') intermediateLimit = null;
    if (upperLimit === '') upperLimit = null;
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
      <div id='flexContainerCreate'> 
        <h1>New measurement</h1>
        <div id='flexItemCreate'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Measurement name </label>
            <input name='name' type='text' value={name} onChange={handleChange} required />
            <label htmlFor='unit'>Measurement units </label>
            <input name='unit' type='text' value={unit} onChange={handleChange} required />
            <label htmlFor='upperLimit'>Add an upper limit </label>
            <input name='upperLimit' type='number' value={upperLimit} onChange={handleChange} />
            <label htmlFor='intermediateLimit'>Add an intermediate limit </label>
            <input name='intermediateLimit' type='number' value={intermediateLimit} onChange={handleChange} />
            <label htmlFor='lowerLimit'>Add a lower limit </label>
            <input name='lowerLimit' type='number' value={lowerLimit} onChange={handleChange} /><br />
            <button>Submit</button>
          </form>
        </div>
      </div>
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
