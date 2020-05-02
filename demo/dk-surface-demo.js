import { LitElement, html ,css} from 'lit-element';
import '../dk-surface';
import {Theme} from '../theme';
import * as Typography from '@dhruval/material-styles/typography-literals';
export class DkSurfaceDemo extends LitElement {

  static get styles(){
    return[
      Theme,
      css`
      :host{
        display:block;
        background-color:#e7e7e7;
      }
      :host([dark-theme]){
        background-color:#e7e7e7;
      }

      section{
        display:flex;
        flex-direction:row;
        flex:0 0 auto;
        width:1230px;
        background-color: var(--mdc-theme-background);
      }

      .main{
        flex:0 0 auto;
        display:flex;
        flex-wrap:wrap;
        width:256px; 
        padding:12px;
        margin:12px;
        border: 1px solid var(--mdc-theme-divider);
      }

      dk-surface{
        width:120px;
        height:120px;
        margin:4px;
        color:var(--mdc-theme-on-surface);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        ${Typography.headline6};
      }

      dk-surface[color='primary']{
        color:var(--mdc-theme-on-primary);
      }

      dk-surface[color='secondary']{
        color:var(--mdc-theme-on-secondary);
      }

      dk-surface[color='error']{
        color:var(--mdc-theme-on-error);
      }
      `
    ];
  }

  render() {
    return html`
    <section>
      <div class="main">
        <dk-surface elevation=0>0dp</dk-surface>
        <dk-surface elevation=1>1dp</dk-surface>
        <dk-surface elevation=2>2dp</dk-surface>
        <dk-surface elevation=3>3dp</dk-surface>
        <dk-surface elevation=4>4dp</dk-surface>
        <dk-surface elevation=6>6dp</dk-surface>
        <dk-surface elevation=8>8dp</dk-surface>
        <dk-surface elevation=12>12dp</dk-surface>
        <dk-surface elevation=16>16dp</dk-surface>
        <dk-surface elevation=24>24dp</dk-surface>
      </div>
      <div class="main">
        <dk-surface elevation=0 color="primary">0dp</dk-surface>
        <dk-surface elevation=1 color="primary">1dp</dk-surface>
        <dk-surface elevation=2 color="primary">2dp</dk-surface>
        <dk-surface elevation=3 color="primary">3dp</dk-surface>
        <dk-surface elevation=4 color="primary">4dp</dk-surface>
        <dk-surface elevation=6 color="primary">6dp</dk-surface>
        <dk-surface elevation=8 color="primary">8dp</dk-surface>
        <dk-surface elevation=12 color="primary">12dp</dk-surface>
        <dk-surface elevation=16 color="primary">16dp</dk-surface>
        <dk-surface elevation=24 color="primary">24dp</dk-surface>
      </div>
      <div class="main">
        <dk-surface elevation=0 color="secondary">0dp</dk-surface>
        <dk-surface elevation=1 color="secondary">1dp</dk-surface>
        <dk-surface elevation=2 color="secondary">2dp</dk-surface>
        <dk-surface elevation=3 color="secondary">3dp</dk-surface>
        <dk-surface elevation=4 color="secondary">4dp</dk-surface>
        <dk-surface elevation=6 color="secondary">6dp</dk-surface>
        <dk-surface elevation=8 color="secondary">8dp</dk-surface>
        <dk-surface elevation=12 color="secondary">12dp</dk-surface>
        <dk-surface elevation=16 color="secondary">16dp</dk-surface>
        <dk-surface elevation=24 color="secondary">24dp</dk-surface>
      </div>
      <div class="main">
        <dk-surface elevation=0 color="error">0dp</dk-surface>
        <dk-surface elevation=1 color="error">1dp</dk-surface>
        <dk-surface elevation=2 color="error">2dp</dk-surface>
        <dk-surface elevation=3 color="error">3dp</dk-surface>
        <dk-surface elevation=4 color="error">4dp</dk-surface>
        <dk-surface elevation=6 color="error">6dp</dk-surface>
        <dk-surface elevation=8 color="error">8dp</dk-surface>
        <dk-surface elevation=12 color="error">12dp</dk-surface>
        <dk-surface elevation=16 color="error">16dp</dk-surface>
        <dk-surface elevation=24 color="error">24dp</dk-surface>
      </div>
    </section>
    `;
  }
}
customElements.define('dk-surface-demo', DkSurfaceDemo);