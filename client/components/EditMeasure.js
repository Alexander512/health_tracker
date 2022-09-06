import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeasures, updateMeasure } from '../store';

class EditMeasure extends Component {
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
  componentDidMount() {
    this.props.getMeasures();
    let { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.props.measure;
    if (lowerLimit === null) lowerLimit = '';
    if (intermediateLimit === null) intermediateLimit = '';
    if (upperLimit === null) upperLimit = '';
    this.setState({ 
      name: name, 
      unit: unit, 
      lowerLimit: lowerLimit, 
      intermediateLimit: intermediateLimit, 
      upperLimit: upperLimit 
    });
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.measure.id && this.props.measure.id) {
      let { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.props.measure;
      if (lowerLimit === null) lowerLimit = '';
      if (intermediateLimit === null) intermediateLimit = '';
      if (upperLimit === null) upperLimit = '';
      this.setState({ 
        name: name, 
        unit: unit, 
        lowerLimit: lowerLimit, 
        intermediateLimit: intermediateLimit, 
        upperLimit: upperLimit 
      });
    }
  }
  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { measure } = this.props;
    const { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.state;
    measure.name = name; 
    measure.unit = unit; 
    if (lowerLimit === '') {
      measure.lowerLimit = null;
    } else {
      measure.lowerLimit = lowerLimit;
    }
    if (intermediateLimit === '') {
      measure.intermediateLimit = null;
    } else {
      measure.intermediateLimit = intermediateLimit;
    }
    if (upperLimit === '') {
      measure.upperLimit = null;
    } else {
      measure.upperLimit = upperLimit;
    }
    this.props.updateMeasure(measure);
  }
  render() {
    const { name, unit, lowerLimit, intermediateLimit, upperLimit } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div id='flexContainerEdit'> 
        <h1>Update measurement</h1>
        <div id='flexItemEdit'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Measurement name </label>
            <input name='name' type='text' value={name} onChange={handleChange} required />
            <label htmlFor='unit'>Measurement units </label>
            <input name='unit' type='text' value={unit} onChange={handleChange} required />
            <label htmlFor='upperLimit'>Upper limit </label>
            <input name='upperLimit' type='number' value={upperLimit} onChange={handleChange} />
            <label htmlFor='intermediateLimit'>Intermediate limit </label>
            <input name='intermediateLimit' type='number' value={intermediateLimit} onChange={handleChange} />
            <label htmlFor='lowerLimit'>Lower limit </label>
            <input name='lowerLimit' type='number' value={lowerLimit} onChange={handleChange} /><br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ measures }, otherParams) => {
  const id = otherParams.match.params.id;
  const measure = measures.find((measure) => measure.id === Number(id)) || {};
  return {
    measure
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeasures: () => {
      dispatch(getMeasures());
    },
    updateMeasure: (measure) => {
      dispatch(updateMeasure(measure));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMeasure);
