// lib/local-image.ts
export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }
  
  export function saveImageBase64(key: string, base64: string) {
    localStorage.setItem(key, base64)
  }
  
  export function loadImageBase64(key: string): string | null {
    return localStorage.getItem(key)
  }
  