// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string) {
    let newList = array.filter((names) => {
        return names.toLowerCase() === string.toLowerCase()})
    return newList
}

function fuzzyMatch (array, string) {
    let newArray = array.filter((item) => {
        return item.slice(0, 2) === string
    })
    return newArray
}

function matchName (array, string) {
    let newArray = array.filter((item) => {
        if (item.name === string)
        return item
    })
    return newArray
}