const express = require('express');

const router = express.Router()
const Model = require('../models/model');
module.exports = router;

//GET
router.get('/', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Model.find(id);

        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});
//POST
router.post('/', async (req, res) => {
    const data = new Model({
        beverageName: req.body.beverageName,
        beveragePrice: req.body.beveragePrice
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Update by ID
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const updateResult = await Model.updateOne({ _id: id }, updatedData);

        if (updateResult.nModified === 0) {
            return res.status(404).json({ message: 'No document found to update' });
        }

        const updatedDocument = await Model.findById(id);

        res.send(updatedDocument);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
//Delete by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Model.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: `No document found with id: ${id}` });
        }

        res.send(`Deleted document with id: ${id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});