

let file_div = document.getElementById('filecontent')
let load_btn = document.getElementById('load_data')
// use xml http request to send inner request form page after loaded

console.log(file_div, load_btn)

// use jquery ajax to send request ?
load_btn.onclick = function(){

    $.ajax({
        url: 'students.txt',
        method: 'GET',
        data : {
            message: 'bye'
        },
        success : function(data){
            console.log(data);
            file_div.innerHTML +=`<h4>${data}</h4>`
        },
        error: function(){
            console.log('Error loading data ')
            file_div.innerHTML = '<h2 class="text-danger"> Error getting data</h2> '
        }
    });

//     $.ajax({
//         method: "get",
//         async: true,
//         url: "http://127.0.0.1:8001/api/posts",
//         data: {country: "FR"},
//         dataType: 'json',
//         headers: {'content-type': 'application/json'},
//         success: function(res){
//             console.log(res);
//         }
// });

}


