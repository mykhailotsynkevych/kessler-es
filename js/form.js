(() => {
    const refs = {
        form: document.querySelector("[data-form]"), // Исправленный селектор
    };

    refs.form.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращает реальную отправку формы, чтобы можно было увидеть вывод в консоль

        // Получение значений полей
        const name = refs.form.querySelector('[name="name"]').value;
        const tel = refs.form.querySelector('[name="tel"]').value;
        const mail = refs.form.querySelector('[name="mail"]').value;
        const comment = refs.form.querySelector('[name="comment"]').value;
        const checkbox = refs.form.querySelector('[name="checkbox"]').checked; // true или false

        // Вывод значений в консоль
        console.log(`Name: ${name}`);
        console.log(`Telefon: ${tel}`);
        console.log(`E-Mail: ${mail}`);
        console.log(`Nachricht: ${comment}`);
        console.log(`Checkbox agreement: ${checkbox}`);
    });

})();