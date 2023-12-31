const config = { responsive: true };
var x = [];
for (var i = 0; i < 30; i++) {
  x[i] = Math.random() * 100;
}

var trace = {
  x: x,
  type: 'histogram',
};
var layout = {
  bargap: 0.05,
  bargroupgap: 0.2,
  barmode: "overlay",
  title: "Sampled Results",
  paper_bgcolor: '#0b122b',
  plot_bgcolor: '#0b122b',
  font: {
    color: '#fff',
    size: 15
  },
  xaxis: {
    gridcolor: '#FFFFFF75',
    gridwidth: .02
  },
  yaxis: {
    gridcolor: '#FFFFFF75',
    gridwidth: .02
  }
};
var data = [trace];
Plotly.newPlot('useGraph', data, layout, config);


function updateBars() {
  const numBars = parseInt(document.getElementById('numBars').value);
  const barNamesContainer = document.getElementById('barNamesInput');
  const barValuesContainer = document.getElementById('barValuesInput');

  barNamesContainer.innerHTML = ''; // Clear previous inputs
  barValuesContainer.innerHTML = '';

  for (let i = 0; i < numBars; i++) {
    const barNameInput = document.createElement('input');
    barNameInput.type = 'text';
    barNameInput.className = 'inputText'
    barNameInput.placeholder = `Bar ${i + 1} Label`;
    barNamesContainer.appendChild(barNameInput);

    const barValueInput = document.createElement('input');
    barValueInput.type = 'number';
    barValueInput.className = 'inputText'
    barValueInput.placeholder = `Bar ${i + 1} Value`;
    barValuesContainer.appendChild(barValueInput);
  }
}

function submitDataBar() {
  const barNamesInputs = document.getElementById('barNamesInput').querySelectorAll('input');
  const barValuesInputs = document.getElementById('barValuesInput').querySelectorAll('input');

  const barNames = Array.from(barNamesInputs).map(input => input.value);
  const barValues = Array.from(barValuesInputs).map(input => parseFloat(input.value));

  // Use barNames and barValues to update your Plotly trace or perform other actions as needed
  console.log('Bar Names:', barNames);
  console.log('Bar Values:', barValues);

  const data = [{
    x: barNames,
    y: barValues,
    type: 'bar',
    // other properties specific to your plot
  }];

  const layout = {
    title: document.getElementById('chartName').value || 'Graph Title',
    // other layout properties specific to your plot
  };

  Plotly.newPlot('useGraph', data, layout);
}
