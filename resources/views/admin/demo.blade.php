<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post" action="">
        {{csrf_field()}}
        Select your favourite game:<br />
        <select name="game[]" multiple="multiple">
            <option>Football</option>
            <option>Volleyball</option>
            <option>Badminton</option>
            <option>Cricket</option>
            <option>Cricket1</option>
            <option>Cricket2</option>
            <option>Cricket3</option>
            <option>Cricket34</option>
        </select>
        <input type="submit" name="submit">
    </form>
</body>

</html>
