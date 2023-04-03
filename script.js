// JavaScript
const chartDiv = document.getElementsById('chart')

const exchangeApiUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

const getChartInfo = async () => {
  const data = await fetch(`${exchangeApiUrl}`)
  .then(r => r.json())
  .then( data => console.log(data))
}

const chart = new chart(, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'BTC-USD',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      }
    }
  }
});

function updateChart() {
  fetch(exchangeApiUrl)
    .then(response => response.json())
    .then(data => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const price = parseFloat(data.data.amount);
      chart.data.labels.push(time);
      chart.data.datasets[0].data.push(price);
      chart.update();
    });
}

setInterval(updateChart, 5000);

const socket = new WebSocket('wss://example.com/ws');
socket.addEventListener('message', event => {
  const data = JSON.parse(event.data);
  const price = parseFloat(data.price);
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  chart.data.labels.push(time);
  chart.data.datasets[0].data.push(price);
  chart.update();
});
