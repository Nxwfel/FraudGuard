import TextPressure from '../Animation/TextPressure';
import Shield from '../Images/encrypted.png';
import '../Style/login.css'
const Login = () => {


  return (
    <div className='flex h-screen w-screen'>
      <div className='h-screen w-2/3 bg-gradient-to-b from-cyan-500 to-sky-950'>
      <div style={{position: 'relative', height: '300px', top: '30%'}}>
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
      <div className='flex justify-center relative mt-20'>
        <img src={Shield} alt='shield' className='h-48 w-48'/></div>
      </div>
      <div className='h-screen w-1/3 bg-white '>
      <div className='flex justify-center items-center flex-col min-w-full'>
      <div class="group">
  <input required="" type="text" class="input" />
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Name</label>
</div>
<div class="group">
  <input required="" type="text" class="input" />
  <span class="highlight"></span>
  <span class="bar"></span>
  <label>Name</label>
</div>
      </div>
      </div>
      
    </div>
  );
};
export default Login;
