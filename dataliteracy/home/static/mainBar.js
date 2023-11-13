
/*===== Charts =====*/
const config = {responsive: true};
//Bar Chart

const ogBarTrace1 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
  }
};

const ogBarTrace2 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'LA Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
    opacity: 0.6,
  }
};

const barChartData = [ogBarTrace1,ogBarTrace2];
const layout = {
  title: "Example Graph",
  barmode: 'group',
  showlegend: false,
  paper_bgcolor: '#0b122b',
  font: {
    color: '#6b6f8a'
  }
};
Plotly.newPlot('useGraph', barChartData, layout, config);

function updateBars(_this) {
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

function updateComp(_this) {
  var ItemCount = +_this.value
  var results = document.querySelector('#compValues')
  results.innerHTML = '' //clear the results on each update
for (var i = 1; i <= ItemCount; i++) {
  var input = document.createElement('input') //create input
  var label = document.createElement("label"); //create label
  label.innerText = 'Label   ' + i
  //label.className = "inputText"
  input.type = "text";
  input.placeholder = "comparison value "; //add a placeholder
  input.className = "inputText"; // set the CSS class
  input.id = "barLabels"+i
  results.appendChild(label); //append label
  results.appendChild(input); //append input
  results.appendChild(document.createElement("br"));
}  
document.querySelector('.barHide').className = "barHide active"
}

function updateValues() {
  var clearDiv = document.querySelector('.barHide')
  clearDiv.innerHTML = ''
  var segments = document.querySelector('#numBars').value;
  var values = document. querySelector('#numComp').value;
  var barHide = document.querySelector(".barHide");
  var header = document.createElement('h2');
  header.innerText = "Bar Values: ";
  barHide.appendChild(header);
for (var i = 1; i <= segments; i++) {
   var label = document.createElement('label');
   label.innerText = "Bar " + i + " Values :\n"
   var ansDiv = document.createElement('div');
   barHide.appendChild(ansDiv)
   ansDiv.appendChild(label);
   for (var j = 1; j <= values; j++){
      var input = document.createElement('input');
      input.type = "text";
      input.placeholder = "Bar " + i + " value " + j + "";
      input.className = "inputText";
      input.id = "value" + i + j;
      barHide.appendChild(input);
      barHide.appendChild(document.createElement("br"));
   }
  }
}

function submitDataBar() {
  var graphTitle = document.querySelector("#chartName").value;
  var numBars = document.querySelector("#numBars").value;
  const barNames = [];
  for (var i = 1; i <= numBars; i++) {
    var currentName = document.querySelector("#nameNum"+i).value;
    let add = barNames.push(currentName);}
  var numComp = document.querySelector("#numComp").value;
  const labels = [];
  for (var i = 1; i <= numComp; i++) {
    var currentName = document.querySelector("#barLabels"+i).value;
    let add = labels.push(currentName);}
  const values = [];
  for (var i = 1; i <= numBars; i++) {
    const barValues = []
    for (var j = 1; j<= numComp; j++) {
      var currentValue = document.querySelector("#value"+i+j).value;
      let add = barValues.push(currentValue);
    }
    let add = values.push(barValues);
  }


  const barChartTrace1 = {
    x: labels,
    y: values[0],
    name: barNames[0],
    type: 'bar',
    marker: {
      color: '#9185ff',
    }
  };

  const barChartTrace2 = {
    x: labels,
    y: values[1],
    name: barNames[1],
    type: 'bar',
    marker: {
      color: '#5042cf',
    }
  };

  const barChartTrace3 = {
    x: labels,
    y: values[2],
    name: barNames[2],
    type: 'bar',
    marker: {
      color: '#2d1fab',
    }
  };

  const barChartTrace4 = {
    x: labels,
    y: values[3],
    name: barNames[3],
    type: 'bar',
    marker: {
      color: '#1d118c',
    }
  };

  const barChartTrace5 = {
    x: labels,
    y: values[4],
    name: barNames[4],
    type: 'bar',
    marker: {
      color: '#0d055c',
    }
  };

  const bLayout = {
    title: "",
    barmode: 'group',
    showlegend: false,
    paper_bgcolor: '#0b122b',
    font: {
      color: '#6b6f8a'
    }
  };

  const barData=[barChartTrace1,barChartTrace2]
  
  if (numBars>=3) {
    let add = barData.push(barChartTrace3)
  }
  if (numBars>=4) {
    let add = barData.push(barChartTrace4)
  }
  if (numBars>=5) {
    let add = barData.push(barChartTrace5)
  }

  bLayout.title = graphTitle;
  Plotly.newPlot('useGraph', barData, bLayout, config);
}
