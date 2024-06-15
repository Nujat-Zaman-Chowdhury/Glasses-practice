import SingleProducts from "../SingleProducts/SingleProducts";


const ShowProducts = ({name,products}) => {
    // console.log(products);
    return (
        <div className="container mx-auto my-6">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className=" grid grid-cols-3 gap-4">
            {
                products.map(product=><SingleProducts name={name} product={product} key={product.id}></SingleProducts>)
            }
            </div>
        </div>
    );
};

export default ShowProducts;