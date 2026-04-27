// LINE CHART (Temperature)
new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Temperature (°C)',
      data: [30, 32, 28, 35, 33, 31, 29],
      borderColor: 'blue',
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


// BAR CHART (Rainfall)
new Chart(document.getElementById("barChart"), {
  type: 'bar',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Rainfall (mm)',
      data: [5, 10, 2, 8, 6, 4, 3],
      backgroundColor: 'green'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


// PIE CHART (Weather Type)
new Chart(document.getElementById("pieChart"), {
  type: 'pie',
  data: {
    labels: ['Sunny', 'Rainy', 'Cloudy'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['orange', 'blue', 'gray']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});