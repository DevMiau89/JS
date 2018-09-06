const canvas = document.getElementById('chart')
const ctx = canvas.getContext('2d')


const btn = document.querySelector('#btn');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function leadingZero(i) {
    return (i < 10)? '0'+i : i;
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = leadingZero(a.getMonth() + 1);
  var date = leadingZero(a.getDate());
  var hour = leadingZero(a.getHours());
  var min = leadingZero(a.getMinutes())
  var sec = leadingZero(a.getSeconds());
  var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

var timeArray = [1536033607702, 1536037207702, 1536040807702, 1536044407702, 1536048007702, 1536051607702, 1536055207702, 1536058807702, 1536062407702, 1536066007702]
var labelArray = timeArray.map(element => timeConverter(element))

let stockName;
let arrayOfStocks = [];

var chart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: labelArray,
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

fetch('./stocks').then(resp => resp.json()).then(resp => {(Array.from(resp.stockSymbols)).forEach(function(el){        
        var divWithStocks =  document.querySelector('#Stocks'); 
        var pWithoutText = document.createElement('p');
        pWithoutText.textContent = el;
        divWithStocks.appendChild(pWithoutText);   
        stockName = el;
        pWithoutText.setAttribute('id', `${el}`);
        arrayOfStocks.push(el);
        fetch(`./stocks/${el}`).then(resp => resp.json()).then(resp => {dataSet = {
            label: el,
            data: resp.map(x => x.value),
            borderColor: getRandomColor(),
            fill: false
        }; chart.data.datasets.push(dataSet); chart.data.labels = resp.map(y => timeConverter(y.timestamp)); chart.update();}).catch(err =>  { x = document.querySelector(`#${el}`); x.textContent += ' - Sorry, Stock ' + err.message; x.style.color =  'red'; });
                                                                       
    });    
}).catch(err => alert('Sorry something went wrong. The data connot be fetched'))



document.getElementById('Stocks').addEventListener('click', function(e){
        if(e.target && e.target.nodeName == 'P') { 
            fetch(`./stocks/${stockName}`).then(resp => resp.json()).then(resp =>console.log(resp))  

        }    
}) 

document.addEventListener('DOMContentLoaded', function(){
        const spinner = document.querySelector('span.spinner');
        spinner.style.display = 'none';

});




