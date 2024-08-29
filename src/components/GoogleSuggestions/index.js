import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchinput: ''}

  updatingSearching = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  updtedlineSearch = name => {
    this.setState({
      searchinput: name,
    })
  }

  render() {
    const {searchinput} = this.state
    const {suggestionsList} = this.props
    const resultSearch = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="img-google"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="sub-card">
          <div className="searchBar">
            <img
              className="img-search"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              onChange={this.updatingSearching}
              placeholder="Search Google"
              className="searching"
              type="search"
            />
          </div>
          <ul className="suggestionDownItems">
            {resultSearch.map(each => (
              <SuggestionItem
                key={each.id}
                func={this.updtedlineSearch}
                name={each.suggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
