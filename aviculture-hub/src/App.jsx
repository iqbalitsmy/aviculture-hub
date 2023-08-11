import './App.css'
import BlogsCards from './components/BlogsCards/BlogsCards'
import Header from './components/Header/Header'
import PopularProducts from './components/PopularProducts/PopularProducts'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <BlogsCards></BlogsCards>
        <PopularProducts></PopularProducts>
      </main>
    </>
  )
}

export default App
