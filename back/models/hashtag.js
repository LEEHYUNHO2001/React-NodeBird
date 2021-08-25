module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        //id는 기본적으로 mysql에 들어있다.
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //한글 + 이모티콘
        collate: 'utf8mb4_general_ci',//한글 저장
    }); 
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'});
    };
    return Hashtag;
};