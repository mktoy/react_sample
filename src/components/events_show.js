import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { getEvent, putEvent, deleteEvent } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.match.bind(this)
    if (id) this.props.getEvent(id)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error} } = field

    return (
      <TextField
        hintText={label}
        floatinglabel={label}type={type}
        errorText={ touched, error }
        {...input}
        fullWith={true}
      />
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
        <RaisedButton label="Submit" type="submit" style="{style}" disable={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style="{style}" containerElement={<Link to="/" />} />
        <RaisedButton label="Delete" style="{style}" onClick={this.onDeleteClick} />
      </form>
    )
  }
}

const validate = values => {
   const errors = {}

   if (!values.title) errors.title = "Enter a title, please"
   if (!values.body) errors.body = "Enter a title, please"

   return errors
 }

 const mapStateToProps = (state, ownProps) => {
   const event = state.evvents[ownProps.matchparams.id]
   return { initialValues: event, event }
 }

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)
