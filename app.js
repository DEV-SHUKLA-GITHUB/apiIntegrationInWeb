let inputValue = document.querySelector('input')
let temp = document.querySelector('.temperature')
let weather = document.querySelector('.weather')
let description = document.querySelector('.description')


const button = document.querySelector('button').addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=e18f3037f5555c2e2263ddf6edc42a82')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {

        let tempValue = data['main']['temp']
        let weatherValue =data['weather'][0]['main']
        let descriptionValue =data['weather'][0]['description']
        
        
        temp.innerHTML = "Temperature = "+tempValue+" celcius";
        weather.innerHTML = "Weather = "+weatherValue;
        description.innerHTML = "Description  = "+descriptionValue;
        
    })
    
})



