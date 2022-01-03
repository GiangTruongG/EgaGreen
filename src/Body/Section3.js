import { useGlobalContext } from "../context";
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Section3 = () => {
    const {tetproducts} = useGlobalContext();

    return ( 
        <section className="section3-container">
            <div className="tet-container">
                <div className="tet-inner-container">
                    <div className="title-container">
                        <h2 className="title"><a>TẾT VUI MỌI NHÀ</a></h2>
                    </div>
                    <div className="product-container">
                        {tetproducts && tetproducts.map((product, index) => {
                            if(index < 5){
                                return <div className="tet-product" key={index}>
                                    <Link className="link-container" to={`/${product.id}`}>
                                    <div className="product-thumbnail">
                                    <a className="img-thumb">
                                        <img className="image-frame" src={product.frame}></img>
                                        <img className="image" src={product.image}></img>
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
 
export default Section3;