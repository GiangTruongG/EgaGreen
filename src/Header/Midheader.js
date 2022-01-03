import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import React from 'react';
import { useGlobalContext } from '../context';
import { useState } from 'react/cjs/react.development';

const Midheader = () => {
    const {total, setTotal} = useGlobalContext();
    const [totalamount, setTotalAmount] = useState(0);

    let cartItem = JSON.parse(localStorage.getItem('cartItem'));
    React.useEffect(() => {
        cartItem = JSON.parse(localStorage.getItem('cartItem'));
        console.log(cartItem);
    }, [total]);

    if(cartItem && cartItem.length > 0){
        const totalPrice = cartItem.map(item => {
            return item.amount * item.price
        });
        setTotal(totalPrice.reduce((sum, value) => {
            return sum + value;
        }));
    };

    return ( 
        <header className='header'>
            <div className="mid-header">
                <div className="left">
                    <img src="https://bizweb.dktcdn.net/thumb/medium/100/417/051/themes/843817/assets/logo.png?1640081696332" alt="ega-green"></img>
                </div>
                <div className="middle">
                    <form>
                        <input type='text' placeholder='Tìm kiếm sản phẩm...'></input>
                        <button>
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/phone.png?1640081696332"></img>
                            <div>
                                <p>Hỗ trợ khách hàng</p>
                                <p style={{fontWeight: 'bold'}}><a>19006750</a></p>
                            </div>
                        </li>
                        <li>
                            <img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/account.png?1640081696332"></img>
                            <div>
                                <p><a>Đăng nhập</a></p>
                                <p><a>Đăng ký</a></p>
                            </div>
                        </li>
                        <li>
                            <div className='cart-big-container'>
                                <div className='cart'>
                                    <button><FaShoppingBag/></button>
                                    <p>Giỏ hàng</p>
                                    <span>{totalamount}</span>
                                </div>
                                <div className='cart-small-container'>
                                    {cartItem && cartItem.map(item => {
                                        return <div className='cart-item' key={item.id}>
                                            <div><img src={item.image} alt='img'></img></div>
                                            <div>
                                                <h5>{item.title}</h5>
                                                <p><span>{item.price}.000đ</span> x {item.amount}</p>
                                            </div>
                                            <div>
                                                <button>X</button>
                                            </div>
                                        </div>
                                    })}
                                    <div>
                                        <h3>Total: <span>{total}.000đ</span></h3>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Midheader;