import { LogOutIcon } from "lucide-react";
import { signOut } from "./auth/provider";

export function UserSettings({ image }: { image?: string | null | undefined }) {
  return (
    <div className="flex items-center gap-4">
      <form action={async () => {
        'use server' 
        await signOut()
      } }>
        <button type="submit" className="hover:underline flex gap-2 text-red-500 justify-center">
          <LogOutIcon />
          Sair
        </button>
      </form>
    </div>
  )
}