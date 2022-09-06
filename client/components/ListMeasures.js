import React, { Component } from 'react';
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
    const { filteredMeasures, deleteMeasure } = this.props;
    return (
      <div id='flexContainerMeasurements'>
        <h1>Measurements</h1>
        <ul>
          {
            filteredMeasures.map((measure) => {
              return (
                <li id='flexContainerList' key={measure.id}>
                  <span id='flexItemList1'>
                    <Link to={`/measurements/${measure.id}`}>{measure.name}</Link>
                  </span>
                  <span id='flexItemList2'><strong>unit:&nbsp;</strong>{measure.unit}</span>
                  <span id='flexItemList3'><Link to={`/measures/${measure.id}/edit`}>edit</Link></span>
                  <span id='flexItemList4'><button onClick={() => deleteMeasure(measure.id)}>delete</button></span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, measures }) => {
  const filteredMeasures = measures.filter((measure) => measure.userId === auth.id);
  return { 
    filteredMeasures
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
