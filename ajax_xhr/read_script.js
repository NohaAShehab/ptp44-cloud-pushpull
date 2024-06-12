
alert('from read script ')

let file_div = document.getElementById('filecontent')
let load_btn = document.getElementById('load_data')
// use xml http request to send inner request form page after loaded

console.log(file_div, load_btn)
// 1- object created
let myxhr =new  XMLHttpRequest()
console.log(myxhr)



// 3- send request ?  when I click on button

load_btn.addEventListener('click', function (){

        console.log('--- button clicked ')

// 2- open connection between me and server  myxhr object ?

    myxhr.open('GET', 'students.txt');


    // 4- send request ?
    myxhr.send(JSON.stringify({name:"ahmed"}));

    myxhr.onreadystatechange = function (){
        // 5- get response ? when data received ?
        // status = 200 and readystate  =4

        if (myxhr.readyState=== 4 && myxhr.status===200){
            console.log("Data received successfully")
            console.log(myxhr.responseText)

            file_div.innerHTML += `<h3>${myxhr.responseText}</h3>`
            // file_div.innerHTML += ``
        }
    };




});



