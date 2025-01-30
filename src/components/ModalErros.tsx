import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

interface ModalErrosProps {
  fields: number;
  onClose: () => void;
  open: boolean;
  continueButton: () => void;
  isFinal?: boolean;
}

export function ModalErros({
  fields,
  onClose,
  open,
  continueButton,
  isFinal,
}: ModalErrosProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent aria-describedby="modal-erros">
        <DialogTitle>⚠️ {fields} erros detectados</DialogTitle>
        <span className="text-md">
          {isFinal
            ? "Existem erros que necessitam atenção!"
            : "Deseja corrigir os erros agora ou corrigi-los mais tarde?"}
        </span>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Corrigir
          </Button>
          {!isFinal && (
            <Button variant="destructive" onClick={continueButton}>
              Continuar
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
