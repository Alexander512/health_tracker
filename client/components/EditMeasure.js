import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeasures, updateMeasure } from '../store';

class EditMeasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      unit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getMeasures();
    const { name, unit } = this.props.measure;
    this.setState({ 
      name: name, 
      unit: unit
    });
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.measure.id && this.props.measure.id) {
      const { name, unit } = this.props.measure;
      this.setState({ 
        name: name, 
        unit: unit
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
    const { name, unit } = this.state;
    measure.name = name; 
    measure.unit = unit; 
    this.props.updateMeasure(measure);
  }
  render() {
    const { name, unit } = this.state;
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
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ measures }, otherParams) => {
  const id = otherParams.match.params.id;
  const measure = measures.find((measure) => measure.id === Number(id)) || { name: '', unit: '' };
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
