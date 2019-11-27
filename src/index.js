import './scss/base.scss'

function getCityData(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=5c421a898af8f8f0d9a04eb07a32545d&units=metric`)
        .then(data => {
            return data.json()
        })
        .catch(reason => {
            return null;
        })
}

function formatData(data) {
    if (data.cod !== "200") {
        return null;
    }
    const first = data.list[0];
    return {
        city: data.city.name,
        date: Date(first.dt),
        temperature: `${first.main.temp} C`,
        humidity: `${first.main.humidity} %`,
        pressure: `${first.main.pressure} hPa`,
        wind: `${first.wind.speed} meter/sec`,
    };
}

function update(event) {
    getCityData(event.target['form-input'].value)
        .then(context => {
            let source;
            if (context.cod !== "200")
                source = document.getElementById('entry-template-on-error').innerHTML;
            else
                source = document.getElementById('entry-template').innerHTML;
            const template = Handlebars.compile(source);
            document.getElementById('result').innerHTML = template(formatData(context));
        })
}

document.getElementById("search-form").addEventListener('submit', event => update(event));