const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener = function(e) {
    let expected = code[index]
    let actual = parseInt(e.detail || e.which);
    if (expected === actual) {
      index++
      if (array.length === code.length) {
        alert('you won')
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}

init()
