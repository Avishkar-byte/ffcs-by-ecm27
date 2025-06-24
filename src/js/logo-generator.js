// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#9C27B0';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add text
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 120px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('ECM27', canvas.width/2, canvas.height/2);

// Convert to base64
const base64 = canvas.toDataURL('image/png');
console.log(base64); // Copy this output to create the image file 