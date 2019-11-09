function getCityData(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=5c421a898af8f8f0d9a04eb07a32545d&units=metric`)
        .then(data => data.json())
        .then(data => {
            const first = data.list[0];
            return {
                city: data.city.name,
                date: Date(first.dt),
                temperature: `${first.main.temp} C`,
                humidity: `${first.main.humidity} %`,
                pressure: `${first.main.pressure} hPa`,
                wind: `${first.wind.speed} meter/sec`,
            };
        })
        .catch(reason => {
            return null;
        })
}

function update() {
    getCityData(document.getElementById('form-input').value)
        .then(context => {
            var source;
            if (context == null)
                source = document.getElementById('entry-template-on-error').innerHTML;
            else
                source = document.getElementById('entry-template').innerHTML;
            const template = Handlebars.compile(source);
            document.getElementById('result').innerHTML = template(context);
        })
}