export interface ButtonConfig {
  type: 'primary' | 'success' | 'danger' | 'warning';
  label: string;
  onClick: () => void;
}
