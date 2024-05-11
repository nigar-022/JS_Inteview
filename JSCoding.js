//Print the values of deeply nested json

const coversation = {

    'John': {
        1: 'Test Message 1',
        2: 'Test Message 2',
        'Reply': {
            3: 'Test Message 3',
            4: 'Test Message 4'
        }
    },
    'Jack': {
        5: 'Test Message 5',
        6: 'Test Message 6'

    }
}



function printValue(obj) {
    for(const key in obj){
        if(typeof obj[key] === 'object') {
            printValue(obj[key])
        } else {
            console.log(obj[key])
        }
    }

}
printValue(coversation)