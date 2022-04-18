const fs = require('fs')

const content = ''

fs.writeFile('demofile.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
  console.log('Viet vao file thanh cong')
})
