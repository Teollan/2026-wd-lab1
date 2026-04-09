(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();class L{constructor(t){this.parent=t,this.onComponentDidMount(),this.render()}onComponentDidMount(){}useStore(t){t.subscribe(()=>this.render())}render(){this.parent.innerHTML=this.getHtml()}}class b{constructor(){this.subscribers=[]}subscribe(t){return this.subscribers.push(t),()=>{this.subscribers=this.subscribers.filter(s=>s!==t)}}notify(t){this.subscribers.forEach(s=>s(t))}}class $ extends b{dispatch(t){this.notify(t)}}const u=new $;function m(e){if(!e)return null;try{return JSON.parse(e)}catch{return console.error("Failed to parse data-payload:",e),null}}const k=(e,t)=>{const s=document.getElementById(e);if(!s){console.error(`Failed to get the screen root with id #${e}`);return}new t(s),s.addEventListener("click",n=>{if(!(n.target instanceof Element))return;const r=n.target.closest("[data-action]");if(!(r instanceof HTMLElement))return;const o=r.dataset.action;if(!o)return;const d=m(r.dataset.payload);u.dispatch({type:o,payload:d})}),s.addEventListener("submit",n=>{if(n.preventDefault(),!(n.target instanceof HTMLFormElement))return;const r=n.target.closest("[data-submit-action]");if(!(r instanceof HTMLFormElement))return;const o=r.dataset.submitAction;if(!o)return;const d=Object.fromEntries(new FormData(r)),I={...m(r.dataset.payload),...d};u.dispatch({type:o,payload:I})})},l="/2026-wd-lab1",i={HOME:`${l}/`,SIGN_IN:`${l}/sign-in`,SIGN_UP:`${l}/sign-up`,PROFILE:`${l}/profile`,FEED:`${l}/feed`,MY_POSTS:`${l}/my-posts`,NEW_POST:`${l}/new-post`,EDIT_POST:`${l}/edit-post`},w=e=>e.split(" ").map(t=>t[0]).join(""),v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y=e=>e.replace(/[&<>"']/g,t=>v[t]),U={sm:"h-9 w-9 text-sm",lg:"h-16 w-16 text-2xl"},p=["bg-sky-500/20 text-sky-400","bg-emerald-500/20 text-emerald-400","bg-purple-500/20 text-purple-400","bg-amber-500/20 text-amber-400","bg-rose-500/20 text-rose-400","bg-cyan-500/20 text-cyan-400","bg-indigo-500/20 text-indigo-400","bg-lime-500/20 text-lime-400","bg-fuchsia-500/20 text-fuchsia-400","bg-teal-500/20 text-teal-400"];function A(e){return p[e%p.length]}const S=({user:e,size:t="sm"})=>{const s=A(e.id);return`
    <div class="flex items-center justify-center rounded-full font-bold ${U[t]} ${s}">
      ${y(w(e.username))}
    </div>
  `},c=({href:e,label:t})=>{const s=window.location.pathname.endsWith(e);return`
    <a
      href="${e}"
      class="block px-3 py-2 ${s?"text-accent-hover":"text-content-secondary hover:text-content-primary"}"
    >
      ${t}
    </a>
  `},_=({user:e})=>{const t=window.location.pathname.endsWith(i.PROFILE);return`
    <nav
      id="nav-menu"
      class="hidden md:block"
    >
      <ul class="flex flex-col gap-1 md:flex-row md:gap-6">
        <li>
          ${c({href:i.HOME,label:"About"})}
        </li>

        ${e?`
          <li>
            ${c({href:i.FEED,label:"Feed"})}
          </li>

          <li>
            ${c({href:i.MY_POSTS,label:"My Posts"})}
          </li>

          <li>
            ${c({href:i.NEW_POST,label:"New Post"})}
          </li>
        `:`
          <li>
            ${c({href:i.SIGN_IN,label:"Sign In"})}
          </li>

          <li>
            ${c({href:i.SIGN_UP,label:"Sign Up"})}
          </li>
        `}

        ${e?`
          <li>
            <a
              href="${i.PROFILE}"
              class="block rounded-full ring-2 ${t?"ring-accent-hover":"ring-transparent hover:ring-accent/40"}"
            >
              ${S({user:e})}
            </a>
          </li>
        `:""}
      </ul>
    </nav>
  `},P=()=>`
  <svg
    class="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
`,N=()=>`
    <a
      href="${i.HOME}"
      class="flex items-center gap-2"
    >
      <img
        src="${l}/images/logo.svg"
        alt="BlogSpace logo"
        class="h-8 w-8"
      />
      <span class="text-lg font-semibold text-content-primary">BlogSpace</span>
    </a>
  `,T=({user:e,isOpen:t})=>{const s=window.location.pathname.endsWith(i.PROFILE);return`
    <nav
      id="mobile-menu"
      class="${t?"":"hidden"} absolute top-full left-0 w-full border-y border-stroke-primary bg-surface-primary md:hidden"
    >
      <ul class="flex flex-col gap-1 px-4 py-3">
        ${e?`
          <li>
            <a
              href="${i.PROFILE}"
              class="flex items-center gap-3 px-3 py-2 ${s?"text-accent-hover":"text-content-secondary hover:text-content-primary"}"
            >
              ${S({user:e})}

              <span class="font-medium text-lg">${y(e.username)}</span>
            </a>
          </li>
        `:""}

        <li>
          ${c({href:i.HOME,label:"About"})}
        </li>

        ${e?`
          <li>
            ${c({href:i.FEED,label:"Feed"})}
          </li>

          <li>
            ${c({href:i.MY_POSTS,label:"My Posts"})}
          </li>

          <li>
            ${c({href:i.NEW_POST,label:"New Post"})}
          </li>
        `:`
          <li>
            ${c({href:i.SIGN_IN,label:"Sign In"})}
          </li>

          <li>
            ${c({href:i.SIGN_UP,label:"Sign Up"})}
          </li>
        `}
      </ul>
    </nav>
  `};class x extends b{constructor(t){super(),this.actionHandlers=new Map,this.state=t,u.subscribe(s=>this.handleAction(s))}getState(){return this.state}addAction(t,s){this.actionHandlers.set(t,s)}handleAction({type:t,payload:s}){const n=this.actionHandlers.get(t);n&&n(s,r=>this.setState(r),()=>this.getState())}setState(t){this.state={...this.state,...t},this.notify(this.state)}}const E={TOGGLE:"mobile_nav_menu::toggle"},O=new x({isOpen:!1});O.addAction(E.TOGGLE,(e,t,s)=>{t({isOpen:!s().isOpen})});const g=e=>({...e,createdAt:new Date(e.createdAt),dateOfBirth:new Date(e.dateOfBirth)}),M={AUTH_USER_ID:"auth_user_id",USERS:"users",POSTS:"posts",COMMENTS:"comments",ID_COUNTER:"id_counter"},f=class f{static getItem(t){return localStorage.getItem(t)}static getObject(t){const s=this.getItem(t);return s?JSON.parse(s):null}static setItem(t,s){localStorage.setItem(t,s)}static setObject(t,s){this.setItem(t,JSON.stringify(s))}static removeItem(t){localStorage.removeItem(t)}static nextId(){const s=parseInt(this.getItem(this.keys.ID_COUNTER)??"0")+1;return this.setItem(this.keys.ID_COUNTER,s.toString()),s}};f.keys=M;let a=f;class h{static findAuthUser(){const t=parseInt(a.getItem(a.keys.AUTH_USER_ID)??"0");if(!t)return null;const n=a.getObject(a.keys.USERS)?.find(r=>r.id===t);return n?g(n):null}static getAuthUser(){const t=h.findAuthUser();if(!t)throw new Error("No authenticated user found");return t}static signIn(t){const n=a.getObject(a.keys.USERS)?.find(r=>r.email===t.email&&r.password===t.password);if(!n)throw new Error("Incorrect email or password");return a.setItem(a.keys.AUTH_USER_ID,n.id.toString()),g(n)}static signUp(t){const s={id:a.nextId(),...t,createdAt:new Date},n=a.getObject(a.keys.USERS)??[];if(n?.find(o=>o.email===t.email)??null)throw new Error("User with this email already exists");return a.setObject(a.keys.USERS,[...n,s]),a.setItem(a.keys.AUTH_USER_ID,s.id.toString()),s}static logOut(){a.removeItem(a.keys.AUTH_USER_ID)}}const D=new x({user:h.findAuthUser()}),H=()=>{const{user:e}=D.getState(),{isOpen:t}=O.getState();return`
    <header class="relative border-b border-stroke-primary bg-surface-primary">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        ${N()}

        <button
          data-action="${E.TOGGLE}"
          class="md:hidden ${t?"text-accent-hover":"text-content-secondary hover:text-content-primary"}"
        >
          ${P()}
        </button>

        ${_({user:e})}
      </div>

      ${T({user:e,isOpen:t})}
    </header>
  `},F=()=>`
    <footer class="border-t border-stroke-primary bg-surface-secondary">
      <div
        class="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-content-tertiary"
      >
        &copy; 2026 BlogSpace. All rights reserved.
      </div>
    </footer>
  `;export{h as A,F,H,i as R,x as S,L as a,D as b,k as c,S as d,y as e,a as f,g,O as m};
