// display temperature for spesefice city 

const readline = require('readline');
const fs = require('fs');
const { error } = require('console');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
  ];

async function fetchTemperature(cityFound){

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityFound.lat}&longitude=${cityFound.lng}&current_weather=true`);
    const data = await response.json();
    const temp = data.current_weather.temperature;
    return temp
};

   function searchTemperature(cities){
    rl.question('enter city name  or press 0 to exit: ' , (searchtemp)=>{
        const cityFound = cities.find((cities)=> cities.name.toLowerCase() === searchtemp.toLowerCase())
        
        if (cityFound){
            fetchTemperature(cityFound).then((temp)=> console.log(`the temperature of ${cityFound.name} is : ` + temp));
            rl.close()
            
        }else if(searchtemp == '0'){
           rl.close()
        }else{ console.log('city not found'); searchTemperature(cities)}
    })
  }
  searchTemperature(cities);

 





  