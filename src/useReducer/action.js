export function setCitySearch(citySearch) {
    return {
        type: 'SET_CITYSEARCH',
        citySearch
    }
}

export function setCity(city) {
    return {
        type: 'SET_CITY',
        city
    }
}

export function setCurrent(current) {
    return {
        type: 'SET_CURRENT',
        current
    }
}

export function setForecasts(forecasts) {
    return {
        type: 'SET_FORECASTS',
        forecasts
    }
}

export function setUnit(unit) {
    return {
      type: 'SET_UNIT',
      unit
    }
}

export function setLimit(limit) {
    return {
        type: 'SET_LIMIT',
        limit
    }
}
