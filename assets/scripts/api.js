const API_KEY = 'G7UeXKtRLcPOfRfGRffJ5zH2LmLi2LE6'

const search = (str) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${str}&limit=2`
  })
}

module.exports = {
  search
}
