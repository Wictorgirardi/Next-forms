"use client";

import { ActualStep } from "@/components/ActualStep";
import { FormStep2 } from "../step2/form";

export default function Step2() {

  return (
    <div className="flex max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <ActualStep step={2} />
      <div className="w-3/4 ml-6">
        <span className="text-lg font-semibold">Detalhes do album</span>
        <FormStep2 />
      </div>
    </div>
  );
}
