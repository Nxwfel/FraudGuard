import React, { useRef } from 'react';
import styled from 'styled-components';
import VariableProximity from '../Animation/VariablesProximity';

const Login = () => {
  const containerRef = useRef(null);

  return (
    <div className='flex h-screen w-screen'>
      <div className='h-screen w-2/3 bg-gradient-to-b from-cyan-500 to-sky-950'>
        <div
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={'Hover me! And then star React Bits on GitHub, or else...'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </div>
      </div>
      <div className='h-screen w-1/3 bg-white'></div>
    </div>
  );
};
export default Login;
