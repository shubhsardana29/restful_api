const ideas = require('../models/idea.model');

/**
 * search all idea
 */

exports.fetchAllIdeas = (req, res) => {
    res.status(200).send(ideas);
}

let idCount = 1;

/**
 * Create new idea
 */
exports.createIdea = (req, res) => {
    // Read the request body
    const idea = req.body;
    // need to generate the next idea id
    idea.id = ++idCount;
    // save it in the list of existing idea
    ideas[idCount] = idea;
    // return the response
    res.status(201).send(ideas[idCount]);
}

 

/**
 * 
 * Update idea
 */
exports.updatIdea=(req,res) => {
    // need to read the id passed in the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId = req.params.id;

    // if the idea is present - modify else return error
    if(ideas[ideaId]){
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message: 'idea Id passed was not correct'
        })
    }
}



/**
 * Delete idea
 */
exports.delIdea=(req,res)=>{
    // check if prsent - yes delete, no - return error message
    const ideaId = req.params.id;

    if(ideas[ideaId]){
        delete ideas[ideaId];
        res.status(200).send({
            message: 'Successfully deleted'
        });
    }else{
        res.status(400).send({
            message: 'idea Id wrong'
        })
    }

}