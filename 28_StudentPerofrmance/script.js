// BAR CHART (Marks)
new Chart(document.getElementById("marksChart"), {
  type: 'bar',
  data: {
    labels: ['Math', 'Science', 'English', 'CS'],
    datasets: [{
      label: 'Marks',
      data: [80, 75, 90, 85],
      backgroundColor: ['blue', 'green', 'orange', 'purple']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


// PIE CHART (Attendance)
new Chart(document.getElementById("attendanceChart"), {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [85, 15],
      backgroundColor: ['green', 'red']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


// LINE CHART (Progress)
new Chart(document.getElementById("progressChart"), {
  type: 'line',
  data: {
    labels: ['Test1', 'Test2', 'Test3', 'Test4'],
    datasets: [{
      label: 'Progress',
      data: [60, 70, 80, 85],
      borderColor: 'blue',
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});