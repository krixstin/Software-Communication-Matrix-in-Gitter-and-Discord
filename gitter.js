const fetch = require('node-fetch')

async function gitter() {
    const api_url = `https://api.gitter.im/v1/rooms/5539746a15522ed4b3df709b/chatMessages?limit=101&access_token=054d273e723c61e15c9a2f12bab97a6717ef864f`
    // https://api.gitter.im/v1/rooms/5539746a15522ed4b3df709b/chatMessages?skip=99&access_token=054d273e723c61e15c9a2f12bab97a6717ef864f
    const response = await fetch(api_url)
    const data = await response.json()

    const text_array =[]
    const time_array =[]
    data.forEach(element =>{
        text_array.push(element.text)
        time_array.push(element.sent)
    })
    console.log(text_array)
    console.log(time_array)
    console.log(text_array.length)
}

console.log(gitter())