import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <LoginClient />
    </Suspense>
  );
}