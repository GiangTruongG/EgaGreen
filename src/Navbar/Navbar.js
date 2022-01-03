import { FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
    return ( 
        <nav className="navbar-container">
            <div className="navbar">
                <a>TRANG CHỦ</a>
                <li className='menu-item'>
                    <a className='product'>SẢN PHẨM
                        <FaChevronDown />
                    </a>
                    <div className='submenu'>
                        <ul>
                            <li>
                                <span className='main-item'>
                                    <a>Trái cây</a>
                                </span>
                                <span>
                                    <a>Trái cây Việt</a>
                                </span>
                                <span>
                                    <a>Trái cây nhập</a>
                                </span>
                                <span>
                                    <a>Giỏ quà trái cây</a>
                                </span>
                                <span>
                                    <a>Trái cây đông lạnh</a>
                                </span>
                                <span>
                                    <a>Trái cây sấy</a>
                                </span>
                                <span>
                                    <a>Muối chấm</a>
                                </span>
                            </li>
                            <li>
                                <span className='main-item'>
                                    <a>Thịt, hải sản</a>
                                </span>
                                <span>
                                    <a>Thịt heo</a>
                                </span>
                                <span>
                                    <a>Thịt bò</a>
                                </span>
                                <span>
                                    <a>Hải sản</a>
                                </span>
                                <span>
                                    <a>Gà Vịt trứng</a>
                                </span>
                                <span>
                                    <a>Thực phẩm đóng hộp</a>
                                </span>
                                <span>
                                    <a>Thực phẩm chế biến</a>
                                </span>
                            </li>
                            <li>
                                <span className='main-item'>
                                    <a>Thực phẩm tết</a>
                                </span>
                                <span>
                                    <a>Hạt các loại</a>
                                </span>
                                <span>
                                    <a>Thịt khô</a>
                                </span>
                                <span>
                                    <a>Trái cây sấy</a>
                                </span>
                                <span>
                                    <a>Bánh kẹo tết</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </li>
                <a>SẢN PHẨM TẾT</a>
                <a className="discount">
                    <img src="https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/icon_menu_flashsale.png?1640081696332"></img>
                    KHUYẾN MÃI HOT</a>
                <li className='sale-programs'>
                    <a className='sale'>SALES PAGE 
                        <FaChevronDown />
                    </a>
                    <div className='sale-submenu'>
                        <ul>
                            <li>
                                <span><a>Food & Beverage</a></span>
                            </li>
                            <li>
                                <span><a>Black Friday</a></span>
                            </li>
                            <li>
                                <span><a>Xmas 2021</a></span>
                            </li>
                        </ul>
                    </div>
                </li>
                <a>TIN TỨC</a>
                <a>GIỚI THIỆU</a>
                <a>LIÊN HỆ</a>
            </div>
        </nav>
     );
}
 
export default Navbar;