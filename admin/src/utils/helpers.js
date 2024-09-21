export function decodeHtmlEntities(str) {
    if (typeof str !== 'string') return str;
    
    return str.replace(/&amp;/g, '&')
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'");
  }