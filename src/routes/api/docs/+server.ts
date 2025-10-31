import { json } from "@sveltejs/kit"
import { fetchDocumentationPages } from "../../utils/index.js"

export const GET = async () => {
  const [pages] = await Promise.all([fetchDocumentationPages()])

  return json(pages)
}
