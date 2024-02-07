const fs = require('fs/promises')

exports.selectOwnersByID = ((ownerID)=>{ 
    return fs.readFile(`${__dirname}/../data/owners/${ownerID}.json`, 'utf-8')
    .then((ownerInfo) => {
        const parsedOwnerInfo = JSON.parse(ownerInfo)
        return parsedOwnerInfo
    })
    

})