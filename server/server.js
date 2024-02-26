const express = require('express')
var fs = require('fs');
const app = express()
const port = 4000
var os = require('os');
var cors = require('cors');

app.use(cors())
async function get_data() {
    const data = await fs.readFileSync('example_capture.txt', { encoding: 'utf8', flag: 'r' });
    data_arr = []
    console.log(typeof data)
    for (const line of data.split(os.EOL)) {
        try {
            data_arr.push(JSON.parse(line))
        } catch { }
    }
    return data_arr
}

app.get('/test_example', async (req, res) => {
    const data = await get_data()
    console.log(data)
    res.send(data)
})


app.get('/available_devices', async (req, res) => {
    const data = await get_data()
    console.log(data)
    devices = data.map(x => x.model)
    console.log(devices)
    res.send([...new Set(devices)]
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})