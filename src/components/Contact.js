import React, { Component } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    validField: false,
    formError: false,
    formSuccess: false,
    formTextNecesary: false,
  }

  handleInputChange = async event => {
    const { name, value } = event.target
    await this.setState({
      [name]: value,
    })
    await this.validateForm()
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    })
      .then(async () => {
        await alert("Success!")
        await this.displaySuccess()
      })
      .catch(async error => {
        await alert(error)
        await this.displayError()
      })

  }

  validateForm = () => {
    if (
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.message.length > 0
    ) {
      this.setState({
        validField: true,
      })
    } else {
      this.setState({
        validField: false,
      })
    }
  }

  displaySuccess = async() => {
    // await e.preventDefault()
    await console.log("SUCCESS")
    await this.setState({
      name: "",
      email: "",
      message: "",
      formTextNecesary: true,
      formSuccess: true,
    })
    await setTimeout(() => {
      this.setState({
        formTextNecesary: false,
        formSuccess: false,
      })
    }, 2000)
  }

  displayError = async () => {
    await this.setState({
      formTextNecesary: true,
      formError: true,
    })
    await setTimeout(() => {
      this.setState({
        formTextNecesary: false,
        formError: false,
      })
    }, 2000)
  }

  render() {
    return (
      <div id="contact">
        <div className="section-title">Contact Us</div>
        <form
          className="contact-form"
          name="Clutch Sports Contact Form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          data-netlify="true"
          onSubmit={e => this.handleSubmit(e)}
        >
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input type="hidden" name="form-name" value="Clutch Sports Contact Form" />
              {/* Don’t fill this out if you're human: <input name="bot-field" name="form-name" value="Clutch Sports Contact Form" /> */}
            </label>
          </p>
          <p className="form-item">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </p>
          <p className="form-item">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </p>
          <p className="form-item">
            <textarea
              name="message"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleInputChange}
            ></textarea>
          </p>
          <div className="form-submit-button">
            {this.state.validField ? (
              <button
                className="valid-button"
                type="submit"
                // onClick={e => this.displaySuccess(e)}
              >
                Send
              </button>
            ) : (
              <button onClick={e => this.displayError()}>Send</button>
            )}
          </div>
          {this.state.formTextNecesary ? (
            <div className="form-feedback">
              <div className="error-text">
                {this.state.formError ? (
                  <div className="error-visible">
                    Please Fill Out Entire Form
                  </div>
                ) : (
                  <div className="error"></div>
                )}
              </div>
              <div className="success-text">
                {this.state.formSuccess ? (
                  <div className="success-visible">
                    Your Message Has Been Sent!
                  </div>
                ) : (
                  <div className="success"></div>
                )}
              </div>
            </div>
          ) : (
            <div className="form-feedback"></div>
          )}
        </form>
      </div>
    )
  }
}

export default Contact
