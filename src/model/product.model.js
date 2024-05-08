// models/User.js

const { DataTypes } = require('sequelize');
const seq = require('../db/seq'); // 引入 Sequelize 实例

const Product = seq.define('products', {
    // 定义表字段
    product_id: {
        type: DataTypes.INTEGER,
    },
    product_name: {
        type: DataTypes.STRING,
    },
    unit_price: {
        type: DataTypes.FLOAT
    },
    unit_quantity: {
        type: DataTypes.STRING
    },
    in_stock: {
        type: DataTypes.INTEGER
    }
}, {
    // 关闭自动添加 createdAt 和 updatedAt 字段
    timestamps: false,
}
);


Product.sync()
    .then(() => {
        console.log('Product model synced successfully.');
    })
    .catch(err => {
        console.error('Error syncing User model:', err);
    });

Product.removeAttribute('id');

module.exports = Product;
