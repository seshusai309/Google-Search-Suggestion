import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {name, func} = this.props
    const clckedButton = () => {
      func(name)
    }
    return (
      <li className="suggestion-item">
        <p className="para">{name}</p>
        <button onClick={clckedButton} className="btn" type="button">
          <img
            className="img-arrow"
            alt="arrow"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
