import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { postEvents } from '../actions'
import { Link } from 'react-router-dom'

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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

  async onSubmit(values) {
    await this.porops.postEvent(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="text" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="text" type="text" component={this.renderField} /></div>
        <div>
          <input type="submit" value="Submit" disable={pristine, submitting} />
          <Link to="/"> Cancel</Link>
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

const mapDispatchToProps = ({ postEvents })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
