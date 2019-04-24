import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { postEvent } from '../actions'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values) {
    await this.porops.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="text" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="text" type="text" component={this.renderField} /></div>
        <RaisedButton label="Submit" type="submit" style="{style}" disable={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style="{style}" containerElement={<Link to="/" />} />
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

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventsShowForm', enableReinitialize: true })(EventsNew)
)
