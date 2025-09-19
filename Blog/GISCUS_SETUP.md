# Giscus Comments Setup Guide

This guide will help you set up Giscus comments for your blog posts.

## Prerequisites

1. **Enable GitHub Discussions** on your repository:
   - Go to your repository: `https://github.com/Devansh-Mahajan/My-Website`
   - Click on "Settings" tab
   - Scroll down to "Features" section
   - Check "Discussions" checkbox
   - Click "Set up discussions"

2. **Install Giscus App**:
   - Go to [Giscus App](https://github.com/apps/giscus)
   - Click "Install"
   - Select your repository (`Devansh-Mahajan/My-Website`)
   - Click "Install" to authorize the app

## Configuration Steps

1. **Get Repository ID and Category ID**:
   - Go to [Giscus Configuration](https://giscus.app)
   - Enter your repository: `Devansh-Mahajan/My-Website`
   - Select a category for discussions (e.g., "General")
   - Choose your preferred settings
   - Copy the generated configuration values

2. **Update Configuration**:
   - Open `src/config/giscus.ts`
   - Replace the empty `repoId` with your repository ID
   - Replace the empty `categoryId` with your category ID
   - Save the file

## Example Configuration

```typescript
export const GISCUS_CONFIG = {
  repo: "Devansh-Mahajan/My-Website",
  repoId: "R_kgDO...", // Your actual repository ID
  category: "General",
  categoryId: "DIC_kwDO...", // Your actual category ID
  // ... rest of config
} as const;
```

## Features

- ✅ **Automatic Theme Detection**: Comments will match your site's light/dark theme
- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Optional Comments**: You can disable comments on specific posts by adding `enable_comments: false` to the frontmatter
- ✅ **GitHub Integration**: Comments are stored as GitHub Discussions
- ✅ **Moderation**: You can moderate comments through GitHub Discussions

## Usage in Blog Posts

Comments are automatically enabled on all blog posts. To disable comments on a specific post, add this to the frontmatter:

```yaml
---
title: "Your Blog Post"
# ... other frontmatter
enable_comments: false
---
```

## Customization

You can customize the Giscus appearance and behavior by modifying the settings in `src/config/giscus.ts`:

- **Theme**: Change the `theme` property to match your site's design
- **Language**: Modify the `lang` property for different languages
- **Mapping**: Change how posts are mapped to discussions
- **Reactions**: Enable/disable reaction buttons

## Troubleshooting

1. **Comments not showing**: Make sure you've completed the setup steps and the repository ID and category ID are correctly configured.

2. **"Comments Coming Soon" message**: This means Giscus isn't configured yet. Follow the setup steps above.

3. **Styling issues**: The comments should automatically match your site's theme. If not, check the CSS in `src/components/Giscus.astro`.

## Support

For more information, visit the [Giscus Documentation](https://giscus.app) or check the [GitHub Repository](https://github.com/giscus/giscus).
