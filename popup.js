document.getElementById('myButton').addEventListener('click', () => {
	// Отправляем сообщение в content script
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, { action: 'runRokiClick' })
	})
    window.close();
})
