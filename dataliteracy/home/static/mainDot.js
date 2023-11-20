//var dotDiv = document.getElementById("dot-chart");

//FIX SUBMITDOTDATA
//datatoCompare: refactor to add inputtext dependent on items comparing
//do not need dataPoints, should be able to extend count from x-Axis

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
      width: 0.5,
    },
    symbol: 'circle',
    size: 10
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
      width: 0.5,
    },
    symbol: 'circle',
    size: 10
  },
  hoverlabel: {
    bgcolor: 'black',
  }
};

var scatterData = [traceA, traceB];

var layout = {
  autosize: false,
  width: 500,
  height: 500,
  title: {
    'text': 'Test title',
    'xanchor': 'center',
    'color' : 'white',
  },
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
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: '#8B9BBD',
  scattermode:'group',
  hovermode: 'closest',
};

Plotly.newPlot('useGraph', scatterData, layout, config)

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

function xAxisValues(_this){
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
function yAxisValues(_this){
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
  var xComp = document.querySelector('#xComparison').value;
  var yComp = document.querySelector('#yComparison').value;
  var dotVal = document.querySelector('.barHide'); 
  var whiteSpace = document.querySelector('.barHide');
  whiteSpace.innerHTML=''
  var header = document.createElement('h3');
  header.innerText='ScatterPoint Values:'
  dotVal.appendChild(header);

  for(var a=1; a<=numEntries; a++){
    var buffer = document.createElement('div');
    var label = document.createElement('label');
    label.innerText='Variable ' + i + ' Values \n';
    label.id='numDots';
    dotVal.appendChild(buffer);
    buffer.appendChild(label);

    for(var i=1; i<=xComp; i++){
      var xInput=document.createElement('input');
      xInput.placeholder='Variable ' + i + ' x-axis value: ';
      xInput.type='inputText';
      xInput.id='Value' + i;
      dotVal.appendChild(xInput);
      dotVal.appendChild(document.createElement('br'));
  
      for(var j=1; j<=yComp; j++){
        var yInput=document.createElement('input');
        yInput.placeholder='Variable ' + i + " y-axis value: " + j;
        yInput.type='inputText';
        yInput.id='Value'+ i + j;
  
        dotVal.appendChild(yInput);
        dotVal.appendChild(document.createElement('br'));
      }
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
var dLayout = {
  showgrid: false,
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 75,
    b: 75,
    r: 50,
    t: 50,
    pad: 4
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
  title: '',
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(200, 0, 0)',
    ticks: 'outside',
    tickcolor: 'rgb(200, 0, 0)',
    tickwidth: 4
  },
  paper_bgcolor: '#0b122b',
    font: {
      color: '#6b6f8a'
    }
}

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