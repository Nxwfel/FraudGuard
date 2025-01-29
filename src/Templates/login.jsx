import React from 'react';
import TextPressure from '../Animation/TextPressure';
import '../Style/login.css';

const Login = () => {
  return (
    <div className='flex h-screen w-screen'>
      <div className='h-screen w-screen items-center justify-center bg-gradient-to-b from-cyan-500 to-sky-950 '>
        <div style={{ position: 'absolute', height: '300px', width: "100%", top: '30%' }}>
          <TextPressure
            text="FraudGuard"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <div className='h-3/5 w-96 mt-28 relative mr-auto ml-auto rounded-xl bg-white'>
          <h1 className='font-textfont2 text-4xl text-sky-400 text-center'>Login</h1>
          <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" required="" />
            <label htmlFor="name" className="form__label">Name</label>
          </div>
            <div className="form__group field">
              <input type="input" className="form__field" placeholder="Name" required="" />
              <label htmlFor="name" className="form__label">Name</label>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
