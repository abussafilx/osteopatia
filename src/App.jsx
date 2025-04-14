import { AppShell } from '@mantine/core'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import Reviews from './components/Reviews'
import Portfolio from './components/Portfolio'
import Faq from './components/Faq'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Features from './components/Features'
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
          <Features></Features>
          <Portfolio></Portfolio>
          <Faq></Faq>
          <Contacts> </Contacts>
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div class="elfsight-app-aba3ef43-f16b-40b3-ad33-3b8d1ad9377d" data-elfsight-app-lazy></div>
          <Footer></Footer>

        </AppShell.Main>


      </AppShell>

    </>
  )
}

export default App
