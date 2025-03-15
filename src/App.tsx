import { useState } from 'react';

import { Slider } from './components/Slider'
import './index.css'

const images = [
  {
    url: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Servidor de dados',
    link: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Computador com linhas de código',
    link: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    url: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mulher usando computador',
    link: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Óculos em cima de um computador',
    link: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
]

function App() {
  const [autoSlide, setAutoSlide] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setAutoSlide((state) => !state)} className="auto">Auto Slide: {autoSlide ? 'ON' : 'OFF'}</button>
      <Slider items={images} auto={autoSlide} />
    </div>
  )
}

export default App;
