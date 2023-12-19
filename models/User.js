module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User", {
        kakao_id: {
            type: DataTypes.STRING(20),
        },
    });
};
