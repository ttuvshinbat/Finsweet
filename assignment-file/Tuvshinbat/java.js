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
console.log(data.message)
})