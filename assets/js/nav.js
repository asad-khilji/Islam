const createNav = () => {
    let nav = document.querySelector('nav');

    nav.innerHTML = `
    <nav>
    <a href="Quran.html">Quran</a>
    <a href="Seerah.html">Seerah</a>
    <a href="Islamic-Books.html">Islamic Books</a>
    </nav>
    `;
}

createNav();