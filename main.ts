import { html, LitElement, customElement, property } from './deps.ts'

@customElement('my-app')
export class App extends LitElement {
    @property()
    foo = '???';

    render() {
        return html`<h1>My App: ${this.foo}</h1>`
    }
}

const myApp = new App()

document.body.appendChild(myApp)

document.body.addEventListener('click', e => {
    console.log('before', myApp.foo, myApp.getAttribute('foo'))
    myApp.foo = 'bob'
    myApp.setAttribute('foo', 'bob')
    console.log('after', myApp.foo, myApp.getAttribute('foo'))
})
