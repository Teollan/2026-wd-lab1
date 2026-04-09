import{S as c,A as m,R as o,d,e as r,c as u,a as f,b as a,m as p,H as b,F as v}from"./Footer-Ca_XvyZW.js";import{P as x,C as y}from"./posts.repository-e-mkoYc-.js";const n={LOG_OUT:"profile::log_out"},s=new c({});s.addAction(n.LOG_OUT,()=>{m.logOut(),window.location.href=o.HOME});const h=({user:e})=>`
    <div class="mb-6 flex items-center gap-4">
      ${d({user:e,size:"lg"})}

      <div>
        <h2 class="text-xl font-semibold text-content-primary">
          ${r(e.username)}
        </h2>

        <p class="text-sm text-content-tertiary">
          Member since ${g(e.createdAt)}
        </p>
      </div>
    </div>
  `;function g(e){return e.toLocaleDateString("en-US",{year:"numeric",month:"long"})}const S=({label:e,value:t})=>`
    <tr class="align-top">
      <td class="py-3 pr-4 font-medium text-content-secondary whitespace-nowrap">
        ${e}
      </td>

      <td class="w-full py-3">
        ${r(t)}
      </td>
    </tr>
  `,O=({entries:e})=>`
    <table class="w-full">
      <tbody class="divide-y divide-stroke-primary text-sm text-content-primary">
        ${e.map(t=>S(t)).join("")}
      </tbody>
    </table>
  `,w=()=>`
    <div class="mt-6 flex gap-3">
      <a
        href="${o.MY_POSTS}"
        class="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-content-primary hover:bg-accent-hover"
      >
        View my posts
      </a>

      <button
        data-action="${n.LOG_OUT}"
        class="rounded-lg bg-destructive/20 px-5 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/30"
      >
        Log Out
      </button>
    </div>
  `;class $ extends f{onComponentDidMount(){this.useStore(s),this.useStore(a),this.useStore(p)}getHtml(){const{user:t}=a.getState();if(!t)return window.location.href=o.SIGN_IN,"";const l=x.findByAuthorId(t.id).length,i=y.findByAuthorId(t.id).length;return`
      ${b()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <div class="mx-auto max-w-2xl">
          <h1 class="mb-8 text-3xl font-bold text-content-primary">
            Profile
          </h1>

          <div class="rounded-xl border border-stroke-primary bg-surface-secondary p-6">
            ${h({user:t})}

            ${O({entries:[{label:"Username",value:t.username},{label:"Email",value:t.email},{label:"Gender",value:A(t.gender)},{label:"Date of birth",value:P(t.dateOfBirth)},{label:"Bio",value:t.bio},{label:"Posts",value:l.toString()},{label:"Comments",value:i.toString()}]})}

            ${w()}
          </div>
        </div>
      </main>

      ${v()}
    `}}const A=e=>{switch(e){case"male":return"Male";case"female":return"Female";default:return"Other"}};function P(e){return e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}u("root",$);
