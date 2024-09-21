const emailInput = // найдите элементы с помощью getElement или аналогии
const errorMessage =
const submitBtn =
emailInput.addEventListener('input', function() {
const emailValue = emailInput.value;
// Пример простого регулярного выражения для проверки email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
// Отобразите сообщение об ошибке и заблокируйте кнопку
} else {
// Скрывайте сообщение об ошибке и разблокируйте кнопку
}
});
