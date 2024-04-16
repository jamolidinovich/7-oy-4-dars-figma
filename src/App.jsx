import logo from './assets/logo.png'
import Tbody from './components/Tbody'
import Noki from '././assets/Nokia.png'
import SamsunG from '././assets/Samsung.png'
import Redmi from '././assets/Redmi.png'
import Iphone from '././assets/Iphone.png'
import Blackbery from '././assets/Blackberry.png'
import Available from './components/Available'
import Thead from './components/Thed'
function App() 
{
  return (
    <>
      <div className="w-[600px] mx-auto 	 mt-[110px] flex flex-col">
        <img className='ml-[280px] mb-[50px]' width={239} height={191} src={logo} alt="Logo icon" />
        <Thead></Thead>
        <Tbody gmail = {'mail@gmail.com!'} picture = {Iphone} title = {"Apple"} text = {'Technology'} price = {'200.00$'} status = {<Available></Available>}></Tbody>
        <Tbody gmail = {'mail@gmail.com!'} picture = {Redmi} title = {"Realmi"} text = {'Technology'} price = {'200.00$'} status = {<Available></Available>}></Tbody>
        <Tbody gmail = {'mail@gmail.com!'} picture = {SamsunG} title = {"Samsung"} text = {'Technology'} price = {'200.00$'} status = {<Available></Available>}></Tbody>
        <Tbody gmail = {'mail@gmail.com!'} picture = {Noki} title = {"Nokia"} text = {'Technology'} price = {'200.00$'} status = {<Available></Available>}></Tbody>
        <Tbody gmail = {'mail@gmail.com!'} picture = {Blackbery} title = {"Blackberry"} text = {'Technology'} price = {'200.00$'} status = {<Available></Available>}></Tbody>
      </div>
    </>
  )
}

export default App
