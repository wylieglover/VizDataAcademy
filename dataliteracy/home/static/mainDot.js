const config = {responsive: true};

const traceA = {
  type: "scatter",
  mode: "markers",
  x: [1, 2, 3, 4],
  y: [5, 10, 15, 20],
  name: 'Highest Marks',
  marker: {
    color: 'rgba(156, 165, 196, 0.5)',
    line: {
      color: 'rgba(156, 165, 196, 1)',
      width: 1,
    },
    symbol: 'circle',
    size: 20
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

const traceB = {
  type: "scatter",
  mode: "markers",
  x: [1, 2, 3, 4],
  y: [5, 10, 15, 20],
  name: 'Second Highest Marks',
  marker: {
    color: 'rgba(165, 196, 50, 0.5)',
    line: {
      color: 'rgba(165, 196, 50, 1)',
      width: 1,
    },
    symbol: 'circle',
    size: 20
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

const scatterData = [traceA, traceB];

const layout = {
  title: 'Test title',
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(200, 0, 0)',
    ticks: 'outside',
    tickcolor: 'rgb(200, 0, 0)',
    tickwidth: 4
  },
  margin: {
    l: 280,
    r: 80,
    b: 100,
    t: 160
  },
  legend: {
    bgcolor: 'white',
    borderwidth: 1,
    bordercolor: 'black',
    orientation: 'h',
    xanchor: 'center',
    x: 0.5,
    font: {
      size: 12,
    }
  },
  width: 1000,
  height: 1000,
  paper_bgcolor: '#0b122b',
  plot_bgcolor: 'rgb(255, 230, 255)',
  hovermode: 'closest',
};

Plotly.newPlot('useGraph', scatterData, config)

function updateDataCount(_this){
  var dataCount = +_this.value
  var plotCount = document.querySelector('#dataInfo')

  plotCount.innerHTML = ''

  for(var i=1; i<=dataCount; i++){
    var label = document.createElement('label')
    var input = document.createElement('input')
    label.innerText = 'Entry ' + i;
    label.id='dataName';

    input.id='numName'+i
    input.type='inputText';
    input.placeholder='Enter variable name';
    input.className='dataInput';

    plotCount.appendChild(label);
    plotCount.appendChild(input);
    plotCount.appendChild(document.createElement('br'));
  }
}

function itemsToCompare(_this){
  var dataCount = +_this.value
  var x_Points = document.querySelector('#x_Points')
  x_Points.innerHTML = ''

  for(var i=1; i<=dataCount; i++){
    var label = document.createElement('label')
    var input = document.createElement('input')

    label.innerText='Label ' + i;
    label.id='entryLabel'

    input.type='inputText';
    input.placeholder='X-axis for data comparison';
    input.id='variableName' + i;

    x_Points.appendChild(label);
    x_Points.appendChild(input);
    x_Points.appendChild(document.createElement('br'));
  }
}
function dataToCompare(_this){
  var dataCount = +_this.value
  var dataPoints = document.querySelector('#dotPoints')
  dataPoints.innerHTML=''

  for(var i=1; i<=dataCount; i++){
    var label = document.createElement('label')
    var input = document.createElement('input')

    label.id = 'dataLabel'

    input.type='inputText'
    input.id='dataValue' + i

    dataPoints.appendChild(label)
    dataPoints.appendChild(input)
    dataPoints.appendChild(document.createElement('br'))
  }
}

function updateData(){
  var numEntries = document.querySelector('#numEntry').value;
  var numComp = document.querySelector('#numComparison').value;
  var dotVal = document.querySelector('.barHide'); 
  var whiteSpace = document.querySelector('.barHide');
  whiteSpace.innerHTML=''
  var header = document.createElement('h3');
  header.innerText='ScatterPoint Values:'
  dotVal.appendChild(header);

  for(var i=1; i<=numEntries; i++){
    var buffer = document.createElement('div');
    var label = document.createElement('label');
    label.innerText='Variable ' + i + ' Values \n';
    label.id='X_axis';
    dotVal.appendChild(buffer);
    buffer.appendChild(label);

    for(var j=1; j<=numComp; j++){
      var input=document.createElement('input');
      input.placeholder='Variable ' + i + " value " + j;
      input.type='inputText';
      input.id='Value'+ i + j;

      dotVal.appendChild(input);
      dotVal.appendChild(document.createElement('br'));
    }
  }
}

function submitDotData(){
  var chartTitle=document.querySelector('#dotChartTitle').value
  var numVariables=document.querySelector('#numEntry').value
  var horizontalAxis=document.querySelector('#numComparison').value
  var dataPoints = document.querySelector('#dataValues')

  const dataNames = []
  for(var i=1; i<=numVariables; i++){
    var nameIndex = document.querySelector('#numName'+i).value
    let add=dataNames.push(nameIndex)
  }
  const labels = []
  for(var i=1; i<=horizontalAxis; i++){
    var axisIndex = document.querySelector('#variableName' + i).value
    let add=labels.push(axisIndex)
  }
  const values = []
  for(var i=1; i<=numVariables; i++){
    const itemValue = []
    for(var j=1; j<=horizontalAxis; j++){
      var curVal = document.querySelector('#Value' + i + j).value
      let add = itemValue.push(curVal)
    }
    let add = values.push(itemValue)
  }

}
const scatterPoint1 = {
  type: 'scatter',
  mode: 'markers',
  x: labels,
  y: values[0],
  name: dataNames[0],
  marker: {
    color: '#B65B48',
  }
};
const scatterPoint2 = {
  type: 'scatter',
  mode: 'markers',
  x: labels,
  y: values[1],
  name: dataNames[1],
  marker: {
    color: '#C1CE46',
  }
};
const scatterPoint3 = {
  type: 'scatter',
  mode: 'markers',
  x: labels,
  y: values[2],
  name: dataNames[2],
  marker: {
    color: '#38A3DD',
  }
};
const scatterPoint4 = {
  type: 'scatter',
  mode: 'markers',
  x: labels,
  y: values[3],
  name: dataNames[3],
  marker: {
    color: '#7C58BF',
  }
};
const scatterPoint5 = {
  type: 'scatter',
  mode: 'markers',
  x: labels,
  y: values[4],
  name: dataNames[4],
  marker: {
    color: '#97C6B2',
  }
};

const dotData=[scatterPoint1,scatterPoint2];

if(numVariables>=3){
  let add = dotData.push(scatterPoint3)
}
if(numVariables>=4){
  let add = dotData.push(scatterPoint4)
}
if(numVariables>=5){
  let add = dotData.push(scatterPoint5)
}


Plotly.newPlot('useGraph', dotData, layout, config);
