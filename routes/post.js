const express = require('express');
const router = express.Router();

const Post = require('../models/Post'); // llamar al modelo de Post 

router.post('/', async (req, res) => {
    //console.log(req.body);// se usa para ver que se esta enviando 

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error });
    }
});
/**
 * Bloque para mostrar un Post por el id 
 */
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(Post);
    } catch (error) {
        res.json({ message: error });
    }
});
/**
 * bloque para borra un post 
 */
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    } catch (error) {
        res.json({ message: error });
    }
});
/*
* Bloque para actualizar un Post 
*/
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.boby.title } });
        res.json(updatePost);
    } catch (error) {
        res.json({ message: error });
    }
});
module.exports = router;
    // devuelve como modulo lo que se le asigna a route

