// Minified version of isMobile included in the HTML since it's
(function(i){var e=/iPhone/i,n=/iPod/i,o=/iPad/i,t=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,r=/Android/i,d=/BlackBerry/i,s=/Opera Mini/i,a=/IEMobile/i,b=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),c=function(i,e){return i.test(e)},l=function(i){var l=i||navigator.userAgent;this.apple={phone:c(e,l),ipod:c(n,l),tablet:c(o,l),device:c(e,l)||c(n,l)||c(o,l)},this.android={phone:c(t,l),tablet:!c(t,l)&&c(r,l),device:c(t,l)||c(r,l)},this.other={blackberry:c(d,l),opera:c(s,l),windows:c(a,l),firefox:c(b,l),device:c(d,l)||c(s,l)||c(a,l)||c(b,l)},this.seven_inch=c(h,l),this.any=this.apple.device||this.android.device||this.other.device||this.seven_inch},v=i.isMobile=new l;v.Class=l})(window);

// My own arbitrary use of isMobile, as an example
(function () {
    var MOBILE_SITE = '/vivo/firefoxos/mobile/', // site to redirect to
        NO_REDIRECT = 'noredirect'; // cookie to prevent redirect

    // I only want to redirect iPhones, Android phones and a handful of 7" devices
    if ( isMobile.phone ) {
        console.log('1');
        if ( document.cookie.indexOf(NO_REDIRECT) === -1 ) {
            document.location = MOBILE_SITE;
        }
    } else if ( isMobile.tablet ) {
        // var tablet = document.querySelector('body');
        // tablet.className = 'teste';
        // console.log(tablet);
        console.log('2');
    } else {
        console.log('4');
    }

})();