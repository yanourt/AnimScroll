"use strict";

var windowHeight = window.innerHeight;
window.onresize = function () {
    windowHeight = window.innerHeight;
};
function asBuilder() {
    document.addEventListener('scroll', throttle(function (e) {
        var offsetY = window.pageYOffset;
        for (var i = 0; i < AnimScroll.allInstances.length; i++) {
            if (AnimScroll.allInstances[i].aimdiv.offsetTop < offsetY + windowHeight * AnimScroll.allInstances[i].pagePercent && AnimScroll.allInstances[i].aimdiv.offsetTop > offsetY && AnimScroll.allInstances[i].isInside == false) {

                AnimScroll.allInstances[i].addCls();
            } else if (AnimScroll.allInstances[i].isInside == true) {

                if (AnimScroll.allInstances[i].aimdiv.offsetTop > offsetY + windowHeight) {
                    AnimScroll.allInstances[i].removeCls();
                }
            }
        }
    }, 50));
}

function AnimScroll(elem) {
    var pagePercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var clsToadd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "as-isInside";
    var clsToremove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "as-isOutside";

    AnimScroll.allInstances.push(this);
    this.clsToadd = clsToadd;
    this.clsToremove = clsToremove;
    this.pagePercent = pagePercent / 100;
    this.aimdiv = elem;
    if (this.aimdiv.offsetTop > window.pageYoffset && this.aimdiv.offsetTop < window.innerHeight) {
        this.addCls();
    } else {
        this.isInside = false;
        this.aimdiv.classList.add(this.clsToremove);
    }
}

AnimScroll.prototype.addCls = function () {
    this.isInside = true;
    this.aimdiv.classList.remove(this.clsToremove);
    this.aimdiv.classList.add(this.clsToadd);
    console.log(this);
};
AnimScroll.prototype.removeCls = function () {
    this.isInside = false;
    this.aimdiv.classList.remove(this.clsToadd);
    this.aimdiv.classList.add(this.clsToremove);
    console.log(this);
};

AnimScroll.allInstances = [];

function throttle(callback, delay) {
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}