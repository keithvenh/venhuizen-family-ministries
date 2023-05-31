var ctx = document.getElementById('budgetChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Housing', 'Taxes', 'Insurance', 'Food', 'Transportation', 'Savings', 'Other'],
        datasets: [{
            data: [2000, 1200, 800, 600, 550, 450, 400],
            backgroundColor: [
                'rgba(249, 65, 68, 0.9)',  // bright red
                'rgba(243, 114, 44, 0.9)',  // orange
                'rgba(248, 150, 30, 0.9)',  // yellow-orange
                'rgba(249, 199, 79, 0.9)',  // yellow
                'rgba(144, 190, 109, 0.9)',  // light green
                'rgba(67, 170, 139, 0.9)',  // green-blue
                'rgba(87, 117, 144, 0.9)'   // steel blue
            ],
            borderColor: [
                '#F94144',  // bright red
                '#F3722C',  // orange
                '#F8961E',  // yellow-orange
                '#F9C74F',  // yellow
                '#90BE6D',  // light green
                '#43AA8B',  // green-blue
                '#577590'   // steel blue
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var data = context.dataset.data;
                        var value = data[context.dataIndex];
                        var total = data.reduce(function(a, b){ return a + b; }, 0);
                        var percentage = ((value / total) * 100).toFixed(2); 
                        return ' $' + value + ' (' + percentage + '%)';
                    }
                }
            }

        }
    }
});
