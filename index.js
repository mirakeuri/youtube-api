const youtubedl = require('youtube-dl-exec')
const express = require('express')


const app = express()

app.get("/", async (req, res) => {
    const data = await youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
  dumpSingleJson: true,
  noCheckCertificates: true,
  noWarnings: true,
  preferFreeFormats: true,
  addHeader: [
    'referer:youtube.com',
    'user-agent:googlebot'
  ]

})
res.send(data)
})

app.listen(8000, () => {
    console.log("server started in port 8000")
})

