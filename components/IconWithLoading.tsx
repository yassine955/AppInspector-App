import { useEffect, useState } from 'react';

export default function IconWithLoading({ appId }: { appId: number }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const iconUrl = `/api/icon/${appId}`;

  return (
    <div className="w-10 h-10 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-blue-500 border-opacity-50"></div>
        </div>
      )}
      <img
        src={iconUrl}
        alt="App icon"
        className={`w-10 h-10 rounded-md object-cover ${isLoading ? 'invisible' : 'visible'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-red-400">
          ❌
        </div>
      )}
    </div>
  );
}
