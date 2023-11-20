const Utils = {
  months: ({ count }) => {
    // Logic to generate month labels
    // Example implementation:
    const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    return monthLabels.slice(0, count);
  },
  numbers: ({ count, min, max }) => {
    // Logic to generate an array of random numbers
    // Example implementation:
    const randomNumberArray = Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    return randomNumberArray;
  },
  bubbles: ({ count, min, max }) => {
    // Logic to generate an array of bubble data
    // Example implementation:
    const bubbleData = Array.from({ length: count }, () => {
      return {
        x: Math.random() * (max - min) + min,
        y: Math.random() * (max - min) + min,
        r: Math.random() * (max - min) / 5,
      };
    });
    return bubbleData;
  },
  CHART_COLORS: {
    red: 'rgb(255, 99, 132)',
    blue: 'rgb(54, 162, 235)',
    // Add other colors if needed
  },
  transparentize: (color, alpha) => {
    if (typeof color !== 'string' || !color.startsWith('rgb')) {
      console.error('Invalid color provided to transparentize:', color);
      return color; // Return the color as is if it's not a valid string or doesn't start with 'rgb'
    }

    // Logic to make a color transparent
    // Example implementation:
    return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
  },
  // Add other utility methods if needed
};

const ctx = document.getElementById('bubblegraph');
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});

  new Chart(ctx, {
    type: 'bubble',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.bubbles(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.bubbles(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bubble Chart'
        }
      }
    }
  });