import { useState, useEffect } from "react";
import Input from "../../Components/Input";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../store/slices/profileSlice";

export default function Register(){
    const dispatch = useDispatch()
    const[userInfo,setUserInfo]=useState(
        {
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        image: '',
    }
    )
    const [formErrors,setFormErrors]=useState({})


    function handleInput(event){
                setUserInfo({...userInfo,[event.target.name]:event.target.value})
         }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.keys(validate(userInfo)).length === 0){
            dispatch(addUserInfo(userInfo))
        }
    }

    
    const validate = (values)=>{
        const errors = {}
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/
        const passwordRegex = /^.{8,12}$/
        const nameRegex = /^\S+$/;
        if (!values.name){
            errors.name = "Name is required"
        }
        else if(!nameRegex.test(values.name)){
            errors.name="Do not enter space"
        }
        if (!values.email){
            errors.email = "Email is required "
        }
        else if(!emailRegex.test(values.email)){
            errors.email="Enter a valid email"
        }
        if(! values.password){
            errors.password = "Password is required"
        }
        else if(! passwordRegex.test(values.password)){
            errors.password = "Enter password between 8 to 12"
        }
        if (!values.confirmPassword){
            errors.confirmPassword = "You must confirm your password"
        }
        else if(!(values.password===values.confirmPassword)){
            errors.confirmPassword = "Password not match"
        }
        if(!values.image){
            errors.image = 'Image is required'
        }

        console.log(errors)
        return errors
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100 " onSubmit={handleSubmit}>
        <form className="w-50 " >
        <Input type={'text'} fieldName={'name'} name={'name'} handleInput={handleInput}/>
        <small className="text-danger">{formErrors.name}</small>
        <Input type={'text'} fieldName={'email'} name={'email'} handleInput={handleInput}/>
        <small className="text-danger">{formErrors.email}</small>
        <Input type={'password'} fieldName={'password'} name={'password'} handleInput={handleInput}/>
        <small className="text-danger">{formErrors.password}</small>
        <Input type={'password'} fieldName={'confirm password'} name={'confirmPassword'} handleInput={handleInput}/>
        <small className="text-danger">{formErrors.confirmPassword}</small>
        <Input type={'file'} fieldName={'image'} name={'image'}handleInput={handleInput}/>
        <small className="text-danger">{formErrors.image}</small>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>

       
    )
}