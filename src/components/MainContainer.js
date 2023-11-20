import Videocontainer from './Videocontainer'
import ButtonList from './ButtonList'

const MainContainer = () =>{
    return(
        <div className="">
         
      <ButtonList/>
      <div className=' col-span-11 '>
    <Videocontainer/>
    </div>
        </div>
    )
}
export default MainContainer;