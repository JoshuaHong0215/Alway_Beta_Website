import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface RobustImageProps {
  src: string;
  alt: string;
  className?: string;
  onErrorDisplay?: React.ReactNode; // 커스텀 에러 화면 허용
  onFinalError?: (failedPath: string) => void; // 에러 발생 시 부모에게 알림
}

export const RobustImage: React.FC<RobustImageProps> = ({ 
  src, 
  alt, 
  className, 
  onErrorDisplay,
  onFinalError 
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);

  // 시도할 경로 변형들 (상대경로, 절대경로, 확장자 변경 등)
  const attempts = [
    src,
    `/${src}`, 
    src.replace(/^\//, ''), // 앞의 슬래시 제거 시도
    src.replace('.jpeg', '.jpg'),
    src.replace('.jpg', '.jpeg'),
    src.replace('.png', '.jpg'),
    src.replace('.jpeg', '.png'),
  ];

  const handleError = () => {
    const nextAttempt = attempt + 1;
    if (nextAttempt < attempts.length) {
      console.log(`[Image Retry] Failed: ${currentSrc} -> Trying: ${attempts[nextAttempt]}`);
      setAttempt(nextAttempt);
      setCurrentSrc(attempts[nextAttempt]);
    } else {
      setHasError(true);
      if (onFinalError) onFinalError(src);
    }
  };

  if (hasError) {
    if (onErrorDisplay) return <>{onErrorDisplay}</>;
    
    // 기본 에러 표시 (리스트 등 작은 공간용)
    return (
      <div className={`flex flex-col items-center justify-center bg-white/5 text-gray-500 border border-white/10 ${className}`}>
        <ImageOff size={24} className="mb-2 opacity-50" />
        <span className="text-[10px] font-mono">IMG NOT FOUND</span>
      </div>
    );
  }

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className} 
      onError={handleError}
    />
  );
};