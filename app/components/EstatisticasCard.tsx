type EstatisticasProps = {
  children: React.ReactNode;
  title: string;
};

export default function EstatisticasCard({
  children,
  title,
}: EstatisticasProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-16">
      <h1 className="text-4xl font-bold text-endeavour-600 mb-8">{title}</h1>
      {children}
    </div>
  );
}
