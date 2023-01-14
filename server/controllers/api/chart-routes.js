const router = require("express").Router();
const { Op } = require("sequelize");
const { Chart } = require("../../models");

router.get("/", (req, res) => {
  // Access our User model and run .findAll() method)
  Chart.findAll()
    .then((dbChartData) => res.json(dbChartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Chart.findAll({
    where: {
      [Op.or]: [
        { bookNumber: req.params.id },
        { title: req.params.id },
        { composer: req.params.id },
        { arranger: req.params.id },
      ]
    }
  })
    .then((dbChartData) => {
      if (!dbChartData) {
        res.status(404).json({ message: "No chart found." });
        return;
      }
      res.json(dbChartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/:id", (req, res) => {
//   Chart.findOne({
//     where: {
//       bookNumber: req.params.id,
//     },
//   })
//     .then((dbChartData) => {
//       if (!dbChartData) {
//         res.status(404).json({ message: "No chart found with this number" });
//         return;
//       }
//       res.json(dbChartData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post("/", (req, res) => {
  Chart.create({
    bookNumber: req.body.bookNumber,
    title: req.body.title,
    composer: req.body.composer,
    arranger: req.body.arranger,
  })
    .then((dbChartData) => res.json(dbChartData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Chart.update(req.body, {
    where: {
      bookNumber: req.params.id,
    },
  })
    .then((dbChartData) => {
      if (!dbChartData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbChartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Chart.destroy({
    where: {
      bookNumber: req.params.id,
    },
  })
    .then((dbChartData) => {
      if (!dbChartData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbChartData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
