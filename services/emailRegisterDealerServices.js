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
        dealer_phone_number,
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
        dealer_phone_number,
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
        from: `"Ban quản trị Awaco Group" <ngothanhdai123@gmail.com>`, // sender address
        to: dealer_email, // list of receivers
        subject: 'Thông tin đăng kí làm đại lý', // Subject line
        replyTo: 'ngothanhdai123@gmail.com',
        html: `
            <h2>Xin chào! ${dealer_name}</h2>
            <p style="font-size: 17px;">Bạn nhận được email này vì bạn đã đăng kí thành công làm đại lý độc quyền của Awaco</p>
            <div style="font-size: 17px;">Thông tin đại lý bạn đã đăng kí:</div>

	        <ul style="line-height: 25px ; font-size: 17px ;">
    
                <li>Người đăng kí:<b> ${dealer_name}</b></li>	
                <li>Số điện thoại:<b> ${dealer_phone_number}</b></li>	
                <li>Sản phẩn kinh doanh: <b>${product_business}</b></li>	
                <li>Tên đại lý: <b>${shop_name}</b></li>	
                <li>Địa chỉ: <b>${ward}, ${district}, ${province}</b></li>	
                <li>Địa chỉ cụ thể: <b>${address}</b></li>
                
            </ul>
            <h3 style="font-size: 17px ; ">Vui lòng nhấn vào nút <b style="color: red;">Trả lời</b> ở bên dưới và gõ <b style="color: red;">Xác nhận</b> để hoàn thành thủ tục đăng kí. Bạn hãy thường xuyển kiểm tra cuộc trò chuyện này. Chùng tôi sẽ liên hệ sớm nhất tới bạn</h3>
        
            <p style="font-size: 18px;">Awaco! Xin chân thành cảm ơn </p>

        `,
        attachments: [
            {
                filename: 'chứng_minh_nhân_dân.png',
                path: imageCMND,
                cid: 'unique@kreata.ee', //same cid value as in the html img src
            },
            {
                filename: 'đăng_kí_kinh_doanh.png',
                path: imageBusiness,
                cid: 'unique@kreata.ee', //same cid value as in the html img src
            },
            {
                filename: 'hình_đại_diện.png',
                path: imageAvatar,
                cid: 'unique@kreata.ee', //same cid value as in the html img src
            },
        ],
    });
};

module.exports = emailRegisterDealerServices;
