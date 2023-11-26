
import Header from './components/Header'
import MainBuy from './components/MainBuy'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Header/>

      <div className='OrderMessage'>
        <h1 className='OrderAlert'>Wait ! your order in progress.</h1>
        <h3 className='OrderDescript'>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
      </div>

      <MainBuy/>

      <Footer/>
    </>
  )
}

export default App
