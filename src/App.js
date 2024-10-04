import {useEffect} from 'react'
import { ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float} from '@react-three/drei'
import { Robot } from './Components/Robot';
import baffle from 'baffle'
import thinkCS from './think_cs.png';
function App() {

  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░O░M░',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })


  return (
    <>
    <color attach="background" args={['#333333']} />
    <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment
        preset='warehouse'
      />
      <ScrollControls pages={6} damping={0.1}>
          <Robot scale={1.4}/>
          <Sparkles size={2} color={"#fff"} scale={[10,10,10]}></Sparkles>
        <Backdrop
          receiveShadow
          floor={20.5}
          segments={100}
          scale={[50,30,10]}
          position={[4,-10,0]}
        >
          <meshStandardMaterial color="#0a1a1f" />
        </Backdrop>  

        <Float
          speed={4}
          rotationIntensity={0.5} 
          floatIntensity={1} 
          floatingRange={[1, 1]} 
        >
      
        </Float>  
        <Scroll>
        </Scroll>
        <Scroll html style={{width: '100%'}}>
        <h1
  className="title"
  style={{ color: '#cdcbca', position: 'absolute',top: '65vh', left: '50%', fontSize: '10vw', transform: 'translate(-50%, -50%)',  whiteSpace: 'nowrap', }}>ThinkMe
        </h1>
          
        <div className='row' style={{ position: 'absolute', top: `132vh` }}>
  <h2>ThinkMe AI</h2>
  <p style={{ maxWidth: '400px' }}>
    ThinkMe AI integrates cutting-edge technologies like Generative AI, Image Generation AI, and Speech-to-Text AI, 
    creating a powerful, versatile platform for the future. Whether it's generating text, crafting images from prompts, 
    or transforming speech into text, ThinkMe AI takes innovation to the next level.
  </p>
  <button onClick={() => window.open('https://ai.google/discover/generativeai/', '_blank')}>
    Read more
  </button>
</div>

<div className='row' style={{ position: 'absolute', top: `230vh` }}>
  <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px" }}>
    <h2 style={{ maxWidth: "440px" }}>AI-Powered Solutions</h2>
    <p style={{ maxWidth: '440px' }}>
      Explore the advanced functionalities of ThinkMe AI, including text generation, 
      image creation from prompts, and seamless speech-to-text capabilities. This AI-driven platform empowers users 
      to interact and create in new and exciting ways.
    </p>                
    <button onClick={() => window.open('https://cloud.google.com/speech-to-text', '_blank')}>
    Read more
  </button>
  </div>
</div>          
          <h2 style={{ position: 'absolute', top: '400vh', left: '50%', transform: `translate(-50%,-50%)` }}>Powering the Future of Creation</h2>    
          <h2 style={{ position: 'absolute', top: '490vh', left: '50%', transform: `translate(-50%,-50%)` }}>ThinkMe AI is designed to push the boundaries of human-AI interaction, allowing users to explore creativity and productivity.</h2>            
          <img src={thinkCS} alt="ThinkMe AI"
        style={{
          maxWidth: '500px', 
          width: '100%',
          height: 'auto',
         position: 'absolute', top: '565vh', left: '50%', transform: `translate(-50%,-50%)`
        }}
      />
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Designed by OM❤️</button>

        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
