class ProductManager {

    products 
    
    constructor() {
       this.products = []
       this.id = 1; 

    }

    addProduct(title, description, price, thumbnail, code, stock) {

        const finderCode = this.products.find(item => item.code == code);
        

        if(title && description && price && thumbnail && code && stock ) {
            let producto = {
                id: this.id ++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            if(finderCode) {
                console.error('Code already exists');
                return;
            }
            this.products.push(producto)
            console.log('Producto agregado con exito');
        }else {
            console.log('Validar Campos');
        }
    }

    getProducts() {
        console.log(this.products); 
    }
    getProductsById(id) {
        let find = this.products.find(item => item.id == id)
         return find ? console.log( this.products[id-1]) : console.log("Not found"); 
    }
}


    let poductManager = new ProductManager()        // Instanciamos la clase ProductManager y creamos el objeto productManager.                

    poductManager.addProduct('Titile1', 'Primer Producto', '5', 'http.img1', 455, 40);
    poductManager.addProduct('Titile2', 'Segundo Producto', '10', 'http.img2', 456, 40);
    poductManager.addProduct('Titile3', 'Segundo Producto', '15', 'http.img3', 456, 40);
    poductManager.getProducts(); 
    poductManager.getProductsById(1);