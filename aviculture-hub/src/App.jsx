import './App.css'
import Footer from './Footer/Footer'
import BlogsCards from './components/BlogsCards/BlogsCards'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <BlogsCards></BlogsCards>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
