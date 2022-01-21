function movie(name, date, genre) {
    this.name = name;
    this.date = date;
    this.genre = genre;
}

function btn1() {
    var MovieOne = new movie("토이스토리", "1995", "3D 애니메이션");
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var genre = document.getElementById("genre");
    name.innerHTML = MovieOne.name;
    date.innerHTML = MovieOne.date;
    genre.innerHTML = MovieOne.genre;
}

function btn2() {
    var MovieTwo = new movie("아이엠샘", "2001", "휴먼드라마");
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var genre = document.getElementById("genre");
    name.innerHTML = MovieTwo.name;
    date.innerHTML = MovieTwo.date;
    genre.innerHTML = MovieTwo.genre;
}

function btn3() {
    var MovieThree = new movie("라라랜드", "2016", "뮤지컬");
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var genre = document.getElementById("genre");
    name.innerHTML = MovieThree.name;
    date.innerHTML = MovieThree.date;
    genre.innerHTML = MovieThree.genre;
}