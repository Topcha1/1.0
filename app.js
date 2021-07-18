const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function stats(){
    fetch('https://reqres.in/api/unknown', {
        method: 'GET'
    })
        .then(response => {
            if (response.status !== 200) {
                throw response.status;
            }
            return response.json();
        })
        .then(responseData => {
            responseData.data.forEach(item => {
                let row = document.createElement("tr");
                let id = document.createElement("td");
                id.textContent = item.id;
                row.appendChild(id);

                let name = document.createElement("td");
                name.textContent = item.name;
                row.appendChild(name);

                let year = document.createElement("td");
                year.textContent = item.year;
                row.appendChild(year);


                let color = document.createElement("td");
                color.textContent = item.color;
                row.appendChild(color);

                let pantone = document.createElement("td");
                pantone.textContent = item.pantone_value;
                row.appendChild(pantone);

                document.getElementById("table").append(row);
            })
        })
        .catch(error => {
            errorDiv.innerText =`${error}
            404 
            Page not found`;

        })
}


stats()

