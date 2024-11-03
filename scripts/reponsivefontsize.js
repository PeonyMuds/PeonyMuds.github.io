  /* responsively adjusting font size*/
  (function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            if (width) {
                var fontSize = 20 * (width / 320);
                fontSize = Math.max(14, Math.min(fontSize, 20)); // 设置最小字体为12px，最大字体为40px
                docEle.style.fontSize = fontSize + "px";
            }
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
  }(document, window));