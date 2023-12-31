const config = {responsive: true};

const traceA = {
  type: "scatter",
  mode: "markers",
  x: [1, 2, 3, 4],
  y: [5, 10, 15, 20],
  name: 'Highest Marks',
  marker: {
    line: {
      color: 'rgba(156, 165, 196, 1)',
      width: 0.5,
    },
    symbol: 'circle',
    size: 10
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

var scatterData = [traceA];

const layout = {
  showlegend: true,
  title: 'Example Scatterplot',
  xaxis: {
    showgrid: true,
    showline: true,
    linecolor: 'rgb(200, 0, 0)',
    ticks: 'outside',
    tickcolor: 'rgb(200, 0, 0)',
    tickwidth: 4
  },
  margin: {
    l: 120,
    r: 50,
    b: 90,
    t: 120,
    pad: 4
  },
  legend: {
    bgcolor: 'rgb(0,0,0,0)',
    borderwidth: 1,
    bordercolor: 'black',
    orientation: 'h',
    xanchor: 'center',
    x: 0.5,
    font: {
      size: 12,
    }
  },
  paper_bgcolor: '#0b122b',
  plot_bgcolor: '#0b122b',
  font: {
    color: '#fff',
    size: 15
  },
  yaxis: {
    gridcolor: '#FFFFFF50',
    gridwidth: .02
  },
  scattermode:'group',
  hovermode: 'closest',
};

Plotly.newPlot('useGraph', scatterData, layout, config)

function updateBars(_this) {
  var ItemCount = +_this.value
  var results = document.querySelector('#barNames')
  results.innerHTML = '' //clear the results on each update
for (var i = 1; i <= ItemCount; i++) {
  var input = document.createElement('input') //create input
  var label = document.createElement("label") //create label
  var inputR = document.createElement('input')
  var inputY = document.createElement('input')
  label.innerText = 'Point ' + i
  //label.className = "inputText"
  input.type = "text";
  input.placeholder = "X Value"; //add a placeholder
  input.className = "inputText"; // set the CSS class
  input.id = "nameNum" + i;
  inputY.type = "text";
  inputY.placeholder = "Y Value"; //add a placeholder
  inputY.className = "inputText"; // set the CSS class
  inputY.id = "nameNumY" + i;
  results.appendChild(label); //append label
  results.appendChild(input); //append input
  results.appendChild(inputY)
  results.appendChild(document.createElement("br"));
}
}

function changeGraphName(_this) {
  var graphName = _this.value
  layout.title = graphName
  Plotly.react('useGraph', scatterData, layout)
}

function submitCoordinates() {
  var graphTitle = document.querySelector("#chartName").value;
  var numPoints = document.querySelector('#numBars').value;
  const xValues = []
  const yValues = []
  for (var i = 1; i <= numPoints; i++ ){
    var currentX = document.querySelector("#nameNum"+i).value;
    let add = xValues.push(currentX)
  }
  for (var i = 1; i <= numPoints; i++ ){
    var currentY = document.querySelector("#nameNumY" + i).value;
    let add = yValues.push(currentY)
  }

  const customTrace = {
    type: "scatter",
    mode: "markers",
    x: xValues,
    y: yValues,
    name: 'Highest Marks',
    marker: {
      line: {
        color: 'rgba(156, 165, 196, 1)',
        width: 0.5,
      },
      symbol: 'circle',
      size: 10
    },
  };

  var scatterData = [customTrace]

  alert(traceA.x[0])
  Plotly.react('useGraph', scatterData, layout)

}
