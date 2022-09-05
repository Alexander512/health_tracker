import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMeasures, getMeasurements, createMeasurement } from '../store';
import TimeSeriesVis from './TimeSeriesVis.js';

class Measurements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measurementValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getMeasures();
    this.props.getMeasurements();
  }
  handleChange(event) {
    const change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    const { measure } = this.props;
    const { measurementValue } = this.state;
    this.props.createMeasurement({ value: measurementValue, measureId: measure.id });
  }
  render() {
    const { filteredMeasurements } = this.props;
    const { measurementValue } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Fragment>
        <h1>Measurements:</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='measurementValue'>Enter measurement: </label>
          <input name='measurementValue' type='number' value={measurementValue} onChange={handleChange} required />
          <button>Submit</button>
        </form>
        <TimeSeriesVis measurements={filteredMeasurements} />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ measures, measurements}, otherParams) => {
  const id = otherParams.match.params.id;
  const measure = measures.find((measure) => measure.id === Number(id)) || {};
  const filteredMeasurements = measurements.filter((measurement) => measurement.measureId === Number(id)) || [];
  return {
    measure,
    filteredMeasurements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeasures: () => {
      dispatch(getMeasures());
    },
    getMeasurements: (id) => {
      dispatch(getMeasurements(id));
    },
    createMeasurement: (measurement) => {
      dispatch(createMeasurement(measurement));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Measurements);
