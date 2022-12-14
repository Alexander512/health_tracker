import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeasure } from '../store';

class CreateMeasure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      unit: ''
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
    let { name, unit } = this.state;
    this.props.createMeasure({ 
      name: name,
      unit: unit,
      userId: auth.id
    }); 
    this.setState({
      name: '',
      unit: '',
    });
  }
  render() {
    const { name, unit } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div id='flexContainerCreate'> 
        <h1>New Measurement</h1>
        <div id='flexItemCreate'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>measurement name </label>
            <input name='name' type='text' value={name} onChange={handleChange} required />
            <label htmlFor='unit'>measurement units </label>
            <input name='unit' type='text' value={unit} onChange={handleChange} required />
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

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createMeasure: (measure) => {
      dispatch(createMeasure(measure, history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeasure);
