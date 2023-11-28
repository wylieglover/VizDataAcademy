const config = {responsive: true};

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  marker: {
    size: [40, 60, 80, 100]
  }
}

var data = [trace1];

var layout = {
  title: 'Marker Size',
  showlegend: false
};

Plotly.newPlot('useGraph', data, layout, config);

function updateBars(_this) {
  var ItemCount = +_this.value
  var results = document.querySelector('#barNames')
  results.innerHTML = '' //clear the results on each update
for (var i = 1; i <= ItemCount; i++) {
  var input = document.createElement('input') //create input
  var label = document.createElement("label") //create label
  var inputR = document.createElement('input')
  var inputY = document.createElement('input')
  label.innerText = 'Name ' + i
  //label.className = "inputText"
  input.type = "text";
  input.placeholder = "X Value"; //add a placeholder
  input.className = "inputText"; // set the CSS class
  input.id = "nameNum" + i;
  inputY.type = "text";
  inputY.placeholder = "Y Value"; //add a placeholder
  inputY.className = "inputText"; // set the CSS class
  inputY.id = "nameNumY" + i;
  inputR.type = "text";
  inputR.placeholder = "Point Weight"; //add a placeholder
  inputR.className = "inputText"; // set the CSS class
  inputR.id = "nameNumR" + i;
  results.appendChild(label); //append label
  results.appendChild(input); //append input
  results.appendChild(inputY)
  results.appendChild(inputR)
  results.appendChild(document.createElement("br"));
}
}
