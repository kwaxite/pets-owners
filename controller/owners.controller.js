const { selectOwnersByID } = require("../model/owners.model")


exports.getOwnerById = (request, response) => {
    const {id} = request.params

    selectOwnersByID(id).then((owner) => {
        response.status(200).send(owner)
    })
    
    
}