import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';

const Loginpage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const login = () => {
        
        if(!username || !password){
            setError('Please fill all the fields!!!');
            return;
        }
        setUsername('');
        setPassword('');
        setError('');
        navigate('/page')
    }

    return (
        <div>

           <div className="maindiv">
             <div  className="sidediv">
                <div className='sidetxt'>
                   <h3 className='sideh3'> Medical Record Storage </h3>
                </div>
               
             </div>

             <div className="logindiv">
                <div className='logintext'>
                  <h1>LOGIN</h1>
                </div>
                <div className='inputfield'>
                    <input placeholder='Username' className='input1' onChange={(e)=>setUsername(e.target.value)} value={username} required/><br/><br/>
                    <input placeholder='Password' className='input2' onChange={(e)=> setPassword(e.target.value)} value={password} required/>
                </div>
                <div className='btn'>
                    <button className='loginbtn' onClick={login}>Login</button>
                </div>
                  <div className='forgotpass'>
                    <span className='span1'>Forgot password? Click here to reset</span>
                  </div>
                
                    {
                        error && 
                          <h3 className='error'>{error}</h3>
                    }
                
             </div>
           </div>

        </div>
    )
}

export default Loginpage;