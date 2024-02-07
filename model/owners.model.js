const fs = require('fs/promises')

exports.selectOwnersByID = ((ownerID)=>{ 
    return fs.readFile(`${__dirname}/../data/owners/${ownerID}.json`, 'utf-8')
    .then((ownerInfo) => {
        const parsedOwnerInfo = JSON.parse(ownerInfo)
        return parsedOwnerInfo
    })
})

exports.selectByOwners = ((owners)=>{
    return fs.readdir(`${__dirname}/../data/owners`)
    .then((ownerfiles)=>{
        console.log(ownerfiles)
        const allOwnerInfo = ownerfiles.map((eachOwnerFile) =>{
            return fs.readFile(`${__dirname}/../data/owners/${eachOwnerFile}`)
        })
        console.log(Promise.all(allOwnerInfo))
        return Promise.all(allOwnerInfo)
    })
    .then((owners)=>{
        parsedOnwersInfo = owners.map((eachOwnerInfor)=>{
            return JSON.parse(eachOwnerInfor)
        })
        return parsedOnwersInfo
    })
})