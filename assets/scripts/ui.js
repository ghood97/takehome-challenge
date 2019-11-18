
const onSearchSuccess = (response) => {
  console.log(response)
}

const onSearchFailure = (response) => {
  console.error(response)
}

module.exports = {
  onSearchSuccess,
  onSearchFailure
}