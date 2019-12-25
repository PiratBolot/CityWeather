import './scss/base.scss';

const API_KEY = "5c421a898af8f8f0d9a04eb07a32545d";

async function getCityData(city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`)
        .catch(function (error) {
                if (error.response) {
                    // Запрос выполнен, и сервер отправил Вам статус код
                    // код выпададет из диапазона 2хх (ошибка)
                    return Promise.resolve(error.response);
                } else if (error.request) {
                    // Запрос был сделан, но ответ не получен
                    // `error.request` - экземпляр XMLHttpRequest в браузере,
                    // http.ClientRequest экземпляр в node.js
                    return Promise.resolve({status: 999, data: {message: "network error"}});
                } else {
                    // Что-то пошло не так, вернулась ошибка
                    return Promise.resolve({status: 998, data: {message: error.message}});
                }
            }
        );
}

function formatData(data) {
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

function update(cityWeather) {
    console.log(cityWeather);
    const source = getSource(cityWeather.status);
    const template = Handlebars.compile(source);
    document.getElementById('result').innerHTML = template(compileTemplate(cityWeather));
}

function getSource(status) {
    let source;
    if (status === 200) {
        source = document.getElementById('entry_template_result').innerHTML;
    } else {
        source = document.getElementById('entry_template_on_error').innerHTML;
    }
    return source;
}

window.onload = () => {
    document.getElementById("search_form").addEventListener('submit', async event => {
        event.preventDefault();
        let cityName = event.target['form_input'].value;
        let cityWeather = await getCityData(cityName);
        update(cityWeather)
    });
};

