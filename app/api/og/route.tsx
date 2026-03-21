import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title") ?? "Pedro Vinícius de Castro";
  const font = fetch(
    new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #c8d8f0 0%, #d4c8e8 35%, #f0c8a8 70%, #f5d5b0 100%)",
      }}
    >
      <div
        style={{
          marginLeft: 100,
          marginRight: 100,
          display: "flex",
          fontSize: 130,
          fontFamily: "Kaisei Tokumin",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          fontStyle: "normal",
          color: "#1a1a1a",
          lineHeight: "120px",
          whiteSpace: "pre-wrap",
        }}
      >
        {postTitle}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
