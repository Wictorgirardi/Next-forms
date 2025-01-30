import { useCadastroStore } from "@/stores/store";

interface ActualStepProps {
  step: number;
}

export function ActualStep({ step }: ActualStepProps) {
  const { emptyFieldsStep1, emptyFieldsStep2 } = useCadastroStore();

  const steps = [
    { label: "Informações gerais", errors: emptyFieldsStep1 },
    { label: "Detalhes do álbum", errors: emptyFieldsStep2 },
  ];

  const getStepClass = (index: number, hasErrors: boolean) =>
    `${step === index + 1 ? "font-bold" : ""} ${hasErrors ? "text-red-600" : ""}`;

  return (
    <div className="w-1/4 p-4 border rounded-lg">
      <h2 className="text-lg font-semibold">Etapas</h2>
      <ul className="mt-4 space-y-2">
        {steps.map((item, index) => (
          <li
            key={index}
            className={getStepClass(index, item.errors > 0)}
            aria-current={step === index + 1 ? "step" : undefined}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
