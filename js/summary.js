const topics = document.querySelectorAll('nav .topic');
const content = document.querySelector('#content');

topics.forEach(topic => {
    topic.children[1].addEventListener('click', (e) => {
        content.scroll(
            0,
            content.clientHeight * Number(e.target.id)
        );
    })
})