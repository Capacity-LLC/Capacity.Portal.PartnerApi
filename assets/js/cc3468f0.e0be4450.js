"use strict";(self.webpackChunkcapacity_portal_partner_api=self.webpackChunkcapacity_portal_partner_api||[]).push([["8189"],{35192(e,t,n){n.r(t),n.d(t,{metadata:()=>s,default:()=>y,frontMatter:()=>p,contentTitle:()=>j,toc:()=>g,assets:()=>m});var s=JSON.parse('{"id":"authentication","title":"Authentication","description":"Client credentials, access tokens, token reuse and credential security.","source":"@site/docs/authentication.mdx","sourceDirName":".","slug":"/authentication","permalink":"/authentication","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1793680726000,"frontMatter":{"id":"authentication","title":"Authentication","description":"Client credentials, access tokens, token reuse and credential security.","slug":"/authentication"},"sidebar":"docs","previous":{"title":"Quickstart","permalink":"/getting-started/quickstart"},"next":{"title":"Environments","permalink":"/getting-started/environments"}}'),r=n(74848),i=n(28453);n(96540);var a=n(27154),c=n.n(a),l=n(29694),d=n.n(l),o=n(35699),h=n(98649);let u=[{value:"curl",label:"cURL",highlight:"bash"},{value:"javascript",label:"Node.js",highlight:"javascript"},{value:"python",label:"Python",highlight:"python"},{value:"csharp",label:"C#",highlight:"csharp"}];function x({samples:e,title:t}){let{current:n}=(0,h.v3)(),s=u.filter(t=>e[t.value]);return(0,r.jsx)(c(),{groupId:"code-language",queryString:"lang",children:s.map(s=>(0,r.jsx)(d(),{value:s.value,label:s.label,children:(0,r.jsx)(o.default,{language:s.highlight,title:t,children:e[s.value].replaceAll("{{BASE_URL}}",n.baseUrl).trim()})},s.value))})}let p={id:"authentication",title:"Authentication",description:"Client credentials, access tokens, token reuse and credential security.",slug:"/authentication"},j,m={},g=[{value:"Credentials",id:"credentials",level:2},{value:"Request a token",id:"request-a-token",level:2},{value:"Use the token",id:"use-the-token",level:2},{value:"Reuse tokens",id:"reuse-tokens",level:2},{value:"Errors",id:"errors",level:2},{value:"Keep credentials safe",id:"keep-credentials-safe",level:2},{value:"Existing integrations",id:"existing-integrations",level:2}];function k(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Partner API uses the OAuth 2.0 ",(0,r.jsx)(t.strong,{children:"client credentials"})," flow. Your integration exchanges a client ID and secret for a short-lived access token, then sends that token on every request."]}),"\n",(0,r.jsx)(t.mermaid,{value:"sequenceDiagram\r\n  participant You as Your system\r\n  participant API as Capacity Partner API\r\n  You->>API: POST /api/v1/auth/token (client_id + client_secret)\r\n  API--\x3e>You: access_token (about 15 minutes)\r\n  You->>API: GET /api/v1/ping, Authorization: Bearer access_token\r\n  API--\x3e>You: 200 (or 401 if the token is missing or expired)\r\n  Note over You: Reuse the token until shortly before it expires"}),"\n",(0,r.jsx)(t.h2,{id:"credentials",children:"Credentials"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Credential"}),(0,r.jsx)(t.th,{children:"Format"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Client ID"}),(0,r.jsx)(t.td,{children:"Text, issued by Capacity"}),(0,r.jsx)(t.td,{children:"Not secret, but do not publish it."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Client secret"}),(0,r.jsx)(t.td,{children:"Text, issued by Capacity"}),(0,r.jsxs)(t.td,{children:["Secret and ",(0,r.jsx)(t.strong,{children:"case-sensitive"}),"."]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Sandbox and production credentials are issued separately. See ",(0,r.jsx)(t.a,{href:"/getting-started/environments",children:"Environments"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"request-a-token",children:"Request a token"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"POST /api/v1/auth/token"})," with a form body (",(0,r.jsx)(t.code,{children:"application/x-www-form-urlencoded"}),"):"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"grant_type"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"client_credentials"})," (the only grant supported)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"client_id"})}),(0,r.jsx)(t.td,{children:"Your client ID"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"client_secret"})}),(0,r.jsx)(t.td,{children:"Your client secret"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You can send the ID and secret as an HTTP Basic ",(0,r.jsx)(t.code,{children:"Authorization"})," header instead of form fields. If you send both, the header is used."]}),"\n",(0,r.jsx)(x,{samples:{curl:`
# Form fields
curl -X POST "{{BASE_URL}}/api/v1/auth/token" \\
-H "Content-Type: application/x-www-form-urlencoded" \\
--data-urlencode "grant_type=client_credentials" \\
--data-urlencode "client_id=$CAPACITY_CLIENT_ID" \\
--data-urlencode "client_secret=$CAPACITY_CLIENT_SECRET"

# Or HTTP Basic
curl -X POST "{{BASE_URL}}/api/v1/auth/token" \\
-u "$CAPACITY_CLIENT_ID:$CAPACITY_CLIENT_SECRET" \\
-d "grant_type=client_credentials"
`}}),"\n",(0,r.jsx)(t.p,{children:"The response:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"access_token"})}),(0,r.jsx)(t.td,{children:"The token. Treat it as an opaque string: do not parse it or rely on its contents."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"token_type"})}),(0,r.jsxs)(t.td,{children:["Always ",(0,r.jsx)(t.code,{children:"bearer"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"expires_in"})}),(0,r.jsx)(t.td,{children:"Seconds until the token expires (about 900)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:".issued"}),", ",(0,r.jsx)(t.code,{children:".expires"})]}),(0,r.jsx)(t.td,{children:"When the token was issued and expires, as RFC 1123 dates in GMT."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"use-the-token",children:"Use the token"}),"\n",(0,r.jsx)(t.p,{children:"Send it on every request except the token request:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",metastring:'title="Request header"',children:"Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.EXAMPLE-ONLY.signature\n"})}),"\n",(0,r.jsx)(t.h2,{id:"reuse-tokens",children:"Reuse tokens"}),"\n",(0,r.jsx)(t.p,{children:"Request a token once and reuse it until about 60 seconds before it expires. Requesting a token for every call is slower for you and may be limited in future."}),"\n",(0,r.jsx)(x,{samples:{javascript:`
let cached = { token: null, expiresAt: 0 };

async function getToken() {
if (cached.token && Date.now() < cached.expiresAt - 60_000) {
  return cached.token;
}
const response = await fetch("{{BASE_URL}}/api/v1/auth/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: process.env.CAPACITY_CLIENT_ID,
    client_secret: process.env.CAPACITY_CLIENT_SECRET,
  }),
});
if (!response.ok) throw new Error(\`Token request failed: \${response.status}\`);
const body = await response.json();
cached = { token: body.access_token, expiresAt: Date.now() + body.expires_in * 1000 };
return cached.token;
}
`,python:`
import os, time, requests

_cached = {"token": None, "expires_at": 0.0}

def get_token() -> str:
  if _cached["token"] and time.time() < _cached["expires_at"] - 60:
      return _cached["token"]
  response = requests.post(
      "{{BASE_URL}}/api/v1/auth/token",
      data={
          "grant_type": "client_credentials",
          "client_id": os.environ["CAPACITY_CLIENT_ID"],
          "client_secret": os.environ["CAPACITY_CLIENT_SECRET"],
      },
      timeout=30,
  )
  response.raise_for_status()
  body = response.json()
  _cached.update(token=body["access_token"], expires_at=time.time() + body["expires_in"])
  return _cached["token"]
`,csharp:`
public sealed class CapacityTokenProvider(HttpClient http, string clientId, string clientSecret)
{
  private readonly SemaphoreSlim gate = new(1, 1);
  private string? token;
  private DateTimeOffset expiresAt;

  public async Task<string> GetTokenAsync(CancellationToken cancellationToken = default)
  {
      await gate.WaitAsync(cancellationToken);
      try
      {
          if (token is not null && DateTimeOffset.UtcNow < expiresAt.AddSeconds(-60))
          {
              return token;
          }

          using var response = await http.PostAsync("{{BASE_URL}}/api/v1/auth/token",
              new FormUrlEncodedContent(new Dictionary<string, string>
              {
                  ["grant_type"] = "client_credentials",
                  ["client_id"] = clientId,
                  ["client_secret"] = clientSecret,
              }), cancellationToken);
          response.EnsureSuccessStatusCode();

          using var json = JsonDocument.Parse(await response.Content.ReadAsStringAsync(cancellationToken));
          token = json.RootElement.GetProperty("access_token").GetString()!;
          expiresAt = DateTimeOffset.UtcNow.AddSeconds(json.RootElement.GetProperty("expires_in").GetInt32());
          return token;
      }
      finally
      {
          gate.Release();
      }
  }
}
`}}),"\n",(0,r.jsx)(t.admonition,{title:"On a 401",type:"tip",children:(0,r.jsxs)(t.p,{children:["If a call returns ",(0,r.jsx)(t.code,{children:"401"}),", the token may have expired early or been revoked. Get a new token and retry the call ",(0,r.jsx)(t.strong,{children:"once"}),". If it fails again, stop and check your credentials."]})}),"\n",(0,r.jsx)(t.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Response"}),(0,r.jsx)(t.th,{children:"Cause"}),(0,r.jsx)(t.th,{children:"Fix"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"400"})," ",(0,r.jsx)(t.code,{children:'{"error": "invalid_credentials", ...}'})]}),(0,r.jsx)(t.td,{children:"Wrong or missing client ID or secret, or the credentials are disabled."}),(0,r.jsx)(t.td,{children:"Check both values and the case of the secret. Check you are not using sandbox credentials in production."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"400"})," ",(0,r.jsx)(t.code,{children:'{"error": "unsupported_grant_type"}'})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"grant_type"})," is missing or not ",(0,r.jsx)(t.code,{children:"client_credentials"}),"."]}),(0,r.jsxs)(t.td,{children:["Send ",(0,r.jsx)(t.code,{children:"grant_type=client_credentials"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"503"})," ",(0,r.jsx)(t.code,{children:'{"error": "temporarily_unavailable", ...}'})]}),(0,r.jsx)(t.td,{children:"The token service is briefly unavailable."}),(0,r.jsx)(t.td,{children:"Retry after a few seconds, with backoff."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"401"})," on any other call"]}),(0,r.jsx)(t.td,{children:"Missing, malformed or expired token."}),(0,r.jsx)(t.td,{children:"Get a new token and retry once."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"keep-credentials-safe",children:"Keep credentials safe"}),"\n",(0,r.jsx)(t.admonition,{title:"Never expose the client secret",type:"danger",children:(0,r.jsx)(t.p,{children:"Anyone with the secret can submit and cancel orders as you."})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Store the secret in a secrets manager or an environment variable. Never commit it or write it to logs."}),"\n",(0,r.jsx)(t.li,{children:"Call the API from your servers only. Never put the secret in a browser, mobile app or anything a customer can download."}),"\n",(0,r.jsx)(t.li,{children:"Do not share one credential between unrelated systems; ask for a separate one."}),"\n",(0,r.jsx)(t.li,{children:"If a secret may have been exposed, contact Capacity Support straight away so it can be replaced."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"existing-integrations",children:"Existing integrations"}),"\n",(0,r.jsxs)(t.p,{children:["Integrations built for the previous Capacity REST API, at ",(0,r.jsx)(t.code,{children:"api-integration.capacityllc.com"}),", may keep calling ",(0,r.jsx)(t.code,{children:"POST /Token"})," with their existing credentials. It behaves the same as ",(0,r.jsx)(t.code,{children:"POST /api/v1/auth/token"}),". New integrations must use ",(0,r.jsx)(t.code,{children:"POST /api/v1/auth/token"})," at ",(0,r.jsx)(t.code,{children:"api-partner.capacityllc.com"}),". See ",(0,r.jsx)(t.a,{href:"/getting-started/environments#existing-integrations",children:"Existing integrations"}),"."]})]})}function y(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},17539(e,t,n){n.r(t),n.d(t,{default:()=>s});let s={tabList:"tabList_zI5C",tabItem:"tabItem_yeRP"}},27154(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=(0,a.default)(),n=(0,d.useTabsContextValue)(e);return r.default.createElement(d.TabsProvider,{value:n,key:String(t)},r.default.createElement(x,{className:e.className},(0,d.sanitizeTabsChildren)(e.children)))};let r=s(n(96540)),i=n(61827),a=s(n(19863)),c=s(n(71508)),l=n(92181),d=n(13042),o=s(n(17539));function h({className:e}){let{selectedValue:t,selectValue:n,tabValues:s,block:i}=(0,d.useTabs)(),a=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.useScrollPositionBlocker)(),x=e=>{let r=e.currentTarget,i=s[a.indexOf(r)].value;i!==t&&(u(r),n(i))},p=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{let n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{let n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1]}}t?.focus()};return r.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":i},e)},s.map(({value:e,label:n,attributes:s})=>r.default.createElement("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>{a.push(e)},onKeyDown:p,onClick:x,...s,className:(0,c.default)("tabs__item",o.default.tabItem,s?.className,{"tabs__item--active":t===e})},n??e)))}function u({children:e}){return r.default.createElement("div",{className:"margin-top--md"},e)}function x({className:e,children:t}){return r.default.createElement("div",{className:(0,c.default)(i.ThemeClassNames.tabs.container,"tabs-container",o.default.tabList)},r.default.createElement(h,{className:e}),r.default.createElement(u,null,t))}}}]);