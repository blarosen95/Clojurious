// TODO: Convert to ClojureScript
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavBar extends Component {
  // TODO: Tracking will not be feasible in ClojureScript...
  @tracked toggle = document.querySelector('.toggle');
  get menu() {
    return document.querySelector('.menu');
  }
  @tracked items = document.querySelectorAll('.item');

  get servicesItems() {
    return [
      { name: 'Finding Sales' },
      { name: 'Finding COAs' },
      { name: 'Finding Your Medications' },
    ];
  }

  @action
  toggleMenu() {
    if (this.menu.classList.contains('active')) {
      this.menu.classList.remove('active');

      // Adds hamburger icon
      this.toggle.querySelector('a').innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      this.menu.classList.add('active');

      // Adds close icon
      this.toggle.querySelector('a').innerHTML = '<i class="fas fa-times"></i>';
    }
  }

  /* Event Listeners (TODO: port into template) */
  @action
  handleDidInsert() {
    this.toggle.addEventListener('click', this.toggleMenu, false);
    document.addEventListener('click', this.handleOnClick, false);
    for (let item of this.items) {
      if (item.querySelector('.submenu')) {
        // item.addEventListener('click', this.toggleItem, false);
        // item.addEventListener('keypress', this.toggleItem, false);
      }
    }
  }

  closeSubmenu() {
    this.menu
      ?.querySelector('.submenu-active')
      ?.classList.remove('submenu-active');
  }

  @action
  handleOnClick(e) {
    const isClickInside = this.menu?.contains(e.target);
    if (!isClickInside && this.menu?.querySelector('.submenu-active')) {
      // this.closeSubmenu();
    }
  }
}
