import { useGlobalContext } from "../context";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section4 = () => {
    const {vegproducts} = useGlobalContext();

    return ( 
        <section className="section4-container">
            <div className="normalproduct-container">
                <div className="veg-inner-container">
                    <div className="title-container">
                        <h2 className="title"><a>NÔNG SẢN VIỆT</a></h2>
                    </div>
                    <div className="product-container">
                        {vegproducts && vegproducts.map((product, index) => {
                            if(index < 4){
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
 
export default Section4
;