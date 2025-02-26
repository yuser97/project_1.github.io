
  window.onload = function () {
    document.body.classList.add('loaded');
  }



  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

//   let lastScrollTop = 0;
// let scrollThreshold = 200; // Порог в 200 пикселей

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // Проверяем, насколько изменилась прокрутка
//     if (Math.abs(scrollTop - lastScrollTop) >= scrollThreshold) {
//         if (scrollTop > lastScrollTop) {
//             // Прокрутка вниз
//             console.log('Прокрутка вниз на 200px');
//         } else {
//             // Прокрутка вверх
//             console.log('Прокрутка вверх на 200px');
//         }

//         // Обновляем lastScrollTop до текущего значения
//         // lastScrollTop = scrollTop;
//     }
// });