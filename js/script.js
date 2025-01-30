$(document).ready(function() {
    // Array de perros
    let perros = [
        {
            nombre: "Max",
            raza: "Criollo",
            edad: "2",
            imagen: "https://nupec.com/wp-content/uploads/2021/08/Captura-de-Pantalla-2021-08-02-a-las-13.34.30.png",
            descripcion: "Max es un perro juguetón y amigable de raza criolla."
        },
        {
            nombre: "Ringo",
            raza: "Pastor Alemán",
            edad: "3",
            imagen: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07German-Shepherd-Dog.jpg?itok=SNPGvGFh://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cane_da_pastore_tedesco_adulto.jpg/640px-Cane_da_pastore_tedesco_adulto.jpg",
            descripcion: "Ringo es un perro guardián inteligente y leal de raza Pastor Alemán."
        },
        {
            nombre: "Luna",
            raza: "Labrador",
            edad: "1",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVAxVvYKJ2euRgmISNPtQBEPw5PC0kcUwxg&s",
            descripcion: "Luna es una cachorra muy enérgica y cariñosa de raza Labrador."
        }
    ];
    function llenarImagen() {
        perros.forEach((perro, index) => {
            let i = index + 1
            $(`.image-placeholder${i}`).html(`<img class="image-template" src="${perro.imagen}" alt="perro">`)
        })
    }
    // Función para rellenar los datos de los perros
    function llenarDatos() {
        perros.forEach((perro, index) => {
            // Incrementar índice para que coincida con los IDs (1, 2, 3)
            let i = index + 1;

            $(`#nombre${i}`).text(perro.nombre);
    
            $(`#raza${i}`).text(perro.raza);
            
            //                  aqui se concatena la edad del perro con la palabra ños
            $(`#años${i}`).text(`${perro.edad} años`);
            
            $(`#desc${i}`).text(perro.descripcion);
        });
    }

    llenarDatos();
    llenarImagen();
    $('.more-btn').click(function() {
        $(this).siblings('.description').toggle();
    });
});