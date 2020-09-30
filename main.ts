let GPA = 0
input.onGesture(Gesture.Shake, function () {
    GPA = randint(80, 100)
    if (GPA < 84) {
        basic.showNumber(randint(80, 84))
        basic.showString("A-")
    } else if (GPA < 89) {
        basic.showNumber(randint(85, 89))
        basic.showString("A")
    } else if (GPA < 100) {
        basic.showNumber(randint(90, 100))
        basic.showString("A+")
    } else {
        basic.showString("A-")
    }
})
