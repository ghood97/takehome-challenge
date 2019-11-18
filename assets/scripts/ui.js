const gifTemplate = require('./templates/gif.handlebars')

const onSearchSuccess = (response) => {
  console.log(response)
  const gifHtml = gifTemplate({gifs: response.data})
  $('.gif-container').html('')
  $('.gif-container').append(gifHtml)
  $('#query').val('')
}

const onSearchFailure = (response) => {
  console.error(response)
}

module.exports = {
  onSearchSuccess,
  onSearchFailure
}
