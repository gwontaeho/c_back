module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Job", {
        title: {
            type: DataTypes.STRING(50),
        },
        content: {
            type: DataTypes.TEXT,
        },
        days: {
            type: DataTypes.STRING(20),
        },
        begin: {
            type: DataTypes.FLOAT,
        },
        end: {
            type: DataTypes.FLOAT,
        },
        time: {
            type: DataTypes.FLOAT,
        },
        wage: {
            type: DataTypes.INTEGER,
        },
        wage_type: {
            type: DataTypes.STRING(1),
        },
        contact: {
            type: DataTypes.STRING(20),
        },
        address: {
            type: DataTypes.STRING(50),
        },
        address_detailed: {
            type: DataTypes.STRING(50),
        },
        sido: {
            type: DataTypes.STRING(10),
        },
        sigungu: {
            type: DataTypes.STRING(10),
        },
        bname: {
            type: DataTypes.STRING(10),
        },
        latitude: {
            type: DataTypes.FLOAT,
        },
        longitude: {
            type: DataTypes.FLOAT,
        },
        negotiable_days: {
            type: DataTypes.BOOLEAN,
        },
        negotiable_time: {
            type: DataTypes.BOOLEAN,
        },
        negotiable_wage: {
            type: DataTypes.BOOLEAN,
        },
        store_name: {
            type: DataTypes.STRING(20),
        },
    });
};
