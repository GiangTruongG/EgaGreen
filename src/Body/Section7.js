import { useGlobalContext } from "../context";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Section7 = () => {
    const {vegproducts} = useGlobalContext();

    return ( 
        <section className="section4-container">
            <div className="normalproduct-container">
                <div className="veg-inner-container">
                    <div className="title-container">
                        <h2 className="title"><a>RAU CỦ QUẢ</a></h2>
                    </div>
                    <div className="product-container-section7">
                        <div className="expand-grid-container">
                            <a><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/section_hot.jpg?1640681454607" alt="img"></img></a>
                        </div>
                        {vegproducts && vegproducts.map((product, index) => {
                            if(index < 8){
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
 
export default Section7;