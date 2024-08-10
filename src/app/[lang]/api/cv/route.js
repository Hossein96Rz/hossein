import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "cv",
    "hossein-rezaei.pdf",
  );
  const fileName = "hossein-rezaei-cv.pdf";
  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ message: "File not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
