import { validateFormData } from "@/src/utils/utils";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  const data = await req.json();

  if (!validateFormData(data)) {
    return new Response(JSON.stringify({ message: "Invalid input" }), {
      status: 400,
    });
  }

  const { name, email: userEmail, message } = data;

  await sql`
  INSERT INTO contacts (name, email, message)
  VALUES (${name}, ${userEmail}, ${message})
`;

  return new Response(
    JSON.stringify({ message: "Message sent successfully" }),
    { status: 200 },
  );
}
