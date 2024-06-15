import {useParams} from 'react-router-dom';
import {useLoaderData} from 'react-router-dom';

const ProductDetails = () => {
   const product = useLoaderData();
   console.log(product);
    return (
        <div>
            <img src="https://capricathemes.com/opencart/OPC09/OPC090220/image/cache/catalog/main-banner-1-1903x680.jpg" alt="" />
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[680px]">

                <div className=" flex justify-center items-center bg-white">
                    <img src={product.image} alt="" />
                </div>

                <div className="  text-black flex items-center">
                    <div className="  h-auto md:h-[90%] md:-ml-24  p-4">
                        <h1 className="text-5xl font-bold mb-8">{product.name}</h1>
                        <p>{product.description}</p>
                        <p>GKB Optical online store brings in the best assortment of product. You can get a product based on your lifestyle, fashion and requirements. </p>

                        <h1 className="text-4xl font-bold my-4">${product.price}</h1>
                        <br />
                        <button className="btn">Buy it now!</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;