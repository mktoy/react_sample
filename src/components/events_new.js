import React, {Component} from 'react';
import { connect } from 'react-redux'
// import { postEvents } from '../actions'
import { Link } from 'react-router-dom'

class EventsNew extends Component {

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(EventsNew)
