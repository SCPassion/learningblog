const viewMoreBtn = document.getElementById('view-more')

viewMoreBtn.addEventListener('click', ()=> {
    unhideBlog()
})

function unhideBlog() {
    const hideBlogs = [...document.getElementsByClassName('hide')]
    console.log(hideBlogs.length)
    hideBlogs.forEach((blog)=> {
        blog.classList.remove('hide')
    })
}