import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import logo from '../assets/logo.png';
import { Image} from '@chakra-ui/react'

function RootLayot(){
    return <>
       <Image src={logo} alt="logo" w="25%" ml="100px" />
       <MainNavigation/>
       <main><Outlet/></main>
    </>
}

export default RootLayot;