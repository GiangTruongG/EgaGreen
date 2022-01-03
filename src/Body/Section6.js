import { useGlobalContext } from "../context";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section6 = () => {
    const {fruitproducts} = useGlobalContext();

    return ( 
        <section className="section4-container">
            <div className="normalproduct-container">
                <div className="veg-inner-container">
                    <div className="title-container">
                        <h2 className="title"><a>TRÁI CÂY</a></h2>
                    </div>
                    <div className="product-container">
                        {fruitproducts && fruitproducts.map((product, index) => {
                            if(index < 4){
                                return <div className="veg-product" key={index}>
                                <Link className="link-container" to={`/${product.id}`}>
                                    <div className="veg-product-thumbnail">
                                        <a className="veg-img-thumb">
                                            <img className="veg-image-frame" src={product.frame}></img>
                                            <img className="veg-image" src={product.image}></img>
                                        </a>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">{product.title}</h3>
                                        <h5 className="product-price">{product.price}.000đ</h5>
                                    </div>
                                </Link>
                            </div>
                            }
                        })}

                        <div>
                            <a><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/section_pro_banner.jpg?1640681454607"></img></a>
                        </div>
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
 
export default Section6
