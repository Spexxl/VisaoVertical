window.revelar = ScrollReveal({reset:true})

//Introduçao
revelar.reveal('.ps-introduçao',{
    duration: 1200,
    distance: '90px'
});
revelar.reveal('.introduçao>img',{
    duration: 1200,
    distance: '90px',
    delay: 300
});


//Serviços
revelar.reveal('.serviço2',{
    duration: 1200,
    distance: '500px',
});
revelar.reveal('.serviço1',{
    duration: 800,
    distance: '200px',
    delay: 300,
    origin: 'left'
});
revelar.reveal('.serviço3',{
    duration: 800,
    distance: '200px',
    delay: 600,
    origin: 'right'
});