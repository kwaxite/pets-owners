const { selectOwnersByID, selectByOwners } = require("../model/owners.model")


exports.getOwnerById = (request, response) => {
    const {id} = request.params
    selectOwnersByID(id).then((owner) => {
        response.status(200).send(owner)
    })
}

exports.getOwners = (request, response) =>{ 
    const {url} = request
    selectByOwners(url).then((owner)=>{
        response.status(200).send(owner)
    })
}