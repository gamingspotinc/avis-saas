"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

export default function AvisPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [company, setCompany] = useState<any>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("slug", slug)
        .single();

      setCompany(data);
    };

    fetchCompany();
  }, [slug]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Laisser un avis pour cette entreprise</p>
    </div>
  );
}