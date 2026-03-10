// app/api/nomenclature/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://app.tablecrm.com/nomenclature?token=af1874616430e04cfd4bce30035789907e899fc7c3a1a4bb27254828ff304a77"
    );

    const text = await res.text();

    // Попробуем парсить JSON, если не получилось — вернём текст для дебага
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json(
        { error: "Не JSON в ответе TableCRM", response: text },
        { status: 500 }
      );
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}