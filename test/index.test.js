const chai = require('chai');
const formatData = require('../src/index');
const mocha = require('mocha');

const responseExample = {
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
};

const formattedResponse = {
    city: "Syktyvkar",
    date: "Sat Dec 07 2019 16:01:39 GMT+0300 (Москва, стандартное время)",
    temperature: "0.39 C",
    humidity: "99 %",
    pressure: "998 hPa",
    wind: "2.54 meter/sec",
};

mocha.describe("formatData", function () {
    mocha.it('formatData', function () {
        let testResponse = formatData(responseExample);
        expect(testResponse).to.eql(formattedResponse);
    });
});


