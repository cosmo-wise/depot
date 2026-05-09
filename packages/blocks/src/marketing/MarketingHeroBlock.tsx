import React from 'react'
import { Button } from '@chariot/depot-web-radix'

export interface MarketingHeroBlockProps {
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  background?: 'light' | 'dark' | 'brand'
}

export function MarketingHeroBlock({
  title,
  subtitle,
  ctaLabel = 'Get Started',
  ctaHref,
  onCtaClick,
  background = 'light',
}: MarketingHeroBlockProps): React.ReactElement {
  return (
    <section className={`depot-block-hero depot-block-hero--${background}`}>
      <div className="depot-block-hero__content">
        <h1 className="depot-block-hero__title">{title}</h1>
        {subtitle && <p className="depot-block-hero__subtitle">{subtitle}</p>}
        <div className="depot-block-hero__actions">
          {ctaHref ? (
            <a href={ctaHref} className="depot-btn depot-btn--primary depot-btn--lg">{ctaLabel}</a>
          ) : (
            <Button variant="primary" size="lg" onClick={onCtaClick}>{ctaLabel}</Button>
          )}
        </div>
      </div>
    </section>
  )
}
