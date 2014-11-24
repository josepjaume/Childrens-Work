window.onload = function(){

var add =  document.getElementById('create-memo');
var remove = document.getElementById('remove-memo');

function toggleList(event){
	event.target.classList.toggle('strikethrough');
}

function newMemo(list, itemText){
	var listMemo = document.createElement('li');
	listMemo.className = 'memo';
	listMemo.innerText = itemText;
	list.appendChild(listMemo);

    listMemo.addEventListener('click', toggleList);
}

add.onclick = function(){
	var itemText = prompt('Create a Memo');
		if(itemText) {
		  newMemo(document.getElementById('content-memo'), itemText);
	  }else {
	  	return false;
	  }
}

function removeList(){
	var lists = document.querySelectorAll('li.strikethrough');

	for (var i = 0; i < lists.length; i++) {
		lists[i].parentNode.removeChild(lists[i]);
	}
}

	remove.addEventListener('click', removeList);

}