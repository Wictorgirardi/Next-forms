"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, Step1FormValues, fildsObrigatoryStep1 } from "./schema";
import { useRouter } from "next/navigation";
import { useCadastroStore } from "@/stores/store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ModalErros } from "@/components/ModalErros";
import { useState } from "react";

export function FormStep1() {
  const router = useRouter();
  const { dataStep1, setDataStep1, setEmptyFieldsStep1, emptyFieldsStep1 } =
    useCadastroStore();
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Step1FormValues>({
    resolver: zodResolver(step1Schema),
    defaultValues: dataStep1,
  });

  const onSubmit = (values: Step1FormValues) => {
    setDataStep1(values);
    const emptyFields = fildsObrigatoryStep1.filter(
      (key) => !values[key as keyof Step1FormValues]
    ).length;
    setEmptyFieldsStep1(emptyFields);
    console.log("emptyFields", emptyFields);
    if (emptyFields > 0) {
      setShowModal(true);
    } else {
      router.push("step2");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
      {emptyFieldsStep1 > 0 && (
        <ModalErros
          open={showModal}
          fields={emptyFieldsStep1}
          onClose={() => setShowModal(false)}
          continueButton={() => router.push("step2")}
        />
      )}
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="nome">Nome do Álbum</Label>
        {errors.nome && (
          <Label className="text-red-500">{errors.nome.message}</Label>
        )}
        <Input {...register("nome")} />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="dataPublicacao">Data de Publicação</Label>
        {errors.dataPublicacao && (
          <Label className="text-red-500">
            {errors.dataPublicacao.message}
          </Label>
        )}
        <Input type="date" {...register("dataPublicacao")} />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="artista">Artista</Label>
        {errors.artista && (
          <Label className="text-red-500">{errors.artista.message}</Label>
        )}
        <Input {...register("artista")} />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="participacao">Artista participante (Opcional)</Label>
        <Input {...register("participacao")} />
      </div>
      <Button
        onClick={() => {
          onSubmit(getValues());
        }}
      >
        Próximo
      </Button>
    </form>
  );
}
