$(document).ready(e => {
  let form = $(".submit");
});

form.submit(e => {
  e.preventDefault();
  e.stopImmediatePropagation();

  let pass = form.find('input[type="password"]');
  if ((pass.val(), length < 3)) {
    alert("alert");
  }

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8000/product?id=1");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("Cache-control", null);

  xhr.onload = function() {
    let response = xhr.response;
    console.log(response);
  };

  xhr.send();
});
