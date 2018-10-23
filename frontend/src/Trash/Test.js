import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal} from 'reactstrap'
import {Field, reduxForm} from 'redux-form'

const renderField = ({input, label, type, autoFocus}) => (
  <div>
    <input
      {...input}
      type={type}
      placeholder={label}
      autoFocus={autoFocus}
    />
  </div>
)

class Test extends Component {

  render () {
    const {handleSubmit} = this.props
    return (
      <Modal isOpen={true}>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <Field name="email" type="email" component={renderField} label="Email Address" />
            <Field name="password" type="password" component={renderField} label="Password" autoFocus={true} />
            <button type="submit">Press me</button>
          </fieldset>
        </form>
      </Modal>
    )
  }

}
export default Test;