const car = document.getElementById("car");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
.then(res => res.json())
.then(data => {
    console.log(data);
    
    // Очищаем контейнер перед заполнением
    car.innerHTML = "";

    data.drinks.forEach(el => {
        // Собираем все заполненные ингредиенты и их меры (от 1 до 15)
        let ingredientsHTML = "";
        for (let i = 1; i <= 15; i++) {
            let ingredient = el[`strIngredient${i}`];
            let measure = el[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredientsHTML += `<li>${ingredient} ${measure ? `- ${measure.trim()}` : ''}</li>`;
            }
        }

        // Вставляем все поля объекта в карточку
        car.innerHTML += `
        <div style="border: 1px solid #ddd; margin-bottom: 25px; padding: 20px; border-radius: 10px; font-family: sans-serif; background-color: #f9f9f9;">
            <!-- Изображение -->
            ${el.strDrinkThumb ? `<img src="${el.strDrinkThumb}" alt="${el.strDrink}" style="width: 100%; max-width: 300px; border-radius: 8px; display: block; margin-bottom: 15px;">` : ''}
            
            <!-- Основные параметры -->
            <h1 style="margin-top: 0;">${el.strDrink}</h1>
            <p><strong>ID:</strong> ${el.idDrink}</p>
            ${el.strDrinkAlternate ? `<p><strong>Альтернативное название:</strong> ${el.strDrinkAlternate}</p>` : ''}
            <p><strong>Категория:</strong> ${el.strCategory}</p>
            <p><strong>Тип:</strong> ${el.strAlcoholic} ${el.strIBA ? `(IBA: ${el.strIBA})` : ''}</p>
            <p><strong>Бокал:</strong> ${el.strGlass}</p>
            ${el.strTags ? `<p><strong>Теги:</strong> ${el.strTags}</p>` : ''}
            
            <!-- Ингредиенты -->
            <h3>Ингредиенты:</h3>
            <ul>
                ${ingredientsHTML}
            </ul>

            <!-- Инструкции на разных языках -->
            <h3>Инструкция:</h3>
            <p><strong>English:</strong></p>
            <p style="white-space: pre-line;">${el.strInstructions || 'Нет инструкции'}</p>
            
            ${el.strInstructionsES ? `<p><strong>Испанский (ES):</strong> ${el.strInstructionsES}</p>` : ''}
            ${el.strInstructionsDE ? `<p><strong>Немецкий (DE):</strong> ${el.strInstructionsDE}</p>` : ''}
            ${el.strInstructionsFR ? `<p><strong>Французский (FR):</strong> ${el.strInstructionsFR}</p>` : ''}
            ${el.strInstructionsIT ? `<p><strong>Итальянский (IT):</strong> ${el.strInstructionsIT}</p>` : ''}
            ${el.strInstructionsZH_HANS ? `<p><strong>Китайский (упрощенный):</strong> ${el.strInstructionsZH_HANS}</p>` : ''}
            ${el.strInstructionsZH_HANT ? `<p><strong>Китайский (традиционный):</strong> ${el.strInstructionsZH_HANT}</p>` : ''}

            <!-- Дополнительная информация -->
            <hr style="margin: 15px 0;">
            <p><strong>Видео:</strong> ${el.strVideo ? `<a href="${el.strVideo}" target="_blank">Смотреть</a>` : 'Отсутствует'}</p>
            <p><strong>Источник изображения:</strong> ${el.strImageSource ? `<a href="${el.strImageSource}" target="_blank">Ссылка</a>` : 'Отсутствует'}</p>
            ${el.strImageAttribution ? `<p><strong>Автор фото:</strong> ${el.strImageAttribution}</p>` : ''}
            <p><strong>Creative Commons:</strong> ${el.strCreativeCommonsConfirmed || 'Нет'}</p>
            <p><strong>Дата изменения:</strong> ${el.dateModified || 'Не указана'}</p>
        </div>
        `;
    });
})
.catch(error => console.error("Ошибка при запросе:", error));