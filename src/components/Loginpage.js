import { useState } from 'react';
import './Login.css';

const Loginpage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = () => {
        
        if(!username || !password){
            setError('Please fill all the fields!!!');
            return;
        }
        setUsername('');
        setPassword('');
        setError('');
    }

    return (
        <div>

           <div className="maindiv">
             <div  className="sidediv">
                <div className='sidetxt'>
                   <h3> Medical Record Storage </h3>
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