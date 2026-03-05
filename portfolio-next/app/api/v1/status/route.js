import database from "../../../../infra/database.js";

import { NextResponse } from "next/server";

export async function GET() {
  const result = await database.query("SELECT 1 + 1 AS sum;"); //sql sum test
  console.log(result.rows);
  return NextResponse.json({
    chave: "Teste api next",
    status: "ok",
  });
}
