import Layout from '../components/Layout';
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material';
import Main from '../components/Main/Main';
import Habilidades from '../components/Habilidades/Habilidades';
import Proyectos from '../components/Proyectos/Proyectos';
export default function Home() {

  return (
    <>

      <Layout style={{display:'flex',flexDirection:'column', 
          alignItems:'center',justifyContent:'center'}} >
        <Container style={{
          backgroundColor: '#18181B', minHeight: '100vh',
          fontFamily: ' sans-serif', fontWeight: '300',
          display:'flex',flexDirection:'column', 
          alignItems:'center',justifyContent:'center'
        }} >
          <Navbar />
          <Main/>
          <Habilidades/>
          <Proyectos/>
        </Container>

      </Layout>
    </>

  );
}
