import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMarkAndConductMarkAction } from '@containers/App/action';

class TestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.props.updateMarkAndConductMark({
            mark: this.props.mark,
            conductMark: this.props.conductMark,
          })}
        >
          Check Classification
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.testButton.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMarkAndConductMark: ({ mark, conductMark }) =>
      dispatch(updateMarkAndConductMarkAction({ mark, conductMark })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestButton);
