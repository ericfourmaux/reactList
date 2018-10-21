var taskArray = [];
var task = {};

//Export the list as a .TXT file
function exportList() {
    var filename = "todo.txt";
    dataIO = saveData();

    var textToSaveAsBlob = new Blob([dataIO], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

    var downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
    $('#showChartsSelector').show();
}

function saveData() {
  var data;         
  
  for (var i=0; i < taskArray.length; i++) {
      var ind = taskArray[i];
      
      data = ind.id + "&";
      data += ind.title + "&";
      data += ind.desc + "&";
  
  }             

  return data;
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}
