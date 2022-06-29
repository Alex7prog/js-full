// Context binding, bind()

export const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    // setTimeout(this.showPrompt, ms); // потеря контекста (теряется message)

    // чтобы не терять контекст
    // 1й вариант56
    // setTimeout(() => this.showPrompt(), ms);
    // 2й вариант
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
