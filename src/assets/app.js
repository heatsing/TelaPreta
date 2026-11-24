const tool = document.querySelector('#tool');
const swatches = [...tool.querySelectorAll('[data-color]')];
const downloadButton = document.querySelector('#download');
const resolution = document.querySelector('#resolution');
const feedback = document.querySelector('#feedback');
const hex = document.querySelector('#hex');
const language = document.querySelector('.language');
const colorPicker = document.querySelector('#custom-color');
const hexInput = document.querySelector('#color-hex');
const hexError = document.querySelector('#color-hex-error');
let currentColor = swatches[Number(tool.dataset.initial)].dataset.color;

function showHexError(visible) {
  if (visible) hexInput.setAttribute('aria-invalid', 'true');
  else hexInput.removeAttribute('aria-invalid');
  hexError.hidden = !visible;
}

function setColor(color, updateHex = true) {
  currentColor = color;
  hex.textContent = color;
  tool.style.setProperty('--screen', color);
  const pickerColor = color.toLowerCase();
  if (colorPicker.value !== pickerColor) colorPicker.value = pickerColor;
  if (updateHex) hexInput.value = color;
  feedback.textContent = '';
  showHexError(false);
  for (const swatch of swatches) {
    const match = swatch.dataset.color === color;
    if (swatch.tagName === 'BUTTON') swatch.setAttribute('aria-pressed', String(match));
    else if (match) swatch.setAttribute('aria-current', 'true');
    else swatch.removeAttribute('aria-current');
  }
}

function parseHex(text, allowShort = false) {
  const digits = text.trim().replace(/^#/, '').toUpperCase();
  if (/^[0-9A-F]{6}$/.test(digits)) return '#' + digits;
  if (allowShort && /^[0-9A-F]{3}$/.test(digits)) {
    return '#' + Array.from(digits, (digit) => digit + digit).join('');
  }
  return null;
}

function commitHex() {
  const color = parseHex(hexInput.value, true);
  if (!color) {
    showHexError(true);
    return false;
  }
  if (color !== currentColor || hexInput.value !== color) setColor(color);
  return true;
}

for (const swatch of swatches) {
  if (swatch.tagName === 'BUTTON') {
    swatch.addEventListener('click', () => setColor(swatch.dataset.color));
  }
}

for (const eventName of ['input', 'change']) {
  colorPicker.addEventListener(eventName, () => setColor(colorPicker.value.toUpperCase()));
}

hexInput.addEventListener('input', () => {
  const color = parseHex(hexInput.value);
  if (color) setColor(color, false);
  else {
    feedback.textContent = '';
    showHexError(false);
  }
});
hexInput.addEventListener('blur', commitHex);
hexInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') commitHex();
  if (event.key === 'Escape') setColor(currentColor);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && language.open) {
    language.open = false;
    language.querySelector('summary').focus();
  }
});

document.addEventListener('click', (event) => {
  if (language.open && !language.contains(event.target)) language.open = false;
});

downloadButton.addEventListener('click', async () => {
  if (!commitHex()) {
    hexInput.focus();
    return;
  }
  const [width, height] = resolution.value.split('x').map(Number);
  const color = currentColor;
  const fileName = `telapreta-${color.slice(1).toLowerCase()}-${width}x${height}.png`;
  downloadButton.disabled = true;
  feedback.textContent = '';
  const canvas = document.createElement('canvas');
  try {
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Canvas unavailable');
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
    const png = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!png) throw new Error('PNG unavailable');
    const url = URL.createObjectURL(png);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    feedback.textContent = feedback.dataset.ready;
  } catch {
    feedback.textContent = feedback.dataset.failed;
  } finally {
    canvas.width = 0;
    canvas.height = 0;
    downloadButton.disabled = false;
  }
});
