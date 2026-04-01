import React from 'react';

const AnimatedLogo = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 420 80"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="truckGradAnim" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="cabGradAnim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Company Name - Left 2/3 */}
      <text x="5" y="40" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="42" fill="white">
        Sri Tejaswini
      </text>
      <text x="5" y="66" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="22" fill="#10b981">
        Packers &amp; Movers
      </text>
      <text x="5" y="78" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8">
        Safe &amp; Reliable Relocation Services
      </text>

      {/* Truck with People - Right 1/3 */}
      {/* Ground Line */}
      <line x1="260" y1="72" x2="420" y2="72" stroke="#94a3b8" strokeWidth="1.5" />

      {/* Dotted path */}
      <line x1="260" y1="76" x2="320" y2="76" stroke="#10b981" strokeWidth="1" strokeDasharray="4,2" opacity="0.5" />

      {/* Truck Body */}
      <rect x="310" y="28" width="80" height="32" rx="3" fill="url(#truckGradAnim)" />
      
      {/* Truck Cargo Lines */}
      <line x1="325" y1="32" x2="325" y2="56" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="345" y1="32" x2="345" y2="56" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="365" y1="32" x2="365" y2="56" stroke="white" strokeWidth="0.8" opacity="0.3" />
      <line x1="385" y1="32" x2="385" y2="56" stroke="white" strokeWidth="0.8" opacity="0.3" />
      
      {/* Truck Back */}
      <rect x="390" y="33" width="2" height="24" fill="#047857" />
      
      {/* Truck Cabin */}
      <rect x="390" y="36" width="22" height="20" rx="2" fill="url(#cabGradAnim)" />
      
      {/* Truck Window */}
      <rect x="395" y="39" width="12" height="9" rx="1.5" fill="#a7f3d0" opacity="0.8" />
      
      {/* Truck Wheels */}
      <circle cx="328" cy="62" r="6" fill="#1e293b" />
      <circle cx="328" cy="62" r="3" fill="#64748b" />
      <circle cx="400" cy="62" r="6" fill="#1e293b" />
      <circle cx="400" cy="62" r="3" fill="#64748b" />

      {/* Person 1 - Walking toward truck */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 50,0; 50,0; 0,0" dur="3s" repeatCount="indefinite" />
        <circle cx="275" cy="40" r="4" fill="#fbbf24" />
        <line x1="275" y1="44" x2="275" y2="54" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <line x1="275" y1="47" x2="270" y2="51" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="270;274;270" dur="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="275" y1="47" x2="280" y2="51" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="280;276;280" dur="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="275" y1="54" x2="271" y2="68" stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x2" values="271;277;271" dur="0.4s" repeatCount="indefinite" />
        </line>
        <line x1="275" y1="54" x2="279" y2="68" stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x2" values="279;273;279" dur="0.4s" repeatCount="indefinite" />
        </line>
        <rect x="268" y="48" width="6" height="5" rx="1" fill="#f59e0b" />
      </g>

      {/* Person 2 - Walking toward truck */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 40,0; 40,0; 0,0" dur="3.5s" repeatCount="indefinite" />
        <circle cx="290" cy="42" r="3.5" fill="#f9a8d4" />
        <line x1="290" y1="45.5" x2="290" y2="54" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="290" y1="48" x2="286" y2="52" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="286;290;286" dur="0.45s" repeatCount="indefinite" />
        </line>
        <line x1="290" y1="48" x2="294" y2="52" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round">
          <animate attributeName="x2" values="294;290;294" dur="0.45s" repeatCount="indefinite" />
        </line>
        <line x1="290" y1="54" x2="286" y2="68" stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x2" values="286;292;286" dur="0.45s" repeatCount="indefinite" />
        </line>
        <line x1="290" y1="54" x2="294" y2="68" stroke="#1e293b" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x2" values="294;288;294" dur="0.45s" repeatCount="indefinite" />
        </line>
      </g>
    </svg>
  );
};

export default AnimatedLogo;
