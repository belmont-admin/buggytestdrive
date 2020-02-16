input.onButtonPressed(Button.B, function () {
    forward(1000)
})
function forward (ms: number) {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showArrow(ArrowNames.North)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.A, function () {
    countdown = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(countdown)
        basic.pause(500)
        countdown += -1
    }
    basic.showArrow(ArrowNames.North)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.showIcon(IconNames.No)
})
let countdown = 0
basic.showIcon(IconNames.No)
basic.forever(function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
    basic.showIcon(IconNames.SmallDiamond)
})
