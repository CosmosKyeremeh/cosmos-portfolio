import axios, { AxiosInstance, AxiosError } from 'axios';
import type {
  Project,
  ProjectFormData,
  BlogPost,
  BlogFormData,
  ContactFormData,
  ContactMessage,
  AdminLoginData,
  ApiResponse,
  PaginatedResponse,
  AuthResponse,
  ProjectStats,
  MessageStats,
} from './types';

// ==================== Configuration ====================

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Create Axios instance with default configuration
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// ==================== Interceptors ====================

/**
 * Request Interceptor
 * Attaches authentication token to requests
 */
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 * Handles errors globally
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminToken');
        if (window.location.pathname.startsWith('/admin')) {
          window.location.href = '/admin/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

// ==================== Projects API ====================

export const projectsApi = {
  getAll: async (params?: { featured?: boolean; category?: string; status?: string }) => {
    const response = await apiClient.get<ApiResponse<Project[]>>('/projects', { params });
    return response.data.data || [];
  },

  getFeatured: async () => {
    const response = await apiClient.get<ApiResponse<Project[]>>('/projects/featured');
    return response.data.data || [];
  },

  getById: async (id: string) => {
    const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
    return response.data.data!;
  },

  getStats: async () => {
    const response = await apiClient.get<ApiResponse<ProjectStats>>('/projects/stats');
    return response.data.data!;
  },

  create: async (data: ProjectFormData) => {
    const response = await apiClient.post<ApiResponse<Project>>('/projects', data);
    return response.data.data!;
  },

  update: async (id: string, data: Partial<ProjectFormData>) => {
    const response = await apiClient.put<ApiResponse<Project>>(`/projects/${id}`, data);
    return response.data.data!;
  },

  delete: async (id: string) => {
    await apiClient.delete(`/projects/${id}`);
  },
};

// ==================== Blog API ====================

export const blogApi = {
  getAll: async (page: number = 1, limit: number = 10) => {
    const response = await apiClient.get<PaginatedResponse<BlogPost>>('/blog', {
      params: { page, limit },
    });
    return response.data;
  },

  getBySlug: async (slug: string) => {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/blog/slug/${slug}`);
    return response.data.data!;
  },

  getPopular: async (limit: number = 5) => {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/blog/popular', {
      params: { limit },
    });
    return response.data.data || [];
  },

  getRecent: async (limit: number = 5) => {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/blog/recent', {
      params: { limit },
    });
    return response.data.data || [];
  },

  search: async (query: string) => {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/blog/search', {
      params: { q: query },
    });
    return response.data.data || [];
  },

  // Admin methods
  getAllAdmin: async () => {
    const response = await apiClient.get<ApiResponse<BlogPost[]>>('/blog/admin/all');
    return response.data.data || [];
  },

  getById: async (id: string) => {
    const response = await apiClient.get<ApiResponse<BlogPost>>(`/blog/${id}`);
    return response.data.data!;
  },

  create: async (data: BlogFormData) => {
    const response = await apiClient.post<ApiResponse<BlogPost>>('/blog', data);
    return response.data.data!;
  },

  update: async (id: string, data: Partial<BlogFormData>) => {
    const response = await apiClient.put<ApiResponse<BlogPost>>(`/blog/${id}`, data);
    return response.data.data!;
  },

  delete: async (id: string) => {
    await apiClient.delete(`/blog/${id}`);
  },
};

// ==================== Contact API ====================

export const contactApi = {
  submit: async (data: ContactFormData) => {
    const response = await apiClient.post<ApiResponse<any>>('/contact', data);
    return response.data;
  },

  // Admin methods
  getAll: async () => {
    const response = await apiClient.get<ApiResponse<ContactMessage[]> & { stats: MessageStats }>('/contact');
    return {
      messages: response.data.data || [],
      stats: response.data.stats,
    };
  },

  getById: async (id: string) => {
    const response = await apiClient.get<ApiResponse<ContactMessage>>(`/contact/${id}`);
    return response.data.data!;
  },

  markAsRead: async (id: string) => {
    const response = await apiClient.patch<ApiResponse<ContactMessage>>(`/contact/${id}/read`);
    return response.data.data!;
  },

  markAsReplied: async (id: string) => {
    const response = await apiClient.patch<ApiResponse<ContactMessage>>(`/contact/${id}/replied`);
    return response.data.data!;
  },

  delete: async (id: string) => {
    await apiClient.delete(`/contact/${id}`);
  },
};

// ==================== Auth API ====================

export const authApi = {
  login: async (credentials: AdminLoginData) => {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
    if (response.data.token && typeof window !== 'undefined') {
      localStorage.setItem('adminToken', response.data.token);
    }
    return response.data;
  },

  logout: async () => {
    await apiClient.post('/auth/logout');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
    }
  },

  getMe: async () => {
    const response = await apiClient.get<ApiResponse<Admin>>('/auth/me');
    return response.data.admin!;
  },

  verify: async () => {
    const response = await apiClient.get<ApiResponse<Admin>>('/auth/verify');
    return response.data.admin!;
  },
};

export default apiClient;