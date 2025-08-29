import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "../../Others/Loading/Loading";
import EachItem from "../../Products/EachCategory/EachItem";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Advertise = () => {
    const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
        // ... Fetch data code
        fetch("http://localhost:5000/advertisements")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProducts(data);
        });
      }, []);
      

    if (!products) {
        return <Loading></Loading>;
    }

    
  return (
    <>
    <SectionTitle
      heading="New Arrival"
      subHeading="Don't Miss"
    ></SectionTitle>
    <div className="md:flex gap-4 ml-12 md:-ml-2 justify-center py-8">
    {products.slice(-3).map((product, index) => (
  <div key={product._id} data-aos="fade-up" data-aos-delay={index * 200}>
    <EachItem
      setProductItem={setProductItem}
      product={product}
    />
    
  </div>
))}
    </div>
    <div className="flex justify-center items-center mb-20 mt-4">
      <Link to='/AllProducts' className="btn click w-56">See More &nbsp;<BsArrowRight /></Link>
    </div>
  </>
);
};
    export default Advertise;