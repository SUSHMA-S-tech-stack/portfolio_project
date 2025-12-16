// //  ------ togler style

// const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
// styleSwitcherToggle.addEventListener('click', ()=>{
//     document.querySelector('.style-switcher').classList.toggle('open');
// })

// //  --- hide style switcher scroll

// window.addEventListener('scroll',()=>{
//     if(document.querySelector('.style-switcher').classList.contains('open'))
//     {
//         document.querySelector('.style-switcher').classList.remove('open');
//     }
// })


// // -------- theme color

// const alternateStyles = document.querySelectorAll('.alternate-style');

// function setActiveStyle(color)
// {
//     alternateStyles.forEach((style) => {
//         if(color === style.getAttribute('title'))
//         {
//             style.removeAttribute('disabled');
//         }
//         else{
//             style.setAttribute('disabled','true');
//         }
//     })
// }

// // -----theme light & dark mode

// const dayNight = document.querySelector('.day-night');
// dayNight = addEventListener('click', () => {
//     dayNight.querySelector('i').classList.toggle('fa-sun');
//     dayNight.querySelector('i').classList.toggle('fa-moon');
//     document.body.classList.toggle('dark');
// })
// window.addEventListener('load',() => {
//     if(document.body.classList.contains('dark'))
//     {
//         dayNight.querySelector('i').classList.add('fa-sun');
//     }
//     else
//     {
//         dayNight.querySelector('i').classList.add('fa-moon');
//     }
// }
// )






//  ------ toggler style
// const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
// styleSwitcherToggle.addEventListener('click', () => {
//     document.querySelector('.style-switcher').classList.toggle('open');
// });

// //  --- hide style switcher on scroll
// window.addEventListener('scroll', () => {
//     if (document.querySelector('.style-switcher').classList.contains('open')) {
//         document.querySelector('.style-switcher').classList.remove('open');
//     }
// });

// // -------- theme color
// const alternateStyles = document.querySelectorAll('.alternate-style');

// function setActiveStyle(color) {
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute('title')) {
//             style.removeAttribute('disabled');
//         } else {
//             style.setAttribute('disabled', 'true');
//         }
//     });
// }

// // ----- theme light & dark mode
// const dayNight = document.querySelector('.day-night');

// dayNight.addEventListener('click', () => {
//     dayNight.querySelector('i').classList.toggle('fa-sun');
//     dayNight.querySelector('i').classList.toggle('fa-moon');
//     document.body.classList.toggle('dark');
// });

// window.addEventListener('load', () => {
//     if (document.body.classList.contains('dark')) {
//         dayNight.querySelector('i').classList.add('fa-sun');
//     } else {
//         dayNight.querySelector('i').classList.add('fa-moon');
//     }
// });



// Toggle style switcher panel
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide panel on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Color theme switch
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Light / Dark mode toggle
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = dayNight.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Set correct icon on page load
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});