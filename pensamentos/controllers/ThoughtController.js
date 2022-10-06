const Thought = require('../models/Thought');
const User = require('../models/User');
const moment = require('moment')

const { Op } = require('sequelize')

module.exports = class ThoughtController {
    static async showThoughts(req, res) {

        let search = ''

        if (req.query.search) {
            search = req.query.search
        }

        let order = 'DESC'

        if(req.query.order === 'old'){
            order = 'ASC'
        } else {
            order = 'DESC'
        }

        const thoughtsData = await Thought.findAll({
            include: User,
            where: {
                title: { [Op.like]: `%${search}%` }
            },
            order: [['createdAt', order]]
        })
            .then(thoughtsData => {
                const thoughts = thoughtsData.map((result) => result.get({ plain: true }))

                let thoughtsQty = thoughts.length
                if(thoughtsQty === 0){
                    thoughtsQty = false
                }

                res.render('thoughts/home', { thoughts, search, thoughtsQty})
            })
            .catch((err) => console.log(err))



    }

    static async dashboard(req, res) {

        const userId = req.session.userId

        const user = await User.findOne({
            where: { id: userId },
            include: Thought,
            plain: true,
        })

        if (!user) {
            res.redirect('/login')
        }

        const thoughts = user.Thoughts.map((result) => result.dataValues)

        let emptyThoughts = false

        if (thoughts.length === 0) {
            emptyThoughts = true
        }

        res.render('thoughts/dashboard', { thoughts, emptyThoughts })
    }

    static createThought(req, res) {
        res.render('thoughts/create')
    }

    static async createThoughtPost(req, res) {
        const userId = req.session.userId

        const user = await User.findOne({ where: { id: userId } })

        if (!user) {
            res.redirect('/login')
        }

        const thought = {
            title: req.body.title,
            UserId: req.session.userId
        }

        await Thought.create(thought)
            .then(() => {
                req.flash('message', 'Thought create succesfully!')
                req.session.save(() => {
                    res.redirect('/thoughts/dashboard')
                })
            })
            .catch((err) => console.log(err))

    }

    static async updateThought(req, res) {
        const id = req.params.id

        const thought = await Thought.findOne({
            where: { id: id },
            raw: true,
        })
            .then(thought => {
                res.render('thoughts/edit', { thought })
            })
            .catch((err) => console.log(err))
    }

    static async updateThoughtPost(req, res) {

        const id = req.body.id
        const tought = {
            title: req.body.title
        }

        await Thought.update(tought, {
            where: { id: id }
        })
            .then(() => {
                req.flash('message', 'Thought edit succesfully!')
                req.session.save(() => {
                    res.redirect('/thoughts/dashboard')
                })
            })
            .catch((err) => console.log(err))

    }

    static async deleteThought(req, res) {

        const id = req.body.id
        const userId = req.session.userId

        await Thought.destroy({
            where: { id: id, UserId: userId }
        })
            .then(() => {
                req.flash('message', 'Thought delete succesfully!')
                req.session.save(() => {
                    res.redirect('/thoughts/dashboard')
                })
            })
            .catch((err) => console.log(err))

    }
}