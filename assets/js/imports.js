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

fetch("./footer.html")
.then(response => {
  return response.text()
})
.then(data => {;
  document.querySelector("footer").innerHTML = data;
})
.catch(function(error){
  console.log(error);
})
