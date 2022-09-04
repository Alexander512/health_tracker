import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import ListMeasures from './components/ListMeasures.js';
import Measurements from './components/Measurements.js';
import {me} from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  render() {
    const {isLoggedIn} = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Fragment>
            <Route path='/measures' component={ListMeasures} />
            <Route path='/measurements/:id' component={Measurements} />
            <Redirect to='/measures' />
          </Fragment>
        ) : (
          <Switch>
            <Route path='/' component={Login} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
