import React from 'react'

const Componente1 = () => {

    let products = [
        { "id": 1, "title": "Product A", "description": "description product A", "price": 1000 },
        { "id": 2, "title": "Product B", "description": "description product B", "price": 2000 },
        { "id": 3, "title": "Product C", "description": "description product C", "price": 3000 },
        { "id": 4, "title": "Product D", "description": "description product D", "price": 4000 }
    ]

    const showProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 10000)
        } else {
            reject("No se pueden mostrar los productos")
        }
    })

    showProducts
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <div>
            {
                products.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <h1>{prod.title}</h1>
                            <h2>{prod.description}</h2>
                            <h3>${prod.price}</h3>
                        </div>
                    )
                })
            }
            {/* <ItemList /> */}

        </div>
    )
}

export default Componente1
