interface OneSectionProps {
  title: string;
  children?: React.ReactNode;
}

const OneSection = ({
  title,
  children,
}: OneSectionProps) => {
  return (
    <section className="">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ipsa aspernatur. Quos fugiat veniam ratione explicabo quod consequatur id numquam minus quasi doloribus? Amet nisi voluptas fugiat distinctio dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis soluta repellat incidunt quis accusantium ipsum harum quidem ullam possimus, accusamus asperiores illum dolores illo ducimus obcaecati recusandae. Nostrum, nesciunt?</p>

        <h3>Encontre Seu Estilo Aqui</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio nesciunt odio eaque cupiditate! Odio fuga voluptate earum assumenda, alias eligendi veniam fugit provident ut suscipit, iste enim incidunt sunt.</p>

        {children}
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </section>
  );
};

export default OneSection;
