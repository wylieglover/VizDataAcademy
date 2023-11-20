    
   //Basic Values for the chart 
   var data = [{
    type: "pie",
    values: [2, 3, 4, 4],
    labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
    textinfo: "label+percent",
    textposition: "outside",
    automargin: true
}]

var layout = {
height: 400,
width: 400,
margin: {"t": 0, "b": 0, "l": 0, "r": 0},
showlegend: false
}

var formfield = document.getElementById('formfield');
var catfield = document.getElementById('cat');
var valuefield = document.getElementById('val');


var numOfLabels = 4;


//Adds input boxes for new values
function addValues() {

    if (numOfLabels != 8) {

    numOfLabels += 2;

    //Creates new input tages for category names
    var newFieldCat = document.createElement('input');
    newFieldCat.setAttribute('type','text');
    newFieldCat.setAttribute('name','text');
    newFieldCat.setAttribute('id', 'catName' + (numOfLabels / 2));
    newFieldCat.setAttribute('class','inputs');
    newFieldCat.setAttribute('siz',50);
    newFieldCat.setAttribute('placeholder','Category Name value' + (numOfLabels / 2) );
    catfield.appendChild(newFieldCat);
    catfield.appendChild(document.createElement('br'));
    catfield.appendChild(document.createElement('br'));



    //Creates New input tags for numeric values
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','text');
    newField.setAttribute('id', 'value' + (numOfLabels / 2));
    newField.setAttribute('class','inputs');
    newField.setAttribute('siz',50);
    newField.setAttribute('placeholder','New Value' + (numOfLabels / 2) );
    valuefield.appendChild(newField);
    valuefield.appendChild(document.createElement('br'));
    valuefield.appendChild(document.createElement('br'));


    } else {
        alert("Max amount of possible entries reached!")
    }
    


}

//Removes input boxes for existing values when >4
function removeValues() {
    

    var input_tags = valuefield.getElementsByTagName('input');
    var input_tag = catfield.getElementsByTagName('input');

    if((input_tags.length * 2) < 9 && numOfLabels > 4) {
        valuefield.removeChild(input_tags[(input_tags.length) - 1]);
        catfield.removeChild(input_tag[(input_tag.length) - 1]);
        

    }
    
    if (numOfLabels > 4) {
        numOfLabels -= 2;
    }
}

function updateGraph() {
    let arrValue = [];
    let arrCat = [];

    for (let i = 0; i < numOfLabels / 2; i++) {
        arrValue[i] = document.getElementById('value' + (i+1)).value;
        arrCat[i] = document.getElementById('catName' + (i+1)).value;

    }
     

    data = [{
        type: "pie",
        values: arrValue,
        labels: arrCat,
        textinfo: "label+percent",
        textposition: "outside",
        automargin: true
    }]
        
    Plotly.newPlot('useGraph', data, layout)           
}

function emptyArray(arr) {
    empty = true
    for (var i=0; i<arr.length; i++){
        if (arr[i] == 'undefined'){
            return true; 
        } else {
            empty = false;
        }
    }
    return empty;
}

Plotly.newPlot('useGraph', data, layout)