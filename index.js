const express = require("express");
const Router = require("express").Router;

const router = Router();

let products =[]

router.get("/api/productos", ( req, res ) => {

    console.log(products);

    return res.status(200).send({ products });
    
});



router.get("/api/productos/:id", ( req, res ) => {

    console.log(products.map(... products, product.id));

    return res
        .status(200)
        .send( products.map(... products, product.id));
    
})



router.post("/api/productos/", ( req, res ) => {
    const products = [{
        title: "Carpeta",
        price: 1200,
        thumbnail: "https://www.google.com/search?q=carpeta&sxsrf=ALiCzsYOLfYsmmmQI-5-9REt-VrWwdPulw:1670893205801&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiS3PSfsvX7AhX7kZUCHejhCzAQ_AUoAXoECAIQAw&biw=638&bih=635&dpr=1.5#imgrc=ht547CRUzPYXkM"
    }];

    const product = req.body ? req.body.producto : null

    if (!product) {
        return res
            .status(400)
            .send({ message: "No se encuentra el producto solicitado"})
    }

    products.push(product);

    return res.status(200).send({products});

    
})



router.put("/api/productos/:id", ( req, res ) => {

    console.log(products.map(... products, product.id));

    return res
        .status(200)
        .send( products.map(... products, product.id));
    
})



router.delete("/api/productos/:id", ( req, res ) => {
    const { id } = req.params
    console.log({ id });
    return res.status(200).send({message : {id}});
})




const PORT = 8080

const server = app.listen(PORT, () =>{
    console.log(`Listening app port ${server.address().port}`);
    server.on('error', (error) => console.log(`Error en servidor ${error}`));
})

server.on('error', (error) =>{
    console.log('Error', error);
})