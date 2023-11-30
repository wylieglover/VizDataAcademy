const config = {responsive: true};

const stockY = [];
for(var i=0; i<50; i++){
    stockY[i] = Math.random();
};

// 'rgba(221, 192, 207, .5)', very light grey-pink
// 'rgba(68, 121, 248, 0.5)'  light sky-blue

const stockData = [{
    y: stockY,
    type: 'box',
    label: 'Default Data: ',
    boxpoints: 'all',
    backgroundColor: 'rgba(68, 121, 248, 0.5)',
    borderColor: 'rgba(47, 81, 248, 0.85)',
    borderWidth: 1,
    outlierColor: 'blue',
    padding: 12,
}];

const stockLayout = {
    title: 'Stock Data:',
    autosize: true,
    hovermode: 'closest',
    boxmode: 'group',

    xaxis: {
        ticks: 'outside',
        tickcolor: 'rgba(0, 0, 0, 1)',
        tickwidth: 2,
        showline: true,
    },
    yaxis: {
        ticks: 'outside',
        tickcolor: 'rgba(0, 0, 0, 1)',
        tickwidth: 2,
        showline: true,
    },
    showlegend: true,
    legend: {
        bgcolor: 'rgba(0, 0, 0, .6)',
        borderwidth: 1,
        bordercolor: 'rgba(0, 0, 0, 1)',
        font: {
            size: 10,
            family: 'Courier New',
        }
    },
};

Plotly.newPlot('useGraph', stockData, stockLayout, {editable: true}, config);

const divSpace = document.createElement('div');
divSpace.id='whiteSpace';
divSpace.innerHTML='';

function refreshBoxCount(_this) {
    var inputCount = +_this.value;
    inputCount.id='inputCountid';
    var boxes = document.querySelector('#numBoxPlot');
    boxes.innerHTML=''
    for(var i=1; i<=inputCount; i++){
        var input = document.createElement('input');
        var label = document.createElement('label');
        label.innerText = 'Box Name ' + i;

        input.type='text';
        input.placeholder= 'Box Name';
        input.className='inputText';
        input.id = 'numName' + i;

        boxes.appendChild(label);
        boxes.appendChild(input);
        boxes.appendChild(document.createElement('div'));
        boxes.appendChild(document.createElement('br'));
    }
};

function updateBoxStyle(_this){
    if(_this.value == 1){
        return groupPlot();
    }if (_this.value == 2) {
        return mean_StdDev();
    } else {
        return rainbowPlot();
    }
};
function groupPlot(){
    var countBoxes = document.querySelector('#numBoxes').value;
    var results = document.querySelector('#boxData');
    results.innerHTML='';

    for(var i=0; i<countBoxes; i++){
        const x = [];
        const y = y;
        var outerInput = document.createElement('input');
        var label = document.createElement('label');
        label.innerHTML='Label ' + i;
        for(var j=0; j<size; j++){
            var random = Math.floor(Math.random() * (max - min) + min); //needs to be a value that gets assigned randvalue
            x[j] = random;
        }
        outerInput.appendChild(x);
        results.appendChild(outerInput);
        x = [];
    }

};
function mean_StdDev(){

};
function rainbowPlot(){

};

function updateData(){
    const boxNum = document.querySelector('#numBoxes').value;
    var minResults = [];
    minResults.id = 'minResult';
    var maxResult = [];
    maxResult.id='maxResult';
    var countResult = [];
    countResult.id='countResult';
    var barHide = document.querySelector(".barHide");
    var results = document.querySelector('#boxData');


    for(var i=0; i<boxNum; i++){
        var minLabel = document.createElement('label');
        var minInput = document.createElement('input');
        minLabel.innerText='Min value #' + i + " : ";
        minInput.type='text';
        minInput.placeholder='Enter min value';
        minInput.className='inputText';
        minInput.id='minVal' + i;
        results.appendChild(minLabel);
        results.appendChild(minInput);
        results.appendChild(document.createElement('br'));
        let addMin = minResults.push(minInput.value);

        var maxLabel = document.createElement('label');
        var maxInput = document.createElement('input');
        maxLabel.innerText = 'Box #' + i + " Max: ";
        maxInput.type = 'text';
        maxInput.placeholder='Max'
        maxInput.id='maxVal' + i;
        maxInput.className='inputText';
        results.appendChild(maxLabel);
        results.appendChild(maxInput);
        results.appendChild(document.createElement('br'));
        let addMax = maxResult.push(maxInput.value);

        var countLabel = document.createElement('label');
        var countInput = document.createElement('input');
        countLabel.innerText='Box #' + i + " DP: ";
        countInput.type='text';
        countInput.placeholder='Count'
        countInput.id='countVal' + i;
        countInput.className='inputText';
        results.appendChild(countLabel);
        results.appendChild(countInput);
        results.appendChild(document.createElement('br'));
        results.appendChild(document.createElement('br'));
        let addCount = countResult.push(countInput.value);
    }
};

var datRange = [];
function submitData(){
    var countBoxes = document.querySelector('#numBoxes').value;
    const nameBoxes = [];
    for(var i=0; i<countBoxes; i++){
        var curName = document.querySelector('#numName'+i);
        let add = nameBoxes.push(curName);
    }

    //count[i] should be pulling from boxData & grabbing entry for count
    for(var i=0; i<countBoxes; i++){
        var min = document.querySelector('#minVal'+i).value;
        var max = document.querySelector('#maxVal'+i).value;
        var count = document.querySelector('#countVal'+i).value;
        console.log('min: ' + min + '   Max: ' + max + "  count: " + count);
        var floorMax = Math.floor(max);
        var ceilingMin = Math.ceil(min);
        var curRange = [];
        for(var j=0; j<count; j++){
            var randVal = Math.floor(Math.random() * (floorMax - ceilingMin + 1) + ceilingMin);
            curRange.push(randVal);
        }
        //need to store all values of curRange in to value.
        let add = datRange.push(curRange);
    }
};

const updatedLayout = {
    title: 'New Data:',
    autosize: true,
    hovermode: 'closest',
    boxmode: 'group',

    xaxis: {
        ticks: 'outside',
        tickcolor: 'rgba(0, 0, 0, 1)',
        tickwidth: 2,
        showline: true,
    },
    yaxis: {
        ticks: 'outside',
        tickcolor: 'rgba(0, 0, 0, 1)',
        tickwidth: 2,
        showline: true,
    },
    showlegend: true,
    legend: {
        bgcolor: 'rgba(0, 0, 0, .6)',
        borderwidth: 1,
        bordercolor: 'rgba(0, 0, 0, 1)',
        font: {
            size: 10,
            family: 'Courier New',
        }
    },
};
var boxPlotTrace1 = [{
    y: datRange[0],
    type: 'box',
    boxpoints: 'all',
    backgroundColor: 'rgba(68, 121, 248, 0.5)',
    borderColor: 'rgba(47, 81, 248, 0.85)',
    borderWidth: 1,
    outlierColor: 'blue',
    padding: 12,
}];
var boxPlotTrace2 = [{
    y: datRange[1],
    type: 'box',
    boxpoints: 'all',
    backgroundColor: 'rgba(100, 150, 200, 0.5)',
    borderColor: 'rgba(60, 100, 210, 0.85)',
    borderWidth: 1,
    outlierColor: 'red',
    padding: 12,
}];
var boxPlotTrace3 = [{
    y: datRange[3],
    type: 'box',
    boxpoints: 'all',
    backgroundColor: 'rgba(100, 150, 200, 0.5)',
    borderColor: 'rgba(60, 100, 210, 0.85)',
    borderWidth: 1,
    outlierColor: 'red',
    padding: 12,
}];
var boxPlotTrace4 = [{
    y: datRange[4],
    type: 'box',
    boxpoints: 'all',
    backgroundColor: 'rgba(100, 150, 200, 0.5)',
    borderColor: 'rgba(60, 100, 210, 0.85)',
    borderWidth: 1,
    outlierColor: 'red',
    padding: 12,
}];
var boxPlotTrace5 = [{
    y: datRange[5],
    type: 'box',
    boxpoints: 'all',
    backgroundColor: 'rgba(100, 150, 200, 0.5)',
    borderColor: 'rgba(60, 100, 210, 0.85)',
    borderWidth: 1,
    outlierColor: 'red',
    padding: 12,
}];

function graphNewData(){
    var numOfBox = document.querySelector('#numBoxes').value;
    var newData=[];
    for(var i=0; i<numOfBox; i++){
        var boxTrace = [{
            y: datRange[i],
            type: 'box',
            boxpoints: 'all',
            backgroundColor: 'rgba(68, 121, 248, 0.5)',
            borderColor: 'rgba(47, 81, 248, 0.85)',
            borderWidth: 1,
            outlierColor: 'blue',
            padding: 12,
        }]
        newData.push(boxTrace);
    }

    Plotly.newPlot('useGraph', newData, updatedLayout, config);
}
//Plotly.newPlot('useGraph', stockData, stockLayout, {editable: true}, config);
