export function reducer(state, action) {
switch(action.type){
    case 'SET_CITYSEARCH':
        return {
            ...state,
            citySearch: action.citySearch
        }
    case 'SET_CITY':
        return {
            ...state,
            city: action.city
        }
    case 'SET_CURRENT':
        return {
            ...state,
            current: action.current
        }
    case 'SET_FORECASTS':
        return {
            ...state,
            forecasts: action.forecasts
        }
    case 'SET_UNIT':
        return {
            ...state,
            unit: action.unit
        }
    default:
        throw new Error();
}
}