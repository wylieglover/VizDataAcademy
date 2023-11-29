const barTrace1 = {
    x: ['Jan', 'Feb', 'Mar'],
    y: [20, 15, 32],
    name: 'Test1',
    type: 'bar',
    marker: {
        color: 'red',
    }
};
const barTrace2 = {
    x: ['Jan', 'Feb', 'Mar'],
    y: [30, 12, 25],
    name: 'Test2',
    type: 'bar',
    marker: {

    }, 
};
const quizData = [barTrace1, barTrace2];
const stockLayout = {
    title: 'Quiz Data:',
    autosize: true,
    hovermode: 'closest',
    barmode: 'group',
    paper_bgcolor: 'rgba(0, 0, 0, .5)',

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
Plotly.newPlot('useGraph', quizData, stockLayout);

//have some function that gathers all answers and alert() a percentage of right answers

function validateQ1(_this){
    const ansChoice = _this.value;
    if(ansChoice == 2){
        console.log('Right answer');
    }else{
        console.log('Wrong answer');
    }
};

function validateQ2(_this){
    const q2Answer = _this.value;
    if(q2Answer == 32){
        console.log('right answer');
    }else{
        console.log('wrong answer');
    }
};
function validateQ3(_this){
    const q3Answer = _this.value;

    if(q3Answer == 1){
        console.log('right answer');
    }else{
        console.log('wrong answer');
    }
};
function validateQ4(_this){
    const q4Answer = _this.value;
    if(q4Answer == 3){
        console.log('right answer');
    }else{
        console.log('wrong answer');
    }
};
function validateQ5(_this){
    const q5Answer = _this.value;
    if(q5Answer == 25){
        console.log('right answer');
    }else{
        console.log('wrong answer');
    }
};