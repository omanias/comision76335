export const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch('/src/data/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                return response.json();
            })
            .then(data => resolve(data.products))
            .catch(error => reject(error));
    }

    );

}; 