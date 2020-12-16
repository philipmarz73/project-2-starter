const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/players", (req, res) => {
    db.Player.findAll({})
        include: db.game,
})
    .then((allPlayers) => {
        console.log(allPlayers);
        res.render("players", { players: allPlayers });
     })
    .catch((err) => {
        console.log(err);
    });
});

router.get("/player/new", (req, res) => {
    res.render("new-player");
})

router.get("/players/:id/edit", (req, res) => {
    res.render("edit-player");
});



router.post("/api/players"), (req, res) => {
    db.Player.create(req.body)
        .then((newPlayer) => {
            res.json(newPlayer);
        })
        .catch((err => {
            console.log(err);
        }));
};

router.delete("/api/players/:id", (req, res) => {
    db.Player.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;