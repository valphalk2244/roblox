"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (password !== confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน");
      return;
    }

    setError(null);

    // ส่งข้อมูลไปที่ API หรือทำการสมัคร
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push("/login"); // หลังจากสมัครเสร็จให้ไปหน้า Login
    } else {
      setError("เกิดข้อผิดพลาดในการสมัคร");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f0f0" }}>
      <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>สมัครสมาชิก</h1>   
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name" style={{ marginBottom: "0.5rem", color: "#555" }}>ชื่อ</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email" style={{ marginBottom: "0.5rem", color: "#555" }}>อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="password" style={{ marginBottom: "0.5rem", color: "#555" }}>รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="confirmPassword" style={{ marginBottom: "0.5rem", color: "#555" }}>ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>

          <button type="submit" style={{ padding: "0.75rem", borderRadius: "4px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>สมัครสมาชิก</button>
        </form>
      </div>
    </div>
  );
}
