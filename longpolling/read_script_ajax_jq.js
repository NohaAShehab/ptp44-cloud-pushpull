

let file_div = document.getElementById('filecontent')
let load_btn = document.getElementById('load_data')
// use xml http request to send inner request form page after loaded

console.log(file_div, load_btn)

// use jquery ajax to send request ?
// load_btn.onclick = function(){
function load_data(lastmodtime) {
    $.ajax({
        url: 'http://localhost/ptp44/cloud/pull/longpolling/php_server.php',
        method: 'GET',
        data: {
            lastmod: lastmodtime
        },
        success: function (data) {
            console.log(data);
            response_data = JSON.parse(data);
            console.log(response_data);
            file_div.innerHTML += `<h4>${response_data.data}</h4>`
            file_div.innerHTML +=`<hr/>`
            lastmodtime = response_data.filetime
            load_data(lastmodtime)

        },
        error: function () {
            console.log('Error loading data ')
            file_div.innerHTML = '<h2 class="text-danger"> Error getting data</h2> '
            load_data(0)
        },
        complete:function (){
        }
    });

}
load_data(0)

