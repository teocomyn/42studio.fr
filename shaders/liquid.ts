export const liquidVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vPosition = position;

    vec3 pos = position;
    float cursor = distance(uv, uMouse);
    float wave = sin((pos.x * 2.2) + uTime * 0.8) * 0.12;
    wave += cos((pos.y * 2.8) - uTime * 0.55) * 0.08;
    wave += smoothstep(0.55, 0.0, cursor) * 0.34;
    pos.z += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const liquidFragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float uTime;
  uniform vec2 uMouse;

  float circle(vec2 uv, vec2 center, float radius, float blur) {
    float d = distance(uv, center);
    return 1.0 - smoothstep(radius, radius + blur, d);
  }

  void main() {
    vec2 uv = vUv;
    float bands = sin((uv.x + uv.y) * 18.0 + uTime * 1.4) * 0.5 + 0.5;
    float rings = circle(uv, uMouse, 0.22, 0.36);
    float scan = smoothstep(0.18, 0.92, sin((uv.y * 42.0) + uTime) * 0.5 + 0.5);

    vec3 black = vec3(0.02, 0.02, 0.024);
    vec3 silver = vec3(0.72, 0.72, 0.70);
    vec3 white = vec3(1.0);

    vec3 color = mix(black, silver, bands * 0.48 + rings * 0.42);
    color = mix(color, white, pow(bands, 6.0) * 0.45 + rings * 0.34);
    color -= scan * 0.045;

    float alpha = 0.72;
    gl_FragColor = vec4(color, alpha);
  }
`;
