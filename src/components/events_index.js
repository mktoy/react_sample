import React, {Component} from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents } from '../actions'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr Key={event.id}>
        <td>{event.id}</td>
          <Link to='./events/${event.id}'>
            <td>{event.title}</td>
          </Link>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
      <table>
        <thread>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thread>
        <tbody>
          {this.render.Events()}
        </tbody>
      </table>
      <Link to ="/events/new">New Events</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
