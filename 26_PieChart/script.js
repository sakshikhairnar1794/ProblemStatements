new Chart(document.getElementById("PiieChart"),{
    type: 'pie',
    data:{
        labels:['Present', 'Absent', 'Leave'],
        datasets:[{
            data:[70, 20, 10],
            backgroundColor:['red', 'yellow', 'skyblue']
        }]
    }
});