var selectPosition = document.getElementById("position");
var positionTitle = document.querySelector(".position__text-title");
var positionText = document.querySelector(".position__text");

selectPosition.addEventListener("change", function() {
  switch(selectPosition.value) {
    case "position1":
      positionTitle.innerHTML = "Позиция 1";
      positionText.innerHTML = "Данный текстовый блок, появляется после того как пользователь выбрал соответствующую Позицую слева. Он должен меняться при выборе Позиции 2, 3 и 4. Пока Позиция неактивная, здесь должно быть пусто.";
      break;
    case "position2":
      positionTitle.innerHTML = "Позиция 2";
      positionText.innerHTML = "Данный текстовый блок, появляется после того как пользователь выбрал соответствующую Позицую слева. Он должен меняться при выборе Позиции 2, 3 и 4. Пока Позиция неактивная, здесь должно быть пусто.";
      break;
    case "position3":
      positionTitle.innerHTML = "Позиция 3";
      positionText.innerHTML = "Данный текстовый блок, появляется после того как пользователь выбрал соответствующую Позицую слева. Он должен меняться при выборе Позиции 2, 3 и 4. Пока Позиция неактивная, здесь должно быть пусто.";
      break;
    default:
      positionTitle.innerHTML = "";
      positionText.innerHTML = "";
    }
});

