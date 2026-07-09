import api from "./api";

export async function askCopilot(prompt: string) {
  const response = await api.post("/copilot", {
    prompt,
  });

  return response.data;
}