// build time:Tue Aug 13 2019 14:51:23 GMT+0800 (CST)
$(document).on("DOMContentLoaded",function(){var t=$(".sidebar-inner");var e=CONFIG.sidebar.offset||12;function o(){return $(".header-inner").height()+e}function i(){var t=$("#footer");var e=$(".footer-inner");var o=t.outerHeight()-e.outerHeight();var i=t.outerHeight()+o;return i}function n(){var n=o();var a=i();t.affix({offset:{top:n-e,bottom:a}});$("#sidebar").css({"margin-top":n,"margin-left":"auto"})}function a(){$(window).off(".affix");t.removeData("bs.affix").removeClass("affix affix-top affix-bottom");n()}function r(){var t=window.matchMedia("(min-width: 992px)");t.addListener(function(t){if(t.matches){a()}})}n();r()});
//rebuild by neat 