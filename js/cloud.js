$( document ).ready( function() {

    var entries = [ 
        { label: 'HTML5', url: 'https://en.wikipedia.org/wiki/HTML5', target: '_blank' },
        { label: 'Flashforum', url: 'http://www.flashforum.de/', target: '_blank' },
        { label: 'jQueryScript.net', url: 'http://www.jqueryscript.net/', target: '_blank' },
        { label: 'Javascript-Forum', url: 'http://forum.jswelt.de/', target: '_blank' },
        { label: 'JSFiddle', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_blank' },
        { label: 'CodePen', url: 'http://codepen.io/', target: '_blank' },
        { label: 'three.js', url: 'http://threejs.org/', target: '_blank' },
        { label: 'WebGLStudio.js', url: 'http://webglstudio.org/', target: '_blank' },
        { label: 'JS Compress', url: 'http://jscompress.com/', target: '_blank' },
        { label: 'TinyPNG', url: 'https://tinypng.com/', target: '_blank' },
        { label: 'Can I Use', url: 'http://caniuse.com/', target: '_blank' },
        { label: 'URL shortener', url: 'https://goo.gl/', target: '_blank' },
        { label: 'HTML Encoder', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_blank' },
        { label: 'Twitter', url: 'https://twitter.com/niklaswebdev', target: '_blank' },
        { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_blank' },
        { label: 'Gulp', url: 'http://gulpjs.com/', target: '_blank' },
        { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_blank' },
        { label: 'GitHub', url: 'https://github.com/', target: '_blank' },
        { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_blank' },
        { label: 'Starling', url: 'http://gamua.com/starling/', target: '_blank' },
        { label: 'jsPerf', url: 'http://jsperf.com/', target: '_blank' },
        { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_blank' },
        { label: 'CreateJS', url: 'http://createjs.com/', target: '_blank' },
        { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_blank' },
        { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_blank' },
        { label: 'jQuery', url: 'https://jquery.com/', target: '_blank' },
        { label: 'jQuery Rain', url: 'http://www.jqueryrain.com/', target: '_blank' },
        { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_blank' },
    ];

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        radius: '75%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'rgba(255,55,154,0)',
        opacityOver: 1.00,
        opacityOut: 0.15,
        opacitySpeed: 8,
        fov: 800,
        speed: 0.1,
        // fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: 'rgb(39, 39, 39)',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#111',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#cloud' ).svg3DTagCloud( settings );

} );