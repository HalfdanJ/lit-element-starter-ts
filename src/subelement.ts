import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators';

@customElement('sub-element')
export class SubElement extends LitElement {
  protected override render(): unknown {
    return html`Test`;
  }
}

// Adding this makes lit-plugin work
//
// declare global {
//   interface HTMLElementTagNameMap {
//     'sub-element': SubElement;
//   }
// }
