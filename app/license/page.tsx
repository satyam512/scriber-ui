export async function getAvailableForms() {
  const res = await fetch("http://localhost:3001/availableForms");
  const availableForms = await res.json();

  return availableForms;
}

export default async function LicensePage() {
  const availableForms = await getAvailableForms();

  return (
    <div className="bg-grey m-16 p-8 flex flex-col">
      <h1 className="text-primary font-bold text-2xl inline-block mx-auto border-b-4 pb-2 px-8 border-darker">
        Select the license you want to apply for
      </h1>
      <div className="grid grid-cols-2 gap-8 my-8">
        {availableForms.map((availableForm: any, i: number) => (
          <div key={i} className="p-2 border border-white rounded">
            {availableForm.formTemplate.formName}
          </div>
        ))}
      </div>
    </div>
  );
}
