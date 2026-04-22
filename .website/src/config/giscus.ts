// Giscus Configuration
// Get these values from https://giscus.app

export const GISCUS_CONFIG = {
  // Your GitHub repository (format: owner/repo)
  repo: "Devansh-Mahajan/My-Website",
  
  // Repository ID - get this from https://giscus.app
  repoId: "R_kgDOPqbWvQ",
  
  // Category for discussions
  category: "General",
  
  // Category ID - get this from https://giscus.app
  categoryId: "DIC_kwDOPqbWvc4CvpmZ",
  
  // How to map the page to a discussion
  mapping: "pathname", // Options: pathname, url, title, og:title
  
	// Theme for the comments - will be dynamically updated by theme sync script
	theme: "light", // Options: light, dark, dark_dimmed, transparent_dark, preferred_color_scheme, custom
  
  // Enable reactions
  reactionsEnabled: "1", // "1" or "0"
  
  // Emit metadata
  emitMetadata: "0", // "1" or "0"
  
  // Strict mode
  strict: "0", // "1" or "0"
  
  // Input position
  inputPosition: "bottom", // Options: top, bottom
  
  // Language
  lang: "en", // Options: en, es, fr, pl, ro, ru, uk, zh-CN, zh-TW, ko, ja, id, it, pt, tr, de, nl, vi, no, sv, da, fi, cs, hu, bg, hr, th, ca, sk, sl, et, lt, lv, fi
  
  // Loading strategy
  loading: "lazy", // Options: eager, lazy
} as const;

// Helper function to get Giscus configuration
export function getGiscusConfig() {
  return GISCUS_CONFIG;
}

// Helper function to check if Giscus is properly configured
export function isGiscusConfigured(): boolean {
  return !!(GISCUS_CONFIG.repoId && GISCUS_CONFIG.categoryId);
}
