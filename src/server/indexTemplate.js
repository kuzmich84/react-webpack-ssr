export const indexTemplate = (content) => `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base target="_blank">
    <title>Личный кабинет</title>
    <link rel="preload" href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap' as="font"
          crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap">
    <!--  <link href="pixelPerfect/pixel-glass/styles.css" rel="stylesheet">-->
    <!--  <link href="pixelPerfect/index.css" rel="stylesheet">-->
    <!--  <script src="pixelPerfect/pixel-glass/script.js"></script>-->
    <!--   // Picturefill -->
    <!--  <script>-->
    <!--    // Picture element HTML5 shiv-->
    <!--    document.createElement("picture");-->
    <!--  </script>-->
    <!--  <script src="js/picturefill.min.js" async=""></script>-->
    <!--  &lt;!&ndash; // Picturefill &ndash;&gt;-->
    <!--  &lt;!&ndash; // Polyfill &ndash;&gt;-->
    <!--&lt;!&ndash;  <script src="js/svg4everybody.min.js"></script>&ndash;&gt;-->
    <!--&lt;!&ndash;  <script>svg4everybody(); // run it now or whenever you are ready</script>&ndash;&gt;-->
    <!--&lt;!&ndash;  &lt;!&ndash; // Polyfill &ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;  <link rel="stylesheet" href="css/style.min.css">&ndash;&gt;-->
    <script src="/static/client.js" type="application/javascript" ></script>
</head>
<body>
<div style="display: none;">
  <include src="static/img/sprite_auto.svg"></include>
</div>
<header class="header">
  <div class="header-wrapper">
    <div class="header-content">
      <div class="avator">
        <img src="static/img/avator.jpg" alt="Аваторка">
        <p>Константин</p>
      </div>
      <label class="search">
        <input type="text" placeholder="Поиск"/>
      </label>
      <div class="message-status">
        <div class="message-count">
          <span>4</span>
        </div>
        <svg width="12.77" height="10.21">
          <use xlink:href="#icon-mail"></use>
        </svg>
      </div>
    </div>
    <h1>Личный кабинет</h1>
  </div>
  <nav class="menu">
    <button type="button" class="menu-toglle"></button>
    <ul class="menu-list">
      <li>
        <svg width="12" height="8">
          <use xlink:href="#icon-looked"></use>
        </svg>
        <a class="menu-link" href="#">Просмотренное</a></li>
      <li>
        <svg width="10" height="10">
          <use xlink:href="#icon-saved"></use>
        </svg>
        <a class="menu-link" href="#">Сохраненное</a></li>
      <li>
        <svg width="10" height="10">
          <use xlink:href="#icon-my-posts"></use>
        </svg>
        <a class="menu-link" href="#">Мои посты</a></li>
      <li>
        <svg width="10" height="10">
          <use xlink:href="#icon-commented"></use>
        </svg>
        <a class="menu-link active" href="#">Прокомментированное</a></li>
    </ul>
    <button class="btn btn-close" type="button">Закрыть</button>
  </nav>
</header>
<div id="root">${content}</div>
</body>
</html>
`
