'use client';

import { getBadgeConfig } from '@/hooks/usePostBadges';

export default function Badge({ type, locale = 'en', className = '' }) {
  if (!type) return null;

  const config = getBadgeConfig(type, locale);
  if (!config) return null;

  const { icon: IconComponent, colors, labels } = config;
  const label = labels[locale] || labels.en;

  return (
    <div
      className={`
        inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full 
        ${colors.bg} ${colors.text} ${colors.border} border
        shadow-sm whitespace-nowrap
        ${className}
      `}
    >
      <IconComponent className="w-3 h-3" />
      <span>{label}</span>
    </div>
  );
}

// Componente Badge posicionado para cards (esquina superior derecha)
export function CardBadge({ type, locale = 'en', className = '' }) {
  if (!type) return null;

  return (
    <div className={`absolute top-2 right-2 z-10 ${className}`}>
      <Badge type={type} locale={locale} />
    </div>
  );
}

// Componente Badge inline para listas o títulos
export function InlineBadge({ type, locale = 'en', className = '' }) {
  if (!type) return null;

  return (
    <Badge 
      type={type} 
      locale={locale} 
      className={`ml-2 ${className}`} 
    />
  );
}

// Hook para verificar si un badge debe mostrarse
export function shouldShowBadge(badge) {
  // Podemos agregar lógica aquí para decidir cuándo mostrar badges
  // Por ejemplo, solo mostrar si tiene suficiente confidence, etc.
  return badge && badge.type;
}