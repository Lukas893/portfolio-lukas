export const PROFILE = {
  brandName: "LUKAS MACEDO",
  fullName: "Lukas Fonseca Figueiredo Macedo",
  role: "Engenharia de Software · Back-end & Automação",
  location: "Anápolis - GO",
  status: "DISPONÍVEL PARA PROJETOS E OPORTUNIDADES",
  email: "lukas12062019@gmail.com",
  whatsappNumber: "5562993698573",
  whatsappDisplay: "(62) 99369-8573",
  github: "https://github.com/Lukas893",
  linkedin: "https://www.linkedin.com/in/lukasmacedo",
  resumePath: "/curriculo.pdf",
  getWhatsAppUrl: (message: string) =>
    `https://wa.me/5562993698573?text=${encodeURIComponent(message)}`,
} as const;