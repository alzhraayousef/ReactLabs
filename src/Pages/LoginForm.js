import { useState } from "react"

function LoginForm(){


    const [userInfo, setUserInfo] = useState({
        Email: "",
        Password:""
    })

    const [errors, setErrors] = useState({
        EmailError: "",
        PasswordError: ""
    })

    const [passwordType, setPasswordType] = useState("password");


    const changeUserInfo = (e) => {
        if(e.target.name == "userEmail"){
            setUserInfo({
                ...userInfo,
                Email: e.target.value
            })

            setErrors({
                ...errors,
                EmailError: e.target.value.length == 0 ?
                "This Field Is Required" : !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(e.target.value)) && 
                "email format xxx@xxxx.com"
            })


        }else{
            setUserInfo({
                ...userInfo,
                Password: e.target.value
            })

            setErrors({
                ...errors, 
                PasswordError: e.target.value.length == 0 ? "This Field Is Required" :  e.target.value.length < 8 && 
                "Min Length is 8 Charachters"
            })
        }
    }

    const togglePassword =()=>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    return(
        <>
<div className="container  mt-5 p-5">
            <form >

                <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input type="text" 
                    className={`form-control ${errors.EmailError && 'border-danger'}`} 
                    value={userInfo.Email} onChange={(e) => changeUserInfo(e)} name="userEmail"/>

                    <p className="text-danger"> {errors.EmailError} </p>
                </div>


                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type={passwordType} 
                    className={`form-control ${errors.PasswordError && 'border-danger'}`}
                    value={userInfo.Password}  onChange={(e) => changeUserInfo(e)} name="userPassword"/>

                    <input type="button" className="mt-1 btn btn-outline-primary" onClick={togglePassword} 
                     value="Show/Hide password"
                     />

                    <p className="text-danger">  {errors.PasswordError}  </p>
 
                </div>

            

                <button type="submit" 
                       className="btn btn-primary"
                       disabled={errors.EmailError || errors.PasswordError}>Submit</button>
            </form>
            </div>
        </>
    )
}

export default LoginForm;