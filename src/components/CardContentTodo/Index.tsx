export default function TaskCard() {
  const data = [
    { id: 1, name: "Banho nos dogs", description: "Amanhã pela manhã" },
    { id: 2, name: "Leitura", description: "10 páginas" },
  ];

  return (
    <div className="w-[700px] h-[449px] bg-[var(--color-secondary)]  mr-4 max-md:w-auto">
  <h3 className="font-semibold text-xl text-left">To do</h3>

  <div className="h-96 ">
    {data.map((item) => (
      <div
        className="bg-[#FFFFFF0D] mx-4 p-2 rounded-lg my-3 relative"
        key={item.id}
      >
        <h4 className="text-base text-left font-semibold">{item.name}</h4>
        <div className="flex justify-between text-secondary text-start sm:flex-col">
          <p className="w-2/3 break-words sm:w-1/2 text-[#FFFFFF99] sm:w-auto">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}


