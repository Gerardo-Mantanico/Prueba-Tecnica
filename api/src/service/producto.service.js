const productoModel = require('../model/producto.model');

const  productoService = {
    
    async getAllProductos() {
        return await productoModel.findAll();
    },

    async createProducto(data) {
        return await productoModel.create(data);
    },
    
    async deleteProducto(id) {
        const producto = await productoModel.findByPk(id);
        if(!producto) return false;
        await producto.destroy();
        return true;
    }
};

module.exports = productoService;