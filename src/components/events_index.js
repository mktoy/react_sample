import React, {Component} from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { readEvents } from '../actions'
import { Link } from 'react-router-dom'
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableBody
} from 'material-ui'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow Key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
          <Link to='./events/${event.id}'>
            <TableRowColumn>{event.title}</TableRowColumn>
          </Link>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12s
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement=[<Link to ="/events/new" />] />
        <ContentAdd />
        <Table>
          <TableHeader
          disPlaySelectAll={false},
          adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody disPlayRowCheckBox={false}>
            {this.render.Events()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
