const weatherCodeToString : {
    [key: number]: {
        icon: string,
        label: string
    }
} = {
    
    0: {
        icon: "c01d",
        label: "Clear sky",
    },
    1: {
        icon: "c02d",
        label: "Mainly clear",
    },
    2: {
        icon: "c03d",
        label: "Partly cloudy",
    },
    3: {
        icon: "c04d",
        label: "Overcast",
    },
    45: {
        icon: "c05d",
        label: "Fog",
    },
    48: {
        icon: "s05d",
        label: "Deposit rime fog",
    },
    20: {
        icon: "s01d",
        label: "Snow",
    },
    21: {
        icon: "s02d",
        label: "Heavy snow",
    },
    22: {
        icon: "s03d",
        label: "Sleet",
    },
    23: {
        icon: "s04d",
        label: "Light sleet",
    },
    26: {
        icon: "a03d",
        label: "Freezing rain",
    },
    27: {
        icon: "a01d",
        label: "Heavy freezing rain",
    },
    28: {
        icon: "a02d",
        label: "Thunderstorm with sleet",
    },
    29: {
        icon: "a04d",
        label: "Thunderstorm with hail",
    },
    30: {
        icon: "a05d",
        label: "Thunderstorm with light rain",
    },
    31: {
        icon: "a06d",
        label: "Thunderstorm with rain",
    },
    32: {
        icon: "a07d",
        label: "Thunderstorm with heavy rain",
    },
    33: {
        icon: "a08d",
        label: "Thunderstorm with light drizzle",
    },
    34: {
        icon: "a09d",
        label: "Thunderstorm with drizzle",
    },
    35: {
        icon: "a10d",
        label: "Thunderstorm with heavy drizzle",
    },
    40: {
        icon: "c06d",
        label: "Scattered clouds",
    },
    41: {
        icon: "c07d",
        label: "Broken clouds",
    },
    42: {
        icon: "c08d",
        label: "Overcast clouds",
    },
    43: {
        icon: "u00d",
        label: "Unknown Precipitation",
    },
    46: {
        icon: "u01d",
        label: "Light Rain shower",
    },
    47: {
        icon: "u02d",
        label: "Moderate Rain shower",
    },
    49: {
        icon: "u04d",
        label: "Light Snow shower",
    },
    50: {
        icon: "u05d",
        label: "Moderate Snow shower",
    },
    51: {
        icon: "u06d",
        label: "Heavy Snow shower",
    },
    52: {
        icon: "u07d",
        label: "Light Sleet shower",
    },
    53: {
        icon: "u08d",
        label: "Moderate Sleet shower",
    },
    54: {
        icon: "u09d",
        label: "Heavy Sleet shower",
    },
    55: {
        icon: "u10d",
        label: "Light Freezing rain shower",
    },
    56: {
        icon: "u11d",
        label: "Moderate Freezing rain shower",
    },
    57: {
        icon: "u12d",
        label: "Heavy Freezing rain shower",
    },
    58: {
        icon: "u13d",
        label: "Light Hail shower",
    },
    59: {
        icon: "u14d",
        label: "Moderate Hail shower",
    },
    60: {
        icon: "u15d",
        label: "Heavy Hail shower",
    },
    61: {
        icon: "u16d",
        label: "Light Thunderstorm with rain shower",
    },
    62: {
        icon: "u17d",
        label: "Moderate Thunderstorm with rain shower",
    },
    63: {
        icon: "u18d",
        label: "Heavy Thunderstorm with rain shower",
    },
    64: {
        icon: "u19d",
        label: "Light Thunderstorm with hail shower",
    },
    65: {
        icon: "u20d",
        label: "Moderate Thunderstorm with hail shower",
    },
    66: {
        icon: "u21d",
        label: "Heavy Thunderstorm with hail shower",
    },
    67: {
        icon: "u22d",
        label: "Light Thunderstorm with light drizzle shower",
    },
    68: {
        icon: "u23d",
        label: "Moderate Thunderstorm with light drizzle shower",
    },
    69: {
        icon: "u24d",
        label: "Heavy Thunderstorm with light drizzle shower",
    },
    70: {
        icon: "u25d",
        label: "Light Thunderstorm with drizzle shower",
    },
    71: {
        icon: "u26d",
        label: "Moderate Thunderstorm with drizzle shower",
    },
    72: {
        icon: "u27d",
        label: "Heavy Thunderstorm with drizzle shower",
    },
    73: {
        icon: "u28d",
        label: "Light Thunderstorm with heavy drizzle shower",
    },
    74: {
        icon: "u29d",
        label: "Moderate Thunderstorm with heavy drizzle shower",
    },
    75: {
        icon: "u30d",
        label: "Heavy Thunderstorm with heavy drizzle shower",
    },
    76: {
        icon: "a10d",
        label: "Thunderstorm with rain and snow",
    },
    77: {
        icon: "a11d",
        label: "Thunderstorm with light rain and snow",
    },
    78: {
        icon: "a12d",
        label: "Thunderstorm with sleet and snow",
    },
    79: {
        icon: "a13d",
        label: "Thunderstorm with light sleet and snow",
    },
    80: {
        icon: "a14d",
        label: "Thunderstorm with hail and snow",
    },
    81: {
        icon: "a15d",
        label: "Thunderstorm with light hail and snow",
    },
    82: {
        icon: "a16d",
        label: "Thunderstorm with moderate hail and snow",
    },
    83: {
        icon: "a17d",
        label: "Thunderstorm with heavy hail and snow",
    },
    84: {
        icon: "a18d",
        label: "Light Thunderstorm with rain and hail",
    },
    85: {
        icon: "a19d",
        label: "Moderate Thunderstorm with rain and hail",
    },
    86: {
        icon: "a20d",
        label: "Heavy Thunderstorm with rain and hail",
    },
    87: {
        icon: "a21d",
        label: "Light Thunderstorm with sleet and hail",
    },
    88: {
        icon: "a22d",
        label: "Moderate Thunderstorm with sleet and hail",
    },
    89: {
        icon: "a23d",
        label: "Heavy Thunderstorm with sleet and hail",
    },
    90: {
        icon: "a24d",
        label: "Light Thunderstorm with drizzle and hail",
    },
    91: {
        icon: "a25d",
        label: "Moderate Thunderstorm with drizzle and hail",
    },
    92: {
        icon: "a26d",
        label: "Heavy Thunderstorm with drizzle and hail",
    },
    93: {
        icon: "a27d",
        label: "Light Thunderstorm with heavy drizzle and hail",
    },
    94: {
        icon: "a28d",
        label: "Moderate Thunderstorm with heavy drizzle and hail",
    },
    95: {
        icon: "a29d",
        label: "Heavy Thunderstorm with heavy drizzle and hail",
    },
    96: {
        icon: "a30d",
        label: "Light Thunderstorm with rain shower and hail",
    },
    97: {
        icon: "a31d",
        label: "Moderate Thunderstorm with rain shower and hail",
    },
    98: {
        icon: "a32d",
        label: "Heavy Thunderstorm with rain shower and hail",
    },
    99: {
        icon: "a33d",
        label: "Light Thunderstorm with hail shower and hail",
    }
};
export default weatherCodeToString;



