const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Attorney {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string | null;
  is_active: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const api = {
  async getAttorneys(): Promise<Attorney[]> {
    const response = await fetch(`${API_URL}/api/attorneys/`);
    if (!response.ok) throw new Error('Failed to fetch attorneys');
    return response.json();
  },

  async submitContact(data: ContactFormData): Promise<void> {
    const response = await fetch(`${API_URL}/api/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to submit contact form');
    return response.json();
  },
};