import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMeasures } from '../store';

class ListMeasures extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getMeasures();
  }
  render() {
    const { measures } = this.props;
    return (
      <Fragment>
        <h1>Measurements:</h1>
        <ul>
          {
            measures.map((measure) => {
              return (
                <li key={measure.id}>
                  <strong>Measure:</strong> <Link to={`/measurements/${measure.id}`}>{measure.name}</Link>
                  <strong>Unit:</strong> {measure.unit}
                </li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    measures: state.measures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeasures: () => {
      dispatch(getMeasures());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMeasures);
