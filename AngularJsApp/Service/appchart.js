var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
    labels: ["One","Two","Three","Four"],
    datasets : [
        {
            fillColor: "rgba(255,0,0,0.3)",
            strokeColor : "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            fillColor: "rgba(0,255,0,0.3)",
            strokeColor : "rgba(151,187,205,0.8)",
            highlightFill : "rgba(151,187,205,0.75)",
            highlightStroke : "rgba(151,187,205,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {
            fillColor: "rgba(0,0,255,0.3)",
            strokeColor : "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        },
        {   
            fillColor: "rgba(192,192,192,0.3)",
            strokeColor : "rgba(151,187,205,0.8)",
            highlightFill : "rgba(151,187,205,0.75)",
            highlightStroke : "rgba(151,187,205,1)",
            data : [10,20,30,40,50,60,70]
        }
    ]
}
window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive : true
    });
}

createBarChart = function ()
{  
    if (window.myBar !== undefined) 
        window.myBar.destroy();
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive: true,
    });
};  
