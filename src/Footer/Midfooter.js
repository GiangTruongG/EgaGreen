import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaFacebookF, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';

const Midfooter = () => {
    return ( 
        <section className="mid-footer-container">
            <div className="inner-midfooter-container">
                <div className='child-container'>
                    <h3>Về chúng tôi</h3>
                    <a>
                        <img src="https://bizweb.dktcdn.net/thumb/small/100/417/051/themes/843817/assets/logo-footer.png?1640681454607"></img>
                    </a>
                    <p>EGA Green chuyên cung cấp các thực phẩm tươi sống.</p>
                    <div className='single-contact'>
                        <FaMapMarkerAlt className='icon-map' />
                        <div>
                            <span>Địa chỉ: Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn - Phường Liễu Giai - Quận Ba Đình - TP Hà Nội</span>
                        </div>
                    </div>
                    <div className='single-contact'>
                        <FaMobileAlt className='icon-mobile' />
                        <div>
                            <span>Số điện thoại: 19006750</span>
                        </div>
                    </div>
                    <div className='single-contact'>
                        <FaEnvelope className='icon-envelope' />
                        <div>
                            <span>Email: support@sapo.vn</span>
                        </div>
                    </div>
                </div>
                <div className='child-container'>
                    <h3>Tìm hiểu thêm</h3>
                    <ul>
                        <li><a href='#'>Giới thiệu EGA Green</a></li>
                        <li><a href='#'>Chương trình khuyến mãi</a></li>
                        <li><a href='#'>Hệ thống cửa hàng</a></li>
                        <li><a href='#'>Hướng dẫn đặt hàng</a></li>
                        <li><a href='#'>Hướng dẫn kiểm tra đơn hàng</a></li>
                        <li><a href='#'>Tin tức</a></li>
                        <li><a href='#'>Tuyển dụng</a></li>
                    </ul>
                </div>
                <div className='child-container'>
                    <h3>Hỗ trợ khách hàng</h3>
                    <ul>
                        <li><a href='#'>Thông tin liên hệ</a></li>
                        <li><a href='#'>Chính sách giao hàng</a></li>
                        <li><a href='#'>Chính sách đổi hàng</a></li>
                        <li><a href='#'>Hướng dẫn đổi hàng</a></li>
                        <li><a href='#'>Chính sách bảo mật</a></li>
                        <li><a href='#'>Điều khoản dịch vụ</a></li>
                        <li><a href='#'>Về chúng tôi</a></li>
                    </ul>
                </div>
                <div className='child-container'>
                    <div className='social-media'>
                        <h3>Theo dõi chúng tôi</h3>
                        <ul>
                            <li><a href='#'><FaFacebookF /></a></li>
                            <li><a href='#'><FaTwitter /></a></li>
                            <li><a href='#'><FaBehance /></a></li>
                            <li><a href='#'><FaInstagram /></a></li>
                        </ul>
                    </div>
                    <h3>Phương thức thanh toán</h3>
                    <div className='payment-img'>
                        <a href='#'>
                            <img src='https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/product_trustbadge.jpg?1640681454607'></img>
                        </a>
                    </div>
                    <a href='#'>
                        <img src='https://bizweb.dktcdn.net/100/417/051/themes/843817/assets/logo_bct.png?1640681454607'></img>
                    </a>
                </div>
            </div>
        </section>
     );
}
 
export default Midfooter;