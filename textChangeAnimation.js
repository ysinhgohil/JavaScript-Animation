function animateText(textArea) {
  var text = textArea.value
  var to = text.length, from = 0
  
  animate({
    delay: 20,
    duration: 5000,
    delta: bounce,
    step: function(delta) {
      var result = (to-from) * delta + from
      textArea.value = text.substr(0, Math.ceil(result))
    }
  })
}
