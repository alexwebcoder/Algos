function toggleSidebar(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show')
}

const button = document.getElementById('button');

button.addEventListener('click', toggleSidebar)