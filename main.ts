function countdown () {
    start = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(start)
        basic.pause(500)
        start += -1
    }
}
function stop () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.showIcon(IconNames.Happy)
}
function spin (ms: number) {
    basic.showArrow(ArrowNames.East)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(ms)
    stop()
}
function forward (ms: number) {
    basic.showArrow(ArrowNames.North)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(ms)
    stop()
}
input.onButtonPressed(Button.A, function () {
    countdown()
    forward(1000)
    spin(500)
    forward(1000)
    forward(1000)
    spin(500)
    forward(1000)
})
let start = 0
basic.showIcon(IconNames.Happy)
