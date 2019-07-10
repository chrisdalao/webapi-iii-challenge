const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {
    const userData = req.body;
    if (!userData) {
        res.status(400).json({ message: "missing user data" });
    } else if (!userData.name) {
        res.status(400).json({ message: "missing required name field" });
    } else {
        Users.insert(userData)
            .then(user => {
                if (user) {
                    res.status(201).json(userData)
                }
            })
            .catch(err => {
                err = { error: "There was an error while saving the user to the database" };
                res.status(500).json(err);
            })
    }
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            err = { error: "The users information could not be retrieved" };
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.getById(id)
        .then(user => {
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist" });
            }
        })
});

router.get('/:id/posts', (req, res) => {
    const { id } = req.params;

    Users.getUserPosts(id)
        .then(posts => {
            if (posts && posts.length) {
                res.status(200).json(posts);
            } else {
                res.status(400).json({ message: 'mising  required text field' });
            }
        })
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
