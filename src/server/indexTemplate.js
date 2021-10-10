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
<div id="root">${content}</div>
</body>
</html>
`
