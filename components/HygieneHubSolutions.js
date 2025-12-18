import { ShoppingBag, Star } from "lucide-react";

export default function HygieneHubSolutions() {
  const products = [
    {
      name: "Luxury Lipstick",
      price: "R149",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
      rating: 5,
    },
    {
      name: "Silky Hair Extensions",
      price: "R799",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      rating: 4,
    },
    {
      name: "Radiant Face Serum",
      price: "R299",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
      rating: 5,
    },
    {
      name: "Hydrating Face Cream",
      price: "R180",
      image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a",
      rating: 5,
    },
  ];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ color: "#059669", fontSize: "28px", fontWeight: "bold" }}>
        HYGIENE HUB SOLUTIONS
      </h1>

      <h2 style={{ fontSize: "42px", marginTop: "30px" }}>
        Elevating Hygiene Standards <br />
        <span style={{ color: "#059669" }}>With Confidence</span>
      </h2>

      <p style={{ color: "#ccc", marginTop: "15px" }}>
        Luxury beauty & hygiene essentials for women
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "20px",
              padding: "15px",
              border: "1px solid #064e3b",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />

            <h3 style={{ marginTop: "12px" }}>{product.name}</h3>

            <div>
              {Array(product.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={16} color="#10b981" fill="#10b981" />
                ))}
            </div>

            <p style={{ color: "#10b981", fontWeight: "bold" }}>
              {product.price}
            </p>

            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#059669",
                border: "none",
                borderRadius: "20px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
