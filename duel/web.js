document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const div = document.querySelector('#duel');
    div.style.display = 'none';
    const site = document.querySelector('#site');
    const incantations = document.querySelectorAll('.incantation');
    const spells = document.querySelectorAll('.spell')
    const descriptions = document.querySelectorAll('.spell-description');
    const result = document.querySelector('#result');
    button.addEventListener('click', () => {
        div.style.display = 'block';
        const duel = generateRandomDuel();
        site.innerHTML = `Site: ${duel.site}`;
        for (let i = 0; i < 2; i++) {
            incantations[i].innerHTML = `${duel.duellers[i].name} casts`;
            spells[i].innerHTML = duel.duellers[i].spell.name;
            descriptions[i].innerHTML = duel.duellers[i].spell.description;
        }
        result.innerHTML = `${duel.duellers[duel.winner].name} Wins!`;
    });
    for (let i = 0; i < 2; i++) {
        spells[i].addEventListener('mouseenter', e => {
            descriptions[i].style.display = 'block';
            console.log(e.clientX);
            console.log(e.clientY);
            descriptions[i].style.left = `${e.clientX}px`;
            descriptions[i].style.top = `${e.clientY}px`;
        });
        spells[i].addEventListener('mouseleave', () => {
            descriptions[i].style.display = 'none';
        })
    }
});