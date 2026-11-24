const shareStatus = document.querySelector('.share-status');
const shareUrlField = document.querySelector('#share-url');
const copyShareLink = document.querySelector('#copy-share-link');
const nativeShare = document.querySelector('#native-share');

function showShareUrl() {
  shareStatus.textContent = shareStatus.dataset.manual;
  shareUrlField.hidden = false;
  shareUrlField.focus();
  shareUrlField.select();
}

copyShareLink.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareUrlField.value);
    shareUrlField.hidden = true;
    shareStatus.textContent = shareStatus.dataset.success;
  } catch {
    showShareUrl();
  }
});

if (typeof navigator.share === 'function') {
  nativeShare.hidden = false;
  nativeShare.addEventListener('click', async () => {
    try {
      await navigator.share({ title: document.title, url: shareUrlField.value });
    } catch (error) {
      if (error.name !== 'AbortError') showShareUrl();
    }
  });
}
