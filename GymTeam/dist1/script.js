const mailAttachmentInput = document.querySelector('.mail-attachment-input');
const mailAttachmentWrapper = document.querySelector('.mail-attachment-wrapper');
const mailAttachmentContainer = document.querySelector('.mail-attachment-container');
const mailAttachmentImage = document.querySelector('.mail-attachment-image');
const mailAttachmentExtension = document.querySelector('.mail-attachment-extension');
const mailAttachmentRemoveButton = document.querySelector('.mail-attachment-remove-button');
const mailPaperclipFront = document.querySelector('.mail-paperclip.front');
const mailPaperclipBack = document.querySelector('.mail-paperclip.back');

const removeImage = () => {
  mailAttachmentImage.classList.add('hidden');
  mailAttachmentImage.src = '';
}

mailAttachmentInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  
  mailAttachmentRemoveButton.classList.remove('hidden');
  mailAttachmentInput.classList.add('hidden');
  mailAttachmentContainer.classList.add('filled');
  
  reader.addEventListener('load', (e) => {
    mailAttachmentImage.src = e.target.result;
    mailAttachmentImage.classList.remove('hidden');
    mailAttachmentWrapper.classList.remove('hidden');
    mailPaperclipFront.classList.remove('hidden');
    mailPaperclipBack.classList.remove('hidden');
  });

  if (file.type.startsWith('image/') || file.type === 'application/pdf') {
    mailAttachmentExtension.classList.add('hidden');
    reader.readAsDataURL(e.target.files[0]);
  } else {
    removeImage();
    mailAttachmentWrapper.classList.remove('hidden');
    mailPaperclipFront.classList.remove('hidden');
    mailPaperclipBack.classList.remove('hidden');
    const fileExtension = file.name.split('.').pop().toUpperCase();
    mailAttachmentExtension.textContent = `.${fileExtension}`;
    mailAttachmentExtension.classList.remove('hidden');
  }
});

mailAttachmentRemoveButton.addEventListener('click', () => {
  mailAttachmentInput.classList.remove('hidden');
  mailAttachmentRemoveButton.classList.add('hidden');
  mailAttachmentWrapper.classList.add('hidden');
    mailAttachmentContainer.classList.remove('filled');
  mailPaperclipFront.classList.add('hidden');
  mailPaperclipBack.classList.add('hidden');
  mailAttachmentWrapper.addEventListener('transitionend', () => {
    mailAttachmentInput.value = '';
    removeImage();
  }, { once: true });
});

mailAttachmentInput.addEventListener('dragenter', () => {
  mailAttachmentContainer.classList.add('drag-over');
});

mailAttachmentInput.addEventListener('dragleave', () => {
  mailAttachmentContainer.classList.remove('drag-over');
});

mailAttachmentInput.addEventListener('drop', () => {
  console.log('test')
  mailAttachmentContainer.classList.remove('drag-over');
});