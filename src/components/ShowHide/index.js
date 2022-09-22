// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHideFirstName: false, isHideLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({isHideFirstName: !prevState.isHideFirstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({isHideLastName: !prevState.isHideLastName}))
  }

  render() {
    const {isHideFirstName, isHideLastName} = this.state
    const isFirstName = isHideFirstName ? 'Joe' : null
    const isLastName = isHideLastName ? 'Jonas' : null

    const isFirstNameClassName = isHideFirstName ? 'paragraph' : null
    const isLastNameClassName = isHideLastName ? 'paragraph' : null

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <button className="button" type="button" onClick={this.onFirstName}>
            Show/Hide FirstName
          </button>
          <button className="button" type="button" onClick={this.onLastName}>
            Show/Hide LastName
          </button>
        </div>
        <div className="paragraph-container">
          <p className={isFirstNameClassName}>{isFirstName}</p>
          <p className={isLastNameClassName}>{isLastName}</p>
        </div>
      </div>
    )
  }
}

export default ShowHide
