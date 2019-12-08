const API_KEY = "5c421a898af8f8f0d9a04eb07a32545d";

function getCityData(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`)
        .catch(function (error) {
            if (error.response) {
                // Запрос выполнен, и сервер отправил Вам статус код
                // код выпададет из диапазона 2хх (ошибка)
                return error.response;
            } else if (error.request) {
                // Запрос был сделан, но ответ не получен
                // `error.request` - экземпляр XMLHttpRequest в браузере,
                // http.ClientRequest экземпляр в node.js
                return {status: 999, data: {message: "network error"}};
            } else {
                // Что-то пошло не так, вернулась ошибка
                return {status: 999, data: {message: error.message}};
            }
        });
}

const formatData = (data) => {
    const first = data.list[0];
    return {
        city: data.city.name,
        temperature: `${first.main.temp} C`,
        humidity: `${first.main.humidity} %`,
        pressure: `${first.main.pressure} hPa`,
        wind: `${first.wind.speed} meter/sec`,
    };
}

function compileTemplate(weather) {
    if (weather.status === 200) {
        return formatData(weather.data);
    }
    return weather.data;
}

async function update(event) {
    let cityName = event.target['form_input'].value;
    let cityWeather = await getCityData(cityName);
    let source;
    if (cityWeather.status === 200) {
        source = document.getElementById('entry_template_result').innerHTML;
    } else {
        source = document.getElementById('entry_template_on_error').innerHTML;
    }
    const template = Handlebars.compile(source);
    document.getElementById('result').innerHTML = template(compileTemplate(cityWeather));
}

const responseExample = () => ({
    "city": {
        "coord": {
            "lat": 61.669,
            "lon": 50.835
        },
        "country": "RU",
        "id": 485239,
        "name": "Syktyvkar",
        "population": 230139,
        "sunrise": 1575697086,
        "sunset": 1575717481,
        "timezone": 10800
    },
    "cnt": 40,
    "cod": "200",
    "list": [
        {
            "clouds": {
                "all": 94
            },
            "dt": 1575730800,
            "dt_txt": "2019-12-07 15:00:00",
            "main": {
                "grnd_level": 980,
                "humidity": 98,
                "pressure": 998,
                "sea_level": 998,
                "temp": -0.4,
                "temp_kf": 0.04,
                "temp_max": -0.4,
                "temp_min": -0.44
            },
            "snow": {
                "3h": 0.5
            },
            "sys": {"pod": "n"},
            "weather": [
                {
                    "description": "light snow",
                    "icon": "13n",
                    "id": 600,
                    "main": "Snow"
                },
            ],
            "wind": {
                "deg": 210,
                "speed": 2.82
            }
        }
    ]
});

const formattedResponse = () => ({
    city: "Syktyvkar",
    temperature: "-0.4 C",
    humidity: "98 %",
    pressure: "998 hPa",
    wind: "2.82 meter/sec",
});

document.getElementById("search_form").addEventListener('submit',  async event => {
    event.preventDefault();
    await update(event)
});