import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "../context";
import { FaGift, FaCheckCircle, FaTimes } from "react-icons/fa";
import Loading from "../Loading";

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
    const modal = useRef(null);

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                const response = await fetch('https://61d319b7b4c10c001712b7be.mockapi.io/products');
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
        return <Loading />
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
            
                const totalPrice = newCartItem.map(item => {
                    return item.amount * item.price
                })
                setTotal(totalPrice.reduce((total, value) => {
                    return total + value;
                }))
            
            modal.current.style.display = `block`;
            return localStorage.setItem('cartItem', JSON.stringify(newCartItem))
        };
        
        cartItem.push({...product, amount: +amount + 0});
        
            const totalPrice = cartItem.map(item => {
                return item.amount * item.price
            })
            setTotal(totalPrice.reduce((total, value) => {
                return total + value;
            }))
            modal.current.style.display = `block`;
        return localStorage.setItem('cartItem', JSON.stringify(cartItem));
    };

    const closeModal = () => {
        modal.current.style.display = `none`;
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
                            <p>Th????ng hi???u: <span>??ang c???p nh???p</span></p>
                            <span className="separate">|</span>
                            <p>T??nh tr???ng: <span>C??n h??ng</span></p>
                        </div>
                        <div className="specificproduct-price">
                            <span>{product.price}.000??</span>
                        </div>
                        <div className="bottomline-container">
                            <ul>
                                <li>?????t chu???n an to??n Viet Gap</li>
                                <li>H??ng t????i m???i trong ng??y</li>
                            </ul>
                        </div>
                        
                        <div className="gift-container">
                            <h4>
                                <FaGift />
                                <span>Si??u ??u ????i</span>
                            </h4>
                            <li>
                                Nh???p m?? <b>EGANY</b> ????? ???????c gi???m 15% t???ng gi?? tr??? ????n h??ng. S??? l?????ng c?? h???n 
                                <button>Sao ch??p</button>
                            </li>
                        </div>
                        <div className="addcart-container">
                            <label>S??? l?????ng:</label>
                            <div className="modifynumber-container">
                                <button className="btn-left" onClick={() => decreaseNum(number)}>-</button>
                                <input type='text' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                                <button className="btn-right" onClick={() => increaseNum(number)}>+</button>
                            </div>
                            <div className="addcart-btn-container">
                                <button onClick={() => handleSubmit(product.id, number)}>Th??m v??o gi??? h??ng</button>
                            </div>
                        </div>
                    </div>
                    <div className="specificproduct-media">
                        <div className="media-container">
                            <h4>Ch??? c?? ??? EGA Green</h4>
                            <ul>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_1.png?1640681454607" alt="img"></img></div>
                                    <div>100% t??? nhi??n</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_2.png?1640681454607" alt="img"></img></div>
                                    <div>Ch???ng nh???n ATTP</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_3.png?1640681454607" alt="img"></img></div>
                                    <div>Lu??n lu??n t????i m???i</div>
                                </li>
                                <li>
                                    <div className="media-icon"><img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/policy_product_image_4.png?1640681454607" alt="img"></img></div>
                                    <div>An to??n cho s???c kho???</div>
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

            <div className="modal-background" ref={modal} >
                <div className="modal">
                    <div>
                        <FaCheckCircle className="modal-check" />
                        <h3>S???n ph???m v???a ???????c th??m v??o gi??? h??ng</h3> 
                    </div>
                    <FaTimes className="modal-close-btn" onClick={() => closeModal()} />
                </div>
            </div>
        </section>
     );
}
 
export default Singleproduct;