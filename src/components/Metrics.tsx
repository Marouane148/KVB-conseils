import React, { useEffect, useState } from 'react';

const MetricCounter = ({ end, duration, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));
      
      if (percentage < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-kvb-primary mb-2">{count}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-20 bg-kvb-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCounter end={14} duration={2000} label="ans d'expertise" />
          <MetricCounter end={17.5} duration={2000} label="M€ CA (2023)" />
          <MetricCounter end={50} duration={2000} label="collaborateurs" />
          <MetricCounter end={3500} duration={2000} label="clients" />
        </div>
      </div>
    </section>
  );
};

export default Metrics;