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
    for (const line of data.split(os.EOL)) {
        try {
            data_arr.push(JSON.parse(line))
        } catch { }
    }
    return data_arr
}

app.get('/test_example', async (req, res) => {
    const data = await get_data()
    res.send(data)
})


app.get('/available_devices', async (req, res) => {
    const data = await get_data()
    var devices = {};

    var filtered = data.filter(function (entry) {
        if (devices[entry.id]) {
            return false;
        }
        devices[entry.id] = true;
        return true;
    });
    res.send([...new Set(filtered)]
    )
})

app.get('/device_info', async (req, res) => {
    const data = await get_data()
    const id = req.query.id

    console.log(id)
    const results = data.filter(device => device.id.toString() === id)
    console.log(results)
    res.send(results)
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})