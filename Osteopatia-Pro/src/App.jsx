import { AppShell} from '@mantine/core'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import Reviews from './components/reviews'
import Portfolio from './components/Portfolio'
import Faq from './components/Faq'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import '@mantine/core/styles.css';

function App() {


  return (
    <>
      <AppShell>
        <AppShell.Header>
          <Header></Header>

        </AppShell.Header>

        <AppShell.Main>
        <Hero />
        <Reviews></Reviews>
        <Portfolio></Portfolio>
        <Faq></Faq>
        <Contacts> </Contacts>
        <Footer></Footer>
        
        </AppShell.Main>

      
      </AppShell>
      
    </>
  )
}

export default App
