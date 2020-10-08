window.onscroll = function() {
    scroll();
};

function scroll() {
    let btn = document.getElementById("btn-top");
    if(document.documentElement.scrollTop > 100 ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function refresh() {
    window.location.reload();
}