"use strict";

function Rectangle(left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;
    this.renderShape = function(canvasCtx) {
        return canvasCtx.fillRect(this.left, this.top, this.width, this.height);
    };
}

Rectangle.prototype = new Shape();
registerClassicalShape('Rectangle', Rectangle);

function Circle(left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;
    this.renderShape = function(canvasCtx) {
        canvasCtx.beginPath();
        canvasCtx.arc(this.left, this.top, this.height/2, 0, (Math.PI * 2));
        return canvasCtx.fill();
    }
}

Circle.prototype = new Shape();
registerClassicalShape('Circle', Circle);

function Taco(left, top, width, height, stylesMap) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.stylesMap = stylesMap;
    this.renderShape = function(canvasCtx) {
        var gradient = canvasCtx.createLinearGradient(0,0, document.getElementById("shapes-canvas").width, 0);
        gradient.addColorStop("0", "blue");
        gradient.addColorStop("0.5", "green");
        gradient.addColorStop("1.0", "red");
        canvasCtx.fillStyle = gradient;
        return canvasCtx.fillText("TACO", this.left, this.top);
    }
}

Taco.prototype = new Shape();
registerClassicalShape('Taco', Taco);