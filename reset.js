function resetHTML() {
    $('tbody').sortable({disabled: true});
    document.getElementById("table_head").innerHTML = "";
    document.getElementById("table_body").innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
    document.getElementById('mean').innerHTML = ``;
    document.getElementById('mode').innerHTML = ``; 
}