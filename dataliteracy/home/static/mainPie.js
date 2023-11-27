var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  var layout = {
    paper_bgcolor: '#0b122b',
    font: {
      color: '#fff',
      size: 20
    }
    
  };
  
  Plotly.newPlot('useGraph', data, layout);

  function updatePieces(_this) {
    var ItemCount = +_this.value
    var results = document.querySelector('#barNames')
    results.innerHTML = '' //clear the results on each update
  for (var i = 1; i <= ItemCount; i++) {
    var input = document.createElement('input') //create input
    var label = document.createElement("label"); //create label
    label.innerText = 'Name ' + i
    //label.className = "inputText"
    input.type = "text";
    input.placeholder = "Bar_Name"; //add a placeholder
    input.className = "inputText"; // set the CSS class
    input.id = "nameNum" + i;
    results.appendChild(label); //append label
    results.appendChild(input); //append input
    results.appendChild(document.createElement("br"));
  }
}