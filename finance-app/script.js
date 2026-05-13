const form = document.getElementById('finance-form');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = document.getElementById('amount').value;
        const message = document.getElementById('message');

        if (amount <= 0) {
            message.textContent = 'Введите корректную сумму';
            return;
        }

        message.textContent = 'Операция успешно сохранена';
        form.reset();
    });
}