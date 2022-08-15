var DataTypes = require("sequelize").DataTypes;
var _addon = require("./addon");
var _address = require("./address");
var _admin = require("./admin");
var _cart = require("./cart");
var _cart_item = require("./cart_item");
var _category = require("./category");
var _coin_history = require("./coin_history");
var _coin_use_type = require("./coin_use_type");
var _customer = require("./customer");
var _customer_address = require("./customer_address");
var _customer_image = require("./customer_image");
var _delivery_address = require("./delivery_address");
var _invoice = require("./invoice");
var _item = require("./item");
var _item_addon = require("./item_addon");
var _item_category = require("./item_category");
var _item_image = require("./item_image");
var _item_review = require("./item_review");
var _normal_order = require("./normal_order");
var _orderr = require("./orderr");
var _payment_info = require("./payment_info");
var _pickup = require("./pickup");
var _pre_order = require("./pre_order");
var _promo = require("./promo");
var _promo_type = require("./promo_type");
var _promo_use = require("./promo_use");
var _rest_address = require("./rest_address");
var _restaurant = require("./restaurant");
var _restaurant_image = require("./restaurant_image");
var _restaurant_manager = require("./restaurant_manager");
var _restaurant_review = require("./restaurant_review");
var _rider = require("./rider");
var _rider_address = require("./rider_address");
var _search_history = require("./search_history");
var _service_charge = require("./service_charge");
var _state = require("./state");
var _voucher = require("./voucher");

function initModels(sequelize) {
  var addon = _addon(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var admin = _admin(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_item = _cart_item(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var coin_history = _coin_history(sequelize, DataTypes);
  var coin_use_type = _coin_use_type(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var customer_address = _customer_address(sequelize, DataTypes);
  var customer_image = _customer_image(sequelize, DataTypes);
  var delivery_address = _delivery_address(sequelize, DataTypes);
  var invoice = _invoice(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var item_addon = _item_addon(sequelize, DataTypes);
  var item_category = _item_category(sequelize, DataTypes);
  var item_image = _item_image(sequelize, DataTypes);
  var item_review = _item_review(sequelize, DataTypes);
  var normal_order = _normal_order(sequelize, DataTypes);
  var orderr = _orderr(sequelize, DataTypes);
  var payment_info = _payment_info(sequelize, DataTypes);
  var pickup = _pickup(sequelize, DataTypes);
  var pre_order = _pre_order(sequelize, DataTypes);
  var promo = _promo(sequelize, DataTypes);
  var promo_type = _promo_type(sequelize, DataTypes);
  var promo_use = _promo_use(sequelize, DataTypes);
  var rest_address = _rest_address(sequelize, DataTypes);
  var restaurant = _restaurant(sequelize, DataTypes);
  var restaurant_image = _restaurant_image(sequelize, DataTypes);
  var restaurant_manager = _restaurant_manager(sequelize, DataTypes);
  var restaurant_review = _restaurant_review(sequelize, DataTypes);
  var rider = _rider(sequelize, DataTypes);
  var rider_address = _rider_address(sequelize, DataTypes);
  var search_history = _search_history(sequelize, DataTypes);
  var service_charge = _service_charge(sequelize, DataTypes);
  var state = _state(sequelize, DataTypes);
  var voucher = _voucher(sequelize, DataTypes);

  item_addon.belongsTo(addon, { as: "addon", foreignKey: "addon_id"});
  addon.hasMany(item_addon, { as: "item_addons", foreignKey: "addon_id"});
  restaurant_manager.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(restaurant_manager, { as: "restaurant_managers", foreignKey: "address_id"});
  coin_use_type.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(coin_use_type, { as: "coin_use_types", foreignKey: "admin_id"});
  promo.belongsTo(admin, { as: "admin", foreignKey: "admin_id"});
  admin.hasMany(promo, { as: "promos", foreignKey: "admin_id"});
  cart_item.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(cart_item, { as: "cart_items", foreignKey: "cart_id"});
  orderr.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(orderr, { as: "orderrs", foreignKey: "cart_id"});
  item_category.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(item_category, { as: "item_categories", foreignKey: "category_id"});
  voucher.belongsTo(coin_history, { as: "coin_history", foreignKey: "coin_history_id"});
  coin_history.hasMany(voucher, { as: "vouchers", foreignKey: "coin_history_id"});
  coin_history.belongsTo(coin_use_type, { as: "coin_use_type", foreignKey: "coin_use_type_id"});
  coin_use_type.hasMany(coin_history, { as: "coin_histories", foreignKey: "coin_use_type_id"});
  cart.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(cart, { as: "carts", foreignKey: "customer_id"});
  coin_history.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(coin_history, { as: "coin_histories", foreignKey: "customer_id"});
  customer_address.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(customer_address, { as: "customer_addresses", foreignKey: "customer_id"});
  customer_image.belongsTo(customer, { as: "customer_customer", foreignKey: "customer_id"});
  customer.hasMany(customer_image, { as: "customer_customer_images", foreignKey: "customer_id"});
  search_history.belongsTo(customer, { as: "customer", foreignKey: "customer_id"});
  customer.hasMany(search_history, { as: "search_histories", foreignKey: "customer_id"});
  customer.belongsTo(customer_image, { as: "customer_image", foreignKey: "customer_image_id"});
  customer_image.hasMany(customer, { as: "customers", foreignKey: "customer_image_id"});
  orderr.belongsTo(delivery_address, { as: "delivery_address_delivery_address", foreignKey: "delivery_address_id"});
  delivery_address.hasMany(orderr, { as: "orderrs", foreignKey: "delivery_address_id"});
  orderr.belongsTo(invoice, { as: "invoice", foreignKey: "invoice_id"});
  invoice.hasMany(orderr, { as: "orderrs", foreignKey: "invoice_id"});
  cart_item.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(cart_item, { as: "cart_items", foreignKey: "item_id"});
  item_addon.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_addon, { as: "item_addons", foreignKey: "item_id"});
  item_category.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_category, { as: "item_categories", foreignKey: "item_id"});
  item_image.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_image, { as: "item_images", foreignKey: "item_id"});
  item_review.belongsTo(item, { as: "item", foreignKey: "item_id"});
  item.hasMany(item_review, { as: "item_reviews", foreignKey: "item_id"});
  delivery_address.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(delivery_address, { as: "delivery_addresses", foreignKey: "order_id"});
  item_review.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(item_review, { as: "item_reviews", foreignKey: "order_id"});
  payment_info.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(payment_info, { as: "order_payment_infos", foreignKey: "order_id"});
  promo_use.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(promo_use, { as: "order_promo_uses", foreignKey: "order_id"});
  restaurant_review.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(restaurant_review, { as: "order_restaurant_reviews", foreignKey: "order_id"});
  state.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(state, { as: "states", foreignKey: "order_id"});
  voucher.belongsTo(orderr, { as: "order", foreignKey: "order_id"});
  orderr.hasMany(voucher, { as: "order_vouchers", foreignKey: "order_id"});
  orderr.belongsTo(payment_info, { as: "payment_info", foreignKey: "payment_info_id"});
  payment_info.hasMany(orderr, { as: "orderrs", foreignKey: "payment_info_id"});
  promo_use.belongsTo(promo, { as: "promo", foreignKey: "promo_id"});
  promo.hasMany(promo_use, { as: "promo_uses", foreignKey: "promo_id"});
  promo.belongsTo(promo_type, { as: "promo_type", foreignKey: "promo_type_id"});
  promo_type.hasMany(promo, { as: "promos", foreignKey: "promo_type_id"});
  orderr.belongsTo(promo_use, { as: "promo_use", foreignKey: "promo_use_id"});
  promo_use.hasMany(orderr, { as: "orderrs", foreignKey: "promo_use_id"});
  cart.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(cart, { as: "carts", foreignKey: "restaurant_id"});
  category.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(category, { as: "categories", foreignKey: "restaurant_id"});
  restaurant_image.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(restaurant_image, { as: "restaurant_images", foreignKey: "restaurant_id"});
  restaurant_manager.belongsTo(restaurant, { as: "restaurant_restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(restaurant_manager, { as: "restaurant_restaurant_managers", foreignKey: "restaurant_id"});
  restaurant_review.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(restaurant_review, { as: "restaurant_reviews", foreignKey: "restaurant_id"});
  service_charge.belongsTo(restaurant, { as: "restaurant", foreignKey: "restaurant_id"});
  restaurant.hasMany(service_charge, { as: "service_charges", foreignKey: "restaurant_id"});
  orderr.belongsTo(restaurant_manager, { as: "restaurant_manager", foreignKey: "restaurant_manager_id"});
  restaurant_manager.hasMany(orderr, { as: "orderrs", foreignKey: "restaurant_manager_id"});
  restaurant.belongsTo(restaurant_manager, { as: "restaurant_manager", foreignKey: "restaurant_manager_id"});
  restaurant_manager.hasMany(restaurant, { as: "restaurants", foreignKey: "restaurant_manager_id"});
  orderr.belongsTo(restaurant_review, { as: "restaurant_review", foreignKey: "restaurant_review_id"});
  restaurant_review.hasMany(orderr, { as: "orderrs", foreignKey: "restaurant_review_id"});
  orderr.belongsTo(voucher, { as: "voucher", foreignKey: "voucher_id"});
  voucher.hasMany(orderr, { as: "orderrs", foreignKey: "voucher_id"});

  return {
    addon,
    address,
    admin,
    cart,
    cart_item,
    category,
    coin_history,
    coin_use_type,
    customer,
    customer_address,
    customer_image,
    delivery_address,
    invoice,
    item,
    item_addon,
    item_category,
    item_image,
    item_review,
    normal_order,
    orderr,
    payment_info,
    pickup,
    pre_order,
    promo,
    promo_type,
    promo_use,
    rest_address,
    restaurant,
    restaurant_image,
    restaurant_manager,
    restaurant_review,
    rider,
    rider_address,
    search_history,
    service_charge,
    state,
    voucher,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
