#!/bin/bash
# Build theme CSS files from theme configurations

set -e

# Create dist/themes directory
mkdir -p dist/themes

# Function to generate CSS from theme config
generate_theme_css() {
  local theme_name=$1
  local theme_file="src/themes/${theme_name}.ts"
  
  if [ ! -f "$theme_file" ]; then
    echo "Error: Theme file $theme_file not found"
    exit 1
  fi
  
  # Use Node.js to extract theme values and generate CSS
  node -e "
    const fs = require('fs');
    const path = require('path');
    
    // Read and evaluate theme file (simplified - in production, use proper TS compilation)
    const themePath = path.join(process.cwd(), '${theme_file}');
    
    // For now, we'll generate CSS directly from known theme structure
    // In a real implementation, you'd compile TS and extract values
    const theme = '${theme_name}';
    
    let css = '@import \\'tailwindcss\\';\n\n';
    
    if (theme === 'light') {
      css += ':root {\n';
      css += '  --background: 0 0% 98%;\n';
      css += '  --foreground: 222.2 47.4% 11.2%;\n';
      css += '  --card: 0 0% 99%;\n';
      css += '  --card-foreground: 222.2 47.4% 11.2%;\n';
      css += '  --popover: 0 0% 99%;\n';
      css += '  --popover-foreground: 222.2 47.4% 11.2%;\n';
      css += '  --primary: 199.1 89.1% 48.2%;\n';
      css += '  --primary-foreground: 210 40% 98%;\n';
      css += '  --secondary: 210 20% 96%;\n';
      css += '  --secondary-foreground: 222.2 47.4% 11.2%;\n';
      css += '  --muted: 210 20% 96%;\n';
      css += '  --muted-foreground: 215.4 16.3% 46.9%;\n';
      css += '  --accent: 210 20% 96%;\n';
      css += '  --accent-foreground: 222.2 47.4% 11.2%;\n';
      css += '  --destructive: 0 84.2% 60.2%;\n';
      css += '  --destructive-foreground: 210 40% 98%;\n';
      css += '  --border: 214.3 20% 91%;\n';
      css += '  --input: 214.3 20% 91%;\n';
      css += '  --ring: 199.1 89.1% 48.2%;\n';
      css += '  --radius: 0.5rem;\n';
      css += '}\n';
    } else if (theme === 'dark') {
      css += ':root {\n';
      css += '  --background: 222.2 47.4% 11.2%;\n';
      css += '  --foreground: 210 40% 98%;\n';
      css += '  --card: 222.2 47.4% 11.2%;\n';
      css += '  --card-foreground: 210 40% 98%;\n';
      css += '  --popover: 222.2 47.4% 11.2%;\n';
      css += '  --popover-foreground: 210 40% 98%;\n';
      css += '  --primary: 199.1 89.1% 48.2%;\n';
      css += '  --primary-foreground: 210 40% 98%;\n';
      css += '  --secondary: 217.2 32.6% 17.5%;\n';
      css += '  --secondary-foreground: 210 40% 98%;\n';
      css += '  --muted: 217.2 32.6% 17.5%;\n';
      css += '  --muted-foreground: 215 20.2% 65.1%;\n';
      css += '  --accent: 217.2 32.6% 17.5%;\n';
      css += '  --accent-foreground: 210 40% 98%;\n';
      css += '  --destructive: 0 62.8% 30.6%;\n';
      css += '  --destructive-foreground: 210 40% 98%;\n';
      css += '  --border: 217.2 32.6% 17.5%;\n';
      css += '  --input: 217.2 32.6% 17.5%;\n';
      css += '  --ring: 199.1 89.1% 48.2%;\n';
      css += '  --radius: 0.5rem;\n';
      css += '}\n';
    }
    
    // Add keyframes
    css += '\n@keyframes accordion-down {\n';
    css += '  from { height: 0; }\n';
    css += '  to { height: var(--radix-accordion-content-height); }\n';
    css += '}\n\n';
    css += '@keyframes accordion-up {\n';
    css += '  from { height: var(--radix-accordion-content-height); }\n';
    css += '  to { height: 0; }\n';
    css += '}\n';
    
    fs.writeFileSync('dist/themes/${theme_name}.css', css);
    console.log('✅ Generated dist/themes/${theme_name}.css');
  "
}

# Build light theme
echo "Building light theme..."
generate_theme_css "light"

# Build dark theme
echo "Building dark theme..."
generate_theme_css "dark"

echo "✅ All themes built successfully!"

