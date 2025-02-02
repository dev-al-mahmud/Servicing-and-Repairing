/*

[Main Script]

Project: QuickFix - Multipurpose Servicing and Repairing HTML Template
Version: 1.0
Author : themelooks.com

*/

(function(b) {
    var m = b(window),
        n = b("body"),
        l = b(".preloader");
    l.length && l.fakeLoader({
        spinner: "spinner2",
        bgColor: !1
    });
    var d = function(b, a) {
        return "undefined" === typeof b ? a : b
    };
    b(function() {
        var c = b(".banner--section"),
            a = c.find(".banner--slider"),
            g = c.find(".banner--content"),
            f = c.find(".banner--form");
        a.on("initialized.owl.carousel", function(b) {
            c.css("min-height", g.outerHeight());
            f.css("margin-top", g.outerHeight() - 80)
        });
        a = b(".products--section").find(".product--item-img");
        a.length && a.directionalHover({
            overlay: ".product--item-img-info"
        });
        b(".product-single--section").find(".product--single-gallery .thumbnails").on("shown.bs.tab", '[data-toggle="tab"]', function(a) {
            b(a.target).addClass("active").parent().siblings().children().removeClass("active")
        });
        a = b("#productRatingSelect");
        a.length && a.barrating({
            theme: "fontawesome-stars-o",
            hoverState: !1
        });
        a = b(".checkout--section");
        a.find(".checkout--order-info");
        a.on("click", ".checkout--info-toggle", function(a) {
            a.preventDefault();
            b(this).parent("p").siblings(".checkout--info-form").slideToggle()
        });
        var e = b("#map");
        e.length && function() {
            var b = new google.maps.Map(e[0], {
                center: {
                    lat: e.data("map-latitude"),
                    lng: e.data("map-longitude")
                },
                zoom: e.data("map-zoom"),
                scrollwheel: !1,
                disableDefaultUI: !0,
                zoomControl: !0,
                styles: [{
                    featureType: "landscape",
                    stylers: [{
                        hue: "#FFBB00"
                    }, {
                        saturation: 43.400000000000006
                    }, {
                        lightness: 37.599999999999994
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.highway",
                    stylers: [{
                        hue: "#FFC200"
                    }, {
                        saturation: -61.8
                    }, {
                        lightness: 45.599999999999994
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "road.arterial",
                    stylers: [{
                            hue: "#FF0300"
                        },
                        {
                            saturation: -100
                        }, {
                            lightness: 51.19999999999999
                        }, {
                            gamma: 1
                        }
                    ]
                }, {
                    featureType: "road.local",
                    stylers: [{
                        hue: "#FF0300"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 52
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        hue: "#0078FF"
                    }, {
                        saturation: -13.200000000000003
                    }, {
                        lightness: 2.4000000000000057
                    }, {
                        gamma: 1
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        hue: "#00FF6A"
                    }, {
                        saturation: -1.0989010989011234
                    }, {
                        lightness: 11.200000000000017
                    }, {
                        gamma: 1
                    }]
                }]
            });
            if ("undefined" !== typeof e.data("map-marker")) {
                var a = e.data("map-marker"),
                    c = 0;
                for (c; c < a.length; c++) new google.maps.Marker({
                    position: {
                        lat: a[c][0],
                        lng: a[c][1]
                    },
                    map: b,
                    animation: google.maps.Animation.DROP,
                    draggable: !0
                })
            }
        }();
        b(".back-to-top-btn").on("click", "a", function(a) {
            a.preventDefault();
            b("html, body").animate({
                scrollTop: 0
            }, 800)
        });
        b("[data-bg-img]").each(function() {
            var a = b(this);
            a.css("background-image", "url(" + a.data("bg-img") + ")").addClass("bg--img bg--overlay").attr("data-rjs", 2).removeAttr("data-bg-img")
        });
        retinajs();
        b('[data-trigger="sticky"]').each(function() {
            b(this).sticky({
                zIndex: 999
            })
        });
        b("[data-form-validation] form").each(function() {
            b(this).validate({
                errorPlacement: function() {
                    return !0
                }
            })
        });
        b('[data-form="ajax"] form').each(function() {
            var a = b(this),
                c = a.find(".status");
            a.validate({
                errorPlacement: function() {
                    return !0
                },
                submitHandler: function(a) {
                    b(a).ajaxSubmit({
                        success: function(a) {
                            c.show().html(a).delay(3E3).fadeOut("show")
                        }
                    })
                }
            })
        });
        var a = b('input[type="file"]'),
            h = a.siblings(".file-status");
        a.on("change", function() {
            var a = b(this).val().split("\\");
            return (a = a[a.length - 1]) ? h.text(a) : ""
        });
        a = b('[data-toggle="tooltip"]');
        a.length && a.tooltip();
        b('[data-trigger="spinner"]').each(function() {
            var a =
                b(this);
            a.spinner({
                min: a.data("min"),
                max: a.data("max")
            })
        });
        a = b('[data-trigger="date"]');
        a.length && a.datepicker({
            showOtherMonths: !0,
            selectOtherMonths: !0
        });
        var k = b('[data-trigger="time"]');
        a.length && k.timepicker();
        b(".owl-carousel").each(function() {
            var a = b(this);
            a.owlCarousel({
                items: d(a.data("owl-items"), 1),
                margin: d(a.data("owl-margin"), 0),
                loop: d(a.data("owl-loop"), !0),
                smartSpeed: 1200,
                autoplaySpeed: 800,
                autoplay: d(a.data("owl-autoplay"), !0),
                mouseDrag: d(a.data("owl-drag"), !0),
                nav: d(a.data("owl-nav"), !1),
                navText: ['<i class="fa fm fa-arrow-left"></i>', '<i class="fa flm fa-arrow-right"></i>'],
                dots: d(a.data("owl-dots"), !1),
                responsive: d(a.data("owl-responsive"), {})
            })
        });
        a = b('[data-popup="img"]');
        a.length && a.magnificPopup({
            type: "image"
        });
        a = b('[data-popup="video"]');
        a.length && a.magnificPopup({
            type: "iframe"
        });
        a = b('[data-counter-up="numbers"]');
        a.length && a.counterUp({
            delay: 10,
            time: 1E3
        });
        b("[data-countdown]").each(function() {
            var a = b(this);
            a.countdown(a.data("countdown"), function(a) {
                b(this).html("<ul>" +
                    a.strftime("<li><strong>%D</strong><span>Days</span></li><li><strong>%H</strong><span>Hours</span></li><li><strong>%M</strong><span>Minutes</span></li><li><strong>%S</strong><span>Seconds</span></li>") + "</ul>")
            })
        });
        "undefined" !== typeof b.cColorSwitcher && b.cColorSwitcher({
            switcherTitle: "Main Colors:",
            switcherColors: [{
                    bgColor: "#f69323",
                    filepath: "css/colors/color-1.css"
                }, {
                    bgColor: "#82b440",
                    filepath: "css/colors/color-2.css"
                }, {
                    bgColor: "#ff5252",
                    filepath: "css/colors/color-3.css"
                }, {
                    bgColor: "#e91e63",
                    filepath: "css/colors/color-4.css"
                },
                {
                    bgColor: "#00BCD4",
                    filepath: "css/colors/color-5.css"
                }, {
                    bgColor: "#FC5143",
                    filepath: "css/colors/color-6.css"
                }, {
                    bgColor: "#00B249",
                    filepath: "css/colors/color-7.css"
                }, {
                    bgColor: "#D48B91",
                    filepath: "css/colors/color-8.css"
                }, {
                    bgColor: "#8CBEB2",
                    filepath: "css/colors/color-9.css"
                }, {
                    bgColor: "#119ee6",
                    filepath: "css/colors/color-10.css"
                }
            ],
            switcherTarget: b("#changeColorScheme")
        })
    });
    m.on("load", function() {
        var c = function() {
            1 < m.scrollTop() ? n.addClass("isScrolling") : n.removeClass("isScrolling")
        };
        c();
        m.on("scroll", c);
        c = b(".AdjustRow");
        c.length && c.isotope({
            layoutMode: "fitRows"
        });
        c = b(".MasonryRow");
        c.length && c.isotope();
        var a = b(".header--section"),
            c = a.find(".header--navbar-top"),
            g = a.find(".header--navbar"),
            f = g.find(".megamenu"),
            a = function() {
                var a = g.children(".container").outerWidth() - f.position().left,
                    b = f.find(".dropdown-menu").width();
                return a < b ? "0" : "auto"
            };
        c.length && c.find(".logo, .header--navbar-top-btn, .header--navbar-top-info").css("height", c.outerHeight());
        f.length && f.find(".dropdown-menu").css("right", a);
        var c = b(".services--section"),
            e = c.find(".service--item");
        c.find(".service--item .dot").each(function() {
            var a = b(this);
            a.css({
                top: d(a.data("position-top"), "auto"),
                left: d(a.data("position-left"), "auto"),
                right: d(a.data("position-right"), "auto")
            })
        });
        e.on("click", '[data-toggle="tab"]', function(a) {
            a.preventDefault()
        }).on("mouseenter", function(a) {
            e.removeClass("active");
            b(this).addClass("active").find('[data-toggle="tab"]').tab("show")
        });
        b(".extra-services--section").find(".extra-service--info").each(function() {
            var a =
                b(this);
            a.css("top", a.outerHeight() - 67)
        });
        var c = b(".gallery--section"),
            h = c.find(".gallery--items"),
            a = c.find(".gallery--filter-nav"),
            k = c.find(".gallery--img");
        k.length && (k.directionalHover({
            overlay: ".gallery--info"
        }), c.find('[data-popup="img"]').on("mfpClose", function(a) {
            k.directionalHover({
                overlay: ".gallery--info"
            })
        }));
        h.length && h.isotope({
            animationEngine: "best-available",
            itemSelector: ".gallery--item"
        });
        a.on("click", "li", function(a) {
            a.preventDefault();
            a = b(this);
            var c = a.data("target");
            h.isotope({
                filter: "*" !==
                    c ? '[data-cat~="' + c + '"]' : c
            });
            a.addClass("active").siblings().removeClass("active")
        });
        var c = b(".experts--section"),
            l = c.find(".expert--members");
        c.find(".expert--members-nav").on("click", "button", function() {
            l.trigger(b(this).data("trigger"))
        });
        var c = b(".footer--section"),
            a = c.find(".footer--about .logo"),
            p = c.find(".widget--title");
        a.length && p.css("margin-top", a.outerHeight() - 30);
        a = c.find(".footer--copyright");
        c = c.find(".footer--copyright-border");
        c.length && c.css("top", a.position().top)
    })
})(jQuery);