import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, entreprise, sujet, message } = body;

    // Validation
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants (nom, email, sujet, message)." },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    // Créer client Supabase côté serveur (avec service_role)
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insérer le message
    const { data, error } = await supabase
      .from("messages")
      .insert({
        nom,
        email,
        telephone: telephone || null,
        entreprise: entreprise || null,
        sujet,
        message,
        statut: "non_lu",
      })
      .select()
      .single();

    if (error) {
      console.error("Erreur Supabase :", error);
      return NextResponse.json(
        { error: "Impossible d'enregistrer le message. Réessayez plus tard." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès !", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API :", error);
    return NextResponse.json(
      { error: "Erreur serveur. Réessayez plus tard." },
      { status: 500 }
    );
  }
}
