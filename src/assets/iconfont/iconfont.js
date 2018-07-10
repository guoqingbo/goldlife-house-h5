(function(window){var svgSprite='<svg><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M209.205104 703.69902c-9.572398 0-12.391722-6.018064-6.263914-13.371542L500.701725 332.935742c6.127809-7.354502 16.15355-7.354502 22.281359 0l297.760535 357.391736c6.127809 7.354502 3.308484 13.371542-6.263914 13.371542L209.205104 703.69902z"  ></path></symbol><symbol id="icon-shang" viewBox="0 0 1024 1024"><path d="M814.795 320.301c9.571 0 12.392 6.018 6.264 13.372l-297.761 357.392c-6.128 7.355-16.154 7.355-22.281 0l-297.761-357.392c-6.128-7.355-3.309-13.372 6.264-13.372l605.275 0z"  ></path></symbol><symbol id="icon-weibiaoti105" viewBox="0 0 1024 1024"><path d="M 936.038 145.126 c -109.38 -118.519 -286.737 -118.519 -396.083 0 l -27.9296 30.2763 l -27.9467 -30.2763 c -109.363 -118.519 -286.703 -118.519 -396.066 0 c -109.38 118.511 -109.38 310.647 0 429.158 l 27.9296 30.2507 l 396.083 365.414 l 396.066 -365.414 l 27.9467 -30.2507 C 1045.4 455.774 1045.4 263.637 936.038 145.126 L 936.038 145.126 Z" fill="#8a8a8a" ></path></symbol><symbol id="icon-gengduo-2" viewBox="0 0 1024 1024"><path d="M363.229916 275.453327h497.82454a43.350032 43.350032 0 1 0 0-86.700064H363.229916a43.350032 43.350032 0 0 0 0 86.700064zM861.054456 471.930121H363.229916a43.350032 43.350032 0 0 0 0 86.700063h497.82454a43.350032 43.350032 0 0 0 0-86.700063zM861.054456 755.099753H363.229916a43.350032 43.350032 0 0 0 0 86.700064h497.82454a43.350032 43.350032 0 1 0 0-86.700064z" fill="" ></path><path d="M201.707698 232.103295m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z" fill="" ></path><path d="M201.707698 513.878501m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z" fill="" ></path><path d="M201.707698 795.653708m-76.585056 0a76.585056 76.585056 0 1 0 153.170112 0 76.585056 76.585056 0 1 0-153.170112 0Z" fill="" ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M317.064455 551.959229c-11.256121 0-22.61457-4.297792-31.210153-12.893375-17.191166-17.191166-17.191166-45.126811 0-62.317978L682.78605 79.816129c17.191166-17.191166 45.126811-17.191166 62.317977 0 17.191166 17.191166 17.191166 45.126811 0 62.317977L348.172279 539.065854c-8.595583 8.595583-19.851704 12.893375-31.107824 12.893375z"  ></path><path d="M713.893874 948.890976c-11.256121 0-22.61457-4.297792-31.210153-12.893374L285.854302 539.065854c-17.191166-17.191166-17.191166-45.126811 0-62.317978 17.191166-17.191166 45.126811-17.191166 62.317977 0L745.104027 873.679624c17.191166 17.191166 17.191166 45.126811 0 62.317978-8.595583 8.595583-19.851704 12.893375-31.210153 12.893374z"  ></path></symbol><symbol id="icon-paixu" viewBox="0 0 1024 1024"><path d="M416.64 927.104H259.584V364.224H67.84l348.8-299.968v862.848zM610.56 97.088h157.056v560.128h191.744l-348.8 299.904V97.088z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)