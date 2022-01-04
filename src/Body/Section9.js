import { useGlobalContext } from "../context";
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Section9 = () => {
    const {seafood, vegproducts, vnfruit, setToggleProduct, toggleProduct} = useGlobalContext();

    return ( 
        <section className="section4-container">
            <div className="normalproduct-container">
                <div className="veg-inner-container">
                    <div className="title-container">
                        <h2 className="title"><a>DÀNH RIÊNG CHO BẠN</a></h2>
                        <div className="category-btn-container">
                            <button className="see-all-btn" onClick={() => setToggleProduct(seafood)}>
                                Thịt & Hải sản
                            </button>
                            <button className="see-all-btn" onClick={() =>  setToggleProduct(vegproducts)}>
                                Rau củ quả
                            </button>
                            <button className="see-all-btn" onClick={() =>  setToggleProduct(vnfruit)}>
                                Trái cây
                            </button>
                        </div>
                    </div>
                    <div className="product-container">
                        {toggleProduct && toggleProduct.map((product, index) => {
                            if(index < 5){
                                return <div className="veg-product" key={index}>
                                
                                    <div className="veg-product-thumbnail">
                                        <Link className="veg-img-thumb" to={`/${product.id}`}>
                    
                                            <img className="veg-image-frame" src={product.frame}></img>
                                            <img className="veg-image" src={product.image}></img>
                                               
                                        </Link>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{product.title}</h3>
                                        <h5 className="product-price">{product.price}.000đ</h5>
                                    </div>
                                    <div>
                                        <img className="product-badge" src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/label_1.png?1640681454607"></img>
                                    </div>
                                
                            </div>
                            }
                        })}
                    </div>
                    <div className="see-all">
                        <a className="see-all-btn">
                            Xem tất cả
                            <FaChevronRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Section9
