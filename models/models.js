const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    login: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    user_name: {type: DataTypes.STRING},
    points: {type: DataTypes.INTEGER, defaultValue: 0},
    photo: {type: DataTypes.STRING}
})
const Club = sequelize.define('club', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    club_name: {type: DataTypes.STRING, unique: true,},
    club_image: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
})
const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    game_name: {type: DataTypes.STRING},
    game_description: {type: DataTypes.STRING},
    condition: {type: DataTypes.STRING},
    game_image: {type: DataTypes.STRING},
    date: {type: DataTypes.DATE},
})
const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    product_name: {type: DataTypes.STRING, unique: true,},
    product_description: {type: DataTypes.STRING},
    product_image: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
})
const Region = sequelize.define('region', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    region_name: {type: DataTypes.STRING, unique: true,},

})
const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING},
})
const Tag = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tag_name: {type: DataTypes.STRING, unique: true,},
})
const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Category_name: {type: DataTypes.STRING, unique: true,},
})
const Timer = sequelize.define('timer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    month: {type: DataTypes.INTEGER},
    year: {type: DataTypes.INTEGER},
    all_time: {type: DataTypes.INTEGER},
})
const UserRegion = sequelize.define('user_region', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const UserGame = sequelize.define('user_game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const GameTag = sequelize.define('game_tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Comment)
Comment.belongsTo(User)

User.belongsToMany(Region, {through: UserRegion})
Region.belongsToMany(User, {through: UserRegion})

User.belongsToMany(Game, {through: UserGame})
Game.belongsToMany(User, {through: UserGame})

User.hasOne(Timer)
Timer.belongsTo(User)

Club.hasMany(Game)
Game.belongsTo(Club)

Club.hasMany(Product)
Product.belongsTo(Club)

Game.belongsToMany(Tag, {through: GameTag})
Tag.belongsToMany(Game, {through: GameTag})

Game.hasMany(Comment)
Comment.belongsTo(Game)

Category.hasMany(Game)
Game.belongsTo(Category)

Region.hasMany(Game)
Game.belongsTo(Region)

module.exports = {
    User,
    Club,
    Game,
    Product,
    Region,
    Comment,
    Tag,
    Category,
    Timer,
    UserRegion,
    UserGame,
    GameTag
}