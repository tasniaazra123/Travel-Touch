import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../../Others/Loading/Loading";
import AllServices from "../AllProducts/AllProducts";
import BookingModal from "../BookingModal/BookingModal";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Items = () => {
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
        // ... Fetch data code
        fetch("http://localhost:5000/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProducts(data);
            setIsFetching(false)
        });
      }, []);
      
    if (isFetching) {
        return <Loading></Loading>
    }
    return (
        <>
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 my-7 lg:ml-12 mx-6">
                {products.map((product,index) => (
                    <div key={product._id} data-aos="fade-up" data-aos-delay={index * 200}>

                    <AllServices
                        setProductItem={setProductItem}
                        product={product}
                    />
                    </div>
                ))}
            </div>
            {productItem && (
                <BookingModal
                    productItem={productItem}
                    setProductItem={setProductItem}
                ></BookingModal>
            )}
        </>
    );
};

export default Items;
