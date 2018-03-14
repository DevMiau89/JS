/**
 * Created by DevMiau on 14-Mar-18.
 */
(function getSelectionBounds() {
    var x = 'abc';
    var y = 'xyz';
    var event = new CustomEvent('build', {
        "detail": {"x":x,"y":y }
    });
    var elem = document.querySelector('#button');

    elem.addEventListener('build', function (e) {
        alert(e.detail.x + '  ' + e.detail.y);
    },false);
    elem.dispatchEvent(event);
})();







