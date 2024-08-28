import { describe, it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";
import { GET } from "./route";

vi.mock("fs");
vi.mock("path");

describe("GET handler", () => {
  it("should return a 404 response if the file does not exist", async () => {
    vi.spyOn(path, "join").mockReturnValue("/mocked/path/hossein-rezaei.pdf");
    vi.spyOn(fs, "existsSync").mockReturnValue(false);

    const response = await GET();

    expect(response.status).toBe(404);
    const jsonResponse = await response.json();
    expect(jsonResponse).toEqual({ message: "File not found" });
  });

  it("should return a 200 response with the PDF file if it exists", async () => {
    const mockFileBuffer = Buffer.from("mocked file content");

    vi.spyOn(path, "join").mockReturnValue("/mocked/path/hossein-rezaei.pdf");
    vi.spyOn(fs, "existsSync").mockReturnValue(true);
    vi.spyOn(fs, "readFileSync").mockReturnValue(mockFileBuffer);

    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("application/pdf");
    expect(response.headers.get("Content-Disposition")).toBe(
      'attachment; filename="hossein-rezaei-cv.pdf"',
    );
    const fileContent = await response.arrayBuffer();
    expect(Buffer.from(fileContent)).toEqual(mockFileBuffer);
  });
});
