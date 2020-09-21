import React from 'react';
import { connect } from 'react-redux';

export default (ChildComponen) => {
  class ComposedComponen extends React.Component {
    componentDidMount() {
      this.haruskahLogin();
    }

    componentDidUpdate() {
      this.haruskahLogin();
    }

    haruskahLogin() {
      if (!this.props.auth) {
        this.props.history.push('/');
        console.log('leave it !!!');
      }
    }

    render() {
      return <ChildComponen {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponen);
};
