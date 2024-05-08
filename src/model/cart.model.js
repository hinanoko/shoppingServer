const { DataTypes } = require('sequelize');
const seq = require('../db/seq'); // 引入 Sequelize 实例

const Cart = seq.define('cart', {
    product_id: {
        type: DataTypes.STRING,
    },
    product_name: {
        type: DataTypes.STRING,
    },
    unit_price: {
        type: DataTypes.FLOAT,
    },
    unit_quantity: {
        type: DataTypes.STRING,
    },
    product_number: {
        type: DataTypes.INTEGER,
    }
}, {
    // 关闭自动添加 createdAt 和 updatedAt 字段
    timestamps: false,
})

Cart.sync({ force: false })
    .then(() => {
        console.log('Cart table created successfully!');
    })
    .catch((err) => {
        console.error('Error creating Cart table:', err);
    });

module.exports = Cart;