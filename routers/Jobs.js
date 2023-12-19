const express = require("express");
const router = express();
const { Job } = require("../models");

// 공고등록
router.post("/", async (req, res, next) => {
    try {
        const post = await Job.create({ ...req.body });
        return res.send(post);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// 공고조회
router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const job = await Job.findByPk(id);
        if (!job) return res.sendStatus(400);
        return res.send(job);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// 공고목록조회
router.get("/", async (req, res, next) => {
    const { sido, perPage, page } = req.query;

    const limit = Number(perPage);
    const offset = limit * (Number(page) - 1);

    if (isNaN(limit) || isNaN(offset) || limit > 20) return res.sendStatus(400);

    try {
        const jobs = await Job.findAndCountAll({
            order: [["createdAt", "DESC"]],
            limit,
            offset,
            where: { ...(!!sido && { sido }) },
        });
        return res.send(jobs);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
