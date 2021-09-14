const analytics = firebase.analytics()

const mainButton = document.querySelector('.install-button')

mainButton.onclick = () => {
  analytics.logEvent('sign_up')
}
