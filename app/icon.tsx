import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070708",
          color: "#f4f3ef",
          fontSize: 30,
          fontWeight: 900,
          letterSpacing: -3
        }}
      >
        42
      </div>
    ),
    size
  );
}
