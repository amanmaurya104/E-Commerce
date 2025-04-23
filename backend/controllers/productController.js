const Product = require('../models/Product');

//Create a new product
exports.createProduct = async (req, res) => {
    try { 
        const { name, description, price, type, sizes, theme } = req.body;
        const newProduct = new Product({
            name,
            description,
            price,
            type,
            sizes,
            theme
        });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating product", error });
    }
};



//Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product fetched successfully", product });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};

//Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, type, sizes, theme } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, type, sizes, theme },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
}

//Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
}