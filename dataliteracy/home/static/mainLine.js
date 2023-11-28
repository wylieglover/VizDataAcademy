var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  
  var data = [trace1, trace2];

  const layout = {
    title: "",
    paper_bgcolor: '#0b122b',
    plot_bgcolor: '#0b122b',
    font: {
      color: '#fff',
      size: 15
    },
    xaxis: {
      gridcolor: '#FFFFFF25',
      gridwidth: .02
    },
    yaxis: {
      gridcolor: '#FFFFFF25',
      gridwidth: .02
    }
  };
  Plotly.newPlot('useGraph', data, layout);

  function updateLines(_this) {
    var ItemCount = +_this.value
    var results = document.querySelector('#barNames')
    results.innerHTML = '' //clear the results on each update
  for (var i = 1; i <= ItemCount; i++) {
    var input = document.createElement('input') //create input
    var label = document.createElement("label"); //create label
    label.innerText = 'Point  ' + i
    label.id= "pointLabel" + i
    input.type = "text";
    input.placeholder = "Bar_Name"; //add a placeholder
    input.className = "inputText"; // set the CSS class
    input.id = "nameNum" + i;
    results.appendChild(label); //append label
    results.appendChild(input); //append input
    results.appendChild(document.createElement("br"));
  }
  }