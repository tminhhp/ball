/*
 * Thu commit ty xem nao
 */

function Ball(radius, x, y) {
    if (typeof radius == "number") {
        this.radius = radius;
    }
    if (typeof x == "number") {
        this.x = x;
    }
    if (typeof y == "number") {
        this.y = y;
    }
    this.speedX = 5;
    this.speedY = 5;
    this.anpha = 1;
}

Ball.prototype.setRadius = function (radius) {
    if (typeof radius == "number"){
        this.radius = radius;
        return true;
    } else {
        return false;
    }
}

Ball.prototype.setSpeadX = function (speadX) {
    if (typeof speadX == "number") {
        this.speedX = speadX;
        return true;
    } else {
        return false;
    }
}

Ball.prototype.setSpeadY = function (speadY) {
    if (typeof speadY == "number") {
        this.speedX = speadY;
        return true;
    } else {
        return false;
    }
}

Ball.prototype.setX = function (x) {

}

Ball.prototype.setY = function (x) {

}

Ball.prototype.getX = function () {

}

Ball.prototype.getY = function () {

}

Ball.prototype.move = function () {
    this.x += this.speedX;
    this.y += this.speedY;
}

Ball.prototype.draw = function (context) {
    context.beginPath();
    context.fillStyle = "rgba(255, 100, 100," + this.anpha + ")";
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    context.fill();
    context.closePath();
}