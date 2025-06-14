import { BodyComp } from '@/components/Body';
import { SearchEngineComponent } from '@/components/SearchEngine';
import { useEffect, useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <BodyComp results={false}>
        <SearchEngineComponent />
      </BodyComp>
    </div>
  );
}
