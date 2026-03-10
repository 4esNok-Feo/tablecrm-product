export const saveDraft = (data: any) => {
  localStorage.setItem("product_draft", JSON.stringify(data))
}

export const loadDraft = () => {
  if (typeof window === "undefined") return null

  const draft = localStorage.getItem("product_draft")

  if (!draft) return null

  return JSON.parse(draft)
}