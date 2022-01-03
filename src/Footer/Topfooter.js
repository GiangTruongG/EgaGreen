

const Topfooter = () => {
    return ( 
        <section className="top-footer-container">
            <div className="inner-footer-container">
                <h2>Đăng ký nhận tin</h2>
                <div>
                    <form className="form-email">
                        <input type='text' placeholder="Nhập địa chỉ email"></input>
                        <button>Đăng ký</button>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Topfooter;