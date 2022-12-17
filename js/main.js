function readFile(input) {
    let file = input.files[0];
    if (file.name.slice(-4) !== '.txt') {
        alert ('Используйте только файл .txt!')
        return;
    }
    author = file.name.slice(0, file.name.indexOf('.'));
    title = file.name.slice(file.name.indexOf('.') + 1, file.name.lastIndexOf(' - '));

    let reader = new FileReader();

    reader.readAsText(file, 'windows-1251');

    reader.onload = function() {
        const tomato = 25;        
        let countWords = 0;
        let readingSpeed = [60, 140];
        text = reader.result.slice(reader.result.indexOf('Приятного чтения!') + 17, reader.result.lastIndexOf('Спасибо, что скачали книгу'));
        text = text.replace(/\s{2,}/g, ' ');
        textArr = text.split(' ');
        textArr.forEach(element => {
            if (element.length > 3) {
                countWords++;
            }
        });

        let readTime = document.getElementById("reading-time");
        readTime.innerHTML = `Авторское чтение: <span>${(countWords / readingSpeed[0] / tomato).toFixed(1)}</span> \u{1F345} (${(countWords / readingSpeed[0]).toFixed(1)} мин)<br>`;
        readTime.innerHTML += `Быстрое чтение: <span>${(countWords / readingSpeed[1] / tomato).toFixed(1)}</span> \u{1F345} (${(countWords / readingSpeed[1]).toFixed(1)} мин)`;

        let p = document.getElementById("title");
    
        p.innerHTML = `Автор: <span>${author}</span><br>`;
        p.innerHTML += `Название книги: <span>${title}</span>`;
    };
}
