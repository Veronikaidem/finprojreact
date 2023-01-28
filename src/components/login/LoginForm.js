import { FormControl, TextField, Button}  from "@mui/material" ;
import { useForm} from "../../application";
import {registerOrLeginuser} from "../ ../ redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextFieldComponent } from "../shared/TextField";
import { registerUser } from "../../redux";

const generateLoginFormValues = () => {
return {
firstName: {
value: "",
required: true,
 error: "",
validateInput: (name) =>
name. length > 3 ? null: " name should have at least 3 symbols"

},

lastName: {
value: "",
 required: true, 
 error: "", 
 validateInput: (lastName) =>
 lastName.length>3 ?null : "surname should be at least 1 char",
 },

 email:{
    value:"",
    required: true, 
    error: "",
    validateInput: (email)=> 
    email.includes("@gmail.com") ? null : "email is not valid"
    },
    
    password: {
        value: "",
        required: true, 
        error: "",
        validateInput:(password) => 
        password.length >6 ? null :"your password should be more than 5 symbols"
    },

    };


 };

 export const LoginForm = () => {
    const {formValues,  onInputChange} = useForm({
        defaultFormValues: generateLoginFormValues(),


    });
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const onLogin = (e) =>{
        e.preventDefault();
        const email = loginformValues.email.value;
        const password = loginformValues.password.value;
        dispatch(authenticateUser({formValues:{email,password},isLogin:true})).unwrap().then(()=>navigate('/'));
        
    return <FormControl fullWidth>
        
         <TextFieldComponent
        name="email"
        label="email"
        value={formValues.email.value}
        onChange={onInputChange}
        error={!!formValues.email.error}
        helperText={error}
        
        />

<TextFieldComponent
        name="password"
        label="password"
        value={formValues.password.value}
        onChange={onInputChange}
        error={!!formValues.password.error}
        helperText={error}
        
        />
        <button onClick={onLogin}>login</button>
    </FormControl>;

};