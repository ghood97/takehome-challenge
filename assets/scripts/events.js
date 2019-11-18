const api = require('./api.js')
const ui = require('./ui.js')

const onSearchSubmit = (event) => {
  event.preventDefault()
  const queryStr = $('#query').val()
  api.search(queryStr)
    .then(ui.onSearchSuccess)
    .catch(ui.onSearchFailure)
}

module.exports = {
  onSearchSubmit
}
