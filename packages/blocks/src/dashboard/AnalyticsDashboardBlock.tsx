import React from 'react'
import { AppShell } from '@chariot/depot-web-radix'
import { Card } from '@chariot/depot-web-radix'
import { Tabs } from '@chariot/depot-web-radix'

interface Metric {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface AnalyticsDashboardBlockProps {
  metrics?: Metric[]
  children?: React.ReactNode
}

export function AnalyticsDashboardBlock({ metrics = [], children }: AnalyticsDashboardBlockProps): React.ReactElement {
  const tabs = [
    { id: 'overview', label: 'Overview', content: (
      <div className="depot-block-dashboard__grid">
        {metrics.map((metric, i) => (
          <Card key={i} className="depot-block-dashboard__metric">
            <div className="depot-block-dashboard__metric-label">{metric.label}</div>
            <div className="depot-block-dashboard__metric-value">{metric.value}</div>
            {metric.change && (
              <div className={`depot-block-dashboard__metric-change depot-block-dashboard__metric-change--${metric.trend ?? 'neutral'}`}>
                {metric.change}
              </div>
            )}
          </Card>
        ))}
      </div>
    )},
    { id: 'details', label: 'Details', content: children ?? <p>Select a metric for details.</p> },
  ]

  return (
    <AppShell header={<h1>Dashboard</h1>}>
      <div className="depot-block-dashboard">
        <Tabs items={tabs} />
      </div>
    </AppShell>
  )
}
