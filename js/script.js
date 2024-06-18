window.document.onload = setTimeout(function() {
    element = document.getElementById("field-block");
    element.classList.remove('initial');
    element.classList.add('ace');
}
, 4000 )

window.document.onload = setTimeout(function() {
    element = document.getElementById("field-block");
    element.classList.remove('ace');
    element.classList.add('results');
}
, 8000 )

window.document.onload = setTimeout(function() {
    element = document.getElementById("field-block");
    element.classList.remove('results');
    element.classList.add('second-result');
}
, 12000 )