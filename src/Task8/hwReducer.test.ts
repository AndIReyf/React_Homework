import {hwReducer, initialState, sortAC, sortByAgeAC} from './homeWorkReducer';

test('Sort up', () => {
    const payload = 'up'
    const action = sortAC(payload)
    const newState = hwReducer(initialState, action)

    expect(newState[0].id).toBe('2')
    expect(newState[2].id).toBe('3')
})
test ('Sort down', () => {
    const payload = 'down'
    const action = sortAC(payload)
    const newState = hwReducer(initialState, action)

    expect(newState[0].id).toBe('3')
    expect(newState[2].id).toBe('2')
})
test ('Sort by age', () => {
    const payload = 18
    const action = sortByAgeAC(payload)
    const newState = hwReducer(initialState, action)

    expect(newState.every(i => i.age >= 18)).toBeTruthy()
})
