import { NextResponse } from "next/server";
import sharp from "sharp";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const imageUrl = searchParams.get("imageUrl");
    console.log(imageUrl);

    if (!imageUrl) {
      return NextResponse.json({ error: "Missing imageUrl parameter" }, { status: 400 });
    }

    // Fetch the external image
    const response = await fetch(imageUrl, { next: { revalidate: 0 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const imageBuffer = Buffer.from(await response.arrayBuffer());

    // Process the image while keeping transparency
    const processedImage = await sharp(imageBuffer)
      .trim() // Removes surrounding blank space
      // .resize(300, 300, { fit: "contain", background: "white" }) // Resize while keeping aspect ratio
      .toFormat("png")
      .unflatten()
      .toBuffer();

    return new Response(processedImage, {
      headers: { "Content-Type": "image/png" }, // Ensure correct response type
    });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
