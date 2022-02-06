import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SubMenu extends Component {
  @tracked _isOpen;
  get isOpen() {
    return this._isOpen;
  }
  set isOpen(value) {
    this._isOpen = value;
  }

  get queryElement() {
    return document.querySelector('.submenu');
  }

  @action
  toggle() {
    this.isOpen = !this.isOpen;
  }

  @action
  handleDidInsert() {
    document.addEventListener('click', this.handleClickOutside);
  }

  @action
  handleClickOutside(e) {
    if (
      !this.isOpen ||
      e.target.classList.contains('submenu-link') ||
      this.queryElement.contains(e.target)
    ) {
      return;
    }
    this.toggle();
  }
}
