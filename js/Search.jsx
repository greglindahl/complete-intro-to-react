const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// this is an example of a template stirng in ES6:
// `public/img/poster/${show.poster}`
// this is the same as writing it as: 'public/img/poster' + show.poster (string concatination)

// ** show={show} passes the whole {show} object to props, however
// the {...show} (spread operator) flattens the object and passes everything as well
// show={show} is the same as saying {...show}

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input
            value={this.state.searchTerm}
            className='search-input'
            type='text'
            placeholder='Search'
            onChange={this.handleSearchTermEvent}
          />
        </header>
        <div className='shows'>
        {data.shows
          .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((show) => {
            return (
              <ShowCard {...show} key={show.imdbID} />
          )
          })}
        </div>
      </div>
    )
  }
})

module.exports = Search
