export interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

export interface ToastContextType {
  showToast: (
    message: string,
    type: ToastProps['type'],
    duration?: number
  ) => void;
}
