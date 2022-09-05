import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMeasures, deleteMeasure } from '../store';

class ListMeasures extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getMeasures();
  }
  render() {
    const { auth, measures, deleteMeasure } = this.props;
    const filteredMeasures = measures.filter((measure) => measure.userId === auth.id);
    return (
      <Fragment>
        <h1>Measurements:</h1>
        <ul>
          {
            filteredMeasures.map((measure) => {
              return (
                <li key={measure.id}>
                  <strong>Measure:</strong> <Link to={`/measurements/${measure.id}`}>{measure.name}</Link>
                  <strong>Unit:</strong> {measure.unit}
                  <button onClick={() => deleteMeasure(measure.id)}>Delete</button>
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
    auth: state.auth,
    measures: state.measures
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMeasures: () => {
      dispatch(getMeasures());
    },
    deleteMeasure: (id) => {
      dispatch(deleteMeasure(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMeasures);
