interface OneSectionProps {
  title: string;
  children?: React.ReactNode;
}

const OneSection = ({
  title,
  children,
}: OneSectionProps) => {
  return (
    <section className="grid grid-cols-2 min-w-full min-h-screen px-10 gap-6">
      <div className="flex flex-col justify-center items-center p-8 border-b-2 border-cor-texto  ">
        <h1 className="text-5xl font-bold font-serif pb-10 text-cor-texto " >{title}</h1>
        <p className="text-sm md:text-base lg:text-xl text-cor-leve-texto pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ipsa aspernatur. Quos fugiat veniam ratione explicabo quod consequatur id numquam minus quasi doloribus? Amet nisi voluptas fugiat distinctio dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis soluta repellat incidunt quis accusantium ipsum harum quidem ullam possimus, accusamus asperiores illum dolores illo ducimus obcaecati recusandae. Nostrum, nesciunt?</p>

        <h3 className=" text-2xl font-bold text-cor-texto font-serif pb-10">Encontre Seu Estilo Aqui</h3>

        <p className="text-sm md:text-base lg:text-xl text-cor-leve-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio nesciunt odio eaque cupiditate! Odio fuga voluptate earum assumenda, alias eligendi veniam fugit provident ut suscipit, iste enim incidunt sunt.</p>
        

        {children}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
        <div className="w-full h-full">
          <img src="https://images.pexels.com/photos/34014918/pexels-photo-34014918.jpeg" alt=""
          className="w-full h-full object-cover " />
        </div>
        <div className="flex flex-col gap-6 h-full justify-end">
          <img src="https://images.pexels.com/photos/33971059/pexels-photo-33971059.jpeg" alt=""
          className="w-full h-1/3 object-cover" />

          <img src="https://images.pexels.com/photos/33964912/pexels-photo-33964912.jpeg" alt=""
          className="w-full h-1/3 object-cover " />
        </div>
        
      </div>

    </section>
  );
};

export default OneSection;
