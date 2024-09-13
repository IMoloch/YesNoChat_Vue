export {}

declare global {
  interface ChatMessage {
    sender: string
    message: string
    image?: string
  }
}
