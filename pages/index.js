import Layout from '../components/Layout';
import { Container } from '@mui/material';
import Main from '../components/Main/Main';
import Habilidades from '../components/Habilidades/Habilidades';
import Proyectos from '../components/Proyectos/Proyectos';
import Contact from '../components/Contact/Contact';


export default function Home() {

  return (
    <>

      <Layout style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center'
      }} >
        
        <Container style={{
          minHeight: '100vh',
          fontFamily: ' sans-serif', fontWeight: '300',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center'
        }} >

          <Main />
          <Habilidades />
          <Proyectos />
          <Contact />

        </Container>
         
    
      </Layout>
    </>

  );
}
