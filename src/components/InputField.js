import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.maxLength = 140
    this.state = {
      textLength: 0
    }
  }
  
  componentDidMount() {
    document.querySelectorAll('textarea')[0].focus()
  }
  
  keyUp(event) {
    delete this.edit
    let body = event.target.value
    if (body.length > this.maxLength) {
      body = body.substring(0, this.maxLength)
      event.target.value = body
      this.setState({ textLength: this.maxLength })
    }
    this.setState({ textLength: body.length })
    if (event.keyCode === 13) {
      if (body) this.props.onAddItem(body)
      event.target.value = ''
      this.setState({ textLength: 0 })
    }
  }

  render() {
  	const remaining = Math.max(0, this.maxLength - this.state.textLength)
    return (
      <div
        style={{
          width: 300,
          margin: '-2px auto 38px auto'
        }}
      >
        <Textarea
          placeholder='disruptive idea...'
          style={{
            border: 0,
            width: 280,
            padding: 10,
            fontSize: '1.5em',
            outline: 'none',
            resize: 'none',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none'
          }}
          onKeyUp={this.keyUp.bind(this)}
          onKeyPress={e => (e.key === 'Enter') ? e.preventDefault() : null}
        ></Textarea>
        <div
          style={{
          	textAlign: 'right',
            fontSize: '0.7em',
            color: (remaining < 15) ? 'red' : '#acacac',
            opacity: (remaining === this.maxLength) ? '0' : '1'
          }}
        >
          {remaining} characters remaining
        </div>
      </div>
    )
  }
}

export default InputField