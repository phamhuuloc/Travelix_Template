const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var checkedList = $$(".search__extra__items label");
var inputChecked = $$(".search__extra__items input");

checkedList.forEach(function (element, index) {
  var checked = inputChecked[index];
  element.addEventListener("click", function (e) {
    if (checked.getAttribute("checked") == "true")
      checked.removeAttribute("checked");
    else checked.setAttribute("checked", "true");
  });
});
