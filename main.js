const links = [
    'https://t.me/zoo_story_bot/game?startapp=ref425512839',
    'https://t.me/zoo_story_bot/game?startapp=ref6700706092',
];

const defaultLink = links[0];
const cta = document.getElementById('cta');

const getRandomNumber = () => {
    return Math.floor(Math.random() * links.length);
};

const redirectUser = () => {
    const randomNumber = getRandomNumber();
    const target = links[randomNumber];
    window.location.replace(target);
};

cta.addEventListener('click', redirectUser);
