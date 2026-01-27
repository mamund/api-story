module.exports = {
  // Ignore generated or archival content and GitHub templates
  ignores: [
    "**/node_modules/**",
    "history/**",
    "output/**",
    ".github/**"
  ],

  // Lint everything else
  globs: ["**/*.md"],

  // Rule configuration
  config: {
    // Line length: 80 is too strict for docs, 120 is common
    MD013: { line_length: 120 },

    // Duplicate headings: allow the "Symptoms / Correction" pattern under different parents
    MD024: { allow_different_nesting: true },

    // Inline HTML: templates often need placeholder syntax or HTML comments
    // If you want to keep placeholders like <roleName>, you either disable this
    // or change placeholders to backticks.
    MD033: false
  }
};

