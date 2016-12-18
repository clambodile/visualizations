// variables: F+-[]
// axiom: F
// rules: F -> FF+[+F-F-F]-[-F+F+F]

var angle
var axiom = "F"
var sentence = axiom
var len = 100

function grammar(input) {
  if (input === "F") { return "FF+[+F-F-F]-[-F+F+F]" }
  else               { return input }
}

function generate() {
  len *= 0.5
  sentence = sentence.split('').map(grammar).join('')
  translate(width/2, height)
  sentence.split('').forEach(turtle)
}

function turtle(input) {
  if      (input === "F") { line(0, 0, 0, -len); translate(0, -len) }
  else if (input === "+") { rotate(angle) }
  else if (input === "-") { rotate(-angle) }
  else if (input === "[") { push() }
  else if (input === "]") { pop() }
}

function setup() {
  createCanvas(400, 400)
  angle = radians(25)
  background(51)
  stroke(255, 100)
  translate(width/2, height)
  turtle(axiom)
  var button = createButton('Generate')
  button.mousePressed(generate)

}
