// Обработчик сообщений
chrome.runtime.onMessage.addListener(request => {
	if (request.action === 'runRokiClick') {
		Rokiclick()
	}
})

// Функция для нажатия на элемент с заданным текстом и классами
function Rokiclick() {
	// Ищем все элементы с нужными классами
	const elements = Array.from(
		document.querySelectorAll(
			'div.flex.truncate.items-center.justify-center.w-full'
		)
	)
	// Ищем элемент, содержащий текст "Показать ещё "
	const element = elements.find(el => el.textContent.includes('Показать ещё '))
	// Проверяем наличие текста
	if (element) {
		// Нажимаем на элемент
		element.click()
		// Повторяем действие через ... секунду
		setTimeout(Rokiclick, 100)
	} else {
		console.log(':(')
	}
}

// Запускаем функцию после полной загрузки страницы с задержкой в ... секунду
window.addEventListener('keydown', event => {
	if (event.key === 'PageUp') {
		setTimeout(Rokiclick, 200) // Ждем ... секунд перед запуском функции
	}
})
