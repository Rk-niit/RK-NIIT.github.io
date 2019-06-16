$(function () {
    function a(e, t) {
        if (t == undefined) {
            t = true
        }
        i = e;
        $(".dynamic-slider").remove();
        y();
        if (t) {
            setTimeout(function () {
                f(e)
            }, 300)
        } else {
            f(e)
        }
        $("#nav-list li.selected").removeClass("selected");
        $("#nav-list li:nth-child(" + e + ")").addClass("selected")
    }

    function f(e) {
        var t = (e - 1) * 5;
        var n = t + 5;
        for (var i = t; i < n; i++) {
            l(r[i])
        }
        b()
    }

    function l(n) {
        var r = "#layout" + n;
        var i = $.extend({}, t, e["layout" + n]);
        $("#container").append($(".layout" + n).clone().attr("class", "dynamic-slider slider" + n));
        $(".slider" + n).dynamicSlider(i)
    }

    function c(e) {
        t.controlsVisible = e;
        d()
    }

    function h(e) {
        t.effect.imageEffect = e;
        d()
    }

    function p(e) {
        $("#theme-file").attr("href", "dynamic-slider/themes/" + e + "/theme.css");
        d()
    }

    function d() {
        a(i)
    }

    function v() {
        var e = Math.ceil(r.length / 5);
        var t = "";
        for (var n = 1; n <= e; n++) {
            t += "<li>" + n + "</li>"
        }
        $("#nav-list").append(t).children("li").mousedown(w).click(function () {
            var e = $(this);
            if (!e.hasClass("selected")) {
                var t = $("#nav-list li").index(e) + 1;
                a(t)
            }
        });
        $("#nav-prev").mousedown(w).click(function () {
            if (i - 1 > 0) {
                a(i - 1)
            }
        });
        $("#nav-next").mousedown(w).click(function () {
            if (i + 1 <= 10) {
                a(i + 1)
            }
        })
    }

    function m() {
        n = true;
        $("#desc-list").toggle();
        $("#desc-button-label").html("Close")
    }

    function g() {
        n = false;
        $("#desc-list").toggle();
        $("#desc-button-label").html("Open")
    }

    function y() {
        $("#preloader").show()
    }

    function b() {
        $("#preloader").hide()
    }

    function w() {
        return false
    }
    var e = {
        layout1: {
            direction: "horizontal",
            arrows: {
                position: "bottom left-right",
                corners: 0,
                margin: 0,
                direction: "horizontal"
            },
            nav:false,
            labels: {
                position: "bottom center",
                offsetY: 0,
                offsetWidth: -90,
                corners: 0,
                margin: 0,
                align: "center",
                effectDirection: "top"
            }
        },
        layout2: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -24,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            }
        },
        layout3: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -24,
                offsetWidth: -90,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout4: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -24,
                offsetWidth: -120,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout5: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "top center",
                offsetWidth: -90,
                corners: 2,
                margin: 8,
                align: "center",
                effectDirection: "bottom"
            },
            labels2: {
                position: "bottom center",
                offsetY: -24,
                offsetWidth: -90,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout6: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -54,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 2, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -24,
                corners: [2, 0, 0, 2],
                margin: [2, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout7: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "top left",
                offsetY: 20,
                offsetWidth: -120,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -24,
                offsetWidth: -120,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout8: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"

            },
            labels: {
                position: "bottom left",
                offsetY: -24,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -24,
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout9: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                x: 70,
                y: 50,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout10: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "center left",
                offsetX: 70,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout11: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                corners: 2,
                effectDirection: "left"
            }
        },
        layout12: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout13: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            }
        },
        layout14: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout15: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetWidth: -120,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout16: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -30,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 2, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                corners: [2, 0, 0, 2],
                margin: [2, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout17: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout18: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom right",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            }
        },
        layout19: {
            direction: "horizontal",
            arrows: {
                position: "center left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top right",
                margin: 21,
                direction: "horizontal"
            },
            labels: {
                position: "top left",
                offsetY: 15,
                offsetWidth: -120,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -10,
                offsetWidth: -120,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout20: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                offsetY: -31,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout21: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom left",
                offsetY: -31,
                corners: [0, 2, 2, 0],
                margin: [0, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            }
        },
        layout22: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                offsetY: -31,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout23: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                offsetY: -31,
                offsetWidth: -120,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout24: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "center left",
                offsetX: 30,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout25: {
            direction: "vertical",
            arrows: {
                position: "top-bottom center",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                corners: 2,
                effectDirection: "left"
            }
        },
        layout26: {
            direction: "horizontal",
            arrows: {
                position: "bottom left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetWidth: 90,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout27: {
            direction: "horizontal",
            arrows: {
                position: "bottom left-right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetWidth: -180,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout28: {
            direction: "vertical",
            arrows: {
                position: "top-bottom right",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 13,
                direction: "vertical"
            },
            labels: {
                position: "bottom left",
                offsetWidth: -38,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout29: {
            direction: "vertical",
            arrows: {
                position: "top-bottom right",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                margin: 13,
                direction: "vertical"
            },
            labels: {
                position: "center left",
                offsetX: 30,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout30: {
            direction: "horizontal",
            arrows: {
                position: "bottom-diagonal",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom right",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                corners: 2,
                effectDirection: "left"
            }
        },
        layout31: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -35,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout32: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -35,
                offsetWidth: -76,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout33: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -35,
                offsetWidth: -120,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout34: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -65,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 2, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -35,
                corners: [2, 0, 0, 2],
                margin: [2, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout35: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -34,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -34,
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout36: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top right",
                margin: 21,
                direction: "horizontal"
            },
            labels: {
                position: "top left",
                offsetY: 15,
                offsetWidth: -120,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -34,
                offsetWidth: -120,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout37: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom right",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -34,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -34,
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout38: {
            direction: "horizontal",
            arrows: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom right",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "center left",
                offsetX: 20,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout39: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                offsetY: -24,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout40: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -24,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            }
        },
        layout41: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -54,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 2, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -24,
                corners: [2, 0, 0, 2],
                margin: [2, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout42: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                offsetY: -24,
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetY: -24,
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout43: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "center left",
                offsetX: 20,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout44: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout45: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "top center",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "bottom left",
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            labels2: {
                position: "bottom right",
                offsetWidth: -35,
                corners: [2, 0, 0, 2],
                margin: [4, 0, 4, 4],
                align: "right",
                effectDirection: "left"
            }
        },
        layout46: {
            direction: "horizontal",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "horizontal"
            },
            nav: {
                position: "bottom right",
                margin: 8,
                direction: "horizontal"
            },
            labels: {
                position: "center left",
                corners: [0, 2, 2, 0],
                margin: [4, 4, 4, 0],
                align: "left",
                effectDirection: "right"
            },
            effect: {
                labelInterDelay: 50
            }
        },
        layout47: {
            direction: "vertical",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center left",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        },
        layout48: {
            direction: "vertical",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center left",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout49: {
            direction: "vertical",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 4,
                direction: "vertical"
            },
            nav: {
                position: "center left",
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "bottom center",
                offsetWidth: -120,
                corners: 2,
                margin: 4,
                align: "center",
                effectDirection: "top"
            }
        },
        layout50: {
            direction: "vertical",
            arrows: {
                position: "center right",
                corners: 2,
                margin: 8,
                direction: "vertical"
            },
            nav: {
                position: "center right",
                offsetX: -39,
                margin: 8,
                direction: "vertical"
            },
            labels: {
                position: "center left",
                offsetX: 20,
                corners: 2,
                margin: 4,
                align: "left",
                effectDirection: "left"
            }
        }
    };
    var t = {
        effect: {
            imageEffect: "slide",
            imageTime: 700,
            imageEase: "easeOutExpo",
            labelEffect: "slide",
            labelDelay: 200,
            labelInterDelay: 100,
            labelTime: 700,
            labelDistance: 220,
            labelEase: "easeOutExpo"
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
        drag: {
            enabled: true,
            minDistance: 40
        },
        invalidDistance: 80,
        controlsVisible: "hover",
        autoplay: {
            enabled: true,
            pauseOnHover: true,
            pauseTime: 5e3
        }
    };
    var n = false;
    var r = [1, 22, 32, 2, 43, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 23, 24, 25, 39, 40, 41, 42, 31, 33, 34, 35, 36, 37, 38, 12, 13, 14, 15, 16, 17, 18, 19, 26, 27, 44, 45, 46, 47, 48, 49, 50, 28, 29, 30];
    var i = 0;
    v();
    b();
    a(1, false);
    $("#desc-button").click(function () {
        if (n) g();
        else m()
    });
    var s = $("#theme").find("li");
    s.mousedown(w).click(function () {
        var e = $(this);
        if (!e.hasClass("selected")) {
            $("#theme .selected").removeClass("selected");
            e.addClass("selected");
            var t = e.html().toLowerCase().replace(" ", "");
            p(t)
        }
    });
    var o = $("#controls").find("li");
    o.mousedown(w).click(function () {
        var e = $(this);
        if (!e.hasClass("selected")) {
            $("#controls .selected").removeClass("selected");
            e.addClass("selected");
            var t = e.html().toLowerCase().replace(" ", "");
            c(t)
        }
    });
    var u = $("#effect").find("li");
    u.mousedown(w).click(function () {
        var e = $(this);
        if (!e.hasClass("selected")) {
            $("#effect .selected").removeClass("selected");
            e.addClass("selected");
            var t = e.html().toLowerCase().replace(" ", "");
            h(t)
        }
    })
})