const { Shipping } = require('../models');

const renderShippingSelector = async (req, res, next) => {

    const firstField = await Shipping.findOne({
        where: {
            id: 1
        }
    });
    const secondField = await Shipping.findOne({
        where: {
            id: 2
        }
    });
    const thirdField = await Shipping.findOne({
        where: {
            id: 3
        }
    });

    res.render('shipping', { firstField, secondField, thirdField });
    next()
}

module.exports = renderShippingSelector;