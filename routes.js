import Router from "express";

const router = Router();

const charactersArray = ["Wednesday Addams", "Morticia Addams", "Gomez Addams", "Pugsley Addams", "Uncle Fester", "Lurch"]

router.get("/", (req, res) => {
res.status(200).send({
    message: "Here is Wednesday Movie characters",
    character: charactersArray
})
})

router.post("/", (req, res) => {
    
   const character = req.body.character
   charactersArray.push(character)

    res.status(201).send({
        message: "Character added"
    })
})

router.delete("/", (req, res) => {
    const deletedCharacter = charactersArray.pop();

    res.status(204).send({
        message: `${deletedCharacter} deleted`
    })
})

router.delete("/:id", (req, res) => {
    //take id out of url and convert it to Int (number)
    const id = parseInt(req.params.id);
    //check the array's length is less than character's id
    if(id < charactersArray.length) {
    //if so delete it
    charactersArray.splice(id, 1)
    return res.status(204).send({
        message: "First character deleted"
    })
    }
    //if character's id is bigger than the array, return message
    else {
        return res.status(404).send({
            message: "Character you are deleting does not exist"
        })
    }

    
})

export default router;