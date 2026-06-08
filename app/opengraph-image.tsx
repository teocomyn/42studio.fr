import { ImageResponse } from "next/og";

export const alt = "42studio - Brand, Web, Produit";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#f4f3ef",
          background:
            "radial-gradient(circle at 76% 24%, rgba(255,255,255,.45), transparent 240px), linear-gradient(116deg, #070708 0%, #101014 48%, #070708 100%)"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ fontWeight: 800 }}>42studio</div>
          <div style={{ opacity: 0.58, letterSpacing: 4 }}>ARRAS — WORLDWIDE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 124,
              lineHeight: 0.88,
              letterSpacing: -8,
              fontWeight: 300,
              maxWidth: 860
            }}
          >
            <span>Brand.</span>
            <span>Web.</span>
            <span>Produit.</span>
          </div>
          <div style={{ marginTop: 36, fontSize: 28, color: "rgba(244,243,239,.68)" }}>
            Du symbole au code, sans rupture.
          </div>
        </div>
      </div>
    ),
    size
  );
}
