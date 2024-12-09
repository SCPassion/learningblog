const viewMoreBtn = document.getElementById('view-more')

viewMoreBtn.addEventListener('click', ()=> {
    unhideBlog()
})

function unhideBlog() {
    const hideBlogs = [...document.getElementsByClassName('hide')]
    hideBlogs.forEach((blog)=> {
        blog.classList.remove('hide')
    })
}