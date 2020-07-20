fetch("./navbar.html")
.then(response => {
  return response.text()
})
.then(data => {;
  document.querySelector("navbar").innerHTML = data;
})
.catch(function(error){
  console.log(error);
})
