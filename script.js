var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteBtn = createDeleteButton();
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteBtn);
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	return deleteBtn;

}
function addListAfterClick(event) {
	if (inputLength() > 0) {
		createListElement();
		
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		

	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click",function(event){ 
	if(event.target.nodeName == "LI")
		{
			event.target.classList.toggle("done");
		} 
	else if(event.target.nodeName === "BUTTON"){
		event.target.parentElement.remove();
	}
});


listItem.forEach(function(elem,i){
	var deleteBtn = createDeleteButton();
	elem.appendChild(deleteBtn);
})


