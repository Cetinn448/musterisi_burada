// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alemin
// Es-selatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain


import signupImage from "@/assets/signup-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Üye Ol",
};

export default function Page() {
  if (typeof window !== "undefined") {
    window.alert("Ücretsiz deneme süreniz bitti. Lütfen veri tabanınızı yükseltin ve tekrar deneyin.");
  }

  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Müşterisi Burada ya Üye Ol</h1>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href="/login" className="block text-center hover:underline">
              Zaten Üye Misin? Giriş Yap
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}