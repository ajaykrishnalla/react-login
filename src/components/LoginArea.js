import React,{useState,useContext,useEffect} from "react";
import AlertContext from '../context/alert/alertContext';
import AuthContext from '../context/auth/authContext';
const LoginArea = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {logIn,error,isAuthenticated} = authContext;
    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }
        if(error !== null){
        setAlert(error.msg,error.type);
        }
//eslint-disable-next-line
    },[error,isAuthenticated])
    const [login,setLogin] = useState({
        email:'',
        password:''
    })
    const handleChange = e => {
        setLogin({...login,[e.target.name]: e.target.value});
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(email === "" || password === ""){
            setAlert('Please fill in all fileds','danger');
            return;
        }
        logIn(login);
        
        
        
    }
const {email,password} = login;
  return (
    <div style={{ marginTop: "30px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginArea;
