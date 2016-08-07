var userNames = [];


    for (var i = 0; i <5 ; i++) {
        var name = prompt('Введите имена пользователей (5шт.)', '');
        userNames.push(name);


    }

console.log(userNames)

var login = prompt('Введите логин', '');
console.log(login)
function searchUser (login) {

    for (var i = 0; i < userNames.length; i++)
        if (userNames[i] == login) {
        return alert("login', вы успешно вошли");
    }

    return alert("Пользователя' login' не существует");

}