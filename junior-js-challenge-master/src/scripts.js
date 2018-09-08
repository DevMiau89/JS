import {getRandomColor} from "./modules/colors.js";
import {timeConverter} from "./modules/timeConverter.js";
import fetch from './modules/fetchWithTimeout'

const canvas = document.getElementById('chart')

let stockName;
let arrayOfStocks = [];


var chart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: [],
        datasets : []
    },
    options: {
      title: {
        display: true,
        text: 'Stocks'
      }, 
        scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontColor: "#800000"  
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Timestamp",
            fontColor: "#800000"  
          }
        }]
      }
    }
}) 

fetch('./stocks', 5000).then(resp => resp.json()).then(resp => {(Array.from(resp.stockSymbols)).forEach(function(el){        
        var divWithStocks =  document.querySelector('#Stocks'); 
        var pWithoutText = document.createElement('p');
        pWithoutText.textContent = el;
        divWithStocks.appendChild(pWithoutText);   
        stockName = el;
        pWithoutText.setAttribute('id', `${el}`);
        arrayOfStocks.push(el);
        fetch(`./stocks/${el}`, 5000).then(resp => resp.json()).then(resp => {var dataSet = {
            label: el,
            data: resp.map(x => x.value),
            borderColor: getRandomColor(),
            fill: false
        }; chart.data.datasets.push(dataSet); chart.data.labels = resp.map(y => timeConverter(y.timestamp)); chart.update();}).catch(err =>  {var x = document.getElementById(el); x.textContent += ' - Sorry, Stock ' + err.message; x.style.color =  'red'; });
                                                                       
    });    
}).catch(err => alert('Sorry something went wrong. The data could not be retrieved from the database'))

 

document.addEventListener('DOMContentLoaded', function(){
        const spinner = document.querySelector('span.spinner');
        spinner.style.display = 'none';

});




