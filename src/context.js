import React, { useContext, useState, useEffect } from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [products, setProducts] = useState();
    const [tetproducts, setTetProducts] = useState();
    const [vegproducts, setVegProducts] = useState();
    const [fruitproducts, setFruitProducts] = useState();
    const [seafood, setSeaFood] = useState();
    const [vnfruit, setVnFruit] = useState();
    const [toggleProduct, setToggleProduct] = useState([]);
    const [total, setTotal] = useState(0);

    const fetchData = async () => {
        const response = await fetch('https://61d319b7b4c10c001712b7be.mockapi.io/products');
        const data = await response.json();
        setProducts(data);
        setTetProducts(data.filter(product => product.type === "Sản Phẩm Tết"));
        setVegProducts(data.filter(product => product.type === "Rau - Củ - Quả"));
        setFruitProducts(data.filter(product => product.type === "Trái cây nhập khẩu"));
        setSeaFood(data.filter(product => product.type === "Hải sản tươi sống"));
        setVnFruit(data.filter(product => product.type === "Trái cây Việt Nam"));
        setToggleProduct(data.filter(product => product.type === "Hải sản tươi sống"));
        return data
    };

    useEffect(() => {
        fetchData();
    }, []);

    
    /* setTetProducts(products.filter(product => product.type === "Sản Phẩm Tết"));

    console.log(tetproducts); */

    return <AppContext.Provider value={{
        products,
        tetproducts,
        vegproducts,
        fruitproducts,
        seafood,
        vnfruit,
        toggleProduct,
        setToggleProduct,
        total,
        setTotal
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }