// Bismillahirahmanirahim 



import SearchField from "@/components/SearchField";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MmmNavbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">

 Müşterisi Burada
        </Link>
       <Button ><a href="/login">Giriş Yap</a></Button>
      </div>
    </header>
  );
}



