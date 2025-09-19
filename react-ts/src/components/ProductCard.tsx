import type { Product } from '../types/product'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div className="relative w-60 bg-white rounded-2xl p-1 shadow-[0_50px_30px_-20px_rgba(100,100,111,0.2)] transition-all duration-500 hover:scale-105 mx-auto hidden ">
      {/* Image Container */}
      <div className="relative bg-cover  w-full h-[130px] rounded-lg rounded-tr-[4rem] mb-4 overflow-hidden ">
        {/* SVG ou imagem */}
        <img
        src={product.image}
        alt={product.name} 
        className="w-full h-full object-cover rounded-lg rounded-tr-[4rem]"
        />

      </div>

      {/* Preço */}
        <div className="absolute right-3 top-[7.5rem] bg-white text-destaques font-black text-sm px-2 py-1 rounded-[1rem_1rem_2rem_2rem] shadow-lg" >
          R${product.price}
        </div>

      {/* Favorito */}
      <img src="./src/assets/icons/love-svgrepo-com.svg" className="absolute top-1 right-1 w-[19px] h-[19px] cursor-pointer " alt="" />
      

      {/* Content */}
      <div className="px-3 mb-4">
        <div className="font-black text-cor-leve-texto">{product.name}</div>
        <div className="font-bold text-cor-texto text-xs mb-4">{product.description}</div>

        {/* Colors & Sizes */}
        <div className="flex justify-between uppercase text-xs font-bold text-cor-leve-texto gap-8 mb-6">
          {/* Colors */}
          <div className="flex-1">
            <span>Cores</span>
            <ul className="flex flex-wrap items-center gap-1 mt-1">
              <li>
                <a className="block w-4 h-4 rounded-full border-2 border-[#000000]" />
              </li>
              <li>
                <a className="block w-4 h-4 rounded-full bg-[#46494b]" />
              </li>
              <li>
                <a className="block w-4 h-4 rounded-full border-2 border-[#94826d]" />
              </li>
              <li>
                <a className="block w-4 h-4 rounded-full border-2 border-[#9a7070]" />
              </li>
            </ul>
          </div>

          {/* Sizes */}
          <div className="flex-1">
            <span>Tamanhos</span>
            <ul className="flex flex-wrap gap-1 mt-1">
              {["P", "M", "G"].map((size) => (
                <li key={size}>
                  <label className="cursor-pointer">
                    <input type="radio" name="size" className="hidden peer" />
                    <span className="grid place-content-center w-6 h-6 text-[0.6rem] text-gray-700 peer-checked:bg-cor-elementos peer-checked:text-white peer-checked:rounded-[1rem_1rem_0.75rem_0.75rem]">
                      {size}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 text-cor-leve-texto text-[0.6rem] font-bold mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 fill-yellow-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.2 
            1.192-5.934 5.782 1.402 
            8.174L12 18.896l-7.336 
            3.87 1.402-8.174L.132 
            9.21l8.2-1.192z" />
          </svg>
          4.8 (120 reviews)
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-1">
        <button className="flex-auto rounded-[1.4rem_1.4rem_0.7rem_0.7rem] bg-cor-elementos text-cor-texto font-black py-2 hover:bg-destaques hover:text-cor-fundo">
          Comprar
        </button>
        <button className="grid place-content-center w-[50px] rounded-[1.4rem_1.4rem_0.7rem_0.7rem] bg-cor-elementos hover:bg-destaques">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 fill-cor-texto  hover:fill-cor-fundo  "
          >
            <path d="M10 20h4v-2h-4v2zm-6-6v-2h16v2h-16zm0-6v-2h16v2h-16z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
