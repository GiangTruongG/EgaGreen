import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useGlobalContext } from "../context";
import { FaGift } from "react-icons/fa";

const getLocalStorage = () => {
    const listItem = JSON.parse(localStorage.getItem('cartItem'));
    if(listItem){
        return listItem;
    } else {
        return [];
    }
}

const Singleproduct = () => {
    const {setTotal} = useGlobalContext();
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [number, setNumber] = useState(1); 
    const [cartItem, setCartItem] = useState(getLocalStorage());

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const data = await response.json();
                const speProduct = data.find(product => product.id === +id);
                setProduct(speProduct);
            } catch (error) {
                console.log(error);
            }  
        }
        
        fetchSingleProduct();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }, [])

    const increaseNum = (num) => {
        setNumber(+num + 1);
    };

    const decreaseNum = (num) => {
        if(+num === 1){
            return num;
        }
        return setNumber(+num - 1);
    };

    if(!product){
        return <h1>Loading ...</h1>
    };

    const handleSubmit = (id, amount) => {
        const cartItem = JSON.parse(localStorage.getItem('cartItem'));

        const item = cartItem.find(item => item.id === id)

        if(item){
            const newCartItem = cartItem.map(item => {
                if(item.id === id){
                    return {...item, amount: +item.amount + amount}
                }
                return item;
            })
            const totalPrice = cartItem.map(item => {
                return item.amount * item.price
            })
            if(cartItem && cartItem.length > 0){
                setTotal(totalPrice.reduce((total, value) => {
                    return total + value;
                }))
            }
            
            return localStorage.setItem('cartItem', JSON.stringify(newCartItem))
        };
        
        cartItem.push({...product, amount: +amount + 0});
        if(cartItem && cartItem.length > 0){
            const totalPrice = cartItem.map(item => {
                return item.amount * item.price
            })
            setTotal(totalPrice.reduce((total, value) => {
                return total + value;
            }))
        }
        return localStorage.setItem('cartItem', JSON.stringify(cartItem));
    }


    return ( 
        <section className="section-product-container">
            <div className="specificproduct-container">   
                <div className="specificproduct-img">
                    <div className="singleproduct-img">
                        <img className="single-frame" src={product.frame}></img>
                        <img className="single-image" src={product.image} alt="image"></img>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="specificproduct-content">
                    <div className="specificproduct-info">
                        <h2>{product.title}</h2>
                        <div className="brand-status">
                            <p>Thương hiệu: <span>Đang cập nhập</span></p>
                            <span className="separate">|</span>
                            <p>Tình trạng: <span>Còn hàng</span></p>
                        </div>
                        <div className="specificproduct-price">
                            <span>{product.price}.000đ</span>
                        </div>
                        <div className="bottomline-container">
                            <ul>
                                <li>Đạt chuẩn an toàn Viet Gap</li>
                                <li>Hàng tươi mới trong ngày</li>
                            </ul>
                        </div>
                        
                        <div className="gift-container">
                            <h4>
                                <FaGift />
                                <span>Siêu ưu đãi</span>
                            </h4>
                            <li>
                                Nhập mã <b>EGANY</b> để được giảm 15% tổng giá trị đơn hàng. Số lượng có hạn 
                                <button>Sao chép</button>
                            </li>
                        </div>
                        <div className="addcart-container">
                            <label>Số lượng:</label>
                            <div className="modifynumber-container">
                                <button className="btn-left" onClick={() => decreaseNum(number)}>-</button>
                                <input type='text' value={number}></input>
                                <button className="btn-right" onClick={() => increaseNum(number)}>+</button>
                            </div>
                            <div className="addcart-btn-container">
                                <button onClick={() => handleSubmit(product.id, number)}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                    <div className="specificproduct-media">
                        <div className="media-container">
                            <h4>Chỉ có ở EGA Green</h4>
                            <ul>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_1.png?1640681454607" alt="img"></img></div>
                                    <div>100% tự nhiên</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_2.png?1640681454607" alt="img"></img></div>
                                    <div>Chứng nhận ATTP</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_3.png?1640681454607" alt="img"></img></div>
                                    <div>Luôn luôn tươi mới</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_4.png?1640681454607" alt="img"></img></div>
                                    <div>An toàn cho sức khoẻ</div>
                                </li>
                            </ul>
                        </div>
                        <div className="payment-container">
                            <a>
                                <img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/product_banner_img.jpg?1640681454607" alt="img"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Singleproduct;