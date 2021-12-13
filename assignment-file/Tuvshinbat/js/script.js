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


const finsetModal = new bootstrap.Modal(document.getElementById('tuvshuuModal'), {
  backdrop: true,
  keyboard: false
})
document.getElementById('bairlal').addEventListener('click', () => {
  finsetModal.show()
})
document.getElementsByClassName("modal-body")[0].innerHTML = `<iframe width="450" height="315" src="https://www.youtube.com/embed/v3xwCkhmies" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
document.getElementsByClassName('closeBtn')[0].addEventListener('click', () => {
  finsetModal.hide()
})
document.getElementsByClassName('closeBtn')[1].addEventListener('click', () => {
  finsetModal.hide()
})

const footer = new bootstrap.Modal(document.getElementById('footer'), {
  backdrop: true,
  keyboard: true
})
const request = document.getElementById("Typeemailhere")
document.getElementById("huurhun").addEventListener('click', () => {
  let requestOption = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      "email": `${request.value}`

    })
  }
  
  
  footer.show()
  
  fetch('http://52.221.191.153/subscribe/subscription/create', requestOption)
  .then(response =>
    response.json()
    ).then(data => document.getElementsByClassName("modal-body")[1].innerHTML = `${data.message}`)
    
  }
)






/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create 
let xhr = new XMLHttpRequest();
xhr.onload = function () {


  let data = JSON.parse(xhr.responseText);
  let file = data.data;
  


  for (let i = 0; i < file.length; i++) {
    document.getElementById('company-1').innerHTML += `<div id="company-2" class="digitalization, col-lg-4 col-md-12">
<img class="img1 rounded15" src="${file[i].thumbnail}" alt="post2" width="100%" > 
 <h3>${file[i].title}</h3>
<p>
  ${file[i].content.slice(0, 99)}
</p>
<a class="decoration shargal" href="learn mores">learn more &#8594;</a>
</div>`;


  }
}

xhr.open("GET", "./data/company_intro.json")
xhr.send()


let xhr1 = new XMLHttpRequest();
xhr1.onload = function () {
  
  let data = JSON.parse(xhr1.responseText);
  let file = data.data;


  for (let i = 0; i < file.length; i++) {
    document.getElementById('ajax-2').innerHTML += `<div class="col-lg-4 col-md-6">
        <div class="tsagaan-sh" >
        <img src="${file[i].icon}" alt="icon-layer" />
         <br>
         <br>
         <h3>${file[i].title}</h3>
         <p>
            ${file[i].content}
            </p>
            </div>
            </div>
        `
  }
}
xhr1.open("GET", './data/business_challenge.json');
xhr1.send();

let xhr2 = new XMLHttpRequest();
xhr2.onload = function () {
  
  let data = JSON.parse(xhr2.responseText);
  let file = data.data;


  for (i = 0; i <= file.length; i++) {
    document.getElementById('ajax-3').innerHTML +=
      `<div class="col-lg-4 col-md-12 ">
            <div class='bg-white' id="back">
             <div>
              <div class="dorov">
               <img class="p-0" src="${file[i].thumbnail}" alt="post1" width="100%" />
               <div class="gurav p-3">
                <h3>${file[i].title}</h3>
                
                 ${file[i].content.slice(0, 99)}
                
              </div>
            </div>
            </div>
            <div class="latest-blog12 p-3 decoration shargal">
            <a class="decoration shargal" href="www.olloo.mn">Learn more &#8594;</a>
          </div>
          </div>
        </div> `
  }
}
xhr2.open("GET", './data/company_intro_1.json');
xhr2.send();

let xhr3 = new XMLHttpRequest;
xhr3.onload = function () {
  data = JSON.parse(xhr3.responseText)
  text = data.data
  document.getElementById('company-6').innerHTML += '<h2> All Posts </h2>'
  let davtalt = function () {
    for (i = 0; i < text.length; i++) {
      document.getElementById('company-6').innerHTML += `

      <div class="col-md-6 col-lg-4  my-4 ">
        <div class="card">
          <img src="${text[i].thumbnail}" alt="">
          <div class="padding p-4">
            <h3>${text[i].title}</h3>
           <p>  ${text[i].content.slice(0, 100)} </p>
            <a href="#">Learn more &#8594;</a>
          </div>
        </div>
      </div>  
`
    }
  }
  davtalt()
  davtalt()

}
xhr3.open('GET', './data/company_intro_1.json')
xhr3.send()

let xhr4 = new XMLHttpRequest;
xhr4.onload = function () {
  data = JSON.parse(xhr.responseText)
  text = data.data;
  for (i = 0; i < text.length; i++) {
    document.getElementById('seven').innerHTML += `

  <div class="col-md-6 col-lg-4  my-4 ">
    <div class="card">
      <img src="${text[i].thumbnail}" alt="">
      <div class="padding p-4">
        <h3>${text[i].title}</h3>
       <p>  ${text[i].content.slice(0, 100)} </p>
        <a href="#">Learn more &#8594;</a>
      </div>
    </div>
  </div>  
`
  }
}
xhr4.open('GET', './data/company_intro_1.json')
xhr4.send()


let nav = document.getElementsByClassName('main-header')[0];
let head = document.getElementById("headerA");


function scrollDetect(event) {
  let navBar = event.target.scrollingElement.scrollTop;
  if (navBar > nav.offsetHeight + head.offsetHeight) {
    nav.classList.add('fixed-top')
  } else {
    nav.classList.remove('fixed-top')

  }
}

window.addEventListener('scroll', scrollDetect);
