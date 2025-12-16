const cron = require('node-cron');
const prisma = require('./prisma/init.prisma');

// Cấu hình: Chạy mỗi 10 phút một lần
// Ký hiệu '*/10 * * * *' nghĩa là cứ phút thứ 0, 10, 20... sẽ chạy
const initCronJob = () => {
    cron.schedule('*/10 * * * *', async () => {
        console.log('🧹 Đang quét dọn các tài khoản rác...');

        try {
         
            const deleteResult = await prisma.users.deleteMany({
                where: {
                    is_active: false,
                    otp_expires: {
                        lt: new Date() 
                    }
                }
            });

            if (deleteResult.count > 0) {
                console.log(`✅ Đã xóa vĩnh viễn ${deleteResult.count} tài khoản rác chưa kích hoạt.`);
            } else {
                console.log('✨ Không có tài khoản rác nào.');
            }
        } catch (error) {
            console.error('❌ Lỗi khi chạy Cron Job:', error);
        }
    });
};

module.exports = initCronJob;