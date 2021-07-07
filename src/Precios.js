import React  from 'react';

const productos = [
    {"nombre": "Amiibo", "stock": false, "precio": 5000},
    {"nombre": "Atari", "stock": true, "precio": 9000},
    {"nombre": "Nintendo Wii", "stock": true, "precio": 60000},
    {"nombre": "Nintendo 64", "stock": true, "precio": 56000},
    {"nombre": "PS 3", "stock": true, "precio": 40000},
    {"nombre": "PS 4", "stock": true, "precio": 60000},
    {"nombre": "PS 5", "stock": true, "precio": 180000},
    {"nombre": "Xbox One", "stock": true, "precio": 90000},
    {"nombre": "Xbox 360", "stock": false, "precio": 70000}
];

const ProductosFiltrados = () => productos.filter(producto => producto.stock).map((producto,i)=><tr key={i}><td>{producto.nombre}</td><td>{producto.precio}</td></tr>)

const Precios = () => (
    <section id="PRECIOS">
        <table border="5">
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>PRECIO FINAL</th>
                </tr>
            </thead>
            <tbody>
                <ProductosFiltrados/>
            </tbody>
        </table>
    </section>
)

export default Precios;