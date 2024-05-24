// index.html
// 手机号验证请求
// 请求位置
document.querySelector('form .btn').addEventListener('click', () => {
    // 获取值
    const mobile = document.querySelector('form .phone').value
    const code = document.querySelector('form .pwd').value
    console.log(mobile, code)
    
})



