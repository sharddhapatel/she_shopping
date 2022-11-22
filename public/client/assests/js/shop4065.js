var lazyLoadInstance = new LazyLoad({ elements_selector: ".lazy" });
var qvthumbnails;
var cookieName = "wishlistList";

function convertToMobile() { $("*[id^='_desktop_']").each((function(t, e) { var a = $("#" + e.id.replace("_desktop_", "_mobile_"));
        swapElements($(this), a) })), adjustMobileMenu() }

function convertToDesktop() { $("*[id^='_mobile_']").each((function(t, e) { var a = $("#" + e.id.replace("_mobile_", "_desktop_"));
        swapElements($(this), a) })), adjustDesktopMenu() }

function swapElements(t, e) { var a = e.children().detach();
    e.empty().append(t.children().detach()), t.append(a) }

function adjustDesktopMenu() { $("#_desktop_top_menu .category").each((function(t) { var e = $(this).find(".sub-menu .sub-category").length; var a = $(this).find(".sub-menu"); switch (e) {
            case 1:
                a.css("width", "230px"), a.css("left", calculateLeft(a.offset(), 230)); break;
            case 2:
                a.css("width", "430px"), a.css("left", calculateLeft(a.offset(), 430)); break;
            case 3:
                a.css("width", "630px"), a.css("left", calculateLeft(a.offset(), 630)); break;
            case 4:
                a.css("width", "830px"), a.css("left", calculateLeft(a.offset(), 830)); break } })) }

function adjustMobileMenu() { $("#_mobile_top_menu .category").each((function(t) { var e;
        $(this).find(".sub-menu").css("width", "auto") })) }

function calculateLeft(t, e) { var a = t.left + e; var i = $(window).width() - a; return i < 0 ? i - 15 : 0 }

function adjustFixedHeader() { var t = $("#header").height(); var e = $("#header .header-top").height(); var a; var i = t + $(".nav-height .navfullwidth").height(); var s = t + e; var o = $("#header").height();
    ($("#header-layout1").length || $("#header-layout2").length) && (window.matchMedia("(min-width: 992px)").matches && ($(".mobile-width").removeClass("fixed-header"), $(window).scrollTop() > s ? $(".header-top").addClass("fixed-header") : $(".header-top").removeClass("fixed-header")), window.matchMedia("(max-width: 991px)").matches && ($(".header-top").removeClass("fixed-header"), $(window).scrollTop() > o ? $(".mobile-width").addClass("fixed-header") : $(".mobile-width").removeClass("fixed-header"))), $("#header-layout3").length && (window.matchMedia("(min-width: 992px)").matches && ($(".mobile-width").removeClass("fixed-header"), $(window).scrollTop() > i ? $(".navfullwidth").addClass("fixed-header") : $(".navfullwidth").removeClass("fixed-header")), window.matchMedia("(max-width: 991px)").matches && ($(".navfullwidth").removeClass("fixed-header"), $(window).scrollTop() > o ? $(".mobile-width").addClass("fixed-header") : $(".mobile-width").removeClass("fixed-header"))) }

function productRemoveFormCart(t) { jQuery.ajax({ type: "post", url: "/cart/change.js", data: "quantity=0" + "&id=" + t, dataType: "json", beforeSend: function() {}, success: function(t) { adjustCartDropDown() }, error: function(t, e) {} }) }

function adjustCartDropDown() { Shopify.getCart((function(t) { var e = $("#cart-container .product-list");
        e.html(""); var a = $("#cart-container .cart__empty"); var i = $("#cart-container .cart__footer");
        $(".cart__subtotal").html(theme.Currency.formatMoney(t.total_price, theme.moneyFormat)), $(".cart-qty").html(t.item_count), t.items.length > 0 ? ($.each(t.items, (function(t, a) { var i = $("<div class='product'></div>"); var s = $("<div class='product-img'></div>"); var o = $("<div class='product-data'></div>");
            s.append("<img src='" + a.image + "' alt='" + a.title + "''>"), o.append("<a href='" + a.url + "' class='product-title'>" + a.title + "</a>"), o.append("<span class='product-price'>" + a.quantity + " x " + theme.Currency.formatMoney(a.discounted_price, theme.moneyFormat) + "</span>"), i.append(s), i.append(o), i.append("<a class='remove' data-variantid=" + a.variant_id + "><i class='material-icons'>delete</i></a>"), e.append(i) })), i.removeClass("hide"), e.removeClass("hide"), a.addClass("hide"), e.slimScroll({ height: t.items.length > 1 ? "262px" : "100%" })) : (a.removeClass("hide"), i.addClass("hide"), e.addClass("hide")) })) }

function adjustProductInventory() { var t = $("#AddToCart-product-template").attr("disabled");
    typeof t != typeof void 0 && !1 !== t ? ($("#inventory span.instock").hide(), $("#inventory span.outstock").show()) : ($("#inventory span.instock").show(), $("#inventory span.outstock").hide()) }

function hb_animated_contents() { jQuery(".hb-animate-element:in-viewport").each((function(t) { var e = jQuery(this);
        e.hasClass("hb-in-viewport") || setTimeout((function() { e.addClass("hb-in-viewport") }), 200 * t) })) }
$(document).ready((function() { $("#siteloader").fadeOut(), $("#spin-wrapper").fadeOut(), lazyLoadInstance.update(), adjustFixedHeader(), $(window).scroll((function() { adjustFixedHeader() })), $(document).on("click", ".template-index .ishi-featuredproduct-section button", (function() { $(".template-index .ishi-featuredproduct-section").slideUp() })), $(".ishiparallaxbanner").each((function() { var t = $(this).find(".parallax-block"); if ("1" == t.data("deal")) { var e = t.data("counter"); var a = t.find("#parallaxcountdown");
            $(a).countdown(e, (function(t) { $(this).find(".countdown-days .data").html(t.strftime("%D")), $(this).find(".countdown-hours .data").html(t.strftime("%H")), $(this).find(".countdown-minutes .data").html(t.strftime("%M")), $(this).find(".countdown-seconds .data").html(t.strftime("%S")) })) } })), $(".specialdealcarousel .productdeal").each((function() { var t = $(this).data("dealcounter"); var e = $(this).find(".productcountdown");
        $(e).countdown(t, (function(t) { t.strftime("%D") > 100 && $(this).find(".countdown-days").addClass("data-large"), $(this).find(".countdown-days .data").html(t.strftime("%D")), $(this).find(".countdown-hours .data").html(t.strftime("%H")), $(this).find(".countdown-minutes .data").html(t.strftime("%M")), $(this).find(".countdown-seconds .data").html(t.strftime("%S")) })) })), $("#SortTags").on("click", "a", (function(t) { if ($(this).hasClass("selected")) { var e = $(this).data("tagname"); var a; var i = (a = decodeURIComponent(window.location.href)).indexOf(e); var s = i + e.length; var a; if (t.preventDefault(), "/" == a.charAt(i - 1)) a = (a = a.replace(e, "")).replace("+", ""), window.location = a;
            else if ("" == a.charAt(s + 1)) { var a;
                a = (a = a.replace(e, "")).substring(0, a.length - 1), window.location = a } else { var o; var n; var a = a.substring(0, i) + a.substring(s + 1);
                window.location = a } } })), $(".owl-carousel.slider-with-options").each((function(t) { $(this).owlCarousel({ lazyLoad: !0, navText: ["<i class='material-icons'></i>", "<i class='material-icons'></i>"], loop: !!$(this).data("loop"), rewind: !!$(this).data("rewind"), nav: !!$(this).data("nav"), rewind: !!$(this).data("rewind"), autoplay: !!$(this).data("autoplay"), dots: !!$(this).data("dots"), autoplayTimeout: $(this).data("autoplaytimeout") ? $(this).data("autoplaytimeout") : 4e3, smartSpeed: $(this).data("smartspeed") ? $(this).data("smartspeed") : 500, margin: $(this).data("margin") ? $(this).data("margin") : 0, responsive: { 0: { items: $(this).data("small") }, 544: { items: $(this).data("mobile") }, 768: { items: $(this).data("tablet") }, 992: { items: $(this).data("laptop") }, 1200: { items: $(this).data("desktop") } } }) })), $("#product-thumbnails-carousel").owlCarousel({ nav: !0, navText: ["<i class='material-icons'></i>", "<i class='material-icons'></i>"], dots: !1, loop: !1, margin: 15, rewind: !0, responsive: { 0: { items: 3 }, 544: { items: 4 }, 768: { items: 3 }, 992: { items: 3 }, 1200: { items: 4 } } }), qvthumbnails = $("#qv-thumbnails").owlCarousel({ nav: !0, loop: !1, navText: ["<i class='material-icons'></i>", "<i class='material-icons'></i>"], responsive: { 0: { items: 3 }, 544: { items: 5 }, 768: { items: 4 }, 992: { items: 4 }, 1200: { items: 5 } } }), $(".megamenu-header").html($(".megamenu-section").html()), $(".megamenu-section").html(""), $("input.update-cart").on("input", (function(t) { setTimeout((function() { $(".update-qty").trigger("click") }), 800) })), $(".js-edit-toggle ").on("click", (function(t) { $(this).parents("tr").toggleClass("cart__update--show"), $(this).toggleClass("cart__edit--active") })), $(window).scroll((function() { $(this).scrollTop() > 500 ? $("#slidetop").fadeIn(500) : $("#slidetop").fadeOut(500) })), $("#slidetop").click((function(t) { t.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 800) })), $(document).on("click", ".product-form__item--quantity .button", (function() { var t = $(".product-form__item--quantity .quantity").val(); if ("+" == $(this).text()) var e = parseInt(t) + 1;
        else { if (1 == t) return; var e = parseInt(t) - 1 }
        $("input.quantity").val(e), $(".update-qty").trigger("click") })), $(document).on("click", ".cart-qty-btns .button", (function() { var t = $(this).siblings(".quantity").val(); if ("+" == $(this).text()) var e = parseInt(t) + 1;
        else { if (1 == t) return; var e = parseInt(t) - 1 }
        $(this).siblings(".quantity").val(e), $(".update-qty").trigger("click") }));
    $(document).on("click", ".list-img", (function(t) { $(this).hasClass("checked") || ($("#list-img").addClass("checked"), $("#grid-img").removeClass("checked"), $(".products-display-collection .grid__item").each((function() { $(this).removeClass("small--one-half"), $(this).removeClass("lg-up--one-third"), $(this).removeClass("grid__item"), $(this).removeClass(" medium-up--one-quarter"), $(this).addClass("one-whole"), $(this).addClass("list__item"), $(this).removeClass("col-sm-6 col-md-6 col-lg-4"), $(this).find(".product-description").append($(this).find(".thumbnail-buttons")), i() })), $(".products-display-collection .grid-view-item__image-wrapper").each((function() { $(this).addClass("col-sm-4") })), $(".products-display-collection .product-description").each((function() { $(this).addClass("col-sm-8") })), $("#Collection").fadeOut(0), $("#Collection").fadeIn(500)) })), $(document).on("click", ".grid-img", (function(t) { $(this).hasClass("checked") || ($("#list-img").removeClass("checked"), $("#grid-img").addClass("checked"), $(".products-display-collection .list__item").each((function() { $(this).addClass("small--one-half"), $(this).addClass("grid__item"), $(this).addClass("lg-up--one-third"), $(this).removeClass("one-whole"), $(this).removeClass("list__item"), $(this).addClass("col-sm-6 col-md-6 col-lg-4"), $(this).find(".grid-view-item__image-wrapper").append($(this).find(".thumbnail-buttons")), i() })), $(".products-display-collection .grid-view-item__image-wrapper").each((function() { $(this).removeClass("col-sm-4") })), $(".products-display-collection .product-description").each((function() { $(this).removeClass("col-sm-8") })), $("#Collection").fadeOut(0), $("#Collection").fadeIn(500)) })), $("#left-column-category").length > 0 && ($("#left-column-category").html($("#_desktop_top_menu").html()), $("#left-column-category").find(".dropdown-inner").css("width", "auto")), $(".category-tree").each((function() {
        function t() { var t; var e = document.getElementById("top-menu").innerHTML.replace(/_n_/g, "_m_");
            document.getElementById("top-menu").innerHTML = e }
        t() })), $(document).on("click", ".nm-addToCart.enable", (function() { var t = $(this).parents(".add_to_cart_main").find('input[name="prduct-variant"]').val(); var e = $(this).parents(".add_to_cart_main").find('input[name="product-quantity"]').val();
        $(this).addClass("adding"), productAddToCart(t, e), $(".cart-display #cart-container").hasClass("in") && ($(".cart-display #cart-container").removeClass("in"), $(".cart-display .cart-title").addClass("collapsed"), $(".cart-display .cart-title").attr("aria-expanded", "false")) })), adjustDesktopMenu(); var t = window.innerWidth; var e = 992; var a;

    function i() { if (0 == $(".add-in-wishlist-js").length) return !1;
        $(".add-in-wishlist-js").each((function() { $(this).unbind(), $(this).click((function(t) { t.preventDefault(); try { var e = $(this).data("href"); if (null == $.cookie(cookieName)) var a = e;
                    else if (-1 == $.cookie(cookieName).indexOf(e)) var a = $.cookie(cookieName) + "__" + e;
                    $.cookie(cookieName, a, { expires: 14, path: "/" }), jQuery(".loadding-wishbutton-" + e).show(), jQuery(".default-wishbutton-" + e).remove(), setTimeout((function() { jQuery(".loadding-wishbutton-" + e).remove(), jQuery(".added-wishbutton-" + e).show(); var t = $("#wishlistmessage .title-success").text();
                        $.notify({ message: t }, { type: "success", offset: 0, placement: { from: "top", align: "center" }, z_index: 9999, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, template: '<div data-notify="container" class="col-xs-12 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' }) }), 2e3), $(this).unbind() } catch (t) {} })) })) }

    function s() { try { if (null != $.cookie(cookieName) && "__" != $.cookie(cookieName) && "" != $.cookie(cookieName)) { var t = String($.cookie(cookieName)).split("__"); for (var e = 0; e < t.length; e++) "" != t[e] && (jQuery(".added-wishbutton-" + t[e]).show(), jQuery(".default-wishbutton-" + t[e]).remove(), jQuery(".loadding-wishbutton-" + t[e]).remove()) } } catch (t) {} }
    t < e && (convertToMobile(), lazyLoadInstance.update()), $(window).on("resize", (function() { var t = e; var a = window.innerWidth; var i = $("*[id^='_desktop_']").first().html().trim().length; var s = $("*[id^='_mobile_']").first().html().trim().length;
        a < t && i && convertToMobile(), a >= t && s && convertToDesktop() })), $("#menu-icon").on("click", (function() { $("#mobile_top_menu_wrapper").animate({ width: "toggle" }), $(".mobile-menu-overlay").toggleClass("active") })), $("#top_menu_closer i").on("click", (function() { $("#mobile_top_menu_wrapper").animate({ width: "toggle" }), $(".mobile-menu-overlay").toggleClass("active") })), $(".mobile-menu-overlay").on("click", (function() { $("#mobile_top_menu_wrapper").animate({ width: "toggle" }), $(".mobile-menu-overlay").toggleClass("active") })), $(document).on("click", "#cart-container a.remove", (function() { var t;
        productRemoveFormCart($(this).data("variantid")) })), $(document).on("change", "#ProductSection-product-template select.single-option-selector", (function() { adjustProductInventory() })), adjustCartDropDown(), adjustProductInventory(), s(), i(); var o = parseInt($("#variant-stock").html()); var n = parseInt($(".ishi-progress-content").data("quantity")); switch (("" == o || o <= 0) && $(".ishi-progress-content").addClass("hide"), o) {
        case 9:
        case 8:
        case 7:
            $("#ishi-progress-bar span").css("width", "70%"); break;
        case 6:
            $("#ishi-progress-bar span").css("width", "50%"); break;
        case 5:
            $("#ishi-progress-bar span").css("width", "40%"); break;
        case 4:
            $("#ishi-progress-bar span").css("width", "30%"); break;
        case 3:
            $("#ishi-progress-bar span").css("width", "20%"); break;
        case 2:
            $("#ishi-progress-bar span").css("width", "10%"); break;
        case 1:
            $("#ishi-progress-bar span").css("width", "5%"); break;
        default:
            $("#ishi-progress-bar span").css("width", "90%") } })), jQuery(window).scroll((function() { hb_animated_contents() }));