const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmailServices = async ({
    email,
    username,
    phone_number,
    name_bank,
    branch_bank,
    name_account,
    account_number,
    name_gift,
    point,
    amount_exchange,
}) => {
    console.log({
        info_exchange_gift: {
            email,
            username,
            phone_number,
            name_bank,
            branch_bank,
            name_account,
            account_number,
            name_gift,
            point,
            amount_exchange,
        },
    });
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: `"Ban quản trị Awaco Group" <${process.env.EMAIL_APP}>`, // sender address
        // to: 'bar@example.com, baz@example.com', // list of receivers
        to: email, // list of receivers
        subject: `Thông tin đổi thưởng`, // Subject line
        replyTo: `${process.env.EMAIL_APP}>`,

        html: `
        
            
            <h2>Xin chào! ${username}</h2>
            <p style="font-size: 17px;">Bạn nhận được email này vì bạn đã tiến hành đổi điểm thành công tại ứng dụng Awaco</p>


            <h3  style="font-size: 17px ; ">Thông tin cá nhân của bạn</h3>

	        <ul style="line-height: 25px; font-size: 17px ; ">

                <li>Số điện thoại: <b>${phone_number}</b></li>	
                <li>Ngân hàng: <b>${name_bank}</b></li>	
                <li>Chi nhánh: <b>${branch_bank}</b></li>	
                <li>Chủ tài khoản: <b>${name_account}</b></li>	
                <li>Số tài khoản:<b> ${account_number}</b></li>	
            </ul>

            <h3 style="font-size: 17px ;">Thông tin phần quà bạn đã đổi</h3>

	        <ul style="line-height: 25px; font-size: 17px ; ">

                <li>Phần quà: <b>${name_gift}</b></li>	
                <li>Số lượng đồi: <b>${amount_exchange}</b></li>	
                <li>Số điểm: <b>${point}</b></li>	
            </ul>

            <h3 style="font-size: 17px ; ">Vui lòng nhấn vào nút <b style="color: red;">Trả lời</b> ở bên dưới và gõ <b style="color: red;">Xác nhận</b> để hoàn thành thủ tục đổi quà. Bạn hãy thường xuyển kiểm tra cuộc trò chuyện này. Chùng tôi sẽ liên hệ sớm nhất tới bạn</h3>
            <p style="font-size: 18px;">Awaco! Xin chân thành cảm ơn </p>
        `,
    });
};

module.exports = sendEmailServices;
