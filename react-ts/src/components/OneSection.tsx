interface OneSectionProps {
  title: string;
  children?: React.ReactNode;
}

const OneSection = ({
  title,
  children,
}: OneSectionProps) => {
  return (
    <section className="bg-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="py-4">{children}</div>
    </section>
  );
};

export default OneSection;
