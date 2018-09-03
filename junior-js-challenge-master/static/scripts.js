const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')

//function drawLine (start, end, style) {
//  ctx.beginPath()
//  ctx.strokeStyle = style || 'black'
//  ctx.moveTo(...start)
//  ctx.lineTo(...end)
//  ctx.stroke()
//}
//
//function drawTriangle (apex1, apex2, apex3) {
//  ctx.beginPath()
//  ctx.moveTo(...apex1)
//  ctx.lineTo(...apex2)
//  ctx.lineTo(...apex3)
//  ctx.fill()
//}
//
//drawLine([50, 50], [50, 550])
//drawTriangle([35, 50], [65, 50], [50, 35])
//
//drawLine([50, 550], [950, 550])
//drawTriangle([950, 535], [950, 565], [965, 550])


const btn = document.querySelector('#btn');


let stockName = '';
let arrayOfStocks = [];
fetch('./stocks').then(resp => resp.json()).then(resp => {(Array.from(resp.stockSymbols)).forEach(function(el){        
        var divWithStocks =  document.querySelector('#Stocks'); 
        var pWithoutText = document.createElement('p');
        pWithoutText.textContent = el;
        divWithStocks.appendChild(pWithoutText);   
        stockName = el;
        arrayOfStocks.push(el)
    });    
})

document.getElementById('Stocks').addEventListener('click', function(e){
        if(e.target && e.target.nodeName == 'P') {
            fetch(`./stocks/${stockName}`).then(resp => resp.json()).then(resp => {console.log(resp)})                 
        }    
}) 

document.addEventListener('DOMContentLoaded', function(){
        const spinner = document.querySelector('span.spinner');
        spinner.style.display = 'none';
});


let chart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: arrayOfStocks,
        datasets : [{
            label : 'MSFT',
            borderColor: "#3e95cd",
            fill: false
        },
                   {
            label : 'AAPL',
            borderColor: "#8e5ea2",
            fill: false
        },
        {
            label : 'FB',
            borderColor: "#3cba9f",
            fill: false
        },
        {
            label : 'EA',
            borderColor: "#e8c3b9",
            fill: false
        },
        {
            label : 'IBM',
            borderColor: "#c45850",
            fill: false
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, 
        scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Value"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Timestamp"
          }
        }]
      }
    }
}) 