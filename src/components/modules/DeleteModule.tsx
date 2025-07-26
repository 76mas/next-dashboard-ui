import { CircleAlertIcon } from "lucide-react";
import { MdDeleteForever } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
interface AlertComponentProps<T> {
  onDelete: () => void;
  item: T;
  displayName?: string;
}

export default function AlertComponent<T>({ onDelete, item, displayName }: AlertComponentProps<T>) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MdDeleteForever className="text-red-600 block bg-white w-7 h-7 p-1 cursor-pointer rounded-full" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#1a1a1a] z-[4949494494949] border-none text-white">
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <div className="flex bg-white size-9 shrink-0 items-center justify-center rounded-full border">
            <CircleAlertIcon className="opacity-80 text-black " size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete <strong className="text-white">{displayName ?? "this item"} ? </strong>This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none text-black hover:bg-[#f8f0f0]">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#dd2626] border-none text-black hover:bg-[#e74e4ed5]"
            onClick={onDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
