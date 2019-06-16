(function (e) {
    var t = {
        direction: "horizontal",
        arrows: {
            position: "top left",
            offsetX: 0,
            offsetY: 0,
            x: null,
            y: null,
            corners: 0,
            margin: 0,
            direction: "horizontal"
        },
        nav: {
            position: "bottom right",
            offsetX: 0,
            offsetY: 0,
            x: null,
            y: null,
            margin: 0,
            direction: "horizontal"
        },
        labels: {
            position: "top left",
            offsetX: 0,
            offsetY: 0,
            x: null,
            y: null,
            width: null,
            offsetWidth: 0,
            corners: 0,
            margin: 0,
            align: "left",
            effectDirection: "left"
        },
        effect: {
            imageEffect: "slide",
            imageTime: 700,
            imageEase: "easeOutExpo",
            labelEffect: "slide",
            labelDelay: 200,
            labelInterDelay: 100,
            labelTime: 700,
            labelDistance: 220,
            labelEase: "easeOutExpo",
            invalidInTime: 300,
            invalidInEase: "easeOutQuart",
            invalidOutTime: 500,
            invalidOutEase: "easeOutExpo"
        },
        drag: {
            enabled: true,
            minDistance: 40
        },
        invalidDistance: 80,
        controlsVisible: "hover",
        autoplay: {
            enabled: false,
            pauseOnHover: true,
            pauseTime: 5e3
        }
    };
    var n = {
        linear: "linear",
        swing: "ease-in-out",
        easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
        easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
        easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
        easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
        easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
        easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
        easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
        easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
        easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
        easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
    };
    var r = {
        init: function (r) {
            var i = {}, s = {}, o = {}, u = {}, a = {}, f = {}, l = {};
            e.extend(i, t, r);
            if (r.arrows != "disabled") {
                e.extend(s, t.arrows, r.arrows)
            } else {
                s = r.arrows
            }
            i.arrows = s;
            if (r.nav != "disabled") {
                e.extend(o, t.nav, r.nav)
            } else {
                o = r.nav
            }
            i.nav = o;
            if (r.labels != "disabled") {
                e.extend(u, t.labels, r.labels)
            } else {
                u = r.labels
            }
            i.labels = u;
            e.extend(a, t.effect, r.effect);
            i.effect = a;
            e.extend(f, t.drag, r.drag);
            i.drag = f;
            e.extend(l, t.autoplay, r.autoplay);
            i.autoplay = l;
            return this.each(function () {
                function P(t) {
                    var n;
                    switch (t.type) {
                    case "touchstart":
                        n = _.DOWN;
                        break;
                    case "touchmove":
                        n = _.MOVE;
                        break;
                    case "touchend":
                        n = _.UP;
                        break;
                    default:
                        return
                    }
                    var r = t.originalEvent.touches[0];
                    var i;
                    if (n == _.UP) i = B(n, t, null, null);
                    else i = B(n, t, r.pageX, r.pageY);
                    e(t.target).trigger(i)
                }

                function H(t) {
                    var n;
                    switch (t.type) {
                    case "mousedown":
                        n = _.DOWN;
                        break;
                    case "mousemove":
                        n = _.MOVE;
                        break;
                    case "mouseup":
                        n = _.UP;
                        break;
                    default:
                        return
                    }
                    var r = B(n, t, t.pageX, t.pageY);
                    e(t.target).trigger(r)
                }

                function B(t, n, r, i) {
                    return e.Event(t, {
                        pageX: r,
                        pageY: i,
                        originalEvent: n
                    })
                }

                function z(t) {
                    var n = g;
                    var o = true;
                    var u;
                    var a;
                    Q();
                    if (t == undefined) t = "auto";
                    if (typeof t == "number") {
                        n = t
                    } else {
                        if (t == "auto") {
                            if (n + 1 < m) n++;
                            else n = 0
                        } else {
                            if (i.effect.imageEffect == "fade") {
                                if (t == "prev") {
                                    if (n - 1 >= 0) n--;
                                    else n = m - 1
                                } else {
                                    if (n + 1 < m) n++;
                                    else n = 0
                                }
                            } else {
                                if (t == "prev") {
                                    if (n - 1 >= 0) n--;
                                    else o = false
                                } else {
                                    if (n + 1 < m) n++;
                                    else o = false
                                }
                            }
                        }
                    } if (o) {
                        et(g);
                        if (i.effect.imageEffect == "fade") {
                            var f = e(r[n]);
                            V(f);
                            s.append(f);
                            f.css("opacity", 0);
                            f.offset();
                            X(f, {
                                opacity: 1
                            }, i.effect.imageTime, i.effect.imageEase)
                        } else {
                            W();
                            if (i.direction == "horizontal") a = {
                                left: n * -y
                            };
                            else a = {
                                top: n * -b
                            };
                            X(s, a, i.effect.imageTime, i.effect.imageEase, G)
                        }
                        d = setTimeout(function () {
                            Y(n)
                        }, i.effect.labelDelay);
                        g = n;
                        rt()
                    } else {
                        if (i.direction == "horizontal") {
                            u = {
                                left: n * -y
                            };
                            a = {
                                left: u.left + i.invalidDistance * (t == "prev" ? 1 : -1)
                            }
                        } else {
                            u = {
                                top: n * -b
                            };
                            a = {
                                top: u.top + i.invalidDistance * (t == "prev" ? 1 : -1)
                            }
                        }
                        X(s, a, i.effect.invalidInTime, i.effect.invalidInEase, function () {
                            X(s, u, i.effect.invalidOutTime, i.effect.invalidOutEase, G)
                        })
                    }
                }

                function W() {
                    if (p) V(s)
                }

                function X(t, r, i, s, o) {
                    var u, a, f, l = 0,
                        p = 0;
                    if (c) {
                        t.data("transitionProps", r);
                        f = e.extend({}, r);
                        e.each(f, function (e, t) {
                            if (e == "left") {
                                l = t + "px";
                                delete f.left
                            }
                            if (e == "top") {
                                p = t + "px";
                                delete f.top
                            }
                        });
                        u = "all " + i + "ms";
                        if (s) u += " " + n[s];
                        a = "translate3d(" + l + ", " + p + ", 0)";
                        t.css(h + "transition", u).css(h + "transform", a).css(f);
                        if (o) {
                            var d = setTimeout(o, i);
                            t.data("transitionEnd", d)
                        }
                    } else {
                        t.animate(r, i, s, o)
                    }
                }

                function V(t) {
                    var n, r, i, s = 0,
                        o = 0;
                    if (c) {
                        var u = t.data("transitionEnd");
                        if (u) clearTimeout(u);
                        var a = t.data("transitionProps");
                        if (a) {
                            i = K(t);
                            r = e.extend({}, a);
                            e.each(r, function (e, t) {
                                if (e == "left") {
                                    s = i.x + "px";
                                    delete r.left
                                }
                                if (e == "top") {
                                    o = i.y + "px";
                                    delete r.top
                                }
                            });
                            n = "translate3d(" + s + ", " + o + ", 0)";
                            t.css(h + "transition", "all 0ms").css(h + "transform", n).css(r);
                            delete t.data("transitionProps")
                        }
                    } else {
                        t.stop()
                    }
                }

                function J() {
                    var e = document.body.style;
                    var t = ["Khtml", "O", "ms", "Moz", "Webkit", ""];
                    var n = ["-khtml-", "-o-", "-ms-", "-Moz-", "-Webkit-", ""];
                    for (var r = 0; r < t.length; r++) {
                        if (t[r] + "Transition" in e) {
                            if (t[r] == "O") return false;
                            h = n[r];
                            return true
                        }
                    }
                    return false
                }

                function K(e) {
                    var t, n, r, i;
                    t = e.css(h + "transform");
                    n = t.substr(7, t.length - 8).split(", ");
                    return {
                        x: n[4] || 0,
                        y: n[5] || 0
                    }
                }

                function Q() {
                    p = true;
                    if (v) v.stop()
                }

                function G() {
                    p = false;
                    if (v) v.start()
                }

                function Y(t) {
                    var n;
                    if (i.labels != "disabled") {
                        n = e(r[t]).children(".ds-labels");
                        if (n.length) {
                            n.children().each(function (t) {
                                var n = e(this);
                                Z(n, i.effect.labelInterDelay * t + 10)
                            })
                        }
                    }
                }

                function Z(t, n) {
                    var r, s;
                    var o;
                    var u;
                    var a;
                    V(t);
                    if (t.data("timeout")) clearTimeout(t.data("timeout"));
                    r = {
                        opacity: 0
                    };
                    if (i.effect.labelEffect == "slide") {
                        o = i.effect.labelDistance;
                        u = t.data("position");
                        switch (t.data("effectdirection")) {
                        case "left":
                            s = {
                                left: u.left + o
                            };
                            break;
                        case "right":
                            s = {
                                left: u.left - o
                            };
                            break;
                        case "top":
                            s = {
                                top: u.top + o
                            };
                            break;
                        case "bottom":
                            s = {
                                top: u.top - o
                            };
                            break
                        }
                        e.extend(r, s)
                    }
                    X(t, r, 0);
                    r = {
                        opacity: 1
                    };
                    if (i.effect.labelEffect == "slide") {
                        switch (t.data("effectdirection")) {
                        case "left":
                        case "right":
                            if (c) s = {
                                left: 0
                            };
                            else s = {
                                left: u.left
                            };
                            break;
                        case "top":
                        case "bottom":
                            if (c) s = {
                                top: 0
                            };
                            else s = {
                                top: u.top
                            };
                            break
                        }
                        e.extend(r, s)
                    }
                    a = setTimeout(function () {
                        X(t, r, i.effect.labelTime, i.effect.labelEase)
                    }, n);
                    t.data("timeout", a)
                }

                function et(t, n) {
                    var s;
                    var o;
                    var u;
                    if (n == undefined) n = true;
                    if (d) clearTimeout(d);
                    if (i.labels != "disabled") {
                        s = e(r[t]).children(".ds-labels");
                        if (s.length) {
                            e(s).children().each(function () {
                                var t = e(this);
                                V(t);
                                if (t.data("timeout")) clearTimeout(t.data("timeout"));
                                o = {
                                    opacity: 0
                                };
                                if (n) X(t, o, i.effect.labelTime, i.effect.labelEase);
                                else e(this).css(o)
                            })
                        }
                    }
                }

                function tt(e) {
                    z(e.data.type)
                }

                function nt(t) {
                    var n;
                    if (e.type(t) === "array") {
                        switch (t.length) {
                        case 1:
                            n = t[0] + "px";
                            break;
                        case 2:
                            n = t[0] + "px " + t[1] + "px";
                            break;
                        case 3:
                            n = t[0] + "px " + t[1] + "px " + t[2] + "px";
                            break;
                        case 4:
                        default:
                            n = t[0] + "px " + t[1] + "px " + t[2] + "px " + t[3] + "px";
                            break
                        }
                    } else {
                        n = t
                    }
                    return n
                }

                function rt() {
                    if (l) {
                        l.children(".ds-selected").removeClass("ds-selected");
                        e(l.children()[g]).addClass("ds-selected")
                    }
                }

                function it() {
                    return false
                }

                function st(e, t) {
                    var n, r, i, s = false;
                    this.start = function () {
                        if (s) {
                            i = t
                        } else {
                            r = new Date;
                            n = setTimeout(e, t)
                        }
                    };
                    this.stop = function () {
                        clearTimeout(n)
                    };
                    this.pause = function () {
                        s = true;
                        if (!p) {
                            clearTimeout(n);
                            i = t - (new Date - r)
                        }
                    };
                    this.resume = function () {
                        s = false;
                        if (!p) {
                            n = setTimeout(e, i)
                        }
                    };
                    this.start()
                }
                var t = e(this);
                var r = t.children("div");
                var s;
                var o;
                var u;
                var a;
                var f;
                var l;
                var c;
                var h;
                var p = false;
                var d;
                var v;
                var m = r.length;
                var g = 0;
                var y = t.width();
                var b = t.height();
                var w, E, S, x, T, N, C, k, L, A, O, M;
                s = t.children().wrapAll('<div class="ds-slides"></div>').parent();
                r.css({
                    width: y,
                    height: b
                });
                if (i.effect.imageEffect == "fade") {
                    s.addClass("ds-fade-effect");
                    s.append(r[0])
                } else {
                    s.addClass("ds-slide-effect");
                    if (i.direction == "horizontal") {
                        s.addClass("ds-horizontal");
                        s.css("width", y * m)
                    }
                }
                o = t.append('<div class="ds-controls"></div>').children(".ds-controls");
                c = J();
                var _ = {
                    DOWN: "touchmousedown",
                    MOVE: "touchmousemove",
                    UP: "touchmouseup"
                };
                var D = e(document);
                if (!D.data("ds-events")) {
                    if ("ontouchstart" in window) D.on("touchstart touchmove touchend", P);
                    else D.on("mousedown mousemove mouseup", H);
                    D.data("ds-events", true)
                }
                if (i.labels != "disabled") {
                    r.each(function () {
                        var t = e(this).children(".ds-labels");
                        var n = 1;
                        t.each(function () {
                            var t = e(this);
                            var r;
                            var s, o, u, a, f;
                            if (t.data("settings")) {
                                r = i[t.data("settings")]
                            } else {
                                if (n == 1) {
                                    r = i.labels
                                } else {
                                    if (i["labels" + n]) {
                                        r = i["labels" + n]
                                    } else {
                                        r = i.labels
                                    }
                                }
                                n++
                            } if (r.margin) {
                                O = r.margin
                            }
                            if (t.data("margin")) {
                                O = t.data("margin")
                            }
                            if (O) {
                                t.css("margin", nt(O))
                            }
                            t.children("li").each(function () {
                                var n = e(this);
                                n.contents().wrapAll('<span class="content"></span>');
                                if (r.corners) {
                                    L = r.corners
                                }
                                if (t.data("corners")) {
                                    L = t.data("corners")
                                }
                                if (n.data("corners")) {
                                    L = n.data("corners")
                                }
                                n.css("border-radius", nt(L));
                                if (!n.data("effectdirection")) {
                                    n.data("effectdirection", r.effectDirection)
                                }
                            });
                            if (t.data("width")) {
                                s = t.data("width")
                            } else if (r.width != null) {
                                s = r.width
                            } else {
                                s = y - parseInt(t.css("margin-left")) - parseInt(t.css("margin-right"));
                                if (r.offsetWidth || t.data("offsetwidth")) {
                                    s += t.data("offsetwidth") ? t.data("offsetwidth") : r.offsetWidth
                                }
                            }
                            t.css("width", s);
                            a = 0;
                            f = 0;
                            t.children("li").each(function () {
                                var t = e(this);
                                var n = t.children(".content");
                                var r;
                                n.data("width", n.width());
                                n.data("height", n.height());
                                t.css("width", "auto");
                                if (window.getComputedStyle) r = parseFloat(window.getComputedStyle(t[0]).width);
                                else r = e(t[0]).width();
                                s = t.data("width") ? t.data("width") : r;
                                t.css("width", r);
                                s = t.outerWidth();
                                if (s > a) {
                                    a = s
                                }
                            });
                            t.children("li").each(function () {
                                var n = e(this);
                                if (n.data("x") != null) {
                                    S = n.data("x")
                                } else {
                                    o = t.data("align") ? t.data("align") : r.align;
                                    switch (o) {
                                    case "left":
                                        S = 0;
                                        break;
                                    case "center":
                                        S = a / 2 - n.outerWidth() / 2;
                                        break;
                                    case "right":
                                        S = a - n.outerWidth();
                                        break
                                    }
                                    if (n.data("offsetx")) {
                                        S += n.data("offsetx")
                                    }
                                } if (n.data("y") != null) {
                                    x = n.data("y");
                                    n.addClass("ds-separated")
                                } else {
                                    x = f;
                                    if (n.data("offsety")) {
                                        x += n.data("offsety")
                                    }
                                }
                                n.css({
                                    left: S,
                                    top: x
                                });
                                n.data("position", {
                                    left: S,
                                    top: x
                                });
                                f += n.outerHeight(true);
                                if (c) n.css(h + "transition", "all 0ms linear 0s").css(h + "transform", "translate3d(0, 0, 0)")
                            });
                            a = f = 0;
                            t.children("li").each(function () {
                                var t = e(this);
                                var n, r;
                                n = parseInt(t.css("left")) + t.outerWidth();
                                if (n > a) {
                                    a = n
                                }
                                r = parseInt(t.css("top")) + t.outerHeight();
                                if (r > f) {
                                    f = r
                                }
                            });
                            t.css({
                                width: a,
                                height: f
                            });
                            w = r.position.split(" ");
                            u = t.data("labelsposition") ? t.data("labelsposition").split(" ") : w;
                            if (r.x != null || t.data("x") != null) {
                                S = t.data("x") != null ? t.data("x") : r.x
                            } else {
                                switch (u[1]) {
                                case "left":
                                    S = 0;
                                    break;
                                case "center":
                                    S = y / 2 - t.outerWidth(true) / 2;
                                    break;
                                case "right":
                                    S = y - t.outerWidth(true);
                                    break
                                }
                                if (r.offsetX || t.data("offsetx")) {
                                    S += t.data("offsetx") ? t.data("offsetx") : r.offsetX
                                }
                            } if (r.y != null || t.data("y") != null) {
                                x = t.data("y") != null ? t.data("y") : r.y
                            } else {
                                switch (u[0]) {
                                case "top":
                                    x = 0;
                                    break;
                                case "center":
                                    x = b / 2 - t.outerHeight(true) / 2;
                                    break;
                                case "bottom":
                                    x = b - t.outerHeight(true);
                                    break
                                }
                                if (r.offsetY || t.data("offsety")) {
                                    x += t.data("offsety") ? t.data("offsety") : r.offsetY
                                }
                            }
                            t.css({
                                left: S,
                                top: x
                            })
                        })
                    });
                    for (var j = 1; j < m; j++) {
                        et(j, false)
                    }
                } else {
                    r.children(".ds-labels").addClass("ds-disabled")
                } if (i.arrows != "disabled") {
                    u = o.append('<div class="ds-arrows"></div>').children(".ds-arrows");
                    a = u.append('<div class="ds-arrow ds-prev"></div>').children(".ds-prev");
                    a.mousedown(it);
                    a.bind("touchmouseup", {
                        type: "prev"
                    }, tt);
                    f = u.append('<div class="ds-arrow ds-next"></div>').children(".ds-next");
                    f.mousedown(it);
                    f.bind("touchmouseup", {
                        type: "next"
                    }, tt);
                    if (i.arrows.direction == "horizontal") {
                        u.addClass("ds-horizontal")
                    } else {
                        u.addClass("ds-vertical")
                    }
                    w = i.arrows.position.split(" ");
                    if (w[1] == "left-right" || w[0] == "top-bottom" || w[0] == "top-diagonal" || w[0] == "bottom-diagonal") {
                        E = true
                    }
                    if (i.arrows.corners) {
                        L = nt(i.arrows.corners);
                        a.css("border-radius", L);
                        f.css("border-radius", L)
                    }
                    if (i.arrows.margin) {
                        O = nt(i.arrows.margin);
                        if (E) {
                            a.css("margin", O);
                            f.css("margin", O)
                        } else {
                            u.css("margin", O)
                        }
                    }
                    if (i.arrows.x != null) {
                        S = i.arrows.x
                    } else {
                        if (E) {
                            S = 0
                        } else {
                            switch (w[1]) {
                            case "left":
                                S = 0;
                                break;
                            case "center":
                                S = y / 2 - u.outerWidth(true) / 2;
                                break;
                            case "right":
                                S = y - u.outerWidth(true);
                                break
                            }
                        } if (i.arrows.offsetX) {
                            S += i.arrows.offsetX
                        }
                    } if (i.arrows.y != null) {
                        x = i.arrows.y
                    } else {
                        if (E) {
                            x = 0
                        } else {
                            switch (w[0]) {
                            case "top":
                                x = 0;
                                break;
                            case "center":
                                x = b / 2 - u.outerHeight(true) / 2;
                                break;
                            case "bottom":
                                x = b - u.outerHeight(true);
                                break
                            }
                        } if (i.arrows.offsetY) {
                            x += i.arrows.offsetY
                        }
                    }
                    u.css({
                        left: S,
                        top: x
                    });
                    if (E) {
                        u.addClass("ds-separated");
                        if (w.length == 1) {
                            switch (w[0]) {
                            case "top-diagonal":
                                T = 0;
                                N = 0;
                                C = y - f.outerWidth(true);
                                k = b - f.outerHeight(true);
                                break;
                            case "bottom-diagonal":
                                T = 0;
                                N = b - f.outerHeight(true);
                                C = y - a.outerWidth(true);
                                k = 0;
                                break
                            }
                        } else {
                            switch (w[1]) {
                            case "left":
                                T = C = 0;
                                break;
                            case "center":
                                T = C = y / 2 - a.outerWidth(true) / 2;
                                break;
                            case "right":
                                T = C = y - a.outerWidth(true);
                                break;
                            case "left-right":
                                T = 0;
                                C = y - f.outerWidth(true);
                                break
                            }
                            switch (w[0]) {
                            case "top":
                                N = k = 0;
                                break;
                            case "center":
                                N = k = b / 2 - a.outerHeight(true) / 2;
                                break;
                            case "bottom":
                                N = k = b - a.outerHeight(true);
                                break;
                            case "top-bottom":
                                N = 0;
                                k = b - f.outerHeight(true);
                                break
                            }
                        }
                        a.css({
                            left: T,
                            top: N
                        });
                        f.css({
                            left: C,
                            top: k
                        })
                    }
                }
                if (i.nav != "disabled") {
                    A = "";
                    for (var j = 1; j <= s.children().length; j++) {
                        A += "<li></li>"
                    }
                    l = t.append('<ul class="ds-nav">' + A + "</ul>").children(".ds-nav");
                    l.mousedown(it);
                    l.children().bind("touchmouseup", function () {
                        var t = e(this);
                        if (!t.hasClass("ds-selected")) {
                            z(l.children().index(t))
                        }
                    });
                    e(l.children()[0]).addClass("ds-selected");
                    if (i.nav.direction == "horizontal") {
                        l.addClass("ds-horizontal")
                    }
                    if (i.nav.margin) {
                        l.css("margin", nt(i.nav.margin))
                    }
                    w = i.nav.position.split(" ");
                    if (i.nav.x != null) {
                        S = i.nav.x
                    } else {
                        switch (w[1]) {
                        case "left":
                            S = 0;
                            break;
                        case "center":
                            S = y / 2 - l.outerWidth(true) / 2;
                            break;
                        case "right":
                            S = y - l.outerWidth(true);
                            break
                        }
                        if (i.nav.offsetX) {
                            S += i.nav.offsetX
                        }
                    } if (i.nav.y != null) {
                        x = i.nav.y
                    } else {
                        switch (w[0]) {
                        case "top":
                            x = 0;
                            break;
                        case "center":
                            x = b / 2 - l.outerHeight(true) / 2;
                            break;
                        case "bottom":
                            x = b - l.outerHeight(true);
                            break
                        }
                        if (i.nav.offsetY) {
                            x += i.nav.offsetY
                        }
                    }
                    l.css({
                        left: S,
                        top: x
                    })
                }
                if (i.drag.enabled && i.effect.imageEffect == "slide") {
                    var F, I;
                    s.addClass("ds-drag");
                    var q = {
                        start: -(m - 1) * (i.direction == "vertical" ? b : y) - i.invalidDistance,
                        end: i.invalidDistance
                    };

                    function R(t) {
                        W();
                        Q();
                        F = g * (i.direction == "horizontal" ? -y : -b);
                        s.addClass("ds-draggable");
                        var n = s.offset().left - t.pageX - s.parent().offset().left;
                        var r = s.offset().top - t.pageY - s.parent().offset().top;
                        s.parents().bind("touchmousemove", function (e) {
                            var t, o = 0,
                                u = 0;
                            if (i.direction == "vertical") {
                                o = 0;
                                u = e.pageY + r;
                                if (u < q.start) u = q.start;
                                if (u > q.end) u = q.end;
                                u += "px"
                            } else {
                                o = e.pageX + n;
                                if (o < q.start) o = q.start;
                                if (o > q.end) o = q.end;
                                o += "px";
                                u = 0
                            } if (c) {
                                t = "translate3d(" + o + ", " + u + ", 0)";
                                s.css(h + "transition", "all 0ms").css(h + "transform", t)
                            } else {
                                var a = i.direction == "horizontal" ? {
                                    left: o
                                } : {
                                    top: u
                                };
                                s.css(a)
                            }
                            return false
                        });
                        t.preventDefault();
                        e(document).bind("touchmouseup", U)
                    }

                    function U() {
                        s.parents().unbind("touchmousemove");
                        e(document).unbind("touchmouseup");
                        if (c) {
                            var t = K(s);
                            I = i.direction == "horizontal" ? t.x : t.y
                        } else I = parseInt(i.direction == "horizontal" ? s.css("left") : s.css("top"));
                        var n = I > F ? "prev" : "next";
                        if (Math.abs(F - I) >= i.drag.minDistance && (n == "prev" && g != 0 || n == "next" && g != m - 1)) {
                            z(n)
                        } else {
                            i.direction == "horizontal" ? target = {
                                left: F
                            } : target = {
                                top: F
                            };
                            X(s, target, i.effect.invalidOutTime, i.effect.invalidOutEase, G)
                        }
                    }
                    s.bind("touchmousedown", R).bind("touchmouseup", U)
                } else {
                    r.children("img").bind("touchmousedown", it).bind("touchmouseup", function () {
                        z("next")
                    })
                } if (i.controlsVisible == "hover") {
                    o.css("opacity", 0);
                    t.hover(function () {
                        V(o);
                        X(o, {
                            opacity: 1
                        }, 450, "easeOutExpo")
                    }, function () {
                        V(o);
                        X(o, {
                            opacity: 0
                        }, 250, "easeOutExpo")
                    })
                }
                if (i.autoplay.enabled) {
                    v = new st(z, i.autoplay.pauseTime);
                    if (i.autoplay.pauseOnHover) {
                        t.hover(function () {
                            v.pause()
                        }, function () {
                            v.resume()
                        })
                    }
                }
                if (c) s.css(h + "transition", "all 0ms").css(h + "transform", "translate3d(0, 0, 0)")
            })
        }
    };
    e.fn.dynamicSlider = function (t) {
        if (r[t]) {
            return r[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return r.init.apply(this, arguments)
        } else {
            e.error("Method " + t + " does not exist on jQuery.dynamicSlider")
        }
    }
})(jQuery)

/**
 * jQuery UI easing
 * http://jqueryui.com
 */
jQuery.effects || function (e, t) {
    (function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
            t[n] = function (t) {
                return Math.pow(t, e + 2)
            }
        });
        e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function (e) {
                return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function (e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function (e) {
                var t, n = 4;
                while (e < ((t = Math.pow(2, --n)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
            }
        });
        e.each(t, function (t, n) {
            e.easing["easeIn" + t] = n;
            e.easing["easeOut" + t] = function (e) {
                return 1 - n(1 - e)
            };
            e.easing["easeInOut" + t] = function (e) {
                return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
            }
        })
    })()
}(jQuery)