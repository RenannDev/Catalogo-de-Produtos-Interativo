import type { Product } from './types/product'
import './index.css'
import ProductCard from './components/ProductCard'
import OneSection from './components/OneSection'
import Header from './components/Header';


const produto: Product = {
  name: "Kit Social",
  price: 299.99,
  description: "Calça && Sápato",
  image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg", 
}



function App() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-cor-fundo min-h-screen" >
      <Header logoText="Vítor Renan" navItems={navItems} />
      <OneSection title="Catálogo de Produtos"  />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <ProductCard
          product={produto} 
      />
      </div>
    </div>
  )
}

export default App
