"use client";
import { useForm } from "react-hook-form";
import { fildsObrigatoryStep2, Step2FormValues, step2Schema } from "./schema";
import { useState } from "react";
import { useCadastroStore } from "@/stores/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModalErros } from "@/components/ModalErros";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

export function FormStep2() {
  const {
    dataStep1,
    dataStep2,
    setDataStep2,
    emptyFieldsStep1,
    setEmptyFieldsStep2,
  } = useCadastroStore();
  const [showModal, setShowModal] = useState(false);
  const emptyFields = fildsObrigatoryStep2.filter(
    (key) => !dataStep2[key as keyof Step2FormValues]
  ).length;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Step2FormValues>({
    resolver: zodResolver(step2Schema),
    defaultValues: dataStep2,
  });

  const onSubmit = (values: Step2FormValues) => {
    setDataStep2(values);
    setEmptyFieldsStep2(emptyFields);
    if (emptyFields > 0) {
      setShowModal(true);
    } else {
      console.log("Cadastro finalizado com sucesso!", {
        ...dataStep1,
        ...dataStep2,
        ...values,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {emptyFieldsStep1 + emptyFields > 0 && (
          <ModalErros
            open={showModal}
            fields={emptyFieldsStep1 + emptyFields}
            isFinal
            onClose={() => setShowModal(false)}
            continueButton={() => onSubmit}
          />
        )}
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="duracaoMinutos">Duração (min)</Label>
          {errors.duracaoMinutos && (
            <Label className="text-red-500">
              {errors.duracaoMinutos.message}
            </Label>
          )}
          <Input {...register("duracaoMinutos")} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="quantidadeMusicas">Quantidade de Músicas</Label>
          {errors.quantidadeMusicas && (
            <Label className="text-red-500">
              {errors.quantidadeMusicas.message}
            </Label>
          )}
          <Input {...register("quantidadeMusicas")} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="subgenero">Subgênero</Label>
          <Input {...register("subgenero")} />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="url">URL</Label>
          <Input {...register("url")} />
        </div>
        <Button
          onClick={() => {
            onSubmit(getValues());
          }}
        >
          Finalizar
        </Button>
        <Button
          onClick={() => window.history.back()}
          className="ml-2 bg-white border text-black hover:bg-gray-100"
        >
          Voltar
        </Button>
      </form>
    </>
  );
}
