const nodemailer = require('nodemailer');
require('dotenv').config();

const emailRegisterDealerServices = async (data) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });
    const {
        dealer_email,
        dealer_name,
        district,
        product_business,
        province,
        shop_name,
        ward,
        address,
        imageAvatar,
        imageBusiness,
        imageCMND,
    } = data;

    console.log({
        dealer_email,
        dealer_name,
        district,
        product_business,
        province,
        shop_name,
        ward,
        address,
        imageAvatar,
        imageBusiness,
        imageCMND,
    });
    let info = await transporter.sendMail({
        from: '"Ban quản trị Awaco Group" <ngothanhdai123@gmail.com>', // sender address
        to: receiverEmail, // list of receivers
        subject: 'Thông tin đăng kí làm đại lý', // Subject line
        html: `
            <h2>Xin chào! ${user_name}</h2>
            <p>Bạn nhận được email này vì bạn đã đăng kí thành công làm đại lý</p>
            <div>Thông tin đại lý bạn đã đăng kí:</div>

	        <ul style="line-height: 25px">
               
                <li>Người đăng kí:<b> ${name_bank}</b></li>	
                <li>Sản phẩn kinh doanh: <b>${branch_bank}</b></li>	
                <li>Tên đại lý: <b>${account_number}</b></li>	
                <li>Địa chỉ: <b>${account_number}</b></li>	
                <li>Địa chỉ cụ thể: <b>${account_number}</b></li>
                <li>Hình đại diện cho đại lý:
                	<br/>
                	<img src="https://picsum.photos/200" alt="" width=200 height=200 />

                </li>
                <li>Đăng kí kinh doanh:
                	<br/>
                	<img src="https://picsum.photos/200" alt="" width=200 height=200 />

                </li>
                <li>Chứng minh nhân dân:
                	<br/>
                	<img src="https://picsum.photos/200" alt="" width=200 height=200 />

                </li>
            </ul>
            <p>Nếu các thông tin trên là đúng,vui lòng click vào đường link bên dưới để xác nhận</p>
            <a href="http://localhost:8888/view/gift/get" target="_blank">Nhập vào đây</a>
            <p>Awaco ! Xin chân thành cảm ơn </p>

        `,
    });
};

module.exports = emailRegisterDealerServices;
