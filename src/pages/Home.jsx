import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Cart from '../components/cart/index'
import { listProducts, searchProducts } from '../services/products'

import Card from '../components/card';
import { useStateValue } from '../context/Context';

const Home = () => {

    const [open, setOpen] = useState(false);

    const [search, setSearch] = useState('');

    const [products, setProducts] = useState([]);

    const [{ cart }] = useStateValue();
    /* 
        don't use it, beacuse the post with the api works (search drinks)
    const handleLoadInformation = async () => {
        const response = await listProducts();
        setProducts(response.drinks);
    } */



    const numberGenerate = (min, max) => {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    useEffect(() => {
        const searchingInformation = async () => {
            const response = await searchProducts(search)
            setProducts(response.drinks);
        }
        searchingInformation()
    }, [search])

    console.log(products?.length)

    return (
        <div className="container">
            <Header
                cart={cart}
                open={open}
                setOpen={setOpen}
                setSearch={setSearch}
            />
            <div className="container__products">
                {products?.length === undefined ?
                    <div className="not_found">
                        <img src="https://cdn4.vectorstock.com/i/thumb-large/03/23/no-results-found-rgb-color-icon-vector-33390323.jpg" alt="not found" />
                        <p>No drinks</p>
                    </div>

                    :
                    products?.map((i) => (
                        <Card
                            key={i.idDrink}
                            name={i.strGlass}
                            image={i.strDrinkThumb}
                            id={i.idDrink}
                            price={numberGenerate(10, 500)}
                        />

                    ))
                }
            </div>
            <Cart
                open={open}
            />
        </div>
    )
}
export default Home