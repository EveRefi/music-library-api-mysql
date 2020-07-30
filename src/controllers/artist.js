const { Artist } = require('../models');

exports.create = (req, res) => {
    Artist.create(req.body).then(user => res.status(201).json(user));
};
//exports.list = (req, res) => {
//    Artist.list(res.body).then(user => res.status(200).json(user));
// };

exports.list = (_, res) => {
    Artist.findAll().then(artists => {
        res.status(200).json(artists);
    });
};
exports.findbyid = (req, res) => {
    Artist.findByPk(req.params.id).then(artist => {
        res.status(200).json(artist);
    })
}