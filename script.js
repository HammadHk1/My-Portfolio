document.addEventListener('DOMContentLoaded', () => {
  const headerName = document.getElementById("header-name");
  const originalText = headerName.textContent || 'Hammad Khalid ... '; // Fallback text
  let i = 0;
  const speed = 50; // Typing speed in ms
  
  // Clear existing text before animation
  headerName.textContent = '';
  
  async function typeWriter() {
    if (i < originalText.length) {
      headerName.textContent += originalText.charAt(i);
      i++;
      await new Promise(resolve => setTimeout(resolve, speed));
      typeWriter();
    }
  }
  
  // Start the effect
  typeWriter();
});