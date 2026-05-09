# Depot Integration Guide

## For Harness

Configure Harness with depot section:

```yaml
depot:
  enabled: true
  profile: web-radix
  deliveryMode: source-copy
  preferBlocks: true
  tokenPolicy: strict
  compatibilityPolicy: strict
```

Or via `renderAudit.frontendStack`:

```yaml
renderAudit:
  frontendStack:
    uiProfile: web-radix
    deliveryMode: source-copy
    capabilityTier: web-only
```

## For Saddle

```bash
# List available profiles
saddle depot list-profiles

# Inspect a profile
saddle depot inspect web-radix

# Pull depot assets into a project (source-copy mode)
saddle depot pull --profile web-radix --mode source-copy --out ./app

# Sync depot assets into an existing project
saddle depot sync --project ./app

# Verify a profile is complete
saddle depot verify --profile web-radix
```

## For Trial

Add `--profile` to trial commands for surface-aware test selection:

```bash
trial compile --bundle ./bundle --out ./suite --profile web-desktop
trial run --suite ./suite --target http://localhost:4173 --report-dir ./report --profile web-desktop
```

## For Course

Output `uiArchitecture` in product blueprint:

```json
{
  "uiArchitecture": {
    "uiProfile": "web-radix",
    "targetPlatforms": ["web"],
    "deliveryMode": "source-copy",
    "preferredBlocks": ["dashboard.analytics.basic"],
    "forbiddenPatterns": ["inline-raw-color-literals"]
  }
}
```
