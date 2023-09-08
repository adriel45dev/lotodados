import LoteriasCaixaIcon from "@/public/icons/LoteriasCaixaIcon";

export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-6 my-6">
      <LoteriasCaixaIcon
        className="w-16 h-16 animate-spin animation-duration-5000 "
        primaryColor="#F99500"
        secondColor="#0065B7"
      />
      <h1 className="text-2xl py-8 text-gray-400 animate-pulse">
        Consultando as estatísticas mais recentes...
      </h1>
    </div>
  );
}
