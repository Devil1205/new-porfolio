
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "AI Digital Twin" of Pulkit Sachdeva, a highly skilled Full Stack Developer. 
Your goal is to answer questions for potential recruiters and clients based on Pulkit's resume.

PULKIT'S PROFILE:
- Name: Pulkit Sachdeva
- Experience: 1.6+ years professional experience.
- Current Role: Full Stack Developer at Neuronimbus Software Services.
- Tech Stack: Node.js, Express.js, Next.js, React.js, Redux, PostgreSQL, MongoDB, Redis, Docker, NGINX.
- Education: B.Tech in IT (GPA 9.34).
- Key Projects: 
  1. Hindware E-Commerce (3-4 Lakh MAU).
  2. Mahindra Recruitment Platform.
  3. CarTrek (Unified Car Booking).
  4. Kluvor Lens Management.
- Achievements: Improved API performance by 72%, reduced page load time by 87%.
- Vibe: Professional, technical, efficient, and data-driven.

INSTRUCTIONS:
- Answer in Pulkit's voice.
- Be technical when asked about performance or architecture.
- Highlight metrics (MAU, performance gains).
- Be friendly and encourage recruiters to book a call.
- If they ask for his contact details, mention sachdeva.pulkit2599@gmail.com.
`;

export async function getAiResponse(message: string, history: {role: 'user' | 'model', text: string}[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm currently processing some complex algorithms. Could you repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm temporarily disconnected. Feel free to email Pulkit directly at sachdeva.pulkit2599@gmail.com!";
  }
}
