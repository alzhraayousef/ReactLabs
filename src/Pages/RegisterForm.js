import { useState } from "react"

function LoginForm(){

const [userInfo,setUserInfo] = useState(
    {
        Name:"",
        Email:"",
        UserName:"",
        Password:"",
        ConfirmPassword:""
    }
)

    const [errors, setErrors] = useState({
        NameError: "",
        EmailError: "",
        UserNameError: "",
        PasswordError: "",
        ConfirmPasswordError: ""
    })



    const changeUserInfo = (e) => {
        if(e.target.name == "Name"){
            setUserInfo({
                ...userInfo,
                Name: e.target.value
            })

            setErrors({
                ...errors,
                NameError: e.target.value.length == 0 && "This Field Is Required" 
            })
        }

        else  if(e.target.name == "Email"){
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
    
        }

        else if(e.target.name == "UserName"){
            setUserInfo({
                ...userInfo,
                UserName: e.target.value
            })

            setErrors({
                ...errors,
                UserNameError: e.target.value.length == 0 ?
                "This Field Is Required" : !(/^\S*$/).test(e.target.value) && 
                "UserName must contains no spaces"
            })
        }


        else if(e.target.name == "Password"){
            setUserInfo({
                ...userInfo,
                Password: e.target.value
            })

            setErrors({
                ...errors, 
                PasswordError: e.target.value.length == 0 ? 
                "This Field Is Required" :  e.target.value.length < 8 ? "Min Length is 8 Charachters" :
                /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(e.target.value) && "Password must contains at least one lowercase , one uppercase , at least one digit and special character "
            })
        }

        else {
            setUserInfo({
                ...userInfo,
                ConfirmPassword: e.target.value
            })

            setErrors({
                ...errors,
                ConfirmPasswordError: e.target.value.length == 0 ?
                "This Field Is Required" : e.target.value!=userInfo.Password && 
                "Confirm Password matches previous password "
            })
        }
       
    }



    return(
        <>
<div className="container mt-5 p-5">

            <form >

            <div className="mb-3">
                    <label className="form-label">Name</label>

                    <input type="text" 
                    className={`form-control ${errors.NameError && 'border-danger'}`} 
                    value={userInfo.Name} onChange={(e) => changeUserInfo(e)} name="Name"/>

                    <p className="text-danger"> {errors.NameError} </p>
                </div>


                <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input type="text" 
                    className={`form-control ${errors.EmailError && 'border-danger'}`} 
                    value={userInfo.Email} onChange={(e) => changeUserInfo(e)} name="Email"/>

                    <p className="text-danger"> {errors.EmailError} </p>
                </div>



                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" 
                    className={`form-control ${errors.UserNameError && 'border-danger'}`} 
                    value={userInfo.UserName} onChange={(e) => changeUserInfo(e)} name="UserName"/>
                    <p className="text-danger"> {errors.UserNameError} </p>
                </div>


                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" 
                    className={`form-control ${errors.PasswordError && 'border-danger'}`}
                    value={userInfo.Password}  onChange={(e) => changeUserInfo(e)} name="Password"/>

                    <p className="text-danger">  {errors.PasswordError}  </p>
 
                </div>


                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" 
                    className={`form-control ${errors.ConfirmPasswordError && 'border-danger'}`}
                    value={userInfo.ConfirmPassword}  onChange={(e) => changeUserInfo(e)} name="ConfirmPassword"/>

                    <p className="text-danger">  {errors.ConfirmPasswordError}  </p>
 
                </div>

            

                <button type="submit" 
                       className="btn btn-primary"
                       disabled={errors.Name|| errors.EmailError || errors.PasswordError ||errors.ConfirmPasswordError || errors.UserName}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default LoginForm;