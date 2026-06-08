import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 72% 28%, rgba(255,255,255,.35), transparent 70px), #070708",
          color: "#f4f3ef",
          fontSize: 82,
          fontWeight: 900,
          letterSpacing: -8
        }}
      >
        42
      </div>
    ),
    size
  );
}
