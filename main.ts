let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.clear()

let ranges: Array<neopixel.Strip> = [
    strip.range(0, 6),
    strip.range(6, 12),
    strip.range(12, 18),
    strip.range(18, 24),
]

const BRIGHT = 16
let colors: Array<number> = [
    neopixel.rgb(BRIGHT, 0, 0),
    neopixel.rgb(0, BRIGHT, 0),
    neopixel.rgb(0, 0, BRIGHT),
    neopixel.rgb(BRIGHT, BRIGHT, 0),
]

for (let a of [0, 1, 2, 3]) {
    ranges[a].showColor(colors[a])
}

strip.show()

basic.forever(() => {
    strip.rotate(1)
    strip.show()
    basic.pause(20)
})
