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
    var userChoice = _this.value;

    if(userChoice == 1){
        return groupPlot();
    }if (userChoice == 2) {
        return mean_StdDev();
    } else {
        return rainbowPlot();
    }
};
function updateData(){
    var boxNum = document.getElementById('#inputCountid');
    var results = document.querySelector('#boxMin');
    results.innerHTML='';
    const maxResult = document.querySelector('#boxMax');
    maxResult.innerHTML='';
    const countResult = document.querySelector('#countData');
    countResult.innerHTML='';

    for(var i=0; i<boxNum; i++){
        var minLabel = document.createElement('label');
        var minInput = document.createElement('input');
        minLabel.innerText='Min value #' + i + " : ";
        minInput.type='text';
        minInput.placeholder='Enter value';
        minInput.className='inputText';
        minInput.id='minVal' + i;
        results.appendChild(minLabel);
        results.appendChild(minInput);
        results.appendChild(document.createElement('br'));

        var maxLabel = document.createElement('label');
        var maxInput = document.createElement('input');
        maxLabel.innerText = 'Max range for box #' + i;
        maxInput.type = 'text';
        maxInput.placeholder='Max'
        maxInput.id='rangeMax' + i;
        maxInput.className='inputText';
        maxResult.appendChild(maxLabel);
        maxResult.appendChild(maxInput);
        maxResult.appendChild(document.createElement('br'));

        var countLabel = document.createElement('label');
        var countInput = document.createElement('input');
        countLabel.innerText='# of Data points for box #' + i;
        countInput.type='text';
        countInput.placeholder='Count'
        countInput.id='numDataEntry' + i;
        countInput.className='inputText';
        countResult.appendChild(countLabel);
        countResult.appendChild(countInput);
        countResult.appendChild(document.createElement('br'));
    }
};
function groupPlot(){
    var countBoxes = document.querySelector('#numBoxes').value;
    var results = document.querySelector('#boxType');
    results.innerHTML='';

    for(var i=0; i<countBoxes; i++){
        const x = [];
        const y = y;
        var outerInput = document.createElement('input');
        var label = document.createElement('label');
        for(var j=0; j<size; j++){
            var random = Math.floor(Math.random() * (max - min) + min);
            var output = document.createElement('output'); //needs to be a value that gets assigned randvalue
            x[j] = random;
        }
        outerInput.appendChild(x);
        results.appendChild(outerInput);
        x = [];
    }

};
function mean_StdDev(){
    var countBoxes = document.querySelector('#numBoxes').value;
    var results = document.querySelector('#boxType');
    results.innerHTML='';

    for(var i=1; i<=countBoxes; i++){
        
    }

};
function rainbowPlot(){
    var countBoxes = document.querySelector('#numBoxes').value;
    var results = document.querySelector('#boxType');
    results.innerHTML='';

    for(var i=1; i<=countBoxes; i++){
        
    }

};