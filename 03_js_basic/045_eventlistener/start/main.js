const h1Element = document.querySelector('h1')
console.dir(h1Element)
console.log(h1Element.taxtContent)
h1Element.textContent = '変更後のタイトル'

const btnEl = document.querySelector('button');
btnEl.addEventListener('click' , (e) => {
    console.log(e.target.taxtContent);
    console.log('hello')
})
btnEl.addEventListener('click', helloFn)