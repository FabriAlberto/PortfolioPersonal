import Layout from '../components/Layout';
import Navbar from '../components/Navbar/Navbar'
import { Container } from '@mui/material';
import Main from '../components/Main/Main';
import Habilidades from '../components/Habilidades/Habilidades';
import Proyectos from '../components/Proyectos/Proyectos';
export default function Home() {

  return (
    <>

      <Layout>
        <Container style={{
          backgroundColor: '#18181B', minHeight: '100vh',
          fontFamily: 'Montserrat Alternates, sans-serif', fontWeight: '300'
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
