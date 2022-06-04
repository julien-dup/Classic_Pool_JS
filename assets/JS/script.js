function canvas2d() {

    this.canvas = document.getElementById('canvas')

    this.ctx = canvas.getContext('2d')

    this.width = window.innerWidth
    this.height = window.innerHeight
    this.image = new Image()
    this.image.src = '../img/table.jpg'


    canvas2d.drawImage({ x: 0, y: 0 }, image)

}



const ArrayYellowBall = []

class yellowBall {
    constructor() {
        this.width = 50,
            this.height = 50,
            this.x = 50,
            this.y = 50,
            this.markedForDeletion = false,
            this.color = "yellow"
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function game() {
    ArrayYellowBall.push(new yellowBall())
    ArrayYellowBall.forEach(object => object.draw())
}

game()