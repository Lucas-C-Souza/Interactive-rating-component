let result

function getVote(number) {
  result = number
  document.getElementById('result').innerHTML = result
  return result
}

function changeBox() {
  if (result == undefined) {
    alert('Choose a review')
  } else {
    let mainBox = document.getElementById('main-box')
    let thanksBox = document.getElementById('thanks-box')

    mainBox.style.display = 'none'
    thanksBox.style.display = 'flex'
  }
  console.log(result)
}
