var button = document.querySelector(".hotels-search-button");
var popup = document.querySelector(".date-form");
var date1 = popup.querySelector("[name=checkin-date]");
var date2 = popup.querySelector("[name=checkout-date]");
var ad = popup.querySelector("[name=adults]");
var kid = popup.querySelector("[name=kids]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("date1");
  storage2 = localStorage.getItem("date2");
} catch (err) {
  isStorageSupport = false;
}
if (isStorageSupport) {
var storage = localStorage.getItem("date1");
var storage2 = localStorage.getItem("date2");}


date1.focus();
if (storage) {
  date1.value = storage;
  date2.focus();
  } else {
    date1.focus();
  }
if (storage2) {
  date2.value = storage2;
  ad.focus();
  } else {
    date2.focus();
  }

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!date1.value || !date2.value || !ad.value) {  
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");  
  } else {
    if (isStorageSupport) {
      localStorage.setItem("date1", date1.value);
      localStorage.setItem("date2", date2.value);
    }
  }
});

window.addEventListener("keydown",function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})