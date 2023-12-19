const $menu = document.getElementById('menu')
const $optMenu = document.querySelector('.list')

$menu.addEventListener('click', () => {
  if ($menu.classList.contains('fa-bars')) {
    $menu.classList.replace('fa-bars', 'fa-xmark')
    $optMenu.classList.add('show')
  } else if ($menu.classList.contains('fa-xmark')) {
    $menu.classList.replace('fa-xmark', 'fa-bars')
    $optMenu.classList.remove('show')
  }
})
