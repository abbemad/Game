var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Gameobjects = (function () {
    function Gameobjects(l, x, y, width, height, div) {
        this.level = l;
        this.div = document.createElement(div);
        this.level.div.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Gameobjects.prototype.update = function () {
        this.x += 2;
    };
    Gameobjects.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Gameobjects;
}());
var Bigsnot = (function (_super) {
    __extends(Bigsnot, _super);
    function Bigsnot(l) {
        _super.call(this, l, -10, 30, 200, 200, "snot");
        this.level = l;
    }
    Bigsnot.prototype.update = function () {
        this.x++;
    };
    Bigsnot.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bigsnot;
}(Gameobjects));
var Snot = (function (_super) {
    __extends(Snot, _super);
    function Snot(l) {
        _super.call(this, l, -10, 30, 200, 200, "snot");
        this.level = l;
    }
    Snot.prototype.update = function () {
        this.x++;
    };
    Snot.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Snot;
}(Gameobjects));
var Playerone = (function () {
    function Playerone(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("playerone");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.x = Math.floor(0 + Math.random() * 0);
        this.y = Math.floor(200 + Math.random() * 200);
        this.width = 180;
        this.height = 145;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Playerone.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Playerone.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Playerone.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
    };
    Playerone.prototype.showHit = function (hittwo) {
        if (hittwo) {
            this.div.style.borderColor = "red";
            console.log("gasg");
        }
        else {
            this.div.style.borderColor = "greenyellow";
        }
    };
    return Playerone;
}());
var Playertwo = (function () {
    function Playertwo(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("playertwo");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.x = Math.floor(1600 + Math.random() * 0);
        this.y = Math.floor(200 + Math.random() * 200);
        this.width = 180;
        this.height = 145;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Playertwo.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Playertwo.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Playertwo.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
    };
    Playertwo.prototype.showHit = function (hit) {
        if (hit) {
            this.div.style.borderColor = "red";
        }
        else {
            this.div.style.borderColor = "greenyellow";
        }
    };
    return Playertwo;
}());
var Level = (function () {
    function Level(g) {
        this.game = g;
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.snot = new Snot(this);
        this.bigsnot = new Bigsnot(this);
    }
    Level.prototype.update = function () {
        this.snot.update();
        this.bigsnot.update();
    };
    Level.prototype.draw = function () {
        this.snot.draw();
        this.bigsnot.draw();
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        this.score = 0;
        this.numelements = 0;
        this.timeid = setInterval(this.createElements.bind(this), 1000);
        this.level = new Level(this);
        this.playerone = new Playerone(65, 68, 87, 83);
        this.playertwo = new Playertwo(37, 39, 38, 40);
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.updateScore = function (i) {
        this.score += i;
    };
    Game.prototype.createElements = function () {
        this.snotspawn = new Snotspawn();
        this.numelements++;
        if (this.numelements > 40) {
            clearInterval(this.timeid);
        }
    };
    Game.prototype.gameLoop = function () {
        this.playerone.move();
        this.playertwo.move();
        this.level.update();
        this.level.draw();
        var hit = this.utils.objectsCollide(this.playerone, this.playertwo);
        var hittwo = this.utils.objectsCollidetwee(this.playerone, this.snotspawn);
        this.playerone.showHit(hit);
        this.playertwo.showHit(hit);
        this.playerone.showHit(hittwo);
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Snotspawn = (function () {
    function Snotspawn() {
        var div = document.createElement("snotspawn");
        document.body.appendChild(div);
        var startx = (Math.random() * window.innerWidth);
        var starty = (Math.random() * window.innerHeight);
        div.style.left = startx + "px";
        div.style.top = starty + "px";
        var color = Math.random() * 360;
        div.style.webkitFilter = "hue-rotate(" + color + "deg)";
        div.style.filter = "hue-rotate(" + color + "deg)";
    }
    Snotspawn.prototype.showHit = function (hit) {
        if (hit) {
            console.log("Hallo");
        }
        else {
        }
    };
    return Snotspawn;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.objectsCollide = function (c1, c2) {
        return (c1.x < c2.x + c2.width && c1.x + c1.width > c2.x && c1.y < c2.y + c2.height && c1.height + c1.y > c2.y);
    };
    Utils.prototype.objectsCollidetwee = function (c1, c2) {
        return (c1.x < c2.x + c2.width && c1.x + c1.width > c2.x && c1.y < c2.y + c2.height && c1.height + c1.y > c2.y);
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map