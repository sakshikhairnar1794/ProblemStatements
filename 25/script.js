console.log("JS Loaded");  // debug

new Chart(document.getElementById("barchart"), {
  type: 'bar',
  data: {
    labels: ['Computer', 'IT', 'ENTC', 'Civil'],
    datasets: [{
      label: 'Students',
      data: [50, 40, 30, 20],
      backgroundColor: ['blue', 'green', 'red', 'orange']
    }]
  }
});