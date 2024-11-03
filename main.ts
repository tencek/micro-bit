let x = 0
let y = 0
basic.forever(function () {
    music.setVolume(30)
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 50) {
        music.stopAllSounds()
        basic.showIcon(IconNames.Chessboard)
    } else {
        if (Math.abs(y) > 50) {
            music.stopAllSounds()
            basic.showIcon(IconNames.Chessboard)
        } else {
            music.ringTone(349)
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
