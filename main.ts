input.onButtonPressed(Button.A, function () {
    a = 0
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    a = 1
    led.enable(true)
})
let a = 0
a = 0
basic.forever(function () {
    if (a == 1) {
        led.toggle(2, 2)
        basic.pause(25)
        led.toggle(1, 2)
        led.toggle(3, 2)
        led.toggle(2, 1)
        led.toggle(2, 3)
        basic.pause(25)
        led.toggle(2, 4)
        led.toggle(2, 0)
        led.toggle(4, 2)
        led.toggle(0, 2)
        led.toggle(1, 1)
        led.toggle(1, 3)
        led.toggle(3, 3)
        led.toggle(3, 1)
        basic.pause(25)
        led.toggle(0, 1)
        led.toggle(3, 0)
        led.toggle(0, 3)
        led.toggle(1, 0)
        led.toggle(4, 1)
        led.toggle(1, 4)
        led.toggle(3, 4)
        led.toggle(4, 3)
        basic.pause(25)
        led.toggle(0, 0)
        led.toggle(0, 4)
        led.toggle(4, 0)
        led.toggle(4, 4)
    }
})
