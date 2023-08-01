
document.addEventListener('DOMContentLoaded', function() {
let out = document.querySelector('.root')
let template = '';
let curentlocation = 'Poltava'
    function weatherData(){
        let url = `https://api.weatherapi.com/v1/forecast.json?key=6fd361ff5b1d426d843174843231307&q=${curentlocation}&days=7`;
        let req = new Request(url)
        fetch(req)
        .then(res => res.json())
        .then((res => data(res)))
        .catch(err => console.error(err));
    }
    function data(data){
        console.log(data);
        let daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
        let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вереснь', 'Жоветнь', 'Листопад', 'Грудень'];
        function getDayOfWeeks(dateString) {
            const daysOfWeekShort = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
            const date = new Date(dateString);
            const dayIndex = date.getDay();
            return daysOfWeekShort[dayIndex];
        }
        let arr = [];
        const currentEpochTime = Math.floor(Date.now() / 1000);
        const test = data.forecast.forecastday
        for(let y in test){
            const tst = test[y].hour
            for(let key of tst){
                if(currentEpochTime <= key.time_epoch){
                    arr.push(key)
                }
            }
        }
        const currentdaytime = []
        const times = []
        for(let i = 0; i <= 5;i++){
            if(i < arr.length){
                let date = new Date(arr[i].time_epoch * 1000)
                let time = date.getHours();
                currentdaytime.push(arr[i])
                times.push(time)
            }else{
                break
            }
            
        }
        const weatherimgday = {
            '1000': './img/day/clear-day.svg',
            '1003': './img/day/partly-cloudy-day.svg',
            '1006': './img/day/cloudy.svg',
            '1009': './img/day/overcast.svg',
            '1030': './img/day/smoke.svg',
            '1063': './img/day/partly-cloudy-day-rain.svg',
            '1066': './img/day/partly-cloudy-day-snow.svg',
            '1069': './img/day/partly-cloudy-day-sleet.svg',
            '1072': './img/day/partly-cloudy-day-drizzle.svg',
            '1087': './img/day/thunderstorms-day.svg',
            '1240': './img/day/partly-cloudy-day-rain.svg',
            '1192': './img/day/partly-cloudy-day-drizzle.svg',
            '1183': './img/day/drizzle.svg'
        }
        const weatherimgnight = {
            '1000': './img/night/clear-night.svg',
            '1003': './img/night/partly-cloudy-night.svg',
            '1006': './img/night/cloudy.svg',
            '1009': './img/night/overcast.svg',
            '1030': './img/night/smoke.svg',
            '1063': './img/night/partly-cloudy-day-rain.svg',
            '1066': './img/night/partly-cloudy-day-snow.svg',
            '1069': './img/night/partly-cloudy-day-sleet.svg',
            '1072': './img/night/partly-cloudy-day-drizzle.svg',
        }
        const icontempgradus = {
            '1': './img/tempanim/thermometer-sun.svg',
            '2': './img/tempanim/thermometer-moon.svg'
        }
        const moonicon = {
            'Waxing Gibbous': './img/MoonPhases/moon-waxing-gibbous.svg',
            'Waxing Crescent': './img/MoonPhases/moon-waxing-crescent.svg',
            'Waning Gibbous': './img/MoonPhases/moon-waning-gibbous.svg',
            'Waning Crescent': './img/MoonPhases/moon-waning-crescent.svg',
            'New Moon': './img/MoonPhases/moon-new.svg',
            'Last Quarter': './img/MoonPhases/moon-last-quarter.svg',
            'Full Moon': './img/MoonPhases/moon-full.svg',
        }
        let moonicons = data.forecast.forecastday[0].astro.moon_phase
        let cloud = data.current.cloud
        let newmoon = moonicon[moonicons]
        let codeOldimg = data.current.condition.code
        let day = weatherimgday[codeOldimg]
        let night = weatherimgnight[codeOldimg]
        let sun = icontempgradus[1]
        let moon = icontempgradus[2]
            let datehour = new Date();
            const hours = datehour.getHours()
            if(hours < 21 || hours < 6){
                hoursImgday = day
                icontemp = sun
            }else{
                hoursImgday = night
                icontemp = moon
            }
        for(let key in data){
            city  = data[key].name
            region = data[key].region
            contry = data[key].country            
            break
        }
                const forecastData = data.forecast.forecastday.map(forecast => ({
                    curdays: forecast.date,
                    icon: forecast.day.condition.icon,
                    maxnnextemp: forecast.day.maxtemp_c.toFixed(),
                    minnexttemp: forecast.day.mintemp_c.toFixed(),
                    moonrise: forecast.astro.moonrise,
                    moonset: forecast.astro.moonset,
                    sunrise: forecast.astro.sunrise,
                    sunset: forecast.astro.sunset,
                    moon: forecast.astro.moon_phase,
                    avghumidity: forecast.day.avghumidity,
                    uv:forecast.day.uv,
                  }));
                  let n = getDayOfWeeks(forecastData[1].curdays)
                  let y = getDayOfWeeks(forecastData[2].curdays)
                    const currentWeatherData = {
                    icon :data.current.condition.icon,
                    text :data.current.condition.text,
                    temp :data.current.temp_c.toFixed(),
                    filslike :data.current.feelslike_c.toFixed()
                }
                        let date = new Date();
                        let dayIndex = date.getDay();
                        let monthIndex = date.getMonth();
                        let dayOfWeek = daysOfWeek[dayIndex];//полные название дней
                        let month = months[monthIndex];//название месяца
                        let currentDay = date.getDate();//текущий день   
                        template += `
                        <header class="header">
                            <div class="hero">
                                <div class="hero__container">
                                    <div class="hero__currentdate h3">${dayOfWeek}, ${month}, ${currentDay}</div>
                                    <div class="hero__localtion h2">${city}, ${region} ${contry}</div>
                                    <div class="hero__select">
                                        <input type="text" class="hero__inp"></input>
                                        <button class="hero__btn">Пошук</button>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="mySwiper swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <main class="home">
                                        <div class="current">
                                            <div class="current__info">
                                                <img  class="current__img" src="${hoursImgday}">
                                                <span class="current__description h3 ">${currentWeatherData.text}</span>
                                                <div class="current__temp">
                                                    <div class="current__today">${currentWeatherData.temp}</div>
                                                    <img class="current__todayicon" src=${icontemp}>
                                                </div>
                                            </div>
                                        </div>
                                    </main>
                                    <footer class="footer">
                                        <div class="weather">
                                            <nav class="weather__nav">
                                                <ul class="weather__container">
                                                    <li class="weather__item">
                                                        <img class="weather__item-img" src="${forecastData[1].icon}">
                                                        <div class="weather__item-box">
                                                                <span class="weather__day h3">${n}</span>
                                                                <span class="weather__max h4">${forecastData[1].maxnnextemp}</span>
                                                                <img class="weather__miniiconsun" src="${ sun }">
                                                                <span class="weather__min h3">${forecastData[1].minnexttemp}</span>
                                                                <img class="weather__miniiconmoon" src="${ moon }">
                                                        </div>
                                                    </li>
                                                    <li class="weather__item">
                                                        <img class="weather__item-img" src="${forecastData[2].icon}">
                                                        <div class="weather__item-box">
                                                            <span class="weather__day h3">${y}</span>
                                                            <span class="weather__max h4">${forecastData[2].maxnnextemp}</span>
                                                            <img class="weather__miniiconsun" src="${ sun }">
                                                            <span class="weather__min h3">${forecastData[2].minnexttemp}</span>
                                                            <img class="weather__miniiconmoon" src="${ moon }">
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </footer>
                                </div>
                                <div class="swiper-slide">
                                        <div class="info">
                                            <ul class="info__container">
                                                <li class="info__setrise">
                                                    <span class="info__text h3">Moonrise</span>
                                                    <span class="info__meaning h3">${forecastData[0].moonrise}</span>
                                                    <img  class="info__anim" src="./img/riseset/night/moonrise.svg">
                                                </li>
                                                <li class="info__setrise">
                                                    <span class="info__text h3">Moonset</span>
                                                    <span class="info__meaning h3">${forecastData[0].moonset}</span>
                                                    <img class="info__anim" src="./img/riseset/night/moonset.svg">
                                                </li>
                                                <li class="info__setrise">
                                                    <span class="info__text h3">Sunrise</span>
                                                    <span class="info__meaning h3">${forecastData[0].sunrise}</span>
                                                    <img class="info__anim" src="./img/riseset/day/sunrise.svg">
                                                </li>
                                                <li class="info__setrise">
                                                    <span class="info__text h3">Sunset</span>
                                                    <span class="info__meaning h3">${forecastData[0].sunset}</span>
                                                    <img class="info__anim" src="./img/riseset/day/sunset.svg">
                                                </li>
                                                <li class="info__setrise">
                                                    <div class="info__text h3">Avg</div>
                                                    <div class="info__meaning h3">${forecastData[0].avghumidity}%</div>
                                                    <img class="info__anim" src="./img/tempanim/humidity.svg">
                                                </li>
                                                <li class="info__setrise">
                                                    <div class="info__text h3">Uv</div>
                                                    <div class="info__meaning h3">${forecastData[0].uv}</div>
                                                </li>
                                                <li class="info__setrise">
                                                    <div class="info__text h3">Cloud</div>
                                                    <div class="info__meaning h3">${cloud}</div>
                                                    <img class="info__anim" src="./img/day/cloudy.svg">
                                                </li>
                                            </ul>
                                            <ul class="info__next">
                                                <li class="info__next-item">
                                                    <div class="info__box">
                                                        <img src='${currentdaytime[0].condition.icon}'>
                                                        <div class="info__time h4">Now</div>
                                                        <div class="h3">${currentdaytime[0].temp_c}</div>
                                                    </div>
                                                </li>
                                                <li class="info__next-item">
                                                    <div class="info__box">
                                                        <img src='${currentdaytime[1].condition.icon}'>
                                                        <div class="info__time h4">${times[1]}:00</div>
                                                        <div class="h3">${currentdaytime[1].temp_c}</div>
                                                    </div>
                                                </li>
                                                <li class="info__next-item">
                                                    <div class="info__box">
                                                        <img src='${currentdaytime[2].condition.icon}'>
                                                        <div class="info__time h4">${times[2]}:00</div>
                                                        <div class="h3">${currentdaytime[2].temp_c}</div>
                                                    </div>
                                                </li>
                                                <li class="info__next-item">
                                                    <div class="info__box">
                                                        <img src='${currentdaytime[3].condition.icon}'>
                                                        <div class="info__time h4">${times[3]}:00</div>
                                                        <div class="h3">${currentdaytime[3].temp_c}</div>
                                                    </div> 
                                                </li>
                                                <li class="info__next-item">
                                                    <div class="info__box">
                                                        <img src='${currentdaytime[4].condition.icon}'>
                                                        <div class="info__time h4">${times[4]}:00</div>
                                                        <div class="h3">${currentdaytime[4].temp_c}</div>
                                                    <div>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="moon">
                                        <div>
                                            <img class=moon__icon src="${newmoon}">
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <div class="swiper-pagination"></div>  
                        </div>  
                            `

        out.innerHTML = template;
        new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
            },
          });
          
        document.querySelector('.hero__btn').addEventListener('click', () => {
            let inp = document.querySelector('.hero__inp').value
            curentlocation = inp
            template = ''
            weatherData()
        })
    };
    weatherData() 
})


   


