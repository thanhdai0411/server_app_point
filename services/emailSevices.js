const nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmailServices = async ({
    receiverEmail,
    user_name,
    name_bank,
    branch_bank,
    account_number,
}) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Ban quản trị Awaco Group" <ngothanhdai123@gmail.com>', // sender address
        // to: 'bar@example.com, baz@example.com', // list of receivers
        to: receiverEmail, // list of receivers
        subject: 'Thông tin đổi thưởng AWPoint', // Subject line
        html: `
        
            
            <h3>Xin chào ${user_name} !</h3>
            <p>Bạn nhận được email này vì bạn đã tiến hành đổi điểm thành công AWPoint tại app Awaco</p>
            <div>Thông tin cá nhân của bạn:</div>

	        <ul>
               
                <li><b>Ngân hàng: ${name_bank}</b></li>	
                <li><b>Chi nhánh: ${branch_bank}</b></li>	
                <li><b>Số tài khoản: ${account_number}</b></li>	
            </ul>
            <p>Nếu các thông tin trên là đúng,vui lòng click vào đường link bên dưới để xác nhận</p>
            <a href="https://www.google.com/" target="_blank">Nhập vào đây</a>
            <p>Awaco ! Xin chân thành cảm ơn </p>

        `,
    });
};

module.exports = sendEmailServices;
