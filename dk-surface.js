import { LitElement, html ,css} from 'lit-element';
import { shadow } from '@dhruval/material-styles/shadow';

export class DkSurface extends LitElement {

  static get styles(){
    return[
      shadow,
      css`
        :host{
          display: block;
          position: relative;
          outline:none;
          border-radius:var(--dk-surface-border-radius, 4px);
          background-color: var(--mdc-theme-surface, #fff);
          box-sizing: border-box;
        }

        :host([hidden]) { 
          display: none; 
        }

        :host([color="primary"]){
          background-color: var(--mdc-theme-primary, #6200ee);
        }

        :host([color="secondary"]){
          background-color: var(--mdc-theme-secondary, #018786);
        }

        :host([color="error"]){
          background-color: var(--mdc-theme-error, #b00020);
        }

        :host([elevation="0"]){
          box-shadow: var(--mdc-elevation--z0);
        }

        :host([elevation="1"]){
          box-shadow: var(--mdc-elevation--z1);
        }

        :host([elevation="2"]){
          box-shadow: var(--mdc-elevation--z2);
        }

        :host([elevation="3"]){
          box-shadow: var(--mdc-elevation--z3);
        }

        :host([elevation="4"]){
          box-shadow: var(--mdc-elevation--z4);
        }

        :host([elevation="6"]){
          box-shadow: var(--mdc-elevation--z6);
        }

        :host([elevation="8"]){
          box-shadow: var(--mdc-elevation--z8);
        }

        :host([elevation="12"]){
          box-shadow: var(--mdc-elevation--z12);
        }

        :host([elevation="16"]){
          box-shadow: var(--mdc-elevation--z16);
        }

        :host([elevation="24"]){
          box-shadow: var(--mdc-elevation--z24);
        }

        .overlay{
          background-color:var(--dk-surface-overlay-color);
          opacity:0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius:var(--dk-surface-border-radius);
        }

        :host([elevation="1"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-1);
        }

        :host([elevation="2"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-2);
        }

        :host([elevation="3"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-3);
        }

        :host([elevation="4"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-4);
        }

        :host([elevation="6"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-6);
        }

        :host([elevation="8"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-8);
        }

        :host([elevation="12"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-12);
        }

        :host([elevation="16"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-16);
        }

        :host([elevation="24"]) .overlay{
          opacity:var(--dk-surface-overlay-opacitiy-elevation-24);
        }
        
        ::slotted(*){
          z-index:1;
        }
      `
    ];
  }

  static get properties() {
    return {
      elevation: { type: Number },
      color: { type: String },
    };
  }

  render() {
    return html`
      <div class="overlay"></div>
      <slot></slot>
    `;
  }
}
customElements.define('dk-surface', DkSurface);