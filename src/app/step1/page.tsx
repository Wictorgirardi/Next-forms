"use client";

import { ActualStep } from "@/components/ActualStep";
import { FormStep1 } from "../step1/form";

export default function Step1() {

  return (
    <div className="flex max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <ActualStep step={1} />
      <div className="w-3/4 ml-6">
        <span className="text-lg font-semibold">Informações gerais</span>
        <FormStep1 />
      </div>
    </div>
  );
}
