"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";

export default function HygieneHubSolutions() {
  const products = [
    { name: "Luxury Body Cream", price: "R250", rating: 5 },
    { name: "Silky Straight Weave", price: "R1200", rating: 4 },
    { name: "Matte Lip Gloss Set", price: "R300", rating: 5 },
    { name: "Curly Human Hair Weave", price: "R1500", rating: 5 }
  ];

  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ color: "#059669", fontSize: "28px", fontWeight: "bold" }}>
        HYGIENE HUB SOLUTIONS
      </h1>

      <h2 style={{ fontSize: "42px", marginTop: "40px" }}>
        Elevating Hygiene Standards<br />With Confidence
      </h2>

      <p style={{ marginTop: "16px", color: "#9ca3af" }}>
        Premium cosmetics and beauty essentials for women.
      </p>

      <div style={{ marginTop: "60px" }}>
        <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>Best Sellers</h3>
        {products.map((p, i) => (
          <div key={i} style={{ marginBottom: "16px" }}>
            <strong>{p.name}</strong> — {p.price} {"★".repeat(p.rating)}
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/27714797830"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#059669",
          color: "white",
          padding: "14px 20px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
