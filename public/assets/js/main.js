function toggle(a, b, c, id) {
    if (a) {
        a.classList.remove(c);
        if (!a.id.startsWith(id)) {
            b.classList.add(c);
        } else {
            event.preventDefault();
            window.history.replaceState({}, document.title, ".");
        }
    } else {
        b.classList.add(c);
    }
}

function show_more(id) {
    var c = "active";

    var a = document.querySelector('.content.' + c);
    var b = document.getElementById(id + '-content');
    toggle(a, b, c, id);

    a = document.querySelector('.card.' + c);
    b = document.getElementById(id + '-card');
    toggle(a, b, c, id);
}

window.onload = function () {
    var id = window.location.hash.substring(1);
    if (document.getElementById(id + '-card')){
        show_more(id);
    }
};