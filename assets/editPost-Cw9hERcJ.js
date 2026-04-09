import{S as a,R as e,c,a as d,b as m,m as S,H as l,F as p}from"./Footer-Ca_XvyZW.js";import{P as u}from"./PostForm-BmsIFi_5.js";import{P as s}from"./posts.repository-e-mkoYc-.js";const n={UPDATE:"edit_post::update"},i=new a({});i.addAction(n.UPDATE,t=>{s.update(t.postId,{title:t.title,content:t.content}),window.location.href=e.MY_POSTS});class P extends d{onComponentDidMount(){this.useStore(i),this.useStore(m),this.useStore(S)}getHtml(){const r=Number(new URLSearchParams(window.location.search).get("id")),o=s.findById(r);return o?`
      ${l()}

      <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        ${u({action:n.UPDATE,title:o.title,content:o.content,postId:o.id})}
      </main>

      ${p()}
    `:(window.location.href=e.MY_POSTS,"")}}c("root",P);
