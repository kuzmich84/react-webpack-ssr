export const indexTemplate = (content, token) => `
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
    <script src="/static/client.js" type="application/javascript" ></script>
    <script>
    window.__token__ = '${token}'
</script>
</head>
<body>
<div id="root">${content}</div>
<div id="modal_root"></div>
</body>
</html>
`
