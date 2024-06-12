

let file_div = document.getElementById('filecontent')
let load_btn = document.getElementById('load_data')
// use xml http request to send inner request form page after loaded

console.log(file_div, load_btn)

// use jquery ajax to send request ?
// load_btn.onclick = function(){
function load_data() {
    $.ajax({
        url: 'http://localhost/ptp44/cloud/pull/simplepolling/php_server.php',
        method: 'GET',
        data: {
            message: 'bye'
        },
        success: function (data) {
            console.log(data);
            file_div.innerHTML = `<h4>${data}</h4>`

        },
        error: function () {
            console.log('Error loading data ')
            file_div.innerHTML = '<h2 class="text-danger"> Error getting data</h2> '
        },
        complete:function (){
            load_data()
        }
    });

}
load_data()

