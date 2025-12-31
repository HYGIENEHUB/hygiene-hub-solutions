export default function HygieneHubSolutions() {

  const products = [
    {
      name: "Healing Facial Cleanser – Moringa & Hemp Oil",
      price: "R250",
      image: "/moringa-cleanser.png",
      message: "Hello Hygiene Hub Solutions, I would like to order: Healing Facial Cleanser – Moringa & Hemp Oil (R250)"
    },
    {
      name: "Toner for Clear & Glowing Skin – Licorice Root & Niacinamide",
      price: "R230",
      image: "/licorice-toner.png",
      message: "Hello Hygiene Hub Solutions, I would like to order: Toner for Clear & Glowing Skin – Licorice Root & Niacinamide (R230)"
    },
    {
      name: "Skin Lightening Foaming Facial Cleanser – Kojic Acid & Niacinamide",
      price: "R250",
      image: "/kojic-cleanser.png",
      message: "Hello Hygiene Hub Solutions, I would like to order: Skin Lightening Foaming Facial Cleanser – Kojic Acid & Niacinamide (R250)"
    }
  ];

  return (
    <div style={{ background:"#000", color:"#fff", minHeight:"100vh", padding:"40px" }}>
      <h1 style={{ color:"#10b981", fontSize:"30px", fontWeight:"bold" }}>HYGIENE HUB SOLUTIONS</h1>
      <h2 style={{ fontSize:"40px", marginTop:"20px" }}>
        SKINCARE COLLECTION<br/>
        <span style={{ color:"#10b981" }}>ORDER VIA WHATSAPP</span>
      </h2>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"25px", marginTop:"40px" }}>
        {products.map((p,i)=>(
          <div key={i} style={{ background:"#111", borderRadius:"20px", padding:"15px", border:"1px solid #064e3b" }}>
            <img src={p.image} style={{ width:"100%", height:"220px", objectFit:"cover", borderRadius:"15px" }} />
            <h3 style={{ marginTop:"12px" }}>{p.name}</h3>
            <p style={{ color:"#10b981", fontWeight:"bold" }}>{p.price}</p>
            <a
              href={`https://wa.me/27714797830?text=${encodeURIComponent(p.message)}`}
              target="_blank"
              style={{
                display:"block",
                marginTop:"10px",
                background:"#10b981",
                color:"#fff",
                padding:"10px",
                textAlign:"center",
                borderRadius:"20px",
                textDecoration:"none"
              }}
            >
              ORDER ON WHATSAPP
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
