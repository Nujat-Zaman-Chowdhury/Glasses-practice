import {useLoaderData} from "react-router-dom"
import ShowProducts from "../../components/ShowProducts/ShowProducts";


const Products = () => {
    const products = useLoaderData();
        return (
        <div>
            <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />
            <ShowProducts name={'Featured'} products={products}></ShowProducts>
        </div>
    );
};

export default Products;