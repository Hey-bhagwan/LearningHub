const express = require('express');
const zod = require('zod');
const User = require('../db');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const userSchema = zod.object({
    name: zod.string().min(3),
    email: zod.string(),
    password: zod.string().min(6),
});

router.post('/signup', async (req, res) => {
    const requestBody = req.body;
    const {success} = userSchema.safeParse(requestBody);
    
    if (!success) {
        return res.status(400).json({error: 'Invalid data'});
    }

    const user = await User.findOne({email: requestBody.email});

    if (user) {
        return res.status(400).json({error: 'User already exists'});
    }

    const newUser = await User.create(requestBody);

    res.status(201).json({
        user: newUser.email,
        mssg: 'User created'
    });
});

const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
});

router.post('/login', async (req, res) => {
    const body = req.body;
    const {success} = loginSchema.safeParse(body);
    if (!success) {
        return res.status(400).json({error: 'Invalid data'});
    }

    const user = await User.findOne({email: body.email});

    if (!user || user.password !== body.password) {
        return res.status(400).json({error: 'Invalid credentials'});
    }

    res.status(200).json({
        user: user.email,
        mssg: 'User logged in'
    });
});

module.exports = router;