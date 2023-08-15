import './App.css'
import Footer from './Footer/Footer'
import BlogsCards from './components/BlogsCards/BlogsCards'
import Header from './components/Header/Header'
import PopularProducts from './components/PopularProducts/PopularProducts'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        {/* --- BlogsCards Section---- */}
        {/* <BlogsCards></BlogsCards> */}

        {/* ---- Popular Products Section ---- */}
        <PopularProducts></PopularProducts>

        {/* --- Product Page ----- */}
        <Products></Products>

      </main>
      <Footer></Footer>
    </>
  )
}

export default App
