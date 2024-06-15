import Banner from "../../components/Banner/Banner";
import ShowProducts from "../../components/ShowProducts/ShowProducts";
import About from "../About/About";
import {useLoaderData} from "react-router-dom"

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ShowProducts name={'Top rated'} products={products.slice(5,10)}></ShowProducts>
            <ShowProducts name={'Best Seller'} products={products.slice(11,20)}></ShowProducts>
            <About></About>
        </div>
    );
};

export default Home;