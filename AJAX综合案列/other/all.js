// 该js用于总体更改
// 退出登录
document.querySelector('.box-right .login .float-back .login-back').addEventListener('click',(e)=>{
    e.preventDefault()
    // console.log(e.target.localName)
    if(e.target.localName === 'a'){
        if(confirm('确定退出？')){
            localStorage.clear()
            location.href = '../login/index.html'
        }
    }
})