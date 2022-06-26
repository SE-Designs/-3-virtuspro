function closeCookie() {
    var x = document.getElementById("cookie");
      x.style.display = "none";
}

function toggleDropdown() {
  var x = document.getElementById("dropdown-mobile");
  var proper = window.getComputedStyle(x, null)
  if (proper.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

// function toggleLang() {
//   var x = document.getElementById("lang-container-option");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// } 

function toggleSearch() {
  var x = document.getElementById("search-input");
  var proper = window.getComputedStyle(x, null)

  if (proper.display === "none") {
    x.style.display = "block";
    document.getElementById("search-icon").classList.add("active-search");
  } else {
    x.style.display = "none";
    document.getElementById("search-icon").classList.remove("active-search");
  }
} 

function toggleMobileMenu() {
  var checkBox = document.getElementById("mobile-toggle");
  var x = document.getElementById("main");
  if (checkBox.checked == true){
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 