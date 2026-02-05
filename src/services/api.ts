// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// export interface Attorney {
//   id: number;
//   name: string;
//   role: string;
//   specialty: string;
//   bio: string;
//   image: string | null;
//   is_active: boolean;
// }

// export interface ContactFormData {
//   name: string;
//   email: string;
//   phone?: string;
//   message: string;
// }

// export const api = {
//   async getAttorneys(): Promise<Attorney[]> {
//     const response = await fetch(`${API_URL}/api/attorneys/`);
//     if (!response.ok) throw new Error('Failed to fetch attorneys');
//     return response.json();
//   },

//   async submitContact(data: ContactFormData): Promise<void> {
//     const response = await fetch(`${API_URL}/api/contact/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) throw new Error('Failed to submit contact form');
//     return response.json();
//   },
// };


// src/services/api.ts

// Since we are now using Next.js internal API, we don't need a hardcoded http://localhost:8000
// We can just use relative paths.

export const fetchAttorneys = async () => {
  try {
    const response = await fetch('/api/attorneys', {
      cache: 'no-store' // Ensure we get fresh data
    });
    if (!response.ok) throw new Error('Failed to fetch attorneys');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const submitContactForm = async (data: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
  
  return await response.json();
};