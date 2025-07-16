const btn = window.document.querySelector('button')

btn.addEventListener('click', animate)

function animate() {
    btn.classList.toggle('active')
}