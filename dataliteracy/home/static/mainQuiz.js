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
//    const q1Result = document.querySelector('#question1');
    //q1Result.innerHTML='';
    //var q1Input = document.createElement('p');
    //q1Input.innerHTML=_this.value;
    //q1Result.appendChild(q1Input)

var q1Flag = false;
var q2Flag = false;
var q3Flag = false;
var q4Flag = false;
var q5Flag = false;

function validateQ1(_this){
    if(_this.value == 2){
        q1Flag = true;
    }else{
        q1Flag = false;
    }
};
function validateQ2(_this){
    if(_this.value == 32){
        q2Flag = true;
    }else{
        q2Flag = false;
    }
};
function validateQ3(_this){
    if(_this.value == 1){
        q3Flag = true;
    }else{
        q3Flag = false;
    }
};
function validateQ4(_this){
    if(_this.value == 3){
        q4Flag = true;
    }else{
        q4Flag = false;
    }
};

function validateQ5(_this){
    if(_this.value == 25){
        q5Flag = true;
    }else{
        q5Flag = false;;
    }
};

function submitQuiz(){
    var grade = 0;
    if(q1Flag == true){
        grade += 20;
    }
    if(q2Flag == true){
        grade += 20;
    }
    if(q3Flag == true){
        grade += 20;
    }
    if(q4Flag == true){
        grade += 20;
    }
    if(q5Flag == true){
        grade += 20;
    }
    alert('You got a ' + grade +'%');
};
function displayGrade(){
    //var q1 = q1Result.value;
};