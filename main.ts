let x = 0
let y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        if (Math.abs(y) > 32) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
