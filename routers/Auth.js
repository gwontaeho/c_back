const express = require("express");
const axios = require("axios");
const router = express();
const { User } = require("../models");
const { jwt } = require("../middlewares");

router.get("/signin", async (req, res, next) => {
    const { code, state } = req.query;

    try {
        const {
            data: { access_token },
        } = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            {
                grant_type: "authorization_code",
                client_id: process.env.KAKAO_REST_API_KEY,
                redirect_uri: process.env.KAKAO_REDIRECT_URI,
                code,
            },
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        const {
            data: { id },
        } = await axios.get("https://kapi.kakao.com/v1/user/access_token_info", { headers: { Authorization: `Bearer ${access_token}` } });

        const [user, created] = await User.findOrCreate({ where: { kakao_id: id } });
        return res.cookie("access_token", jwt.signToken({ id: user.id })).redirect(`http://localhost:3000/${state}`);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
