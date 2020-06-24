input.onButtonPressed(Button.A, function () {
    if (aAa == 0) {
        nu += 1
        basic.showNumber(nu)
    }
    if (aAa == 1) {
        _2nu += 1
        basic.showNumber(_2nu)
    }
})
input.onButtonPressed(Button.AB, function () {
    aAa = 1
    f = randint(0, 4)
    if (f == 0) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
    } else if (f == 1) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    } else if (f == 2) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
    } else if (f == 3) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(100)
    } else if (f == 4) {
        basic.clearScreen()
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    if (f == 0) {
        basic.clearScreen()
        basic.showNumber(nu + _2nu)
    } else if (f == 1) {
        basic.clearScreen()
        basic.showNumber(nu - _2nu)
    } else if (f == 2) {
        basic.clearScreen()
        basic.showNumber(nu * _2nu)
    } else if (f == 3) {
        basic.clearScreen()
        basic.showNumber(nu / _2nu)
    } else if (f == 4) {
        basic.clearScreen()
        basic.showNumber(nu ** _2nu)
    }
    control.reset()
})
let _2nu = 0
let nu = 0
let f = 0
let aAa = 0
aAa = 0
basic.clearScreen()
f = 0
