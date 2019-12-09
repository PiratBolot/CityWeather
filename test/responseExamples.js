const fullExample = () => (
    {
        "data": {
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
        },
        "status": 200,
        "statusText": "OK"
    }
);

const dataExample = () => ({
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

const errorExample = () => (
    {
        "status": 999,
        "data":
            {
                "message": "network error"
            }
    }
);

const errorResponse = () => (
    {
        "message": "network error"
    }
);

const nothingToGeocodeData = () => (
    {
        response: {
            cod: 400,
            message: "Nothing to geocode"
        }
    }
);

const cityNotFoundData = () => (
    {
        response: {
            cod: 404,
            message: "city not found"
        }
    }
);

const invalidApiKeyData = () => (
    {
        response: {
            cod: 401,
            message: "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        }
    }
);

const networkErrorData = () => (
    {
        status: 999,
        data: {
            message: "network error"
        }
    }
);

const networkErrorBody = () => (
    {
        request: true
    }
);