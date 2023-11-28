const config = {responsive: true};

var trace1 = {
    x: [1959,1960,1961,1962,1963,1964,1965,
      1966,1967,1968,1969,1970,1971,1972,
      1973,1974,1975,1976,1977,1978,1979,
      1980,1981,1982,1983,1984,1985,1986,
      1987,1988,1989,1990,1991,1992,1993,
      1994,1995,1996,1997,1998,1999,2000,
      2001,2002,2003,2004,2005,2006,2007,
      2008,2009,2010],
    y: [550,600,600,625,650,675,675,700,800,
			850,1050,1050,1150,1200,1150,1150,1050,1000,
			850,750,775,700,675,700,750,850,900,950,1000,
			1050,1100,1200,1250,1300,1450,1650,1750,2000,
			2100,2300,800,850,950,1000,1100,1050,825,600,
			450,350,275,550],
    type: 'scatter',
    name: 'Moose'
  };
  
  var trace2 = {
    x: [1959,1960,1961,1962,1963,1964,1965,
      1966,1967,1968,1969,1970,1971,1972,
      1973,1974,1975,1976,1977,1978,1979,
      1980,1981,1982,1983,1984,1985,1986,
      1987,1988,1989,1990,1991,1992,1993,
      1994,1995,1996,1997,1998,1999,2000,
      2001,2002,2003,2004,2005,2006,2007,
      2008,2009,2010],
    y: [21,23,23,24,21,25,27,25,22,22,17,18,20,22,23,31,
			41,44,34,40,43,50,31,12,23,24,22,20,20,17,14,11,
			11,13,11,11,12,16,15,23,25,13,26,30,17,15,17,29,
			30,30,22,24],
    yaxis: 'y2',
    type: 'scatter',
    name: 'Wolves'
  };
  
  var data = [trace1, trace2];

  const layout = {
    title: "Moose vs. Wolves population",
    showlegend: true,
    legend: {
      x:80,
      y:100
    },
    paper_bgcolor: '#0b122b',
    plot_bgcolor: '#0b122b',
    font: {
      color: '#fff',
      size: 15
    },
    yaxis: {
      title: 'Moose',
      gridcolor: '#FFFFFF25',
      gridwidth: .02},
    yaxis2: {
      title: "Wolves",
      overlaying: 'y',
      side: 'right'
      }
  };
  Plotly.newPlot('useGraph', data, layout, config);

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