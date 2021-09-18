async function dataa(event){
    const showcity=document.getElementById("showcity");
    const weather=document.getElementById("weather");
    const temp=document.getElementById("temp");
    const minmax=document.getElementById("min");
    const maxmin=document.getElementById("min");
    const wind=document.getElementById("wind");
    document.getElementById("showdata").classList.remove("hide");
    event.preventDefault();
    let city=event.target['city'].value
    console.log(city);
    const det= await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=5ea48567760b12859fe7fa46e3abb151");
    const respdata= await det.json();
    showcity.innerText=respdata["name"];
    weather.innerText= "Weather :: " +respdata["weather"][0]["description"];
    temp.innerText="TEMP TODAY :: " + to_cel(respdata["main"]["temp"])+ " °C";
    maxmin.innerText="   MAX TEMP :: " + to_cel(respdata["main"]["temp_max"])+ " °C";
    minmax.innerText="MIN TEMP :: " + to_cel(respdata["main"]["temp_min"]) + " °C";
    wind.innerText="WIND TODAY :: " + respdata["wind"]["speed"] + " m/s";
}

function to_cel(tempp){
    return (tempp-273.15).toPrecision(3);
}