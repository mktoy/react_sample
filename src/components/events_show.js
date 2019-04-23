import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { getEvents, postEvents, putEvents } from '../actions'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDeleteClick.bind(this)
  }

  conponentDidMount() {
    const { id }
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error} } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  async onDeleteClick () {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }
  async onSubmit(values) {
    await this.porops.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="text" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="text" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disable={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Deletes</Link>
        </div>
      </form>
    )
  }
}

const Validate = value => {
   const errors = {}

   if (!validate.title) errortitle = "Enter a title, please"
   if (!validate.body) errortitle = "Enter a title, please"

   return errors
 }

 const mapStateToProps = (state, ownProps) => {
   const event = state.evvents[ownProps.matchparams.id]
   return { initialValues: event, event }
 }

const mapDispatchToProps = ({ deleteEvents, getEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsShowForm', enableReinitialize: true})(EventsNew)
)
