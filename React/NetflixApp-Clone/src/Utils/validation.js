
const validation = (email,password,name,isLogin) => {
const nameRegex = /^[^\p{P}\p{S}\p{C}\p{N}]+(?:[ '-][^\p{P}\p{S}\p{C}\p{N}]+)*$/u.test(name);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

if((!nameRegex || name=="") && !isLogin)
    return `Please enter valid Name?`
if(!emailRegex || email=="")
    return `Please enter valid Email Address`
if(!passwordRegex || password== "")
    return 'Please enter valid Password'

 return null;
}

export default validation
