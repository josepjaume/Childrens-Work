$(document).ready(function(){
  function toggleList(listMemo){
    listMemo.toggleClass('strikethrough');
  }

  function newMemo(list, itemText){
    var listMemo = $("<li />");
    listMemo.addClass('memo').html(itemText);
    listMemo.appendTo(list);
    listMemo.click(function(){
      toggleList(listMemo);
    });
  }

  $("#create-memo").click(function(){
    var itemText = prompt('Create a Memo');
    if(itemText) {
      newMemo($('#content-memo'), itemText);
    }else {
      return false;
    }
  });

  $("#remove-memo").click(function(){
    var lists = $('li.strikethrough');

    lists.each(function(list){
      $(list).remove();
    })
  });
});