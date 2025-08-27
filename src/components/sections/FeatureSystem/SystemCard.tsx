import { CardBaseProps } from './types';

export default function SystemCard({ 
  children, 
  className = "", 
  height,
  padding
}: CardBaseProps) {
  return (
    <div
      className={`flex-1 system-card-base ${className}`}
style={{
        ...(height && { height }),
        ...(padding && { padding }),
      }}
    >
      {children}
    </div>
  );
}