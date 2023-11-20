const Utils = {
  months: ({ count }) => {
    const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    return monthLabels.slice(0, count);
  },
  bubbles: ({ count, min, max }) => {
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
  },
  transparentize: (color, alpha) => {
    if (typeof color !== 'string' || !color.startsWith('rgb')) {
      console.error('Invalid color provided to transparentize:', color);
      return color; 
    }
    return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
  },
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