// Use window.addEventListener("scroll",) Event listener. 
// then add callback function that includes when the window height scroll down to 100vh and add 'fixed-top' class on Navbar element.
// For your mind: object.classList.add('class') this method is add class on selected element
// e.target.scrollingElement.scrollTop use that method when track scrolling amount



// Add scrollDetect callback function on window.addEventlistener('scroll', callback) Listener


// Define Play button variable



// Create a modal with a single line of JavaScript: https://getbootstrap.com/docs/5.1/components/modal/#via-javascript
// Define finsetModal then use Bootstrap modal Object request


// Create Click Event Listener on Play button variable (you already created above)
// add finsetModal.show() on callback function
// Select '.modal-body' class from finsetModal variable then use innerHTML method and add Youtube embed code



// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request



/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 
let xhr = new XMLHttpRequest();
xhr.onload = function(){
console.log(this.responseText)

let data = JSON.parse(xhr.responseText);
let file =data.data;
console.log(data)
document.getElementById('company-1').innerHTML +=`<img class="img1 rounded15" src="./images/post1.png" alt="post1" width="100%" />`;
document.getElementById("company-1").innerHTML +=` <h3>${file.title}</h3> `  ;

document.getElementById('company-1').innerHTML += `<p>${file.content} </p> `;
document.getElementById('company-1').innerHTML +=`<a class="decoration shargal" href="Learn more">Learn more &#8594;</a>`

}

xhr.open("GET", "./data/company_intro_1.json" )
xhr.send();
