
const navbar = document.getElementById('navbar');
window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')

    }
}


const scrollrevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1500,
}

ScrollReveal().reveal('.home h1',scrollrevealOption)
ScrollReveal().reveal('.home h4',{
    ...scrollrevealOption,
    delay:800,
})
ScrollReveal().reveal('.home .btn-explore',{
    ...scrollrevealOption,
    delay:1200,
})

ScrollReveal().reveal('.about .about-title',scrollrevealOption)
ScrollReveal().reveal('.about .about-desc',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.about .item-data',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-explore',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.btn-more',{
    ...scrollrevealOption,
    delay:2000,
})
ScrollReveal().reveal('.card',scrollrevealOption)

ScrollReveal().reveal('.card .image',{
    ...scrollrevealOption,
    delay:600,
})
ScrollReveal().reveal('.card .content-card h4',{
    ...scrollrevealOption,
    delay:1600,
})
ScrollReveal().reveal('.next .card .content-card  p',{
    ...scrollrevealOption,
    delay:2000,
})



ScrollReveal().reveal('.next .card .content-card p',{
    ...scrollrevealOption,
    delay:600,
})


ScrollReveal().reveal('form .input',scrollrevealOption)
ScrollReveal().reveal('row .card',scrollrevealOption)

function search() {
    let filter = document.getElementById('searchbar').value.toUpperCase();
    let item = document.querySelectorAll('.card');
    let l = document.getElementsByTagName('h4');
    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName('h4')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    else
    {
    item[i].style.display="none";
    }
    }
    }


