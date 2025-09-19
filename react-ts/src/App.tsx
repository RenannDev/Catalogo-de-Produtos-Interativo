import type { Product } from './types/product'
import './index.css'
import ProductCard from './components/ProductCard'
import OneSection from './components/OneSection'


const produto: Product = {
  name: "Kit Social",
  price: 299.99,
  description: "Calça && Sápato",
  image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg", 
}



function App() {

  return (
    <div className="bg-cor-fundo min-h-screen" >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
       <ProductCard
        product={produto}
        
      />
      </div>
      <OneSection title="Catálogo de Produtos"  />
    </div>
  )
}

export default App
