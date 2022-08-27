var DataTypes = require("sequelize").DataTypes;
var _Massage = require("./Massage");
var _TempRider = require("./TempRider");
var _address = require("./address");
var _cart = require("./cart");
var _cart_item = require("./cart_item");
var _category = require("./category");
var _customer = require("./customer");
var _customer_address = require("./customer_address");
var _customer_image = require("./customer_image");
var _item = require("./item");
var _item_category = require("./item_category");
var _item_image = require("./item_image");
var _orderr = require("./orderr");
var _payment_info = require("./payment_info");
var _rest_address = require("./rest_address");
var _restaurant = require("./restaurant");
var _restaurant_image = require("./restaurant_image");
var _restaurant_manager = require("./restaurant_manager");
var _rider = require("./rider");
var _rider_address = require("./rider_address");

function initModels(sequelize) {
  var Massage = _Massage(sequelize, DataTypes);
  var TempRider = _TempRider(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_item = _cart_item(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customer_address = _customer_address(sequelize, DataTypes);
  var customer_image = _customer_image(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var item_category = _item_category(sequelize, DataTypes);
  var item_image = _item_image(sequelize, DataTypes);
  var orderr = _orderr(sequelize, DataTypes);
  var payment_info = _payment_info(sequelize, DataTypes);
  var rest_address = _rest_address(sequelize, DataTypes);
  var restaurant = _restaurant(sequelize, DataTypes);
  var restaurant_image = _restaurant_image(sequelize, DataTypes);
  var restaurant_manager = _restaurant_manager(sequelize, DataTypes);
  var rider = _rider(sequelize, DataTypes);
  var rider_address = _rider_address(sequelize, DataTypes);

  restaurant_manager.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(restaurant_manager, { as: "restaurant_managers", foreignKey: "address_id"});
  cart_item.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(cart_item, { as: "cart_items", foreignKey: "cart_id"});
  orderr.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(orderr, { as: "orderrs", foreignKey: "cart_id"});
  item_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(item_category, { as: "item_categories", foreignKey: "category_id"});
  cart.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(cart, { as: "carts", foreignKey: "customer_id"});
  customer_address.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(customer_address, { as: "customer_addresses", foreignKey: "customer_id"});
  customer_image.belongsTo(customer, { as: "customer_customer", foreignKey: "customer_id"});
  customer.hasMany(customer_image, { as: "customer_customer_images", foreignKey: "customer_id"});
  customer.belongsTo(customer_image, { as: "customer_image", foreignKey: "customer_image_id"});
  customer_image.hasMany(customer, { as: "customers", foreignKey: "customer_image_id"});
  cart_item.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(cart_item, { as: "cart_items", foreignKey: "item_id"});
  item_category.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_category, { as: "item_categories", foreignKey: "item_id"});
  item_image.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_image, { as: "item_images", foreignKey: "item_id"});
  cart.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(cart, { as: "carts", foreignKey: "restaurant_id"});
  category.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(category, { as: "categories", foreignKey: "restaurant_id"});
  restaurant_image.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(restaurant_image, { as: "restaurant_images", foreignKey: "restaurant_id"});
  restaurant_manager.belongsTo(restaurant, { as: "restaurant_restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(restaurant_manager, { as: "restaurant_restaurant_managers", foreignKey: "restaurant_id"});
  orderr.belongsTo(restaurant_manager, { as: "restaurant_manager", foreignKey: "restaurant_manager_id"});
  restaurant_manager.hasMany(orderr, { as: "orderrs", foreignKey: "restaurant_manager_id"});
  restaurant.belongsTo(restaurant_manager, { as: "restaurant_manager", foreignKey: "restaurant_manager_id"});
  restaurant_manager.hasMany(restaurant, { as: "restaurants", foreignKey: "restaurant_manager_id"});

  return {
    Massage,
    TempRider,
    address,
    cart,
    cart_item,
    category,
    customer,
    customer_address,
    customer_image,
    item,
    item_category,
    item_image,
    orderr,
    payment_info,
    rest_address,
    restaurant,
    restaurant_image,
    restaurant_manager,
    rider,
    rider_address,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
