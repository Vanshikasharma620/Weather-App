async function dataa(event){
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
    weather.innerText=respdata["weather"][0]["description"];
    temp.innerText="TEMP TODAY :: " + respdata["main"]["temp"];
    maxmin.innerText="   MAX TEMP :: " + respdata["main"]["temp_max"];
    minmax.innerText="MIN TEMP :: " + respdata["main"]["temp_min"] ;
    wind.innerText="WIND TODAY :: " + respdata["wind"]["speed"];
   
    // console.log(respdata["main"]["temp"]);
}