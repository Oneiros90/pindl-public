import{F as e,J as t,K as n,X as r,et as i,q as a}from"./Co2yOmnE.js";import{N as o,f as s}from"./BjCCLpne.js";import{t as c}from"./BgXzko78.js";var l=((e,t={})=>(t.locale??o())===`it`?`Ora sei ${e?.name}`:`You are now ${e?.name}`),u=((e={},t={})=>(t.locale??o())===`it`?`Te stesso`:`Yourself`),d=((e={},t={})=>(t.locale??o())===`it`?`Questo pin non è più disponibile.`:`This pin is no longer available.`),f=[`vendo`,`compro`,`regalo`,`cerco`,`offro`,`incontro`,`segnalo`,`avviso`,`penso`],ee=`#17142e`,p={vendo:{id:`vendo`,color:`#2bbb71`,text:{light:`#047c46`,dark:`#2bbb71`},icon:`tag`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`,price:!0},compro:{id:`compro`,color:`#28bfd2`,text:{light:`#017885`,dark:`#28bfd2`},icon:`shopping-basket`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`},regalo:{id:`regalo`,color:`#f068bc`,text:{light:`#b8338a`,dark:`#f068bc`},icon:`gift`,defaultDays:7,maxDays:14,renewable:!1,expiry:`days`},cerco:{id:`cerco`,color:`#5b8efe`,text:{light:`#3564d4`,dark:`#5b8efe`},icon:`search`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`},offro:{id:`offro`,color:`#a47efc`,text:{light:`#7a52cc`,dark:`#a47efc`},icon:`hand-heart`,defaultDays:30,maxDays:90,renewable:!0,expiry:`days`},incontro:{id:`incontro`,color:`#ff8e2a`,text:{light:`#a65603`,dark:`#ff8e2a`},icon:`users`,defaultDays:7,maxDays:60,renewable:!1,expiry:`event`},segnalo:{id:`segnalo`,color:`#f6544b`,text:{light:`#cc2827`,dark:`#f6544b`},icon:`triangle-alert`,defaultDays:180,maxDays:180,renewable:!1,expiry:`resolved`},avviso:{id:`avviso`,color:`#fbcb2f`,text:{light:`#846804`,dark:`#fbcb2f`},icon:`megaphone`,defaultDays:7,maxDays:30,renewable:!1,expiry:`days`},penso:{id:`penso`,color:`#afe04e`,text:{light:`#567501`,dark:`#afe04e`},icon:`message-circle`,defaultDays:2,maxDays:7,renewable:!1,expiry:`days`}},m=f.map(e=>p[e]);function h(e){return typeof e==`string`&&f.includes(e)}var g=class extends Error{code;constructor(e,t){super(t),this.name=`PindlError`,this.code=e}},te=1e3,ne=/[̀-ͯ]/g;function _(e){return e.normalize(`NFD`).replace(ne,``).toLowerCase().replace(/\s+/g,` `).trim()}function v(e){return _(e).replace(/[^a-z0-9]/g,``).slice(0,30)}function re(e){let t=[];for(let n of e.matchAll(/#([\p{L}\p{N}_]+)/gu)){let e=v(n[1]);e&&!t.includes(e)&&t.push(e)}return t}function ie(e=[],...t){let n=[],r=e=>{e&&!n.includes(e)&&n.length<5&&n.push(e)};return e.forEach(e=>r(v(e))),t.forEach(e=>e&&re(e).forEach(r)),n}function ae(e){return e.replace(/[\r\n\t]+/g,` `).replace(/\s+/g,` `).trim()}function oe(e){return e.length?` ${e.join(` `)} `:``}function se(e){return e.split(` `).filter(Boolean)}function ce(e,t){let n=_(e);return t.length?`${n} ${t.map(e=>`#${e}`).join(` `)}`:n}var le=[/\b(?:via|viale|corso|piazza|piazzetta|largo|vicolo|strada|lungo ?po)\s+[\p{L}. ']{2,40}?\s*,?\s*(?:n\.?\s*|numero\s+|civico\s+)?\d{1,4}\b|\b(?:citofono|interno\s+\d+|scala\s+[a-z]\b|(?:primo|secondo|terzo|quarto|quinto|ultimo)\s+piano|piano\s+\d+|civico\s+\d+)/iu,/\b\d{1,4}[a-z]?\s+[\p{L}. ']{2,40}?\s+(?:street|st|road|rd|avenue|ave|lane|ln|drive|dr|place|pl|square|sq|terrace|way|close|crescent)\b|\b(?:flat|apartment|apt|unit)\s+\d+|\b(?:first|second|third|fourth|fifth|top)\s+floor\b|\bbuzzer\b/iu];function ue(e){return le.some(t=>t.test(e))}var de=6371008.8,y=Math.PI/180,b=111320;function fe(e,t){let n=(t.lat-e.lat)*y,r=(t.lng-e.lng)*y,i=Math.sin(n/2)**2+Math.cos(e.lat*y)*Math.cos(t.lat*y)*Math.sin(r/2)**2;return 2*de*Math.asin(Math.min(1,Math.sqrt(i)))}function pe(e,t,n){let r=t*Math.cos(n)/b,i=t*Math.sin(n)/(b*Math.cos(e.lat*y));return{lng:e.lng+i,lat:e.lat+r}}function x(e,t){return e.lng>=t[0]&&e.lng<=t[2]&&e.lat>=t[1]&&e.lat<=t[3]}function me(e){return{lng:Math.round(e.lng*1e6)/1e6,lat:Math.round(e.lat*1e6)/1e6}}function he(e,t,n=64){let r=[];for(let i=0;i<=n;i++){let a=pe(e,t,i/n*2*Math.PI);r.push([a.lng,a.lat])}return r}var S=2e3,ge=Math.PI/180,C=90/b;function _e(e){let t=(e+.5)*C;return 90/(b*Math.cos(t*ge))}function w(e){let t=Math.floor(e.lat/C),n=_e(t),r=Math.floor(e.lng/n);return{id:`${t}:${r}`,row:t,col:r,center:{lng:(r+.5)*n,lat:(t+.5)*C}}}function ve(e){return e>0?Math.min(S,Math.max(150,Math.round(e))):0}function ye(e){let t=1779033703,n=3144134277,r=1013904242,i=2773480762;for(let a=0;a<e.length;a++){let o=e.charCodeAt(a);t=n^Math.imul(t^o,597399067),n=r^Math.imul(n^o,2869860233),r=i^Math.imul(r^o,951274213),i=t^Math.imul(i^o,2716044179)}return t=Math.imul(r^t>>>18,597399067),n=Math.imul(i^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),i=Math.imul(n^i>>>19,2716044179),t^=n^r^i,[t>>>0,(n^t)>>>0,(r^t)>>>0,(i^t)>>>0]}function T(e,t,n,r){let i=ve(t);if(i===0)return{position:me(e),radius:0};let a=w(e),[o,s]=ye(`${r}|${n}|${a.id}`),c=o/4294967296*2*Math.PI,l=i/2*Math.sqrt(s/4294967296);return{position:me(pe(a.center,l,c)),radius:i}}function be(e){return w(e).id}function xe(e,t){if(!t)return!1;let[n,r]=t.split(`:`).map(Number);if(!Number.isFinite(n)||!Number.isFinite(r))return!1;let i=w(e);if(Math.abs(i.row-n)>1)return!1;let a=(r+.5)*_e(n);return Math.abs(i.center.lng-a)*b*Math.cos(i.center.lat*ge)<=135}var E={verbs:[],q:``,tags:[],time:`any`,source:`all`,board:null};function Se(e){return e.verbs.length>0||e.q.trim()!==``||e.tags.length>0||e.time!==`any`||e.source!==`all`||e.board!==null}function D(e){let t=[],n=[];for(let r of e.split(/\s+/))if(r){if(r.startsWith(`#`)){let e=v(r);e&&n.push(e)}else{let e=_(r);e&&t.push(e)}}return{words:t,tagPrefixes:n}}var O=86400;function k(e){let{words:t,tagPrefixes:n}=D(e.q);return t.length>0||n.length>0||e.tags.length>0}function A(e){let t=new Date(e*1e3);t.setHours(0,0,0,0);let n=Math.floor(t.getTime()/1e3);return{start:n,end:n+O}}function Ce(e,t){let n=[`all`,[`>`,[`get`,`expires`],t.now]];e.verbs.length&&n.push([`in`,[`get`,`verb`],[`literal`,[...e.verbs]]]);let{words:r,tagPrefixes:i}=D(e.q);if(!e.board&&!k(e)&&n.push([`==`,[`get`,`only`],0]),r.length||i.length){let e=[`all`];for(let t of r)e.push([`in`,t,[`get`,`q`]]);for(let t of i)e.push([`in`,` ${t}`,[`get`,`tags`]]);t.descriptionHits?.length?n.push([`any`,e,[`in`,[`get`,`id`],[`literal`,[...t.descriptionHits]]]]):n.push(e)}for(let t of e.tags)n.push([`in`,` ${t} `,[`get`,`tags`]]);if(e.time!==`any`){let{start:r,end:i}=A(t.now);e.time===`today`?n.push([`any`,[`>=`,[`get`,`created`],r],[`all`,[`>`,[`get`,`starts`],0],[`<`,[`get`,`starts`],i]]]):e.time===`week`?n.push([`any`,[`>=`,[`get`,`created`],t.now-7*O],[`all`,[`>`,[`get`,`starts`],0],[`<`,[`get`,`starts`],t.now+7*O]]]):n.push([`>`,[`get`,`starts`],0])}return e.source!==`all`&&n.push([`==`,[`get`,`kind`],e.source]),e.board&&n.push([`==`,[`get`,`board`],e.board]),n}function we(e,t,n){if(!(e.expires>n.now)||t.verbs.length&&!t.verbs.includes(e.verb))return!1;let{words:r,tagPrefixes:i}=D(t.q);if(!t.board&&!k(t)&&e.only||(r.length||i.length)&&!(r.every(t=>e.q.includes(t))&&i.every(t=>e.tags.includes(` ${t}`)))&&!n.descriptionHits?.includes(e.id))return!1;for(let n of t.tags)if(!e.tags.includes(` ${n} `))return!1;if(t.time!==`any`){let{start:r,end:i}=A(n.now);if(t.time===`today`){if(!(e.created>=r||e.starts>0&&e.starts<i))return!1}else if(t.time===`week`){if(!(e.created>=n.now-7*O||e.starts>0&&e.starts<n.now+7*O))return!1}else if(!(e.starts>0))return!1}return!(t.source!==`all`&&e.kind!==t.source||t.board&&e.board!==t.board)}function Te(e,t=new URLSearchParams){return e.verbs.length&&t.set(`v`,e.verbs.join(`,`)),e.q.trim()&&t.set(`q`,e.q.trim()),e.tags.length&&t.set(`tag`,e.tags.join(`,`)),e.time!==`any`&&t.set(`t`,e.time),e.source!==`all`&&t.set(`s`,e.source),e.board&&t.set(`lista`,e.board),t}function j(e){let t=e.get(`t`),n=e.get(`s`);return{verbs:(e.get(`v`)??``).split(`,`).filter(h),q:e.get(`q`)??``,tags:(e.get(`tag`)??``).split(`,`).map(v).filter(Boolean),time:t===`today`||t===`week`||t===`upcoming`?t:`any`,source:n===`individual`||n===`business`?n:`all`,board:e.get(`lista`)||e.get(`b`)||null}}function Ee(e){return[`v`,`q`,`tag`,`t`,`s`,`lista`,`b`].some(t=>e.has(t))}var De=86400;function Oe(e,t){let n=Math.max(0,(t-e.createdAt)/De);return Math.round(100*Math.exp(-n/10))+8*Math.min(e.confirmations,25)}function ke(e,t){return{id:e.id,verb:e.verb,title:e.title,tags:oe(e.tags),q:ce(e.title,e.tags),kind:e.kind,board:e.board??``,only:e.board&&!e.alsoOnMap?1:0,score:Oe(e,t),votes:e.confirmations,created:e.createdAt,expires:e.expiresAt,starts:e.starts??0,radius:e.radius}}function Ae(e,t){return{type:`Feature`,geometry:{type:`Point`,coordinates:[e.position.lng,e.position.lat]},properties:ke(e,t)}}function je(e,t){let n=[];for(let r of e)n.push(Ae(r,t));return{type:`FeatureCollection`,features:n}}function M(e=Date.now()){let t=new Uint8Array(16);crypto.getRandomValues(t);let n=BigInt(Math.floor(e));t[0]=Number(n>>40n&255n),t[1]=Number(n>>32n&255n),t[2]=Number(n>>24n&255n),t[3]=Number(n>>16n&255n),t[4]=Number(n>>8n&255n),t[5]=Number(n&255n),t[6]=t[6]&15|112,t[8]=t[8]&63|128;let r=Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``);return`${r.slice(0,8)}-${r.slice(8,12)}-${r.slice(12,16)}-${r.slice(16,20)}-${r.slice(20)}`}function Me(e=24){let t=new Uint8Array(e);return crypto.getRandomValues(t),Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function N(){return Math.floor(Date.now()/1e3)}var P=86400;function Ne(e){if(!e||typeof e!=`object`)return!1;let{lng:t,lat:n}=e;return typeof t==`number`&&typeof n==`number`&&Number.isFinite(t)&&Number.isFinite(n)&&Math.abs(t)<=180&&Math.abs(n)<=90}function Pe(e){let t={...e};return typeof t.title==`string`&&(t.title=ae(t.title)),typeof t.description==`string`&&(t.description=t.description.trim(),t.description||delete t.description),(t.tags!==void 0||t.title!==void 0||t.description!==void 0)&&(t.tags=ie(t.tags??[],t.title,t.description)),t}function Fe(e,t,n=!1){let r=[],i=t=>e[t]!==void 0;if(n&&!i(`verb`)||h(e.verb)||r.push({field:`verb`,code:`required`}),!n||i(`title`)){let t=e.title??``;t.trim()?[...t].length>60?r.push({field:`title`,code:`too_long`}):/[\r\n]/.test(t)&&r.push({field:`title`,code:`one_line`}):r.push({field:`title`,code:`required`})}if(i(`description`)&&[...e.description??``].length>1e3&&r.push({field:`description`,code:`too_long`}),i(`tags`)){let t=e.tags??[];t.length>5&&r.push({field:`tags`,code:`too_many`}),t.some(e=>!/^[a-z0-9]+$/.test(e)||e.length>30)&&r.push({field:`tags`,code:`invalid`})}if(i(`photos`)&&(e.photos??[]).length>10&&r.push({field:`photos`,code:`too_many`}),n&&!i(`point`)||Ne(e.point)||r.push({field:`point`,code:`required`}),!n||i(`radius`)){let t=e.radius??0;(typeof t!=`number`||t<0||t>0&&(t<150||t>2e3))&&r.push({field:`radius`,code:`out_of_range`})}if(i(`price`)&&!(typeof e.price==`number`&&e.price>=0&&e.price<1e7)&&r.push({field:`price`,code:`invalid`}),i(`durationDays`)){let t=e.durationDays,n=h(e.verb)?p[e.verb].maxDays:180;typeof t==`number`&&t>=1&&t<=n||r.push({field:`durationDays`,code:`out_of_range`})}if(e.verb===`incontro`&&(!n||i(`starts`))){let n=p.incontro.maxDays;typeof e.starts==`number`?e.starts>t+n*P?r.push({field:`starts`,code:`too_far`}):typeof e.ends==`number`&&e.ends<=e.starts?r.push({field:`ends`,code:`before_start`}):(e.ends??e.starts)<t-P&&r.push({field:`starts`,code:`in_past`}):r.push({field:`starts`,code:`required`})}return r}function F(e,t,n={}){let r=p[e];return r.expiry===`event`&&n.starts?n.ends??n.starts+10800:t+Math.min(r.maxDays,Math.max(1,n.durationDays??r.defaultDays))*P}function I(e){let t=[];if(!e||typeof e!=`object`)return[{field:``,code:`not_an_object`}];let n=e,r=e=>typeof e==`string`&&e.length>0,i=e=>typeof e==`number`&&Number.isFinite(e);r(n.id)||t.push({field:`id`,code:`required`}),h(n.verb)||t.push({field:`verb`,code:`invalid`}),(!r(n.title)||[...n.title??``].length>60||/[\r\n]/.test(n.title??``))&&t.push({field:`title`,code:`invalid`}),n.description!==void 0&&(typeof n.description!=`string`||[...n.description].length>1e3)&&t.push({field:`description`,code:`invalid`}),(!Array.isArray(n.tags)||n.tags.length>5||n.tags.some(e=>typeof e!=`string`||!/^[a-z0-9]+$/.test(e)||e.length>30))&&t.push({field:`tags`,code:`invalid`}),n.photos!==void 0&&(!Array.isArray(n.photos)||n.photos.length>10)&&t.push({field:`photos`,code:`invalid`}),Ne(n.position)||t.push({field:`position`,code:`invalid`}),(!i(n.radius)||n.radius<0||n.radius>2e3||n.radius>0&&n.radius<150)&&t.push({field:`radius`,code:`invalid`});for(let e of[`createdAt`,`updatedAt`,`expiresAt`,`confirmations`])i(n[e])||t.push({field:e,code:`invalid`});return n.status!==`published`&&n.status!==`pending`&&n.status!==`closed`&&t.push({field:`status`,code:`invalid`}),n.kind!==`individual`&&n.kind!==`business`&&t.push({field:`kind`,code:`invalid`}),n.author&&r(n.author.name)||t.push({field:`author`,code:`invalid`}),n.contact!==`chat`&&n.contact!==`comments`&&n.contact!==`none`&&t.push({field:`contact`,code:`invalid`}),t}var L=86400;function Ie(){return{pins:{},boards:{},pinOwners:{},boardOwners:{},confirms:{},comments:{}}}function Le(e){let t=Ie();for(let n of e.pins)t.pins[n.id]=n;for(let n of e.boards)t.boards[n.id]=n;return Object.assign(t.pinOwners,e.pinOwners),Object.assign(t.boardOwners,e.boardOwners),Object.assign(t.confirms,e.confirms),Object.assign(t.comments,e.comments),t}var Re=class{state;privacyKey;clock;onChange;constructor(e,t){this.state=e,this.privacyKey=t.privacyKey,this.clock=t.now??(()=>Math.floor(Date.now()/1e3)),this.onChange=t.onChange}now(){return this.clock()}emit(e=[],t=[],n=!1){(e.length||t.length||n)&&this.onChange?.({pins:e,boards:t,all:n})}sweep(){let e=this.now(),t=[];for(let n of Object.values(this.state.pins))n.status!==`closed`&&n.expiresAt<=e&&(n.status=`closed`,n.closedReason=`expired`,n.closedAt=n.expiresAt,t.push(n.id)),n.status===`closed`&&(n.closedAt??n.expiresAt)+30*L<=e&&(delete this.state.pins[n.id],delete this.state.pinOwners[n.id],delete this.state.confirms[n.id],delete this.state.comments[n.id],t.push(n.id));this.emit(t)}isOwner(e,t){return this.state.pinOwners[e]===t.id}canManageBoard(e,t){return!e||!this.state.boards[e]?!1:this.state.boardOwners[e]===t.id}canPostTo(e,t){let n=this.state.boards[e];return n?n.contributions!==`owner`||this.canManageBoard(e,t):!1}detail(e,t){return{...e,mine:this.isOwner(e.id,t),confirmedByMe:this.state.confirms[e.id]?.includes(t.id)??!1}}features(e={}){this.sweep();let t=[];for(let n of Object.values(this.state.pins))n.status===`published`&&(e.board&&n.board!==e.board||t.push(n));return je(t,this.now())}getPin(e,t){this.sweep();let n=this.state.pins[e];return!n||n.status!==`published`&&!this.isOwner(e,t)&&!this.canManageBoard(n.board,t)?null:this.detail(n,t)}ownPins(e){return this.sweep(),Object.values(this.state.pins).filter(t=>this.isOwner(t.id,e)).sort((e,t)=>t.updatedAt-e.updatedAt)}searchDescriptions(e,t){let n=_(e).split(` `).filter(e=>e&&!e.startsWith(`#`));if(!n.length)return[];let r=[];for(let e of Object.values(this.state.pins)){if(e.status!==`published`||!e.description||t&&!x(e.position,t))continue;let i=_(e.description);n.every(e=>i.includes(e))&&r.push(e.id)}return r}previewPosition(e,t,n){return T(e,t,n.id,this.privacyKey)}requirePin(e){let t=this.state.pins[e];if(!t)throw new g(`not_found`,`Pin not found`);return t}requireOwner(e,t){let n=this.requirePin(e);if(!this.isOwner(e,t))throw new g(`forbidden`,`Not your pin`);return n}checkBoardRules(e,t){if(!e)return;let n=this.state.boards[e];if(!n)throw new g(`board_not_found`,`List not found`);if(n.verbs.length&&!n.verbs.includes(t))throw new g(`board_verb`,`This verb is not accepted by the list`);return n}createPin(e,t){let n=this.now(),r=Pe(e),i=Fe(r,n);if(i.length)throw new g(`invalid`,i.map(e=>`${e.field}:${e.code}`).join(` `));let a=this.checkBoardRules(r.board,r.verb);if(a&&!this.canPostTo(a.id,t))throw new g(`board_closed`,`Only the owner adds pins to this list`);let o=!!a&&a.contributions===`approval`&&!this.canManageBoard(a.id,t),s=T(r.point,r.radius,t.id,this.privacyKey),c=p[r.verb].expiry===`event`,l={id:M(),verb:r.verb,title:r.title,tags:r.tags??[],position:s.position,radius:s.radius,createdAt:n,updatedAt:n,expiresAt:F(r.verb,n,r),status:o?`pending`:`published`,kind:`individual`,author:{name:t.name},contact:r.contact??(a||r.verb===`segnalo`||r.verb===`penso`?`comments`:`chat`),confirmations:0};return r.description&&(l.description=r.description),r.photos?.length&&(l.photos=r.photos),p[r.verb].price&&r.price!==void 0&&(l.price=r.price),c&&r.starts&&(l.starts=r.starts,r.ends&&(l.ends=r.ends)),a&&(l.board=a.id,r.alsoOnMap&&(l.alsoOnMap=!0)),this.state.pins[l.id]=l,this.state.pinOwners[l.id]=t.id,this.emit([l.id]),this.detail(l,t)}updatePin(e,t,n){let r=this.now(),i=this.requireOwner(e,n),a={...t,verb:t.verb??i.verb};a.tags===void 0&&(a.title!==void 0||a.description!==void 0)&&(a.tags=i.tags);let o=Pe(a);o.verb===`incontro`&&o.starts===void 0&&(o.starts=i.starts);let s=Fe(o,r,!0);if(s.length)throw new g(`invalid`,s.map(e=>`${e.field}:${e.code}`).join(` `));let c=null,l=o.radius??i.radius;if(o.point)c=T(o.point,l,n.id,this.privacyKey);else if(l!==i.radius){if(i.radius===0)c=T(i.position,l,n.id,this.privacyKey);else if(l>i.radius)c={position:i.position,radius:l};else throw new g(`point_required`,`Place the pin again to change its area`)}return this.checkBoardRules(i.board,o.verb??i.verb),h(o.verb)&&(i.verb=o.verb),o.title!==void 0&&(i.title=o.title),t.description!==void 0&&(o.description?i.description=o.description:delete i.description),o.tags!==void 0&&(i.tags=o.tags),o.photos!==void 0&&(o.photos.length?i.photos=o.photos:delete i.photos),c&&(i.position=c.position,i.radius=c.radius),p[i.verb].price?`price`in t&&(t.price===void 0?delete i.price:i.price=t.price):delete i.price,o.contact&&(i.contact=o.contact),i.board&&t.alsoOnMap!==void 0&&(t.alsoOnMap?i.alsoOnMap=!0:delete i.alsoOnMap),p[i.verb].expiry===`event`?(o.starts!==void 0&&(i.starts=o.starts),t.ends===void 0?t.starts!==void 0&&delete i.ends:i.ends=t.ends,i.expiresAt=F(i.verb,r,{starts:i.starts,ends:i.ends})):(delete i.starts,delete i.ends,o.durationDays!==void 0&&(i.expiresAt=F(i.verb,r,o))),i.updatedAt=r,this.emit([e]),this.detail(i,n)}closePin(e,t,n){let r=this.requireOwner(e,n),i=this.now();return r.status=`closed`,r.closedReason=t,r.closedAt=i,r.updatedAt=i,this.emit([e]),this.detail(r,n)}renewPin(e,t){let n=this.requireOwner(e,t),r=this.now(),i=p[n.verb];if(n.closedReason===`rejected`||n.closedReason===`removed`)throw new g(`removed_by_owner`,`The owner of the list took this pin out`);if(i.expiry===`event`)throw new g(`not_renewable`,`An event ends when it ends: edit its date instead`);let a=r+i.defaultDays*L;if(!i.renewable&&(a=Math.min(a,n.createdAt+i.maxDays*L),a<=r+3600))throw new g(`max_duration`,`Maximum duration reached`);n.expiresAt=a;let o=n.board?this.state.boards[n.board]:void 0,s=!!o&&o.contributions===`approval`&&!this.canManageBoard(o.id,t);return n.status=n.status===`pending`||n.status===`closed`&&s?`pending`:`published`,delete n.closedReason,delete n.closedAt,n.updatedAt=r,this.emit([e]),this.detail(n,t)}toggleConfirm(e,t){let n=this.requirePin(e);if(this.isOwner(e,t))throw new g(`own_pin`,`You cannot confirm your own pin`);if(n.status!==`published`)throw new g(`closed`,`The pin is not published`);let r=this.state.confirms[e]??=[],i=r.indexOf(t.id);return i>=0?(r.splice(i,1),n.confirmations=Math.max(0,n.confirmations-1)):(r.push(t.id),n.confirmations+=1),this.emit([e]),this.detail(n,t)}listComments(e,t){return this.getPin(e,t)?[...this.state.comments[e]??[]]:[]}addComment(e,t,n){let r=this.getPin(e,n);if(!r)throw new g(`not_found`,`Pin not found`);if(r.status!==`published`)throw new g(`closed`,`The pin is closed`);let i=String(t??``).trim();if(!i)throw new g(`invalid`,`comment:required`);if([...i].length>500)throw new g(`invalid`,`comment:too_long`);let a={id:M(),author:{name:n.name},text:i,createdAt:this.now()};return(this.state.comments[e]??=[]).push(a),this.emit([e]),a}importSharedPin(e,t){let n=this.state.pins[e.id];if(n)return this.detail(n,t);if(I(e).length)throw new g(`invalid`,`Invalid shared pin`);return this.state.pins[e.id]=e,this.emit([e.id]),this.detail(e,t)}boardDetail(e,t){let n=this.canManageBoard(e.id,t),r=0,i=0;for(let t of Object.values(this.state.pins))t.board===e.id&&(t.status===`published`?r++:t.status===`pending`&&n&&i++);return{...e,canManage:n,canPost:this.canPostTo(e.id,t),pinCount:r,pendingCount:i}}listBoards(e){return this.sweep(),Object.values(this.state.boards).map(t=>this.boardDetail(t,e)).sort((e,t)=>e.name.localeCompare(t.name))}cleanBoardDraft(e){let t=e.name?.replace(/\s+/g,` `).trim()??``;if(!t||t.length>60)throw new g(`invalid`,`name:required`);let n=e.contributions===`approval`||e.contributions===`owner`?e.contributions:`open`;return{name:t,description:e.description?.trim().slice(0,500)||void 0,verbs:[...new Set((e.verbs??[]).filter(h))],contributions:n}}createBoard(e,t){if(!t.name.trim())throw new g(`forbidden`,`A name is needed to create a list`);let n=this.cleanBoardDraft(e),r={id:M(),...n,owner:{name:t.name},createdAt:this.now()};return r.description||delete r.description,this.state.boards[r.id]=r,this.state.boardOwners[r.id]=t.id,this.emit([],[r.id]),this.boardDetail(r,t)}updateBoard(e,t,n){let r=this.state.boards[e];if(!r)throw new g(`board_not_found`,`List not found`);if(!this.canManageBoard(e,n))throw new g(`forbidden`,`Not your list`);Object.assign(r,this.cleanBoardDraft(t)),r.description||delete r.description;let i=[];if(r.contributions!==`approval`)for(let t of Object.values(this.state.pins))t.board===e&&t.status===`pending`&&(t.status=`published`,i.push(t.id));return this.emit(i,[e]),this.boardDetail(r,n)}boardPins(e,t){this.sweep();let n=this.canManageBoard(e,t);return Object.values(this.state.pins).filter(t=>t.board===e&&(t.status===`published`||n&&t.status===`pending`)).sort((e,t)=>t.createdAt-e.createdAt)}requireManager(e,t){let n=this.state.boards[e];if(!n)throw new g(`board_not_found`,`List not found`);if(!this.canManageBoard(e,t))throw new g(`forbidden`,`Not your list`);return n}reviewPins(e,t,n,r){this.requireManager(e,r);let i=this.now(),a=[];for(let r of t){let t=this.state.pins[r];t&&t.board===e&&t.status===`pending`&&(n===`approve`?t.status=`published`:(t.status=`closed`,t.closedReason=`rejected`,t.closedAt=i),t.updatedAt=i,a.push(t))}return this.emit(a.map(e=>e.id)),a}removePins(e,t,n){this.requireManager(e,n);let r=this.now(),i=[];for(let n of t){let t=this.state.pins[n];t&&t.board===e&&t.status!==`closed`&&(t.status=`closed`,t.closedReason=`removed`,t.closedAt=r,t.updatedAt=r,i.push(t))}return this.emit(i.map(e=>e.id)),i}exportDataSet(){return this.sweep(),{pindl:1,exportedAt:this.now(),pins:Object.values(this.state.pins),boards:Object.values(this.state.boards),pinOwners:{...this.state.pinOwners},boardOwners:{...this.state.boardOwners},confirms:{...this.state.confirms},comments:{...this.state.comments}}}importDataSet(e){if(!e||e.pindl!==1||!Array.isArray(e.pins)||!Array.isArray(e.boards))throw new g(`invalid`,`Not a Pindl data set`);let t={...e,pins:e.pins.filter(e=>I(e).length===0)};this.state=Le(t),this.emit([],[],!0)}};function ze(e,t,n){let r=n-t,i=e=>e===void 0?void 0:e+r;return{...e,exportedAt:n,pins:e.pins.map(e=>{let t={...e,createdAt:e.createdAt+r,updatedAt:e.updatedAt+r,expiresAt:e.expiresAt+r};return e.starts!==void 0&&(t.starts=i(e.starts)),e.ends!==void 0&&(t.ends=i(e.ends)),e.closedAt!==void 0&&(t.closedAt=i(e.closedAt)),t}),boards:e.boards.map(e=>({...e,createdAt:e.createdAt+r})),...e.comments?{comments:Object.fromEntries(Object.entries(e.comments).map(([e,t])=>[e,t.map(e=>({...e,createdAt:e.createdAt+r}))]))}:{}}}var Be=400;function Ve(e){let t=new TextEncoder().encode(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function He(e){let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`)),n=Uint8Array.from(t,e=>e.charCodeAt(0));return new TextDecoder().decode(n)}function Ue(e){let t=e.description&&e.description.length>Be?`${e.description.slice(0,399)}…`:e.description,n=[1,e.id,e.verb,e.title,t??``,e.tags,[e.position.lng,e.position.lat],e.radius,e.createdAt,e.expiresAt,+(e.kind===`business`),[e.author.name,e.author.mark??``],e.contact,e.board??``,e.price??null,e.starts??null,e.ends??null,e.confirmations,+!!e.alsoOnMap];return Ve(JSON.stringify(n))}function We(e){try{let t=JSON.parse(He(e));if(!Array.isArray(t)||t[0]!==1||!h(t[2]))return null;let n={id:String(t[1]),verb:t[2],title:String(t[3]),tags:Array.isArray(t[5])?t[5].map(String):[],position:{lng:Number(t[6][0]),lat:Number(t[6][1])},radius:Number(t[7]),createdAt:Number(t[8]),updatedAt:Number(t[8]),expiresAt:Number(t[9]),status:`published`,kind:t[10]?`business`:`individual`,author:{name:String(t[11][0]),...t[11][1]?{mark:t[11][1]}:{}},contact:t[12],confirmations:Number(t[17])||0};return t[4]&&(n.description=String(t[4])),t[13]&&(n.board=String(t[13])),t[13]&&t[18]&&(n.alsoOnMap=!0),typeof t[14]==`number`&&(n.price=t[14]),typeof t[15]==`number`&&(n.starts=t[15]),typeof t[16]==`number`&&(n.ends=t[16]),I(n).length?null:n}catch{return null}}var R=`selected-pin`,z=`pins-free`,B=[{min:0,max:11,free:1/0},{min:11,max:13,free:1e3},{min:13,max:15,free:400},{min:15,max:24,free:1}],V=e=>`pins-${e}`,H=16.5,Ge={cluster:!0,clusterRadius:44,clusterMaxZoom:16,clusterMinPoints:3};function Ke(e){return`pindl-${e}`}function qe(e){let t=B.map((t,n)=>({source:V(n),filter:Number.isFinite(t.free)?[`all`,e,[`<`,[`get`,`radius`],t.free]]:e}));return t.push({source:z,filter:[`all`,e,[`>`,[`get`,`radius`],0]]}),t}function Je(){let e=[`step`,[`zoom`],1e9];for(let t of B)t.min>0&&e.push(t.min,Number.isFinite(t.free)?t.free:1e9);return[`>=`,[`get`,`radius`],e]}function U(e,t){let n=[`match`,[`get`,`verb`]];for(let t of m)n.push(t.id,e(t));return n.push(t),n}function W(e){return[`case`,[`>`,[`length`,[`get`,`title`]],e],[`concat`,[`slice`,[`get`,`title`],0,e-1],`…`],[`get`,`title`]]}var G=[`!`,[`has`,`point_count`]],Ye=`pindl-sign`,Xe=e=>`pindl-sign-${e}`,Ze={light:{surface:`#ffffff`,ink:`#17142e`,onInk:`#ffffff`},dark:{surface:`#1b1832`,ink:`#f4f2fb`,onInk:`#17142e`}},Qe=[7,11,7,33],$e=[1.62,0];function et(e={}){let t=e.theme===`dark`?`dark`:`light`,n=Ze[t],r=e.fonts??{regular:[`Noto Sans Regular`],bold:[`Noto Sans Bold`]},i=U(e=>e.color,`#555555`),a=U(e=>e.text[t],n.ink),o=U(t=>e.verbLabels?.[t.id]??t.id[0].toUpperCase()+t.id.slice(1),``),s=(e,t=!0)=>[`format`,o,{"font-scale":.92,"text-font":[`literal`,r.bold],...t?{"text-color":a}:{}},` · `,{},e,{}],c=e=>e?[`step`,[`zoom`],W(26),H,s(W(40)),18,s([`get`,`title`])]:[`step`,[`zoom`],``,15,W(26),H,s(W(40)),18,s([`get`,`title`])],l=[`interpolate`,[`linear`],[`zoom`],10,.55,13,.62,16,.8],u=[],d=[],f=(e,t,n)=>({id:e,type:`symbol`,source:t,...n,layout:{"icon-image":[`concat`,`pindl-`,[`get`,`verb`]],"icon-size":l,"icon-allow-overlap":!0,"icon-ignore-placement":!1,"icon-padding":1,"symbol-sort-key":[`-`,[`get`,`score`]]}}),p=(e,t,i,a=!1)=>({id:e,type:`symbol`,source:t,...i,layout:{"icon-image":Ye,"icon-allow-overlap":!0,"icon-text-fit":`both`,"icon-text-fit-padding":Qe,"text-field":c(a),"text-font":r.bold,"text-size":13,"text-max-width":100,"text-anchor":`left`,"text-offset":$e,"text-padding":4,"symbol-sort-key":[`-`,[`get`,`score`]]},paint:{"text-color":n.ink}});return B.forEach((e,t)=>{let a=V(t),o={minzoom:e.min,maxzoom:e.max};e.max>15&&(u.push(p(`pin-signs-${t}`,a,{minzoom:Math.max(e.min,15),maxzoom:e.max,filter:G})),d.push(`pin-signs-${t}`)),u.push({id:`pin-clusters-${t}`,type:`circle`,source:a,...o,filter:[`has`,`point_count`],paint:{"circle-color":n.ink,"circle-stroke-color":n.surface,"circle-stroke-width":3,"circle-radius":[`step`,[`get`,`point_count`],16,10,19,50,22,200,26]}}),u.push({id:`pin-cluster-counts-${t}`,type:`symbol`,source:a,...o,filter:[`has`,`point_count`],layout:{"text-field":[`concat`,`+`,[`to-string`,[`get`,`point_count`]]],"text-font":r.bold,"text-size":13,"text-allow-overlap":!0,"text-ignore-placement":!1,"text-padding":6},paint:{"text-color":n.onInk}}),d.push(`pin-clusters-${t}`),e.min<13&&(u.push({id:`pin-dots-${t}`,type:`circle`,source:a,minzoom:e.min,maxzoom:Math.min(e.max,13),filter:G,paint:{"circle-radius":[`interpolate`,[`linear`],[`zoom`],8,3.5,13,6.5],"circle-color":i,"circle-stroke-color":n.surface,"circle-stroke-width":2}}),d.push(`pin-dots-${t}`)),e.max>13&&(u.push(f(`pin-icons-${t}`,a,{minzoom:Math.max(e.min,13),maxzoom:e.max,filter:G})),d.push(`pin-icons-${t}`))}),u.push(p(`pin-free-signs`,z,{filter:Je()},!0)),u.push(f(`pin-free`,z,{filter:Je()})),d.push(`pin-free-signs`,`pin-free`),u.push({id:`pin-selected-sign`,type:`symbol`,source:R,layout:{"icon-image":[`concat`,`pindl-sign-`,[`get`,`verb`]],"icon-text-fit":`both`,"icon-text-fit-padding":[9,13,9,38],"text-field":[`step`,[`zoom`],W(30),H,s(W(40),!1)],"text-font":r.bold,"text-size":14,"text-max-width":100,"text-anchor":`left`,"text-offset":[1.8,0],"text-allow-overlap":!0,"text-ignore-placement":!0,"icon-allow-overlap":!0,"icon-ignore-placement":!0},paint:{"text-color":ee}}),u.push({id:`pin-selected-icon`,type:`symbol`,source:R,layout:{"icon-image":[`concat`,`pindl-`,[`get`,`verb`]],"icon-size":.92,"icon-allow-overlap":!0,"icon-ignore-placement":!0}}),{layers:u,hitLayers:d}}var tt=new URL(`../assets/seed.C9hbnZ_U.json`,import.meta.url).href,nt=`pindl-prototype`;function rt(){return new Promise(e=>{try{let t=indexedDB.open(nt,1);t.onupgradeneeded=()=>{let e=t.result;e.objectStoreNames.contains(`pins`)||e.createObjectStore(`pins`,{keyPath:`id`}),e.objectStoreNames.contains(`boards`)||e.createObjectStore(`boards`,{keyPath:`id`}),e.objectStoreNames.contains(`meta`)||e.createObjectStore(`meta`)},t.onsuccess=()=>e(t.result),t.onerror=()=>e(null),t.onblocked=()=>e(null)}catch{e(null)}})}function K(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error)})}function it(e,t){return new Promise((n,r)=>{let i=e.transaction(t).objectStore(t).getAll();i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function q(e,t){return new Promise((n,r)=>{let i=e.transaction(`meta`).objectStore(`meta`).get(t);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function at(){let e=new Date;return e.setHours(0,0,0,0),Math.floor(e.getTime()/1e3)}var ot=class{mode=`local`;db=null;engine;seedIds=new Set;tombstones=new Set;replaced=!1;localComments={};listeners=new Set;writes=Promise.resolve();getSession;constructor(e){this.getSession=e}async init(){this.db=await rt();let e,t=[],n=[],r={},i={},a={};if(this.db){let o=this.db;[t,n]=await Promise.all([it(o,`pins`),it(o,`boards`)]),e=await q(o,`privacyKey`),r=await q(o,`pinOwners`)??{},i=await q(o,`boardOwners`)??{},a=await q(o,`confirms`)??{},this.tombstones=new Set(await q(o,`tombstones`)??[]),this.replaced=await q(o,`replaced`)??!1,this.localComments=await q(o,`comments`)??{}}e||(e=Me(),this.putMeta({privacyKey:e}));let o=Ie();if(this.seedIds=new Set,!this.replaced){let e=await(await fetch(tt)).json(),t=Math.floor(Date.now()/1e3),n=ze(e,e.base,at());for(let e of n.pins)e.createdAt>t-300&&(e.createdAt=e.updatedAt=t-300-e.confirmations%7*600),this.seedIds.add(e.id);n.pins=n.pins.filter(e=>!this.tombstones.has(e.id)),o=Le(n)}for(let e of t)o.pins[e.id]=e;for(let e of n)e.contributions&&(o.boards[e.id]=e);Object.assign(o.pinOwners,r),Object.assign(o.boardOwners,i),Object.assign(o.confirms,a),Object.assign(o.comments,this.localComments),this.engine=new Re(o,{privacyKey:e,onChange:e=>this.persist(e)})}putMeta(e){let t=this.db;t&&(this.writes=this.writes.then(()=>{let n=t.transaction(`meta`,`readwrite`);for(let[t,r]of Object.entries(e))n.objectStore(`meta`).put(r,t);return K(n)}).catch(e=>console.warn(`Pindl: could not save to the device`,e)))}persist(e){let t=this.db,n=this.engine.state;if(t){let r=(e.all?Object.keys(n.pins):e.pins).map(e=>[e,n.pins[e]&&structuredClone(n.pins[e])]),i=(e.all?Object.keys(n.boards):e.boards).map(e=>[e,n.boards[e]&&structuredClone(n.boards[e])]);e.all&&(this.replaced=!0,this.tombstones.clear(),this.seedIds.clear());for(let[e,t]of r)!t&&this.seedIds.has(e)&&this.tombstones.add(e);if(e.all)this.localComments=structuredClone(n.comments);else for(let[e,t]of r)t&&n.comments[e]?this.localComments[e]=structuredClone(n.comments[e]):delete this.localComments[e];let a={pinOwners:structuredClone(n.pinOwners),boardOwners:structuredClone(n.boardOwners),confirms:structuredClone(n.confirms),comments:structuredClone(this.localComments),tombstones:[...this.tombstones],replaced:this.replaced},o=e.all;this.writes=this.writes.then(()=>{let e=t.transaction([`pins`,`boards`,`meta`],`readwrite`);o&&(e.objectStore(`pins`).clear(),e.objectStore(`boards`).clear());for(let[t,n]of r)n?e.objectStore(`pins`).put(n):e.objectStore(`pins`).delete(t);for(let[t,n]of i)n?e.objectStore(`boards`).put(n):e.objectStore(`boards`).delete(t);for(let[t,n]of Object.entries(a))e.objectStore(`meta`).put(n,t);return K(e)}).catch(e=>console.warn(`Pindl: could not save to the device`,e))}queueMicrotask(()=>this.listeners.forEach(e=>e()))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}get session(){return this.getSession()}async loadPins(e={}){return this.engine.features(e)}async getPin(e){return this.engine.getPin(e,this.session)}async searchDescriptions(e,t){return this.engine.searchDescriptions(e,t)}async previewPosition(e,t){return this.engine.previewPosition(e,t,this.session)}async listComments(e){return this.engine.listComments(e,this.session)}async addComment(e,t){return this.engine.addComment(e,t,this.session)}async listOwnPins(){return this.engine.ownPins(this.session)}async listBoards(){return this.engine.listBoards(this.session)}async listBoardPins(e){return this.engine.boardPins(e,this.session)}async createPin(e){return this.engine.createPin(e,this.session)}async updatePin(e,t){return this.engine.updatePin(e,t,this.session)}async closePin(e,t){return this.engine.closePin(e,t,this.session)}async renewPin(e){return this.engine.renewPin(e,this.session)}async toggleConfirm(e){return this.engine.toggleConfirm(e,this.session)}async createBoard(e){return this.engine.createBoard(e,this.session)}async updateBoard(e,t){return this.engine.updateBoard(e,t,this.session)}async reviewPins(e,t,n){return this.engine.reviewPins(e,t,n,this.session)}async removePins(e,t){return this.engine.removePins(e,t,this.session)}async importSharedPin(e){return this.engine.importSharedPin(e,this.session)}async exportDataSet(){return this.engine.exportDataSet()}async importDataSet(e){this.engine.importDataSet(e)}async reset(){await this.writes;let e=this.db;if(e){let t=e.transaction([`pins`,`boards`,`meta`],`readwrite`);t.objectStore(`pins`).clear(),t.objectStore(`boards`).clear();for(let e of[`pinOwners`,`boardOwners`,`confirms`,`comments`,`tombstones`,`replaced`])t.objectStore(`meta`).delete(e);await K(t),e.close()}await this.init(),this.listeners.forEach(e=>e())}};function st(e){return new ot(e)}var J=`pindl:`;function Y(e,t){try{let n=localStorage.getItem(J+e);return n===null?t:JSON.parse(n)}catch{return t}}function X(e,t){try{t==null?localStorage.removeItem(J+e):localStorage.setItem(J+e,JSON.stringify(t))}catch{}}var Z={session(){let e=Y(`session`,null);if(e?.id)return{id:e.id,name:e.name??``};let t={id:M(),name:``};return X(`session`,t),t},saveSession:e=>X(`session`,e),demoAs:()=>Y(`demoAs`,null),saveDemoAs:e=>X(`demoAs`,e),saved:()=>Y(`saved`,[]),saveSaved:e=>X(`saved`,e),filters:()=>Y(`filters`,null),saveFilters:e=>X(`filters`,e),lastArea:()=>Y(`area`,null),saveLastArea:e=>X(`area`,e),homeZone:()=>Y(`home`,null),saveHomeZone:e=>X(`home`,e),homeAsked:()=>Y(`homeAsked`,!1),saveHomeAsked:()=>X(`homeAsked`,!0)},Q={lng:7.6808,lat:45.0545,zoom:14.6},ct=e=>({id:`demo:${e}`,name:e}),lt=new class{source;#e=t(!1);get ready(){return e(this.#e)}set ready(e){a(this.#e,e,!0)}#t=t(!1);get failed(){return e(this.#t)}set failed(e){a(this.#t,e,!0)}#n=t(n({id:``,name:``}));get ownSession(){return e(this.#n)}set ownSession(e){a(this.#n,e,!0)}#r=t(null);get demoAs(){return e(this.#r)}set demoAs(e){a(this.#r,e,!0)}#i=r(()=>this.demoAs?ct(this.demoAs):this.ownSession);get session(){return e(this.#i)}set session(e){a(this.#i,e)}#a=t(n({...E}));get filters(){return e(this.#a)}set filters(e){a(this.#a,e,!0)}#o=t([]);get descriptionHits(){return e(this.#o)}set descriptionHits(e){a(this.#o,e)}#s=t(n(N()));get now(){return e(this.#s)}set now(e){a(this.#s,e,!0)}#c=t([]);get features(){return e(this.#c)}set features(e){a(this.#c,e)}#l=t([]);get boards(){return e(this.#l)}set boards(e){a(this.#l,e)}#u=t(0);get revision(){return e(this.#u)}set revision(e){a(this.#u,e,!0)}#d=t(null);get panel(){return e(this.#d)}set panel(e){a(this.#d,e,!0)}#f=t(null);get selectedId(){return e(this.#f)}set selectedId(e){a(this.#f,e,!0)}#p=t(null);get selected(){return e(this.#p)}set selected(e){a(this.#p,e)}#m=t(!1);get selectedMissing(){return e(this.#m)}set selectedMissing(e){a(this.#m,e,!0)}#h=t(null);get camera(){return e(this.#h)}set camera(e){a(this.#h,e)}initialArea={...Q};#g=t(null);get userLocation(){return e(this.#g)}set userLocation(e){a(this.#g,e)}#_=t(!0);get mapAvailable(){return e(this.#_)}set mapAvailable(e){a(this.#_,e,!0)}map=null;#v=t(n([]));get saved(){return e(this.#v)}set saved(e){a(this.#v,e,!0)}#y=t(null);get homeZone(){return e(this.#y)}set homeZone(e){a(this.#y,e,!0)}#b=t(null);get editing(){return e(this.#b)}set editing(e){a(this.#b,e)}#x=t(null);get composeBoard(){return e(this.#x)}set composeBoard(e){a(this.#x,e,!0)}#S=t(null);get draftPoint(){return e(this.#S)}set draftPoint(e){a(this.#S,e)}#C=t(null);get draftPreview(){return e(this.#C)}set draftPreview(e){a(this.#C,e)}#w=t(null);get manageBoard(){return e(this.#w)}set manageBoard(e){a(this.#w,e,!0)}#T=t(void 0);get boardForm(){return e(this.#T)}set boardForm(e){a(this.#T,e,!0)}boardFormFrom=`boards`;#E=t(`mine`);get myPinsTab(){return e(this.#E)}set myPinsTab(e){a(this.#E,e,!0)}#D=t(!1);get backToPins(){return e(this.#D)}set backToPins(e){a(this.#D,e,!0)}pinsFrom=null;#O=t(!1);get fromMenu(){return e(this.#O)}set fromMenu(e){a(this.#O,e,!0)}#k=t(null);get toast(){return e(this.#k)}set toast(e){a(this.#k,e,!0)}toastTimer;loadToken=0;#A=r(()=>({now:this.now,descriptionHits:this.descriptionHits}));get filterContext(){return e(this.#A)}set filterContext(e){a(this.#A,e)}#j=r(()=>Ce(this.filters,this.filterContext));get filterExpression(){return e(this.#j)}set filterExpression(e){a(this.#j,e)}#M=r(()=>this.features.filter(e=>we(e.properties,this.filters,this.filterContext)));get filtered(){return e(this.#M)}set filtered(e){a(this.#M,e)}#N=r(()=>Se(this.filters));get filtersActive(){return e(this.#N)}set filtersActive(e){a(this.#N,e)}#P=r(()=>this.boards.find(e=>e.id===this.filters.board)??null);get currentBoard(){return e(this.#P)}set currentBoard(e){a(this.#P,e)}#F=r(()=>{let e=this.camera?.bounds;if(!e)return this.filtered.length;let t=0;for(let n of this.filtered)x({lng:n.geometry.coordinates[0],lat:n.geometry.coordinates[1]},e)&&t++;return t});get visibleCount(){return e(this.#F)}set visibleCount(e){a(this.#F,e)}#I=r(()=>{let e=this.camera?.bounds,t=new Map;for(let n of this.filtered)if(!e||x({lng:n.geometry.coordinates[0],lat:n.geometry.coordinates[1]},e))for(let e of se(n.properties.tags))t.set(e,(t.get(e)??0)+1);return[...t.entries()].sort((e,t)=>t[1]-e[1]).map(([e])=>e)});get nearbyTags(){return e(this.#I)}set nearbyTags(e){a(this.#I,e)}async start(){this.ownSession=Z.session(),this.demoAs=Z.demoAs(),this.saved=Z.saved(),this.homeZone=Z.homeZone(),this.source=st(()=>i(this.session));let e=this.readAddress(),t=Z.filters();Ee(e)?this.filters=j(e):t&&!e.has(`p`)&&!e.has(`pin`)&&(this.filters={...E,...t}),e.get(`view`)===`list`&&(this.panel=`pins`);let n=e.get(`m`)?.split(`,`).map(Number),r=Z.lastArea();n?.length===3&&n.every(Number.isFinite)?this.initialArea={lat:n[0],lng:n[1],zoom:n[2]}:r&&(this.initialArea=r);try{await this.source.init(),await this.reload()}catch(e){console.error(e),this.failed=!0;return}this.filters.board&&!this.boards.some(e=>e.id===this.filters.board)&&(this.filters.board=null),this.source.subscribe(()=>void this.reload()),setInterval(()=>this.now=N(),3e4),window.addEventListener(`hashchange`,()=>this.applyAddress()),this.ready=!0;let a=e.get(`p`),o=e.get(`pin`);a?await this.openSharedPin(a):o?await this.select(o,!0):this.filters.board&&!e.has(`m`)&&this.fitToPins()}async reload(){let e=++this.loadToken,[t,n]=await Promise.all([this.source.loadPins({board:this.filters.board}),this.source.listBoards()]);if(e===this.loadToken&&(this.features=t.features,this.boards=n,this.now=N(),this.revision++,this.selectedId)){let t=await this.source.getPin(this.selectedId);e===this.loadToken&&this.selectedId&&(this.selected=t,this.selectedMissing=!t)}}readAddress(){return new URLSearchParams(location.hash.replace(/^#/,``))}address(e={}){let t=Te(this.filters);if(this.panel===`pins`&&t.set(`view`,`list`),this.camera){let{center:e,zoom:n}=this.camera;t.set(`m`,`${e.lat.toFixed(5)},${e.lng.toFixed(5)},${n.toFixed(2)}`)}e.pin?t.set(`p`,Ue(e.pin)):this.selectedId&&t.set(`pin`,this.selectedId);let n=t.toString().replace(/%2C/g,`,`);return`${location.origin}${location.pathname}${n?`#${n}`:``}`}syncAddress(){let e=this.address();e!==location.href&&c(e,{shallow:!0,replace:!0,state:{}}).catch(()=>{})}async applyAddress(){let e=this.readAddress(),t=j(e),n=t.board!==this.filters.board;this.filters=t,e.get(`view`)===`list`?this.panel||=`pins`:this.panel===`pins`&&(this.panel=null),n&&await this.reload(),n&&t.board&&!e.has(`m`)&&!e.has(`pin`)&&this.fitToPins();let r=e.get(`m`)?.split(`,`).map(Number);r?.length===3&&r.every(Number.isFinite)&&this.map?.flyTo({lat:r[0],lng:r[1]},r[2]);let i=e.get(`p`),a=e.get(`pin`);i?await this.openSharedPin(i):a&&a!==this.selectedId&&await this.select(a,!0)}async openSharedPin(e){let t=We(e);if(!t)return this.notify(d());try{let e=await this.source.importSharedPin(t);await this.select(e.id,!0)}catch{this.notify(d())}}toggleVerb(e){let t=this.filters.verbs;this.filters.verbs=t.includes(e)?t.filter(t=>t!==e):[...t,e]}setQuery(e){this.filters.q=e,this.descriptionHits.length&&(this.descriptionHits=[])}toggleTag(e){let t=this.filters.tags;this.filters.tags=t.includes(e)?t.filter(t=>t!==e):[...t,e]}async setBoard(e){e!==this.filters.board&&(this.filters.board=e,await this.reload())}async clearFilters(){let e=this.filters.board!==null;this.filters={...E},this.descriptionHits=[],e&&await this.reload()}async searchDescriptions(){let e=this.camera?.bounds;if(!e||!this.filters.q.trim())return 0;let t=await this.source.searchDescriptions(this.filters.q,e),n=this.filtered.length;return this.descriptionHits=t,Math.max(0,this.filtered.length-n)}async select(e,t=!1){this.panel===`pins`?this.backToPins=!0:this.selectedId||(this.backToPins=!1),this.selectedId=e,this.selectedMissing=!1,this.selected?.id!==e&&(this.selected=null),this.panel!==`manage`&&(this.panel=null);let n=await this.source.getPin(e);this.selectedId===e&&(this.selected=n,this.selectedMissing=!n,n&&t&&(n.status===`published`&&!this.features.some(t=>t.properties.id===e)&&await this.setBoard(n.board??null),this.map?.flyTo(n.position,Math.max(this.camera?.zoom??0,16))))}deselect(){this.backToPins=!1,this.selectedId=null,this.selected=null,this.selectedMissing=!1}open(e){e!==`manage`&&this.deselect(),this.fromMenu=this.panel===`menu`&&e!==null&&e!==`menu`,this.panel=e}backToMenu(){this.fromMenu=!1,this.panel=`menu`}openPins(e=null){this.pinsFrom=e,this.deselect(),this.fromMenu=!1,this.panel=`pins`}closePanel(){this.panel===`composer`&&this.endCompose(),this.panel=null}compose(e={}){this.deselect(),this.editing=e.edit??null,this.composeBoard=e.edit?e.edit.board??null:e.board??this.filters.board,this.draftPreview=null,this.draftPoint=e.edit?null:this.map?.center()??this.camera?.center??Q,this.panel=`composer`}endCompose(){this.editing=null,this.draftPoint=null,this.draftPreview=null}async openList(e){this.deselect(),this.panel=null,this.boardForm=void 0,await this.setBoard(e),this.fitToPins()}pendingFit=!1;fitToPins(){if(!this.map){this.pendingFit=!0;return}if(this.pendingFit=!1,!this.features.length)return;let[e,t,n,r]=[180,90,-180,-90];for(let i of this.features){let[a,o]=i.geometry.coordinates;e=Math.min(e,a),t=Math.min(t,o),n=Math.max(n,a),r=Math.max(r,o)}this.map.fitBounds([e,t,n,r])}openManage(e){this.manageBoard=e,this.boardForm=void 0,this.panel=`manage`,this.setBoard(e)}newBoard(){this.boardFormFrom=`boards`,this.boardForm=null,this.panel=`boards`}editBoard(e){this.boardFormFrom=this.panel===`manage`?`manage`:`boards`,this.boardForm=e,this.panel=`boards`}actAs(e){this.demoAs=e,Z.saveDemoAs(e),this.notify(l(e?{name:e}:{name:this.ownSession.name||u()})),this.reload()}#L=r(()=>[...new Set(this.boards.map(e=>e.owner.name))].filter(e=>/^[a-z0-9_]+$/.test(e)));get demoHandles(){return e(this.#L)}set demoHandles(e){a(this.#L,e)}isSaved(e){return this.saved.includes(e)}toggleSaved(e){this.saved=this.isSaved(e)?this.saved.filter(t=>t!==e):[e,...this.saved],Z.saveSaved(this.saved)}setSession(e){this.ownSession={...this.ownSession,...e},Z.saveSession(i(this.ownSession)),this.demoAs?this.actAs(null):this.reload()}setHomeZone(e){this.homeZone=e,Z.saveHomeZone(e),Z.saveHomeAsked()}distanceTo(e){return fe(this.userLocation??this.camera?.center??Q,{lng:e.geometry.coordinates[0],lat:e.geometry.coordinates[1]})}notify(e){this.toast=e,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast=null,3500)}fail(e){console.warn(e),this.notify(s(e))}},ut={"settings-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-settings-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14 17H5" />
  <path d="M19 7h-9" />
  <circle cx="17" cy="17" r="3" />
  <circle cx="7" cy="7" r="3" />
</svg>
`,sun:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-sun"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
</svg>
`,moon:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-moon"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
</svg>
`,send:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-send"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
  <path d="m21.854 2.147-10.94 10.939" />
</svg>
`,tag:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-tag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
</svg>
`,"shopping-basket":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-shopping-basket"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 11-1 9" />
  <path d="m19 11-4-7" />
  <path d="M2 11h20" />
  <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
  <path d="M4.5 15.5h15" />
  <path d="m5 11 4-7" />
  <path d="m9 11 1 9" />
</svg>
`,gift:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-gift"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 7v14" />
  <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
  <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
  <rect x="3" y="7" width="18" height="4" rx="1" />
</svg>
`,search:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-search"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
</svg>
`,"hand-heart":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-hand-heart"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
  <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
  <path d="m2 15 6 6" />
  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
</svg>
`,users:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-users"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>
`,"triangle-alert":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-triangle-alert"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
  <path d="M12 9v4" />
  <path d="M12 17h.01" />
</svg>
`,megaphone:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-megaphone"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
  <path d="M8 6v8" />
</svg>
`,"message-circle":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-message-circle"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
</svg>
`,"locate-fixed":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-locate-fixed"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="2" x2="5" y1="12" y2="12" />
  <line x1="19" x2="22" y1="12" y2="12" />
  <line x1="12" x2="12" y1="2" y2="5" />
  <line x1="12" x2="12" y1="19" y2="22" />
  <circle cx="12" cy="12" r="7" />
  <circle cx="12" cy="12" r="3" />
</svg>
`,list:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-list"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 5h.01" />
  <path d="M3 12h.01" />
  <path d="M3 19h.01" />
  <path d="M8 5h13" />
  <path d="M8 12h13" />
  <path d="M8 19h13" />
</svg>
`,map:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-map"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
  <path d="M15 5.764v15" />
  <path d="M9 3.236v15" />
</svg>
`,plus:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
  <path d="M12 5v14" />
</svg>
`,x:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-x"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
`,menu:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-menu"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 5h16" />
  <path d="M4 12h16" />
  <path d="M4 19h16" />
</svg>
`,bookmark:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-bookmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
</svg>
`,"share-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-share-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
</svg>
`,check:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 6 9 17l-5-5" />
</svg>
`,"thumbs-up":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-thumbs-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
  <path d="M7 10v12" />
</svg>
`,pencil:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-pencil"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
  <path d="m15 5 4 4" />
</svg>
`,clock:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-clock"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 6v6l4 2" />
</svg>
`,house:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-house"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
</svg>
`,store:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-store"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
</svg>
`,landmark:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-landmark"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 18v-7" />
  <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
  <path d="M14 18v-7" />
  <path d="M18 18v-7" />
  <path d="M3 22h18" />
  <path d="M6 18v-7" />
</svg>
`,table:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-table"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v18" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
</svg>
`,download:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-download"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 15V3" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <path d="m7 10 5 5 5-5" />
</svg>
`,upload:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-upload"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 3v12" />
  <path d="m17 8-5-5-5 5" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
</svg>
`,"sliders-horizontal":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-sliders-horizontal"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 5H3" />
  <path d="M12 19H3" />
  <path d="M14 3v4" />
  <path d="M16 17v4" />
  <path d="M21 12h-9" />
  <path d="M21 19h-5" />
  <path d="M21 5h-7" />
  <path d="M8 10v4" />
  <path d="M8 12H3" />
</svg>
`,"chevron-left":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-chevron-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 18-6-6 6-6" />
</svg>
`,"chevron-right":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-chevron-right"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m9 18 6-6-6-6" />
</svg>
`,"chevron-down":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-chevron-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m6 9 6 6 6-6" />
</svg>
`,"arrow-up-down":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-arrow-up-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m21 16-4 4-4-4" />
  <path d="M17 20V4" />
  <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
</svg>
`,"map-pin":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-map-pin"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
</svg>
`,shield:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-shield"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
</svg>
`,"trash-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-trash-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 11v6" />
  <path d="M14 11v6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
  <path d="M3 6h18" />
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>
`,"refresh-cw":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-refresh-cw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />
</svg>
`,user:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-user"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
</svg>
`,"clipboard-list":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-clipboard-list"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M12 11h4" />
  <path d="M12 16h4" />
  <path d="M8 11h.01" />
  <path d="M8 16h.01" />
</svg>
`,flag:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-flag"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
</svg>
`,calendar:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-calendar"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M8 2v3" />
  <path d="M16 2v3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
  <path d="M3 9h18" />
</svg>
`,"circle-check":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-circle-check"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="m16 9-5.5 5.5L8 12" />
</svg>
`,info:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-info"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="12" r="10" />
  <path d="M12 16v-4" />
  <path d="M12 8h.01" />
</svg>
`,"building-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-building-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 12h4" />
  <path d="M10 8h4" />
  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
</svg>
`,"rotate-ccw":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-rotate-ccw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
</svg>
`,"message-square":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-message-square"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
</svg>
`,"arrow-left":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-arrow-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`,"eye-off":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-eye-off"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
  <path d="m2 2 20 20" />
</svg>
`,"image-plus":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-image-plus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M16 5h6" />
  <path d="M19 2v6" />
  <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  <circle cx="9" cy="9" r="2" />
</svg>
`,minus:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-minus"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M5 12h14" />
</svg>
`,"external-link":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-external-link"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
</svg>
`,"arrow-up":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-arrow-up"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m5 12 7-7 7 7" />
  <path d="M12 19V5" />
</svg>
`,"arrow-down":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-arrow-down"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 5v14" />
  <path d="m19 12-7 7-7-7" />
</svg>
`,layers:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-layers"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
</svg>
`,"user-round":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-user-round"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="8" r="5" />
  <path d="M20 21a8 8 0 0 0-16 0" />
</svg>
`,database:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-database"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M3 5V19A9 3 0 0 0 21 19V5" />
  <path d="M3 12A9 3 0 0 0 21 12" />
</svg>
`,images:`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-images"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
  <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
  <circle cx="13" cy="7" r="1" fill="currentColor" />
  <rect x="8" y="2" width="14" height="14" rx="2" />
</svg>
`,"maximize-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-maximize-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M15 3h6v6" />
  <path d="m21 3-7 7" />
  <path d="m3 21 7-7" />
  <path d="M9 21H3v-6" />
</svg>
`,"minimize-2":`<!-- @license lucide-static v1.72.0 - ISC -->
<svg
  class="lucide lucide-minimize-2"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m14 10 7-7" />
  <path d="M20 10h-6V4" />
  <path d="m3 21 7-7" />
  <path d="M4 14h6v6" />
</svg>
`},dt=`pindl:theme`,ft={light:`#f5f3ef`,dark:`#100e1e`};function pt(){try{let e=JSON.parse(localStorage.getItem(dt)??`null`);return e===`light`||e===`dark`?e:null}catch{return null}}var mt=new class{#e=t(`light`);get current(){return e(this.#e)}set current(e){a(this.#e,e,!0)}started=!1;apply(e){this.current=e,document.documentElement.dataset.theme=e,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,ft[e])}start(){if(this.started)return;this.started=!0;let e=window.matchMedia(`(prefers-color-scheme: dark)`);this.apply(pt()??(e.matches?`dark`:`light`));let t=e=>{pt()||this.apply(e.matches?`dark`:`light`)};e.addEventListener?e.addEventListener(`change`,t):e.addListener(t)}toggle(){let e=this.current===`dark`?`light`:`dark`;try{localStorage.setItem(dt,JSON.stringify(e))}catch{}this.apply(e)}};function ht(){return document.documentElement.classList.contains(`ios-bleed`)}function $(e){return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(e))||0}function gt(){return ht()?{top:$(`--bleed-top`),bottom:$(`--bleed-bottom`)}:{top:0,bottom:0}}function _t(){let e=document.activeElement;return!!e&&(e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.isContentEditable)}function vt(){if(!ht())return()=>{};let e=0,t=()=>{e=0;let t=$(`--runway`),n=(window.visualViewport?.scale??1)>1.01;_t()||n||(Math.abs(window.scrollY-t)>.5||window.scrollX!==0)&&window.scrollTo({left:0,top:t,behavior:`instant`})},n=()=>{e||=requestAnimationFrame(t)};return t(),window.addEventListener(`scroll`,n,{passive:!0}),window.addEventListener(`resize`,n),document.addEventListener(`focusout`,n),()=>{cancelAnimationFrame(e),window.removeEventListener(`scroll`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`focusout`,n)}}export{ee as A,te as C,v as D,_ as E,u as M,p as O,he as S,ue as T,qe as _,lt as a,be as b,Ge as c,R as d,Ye as f,Xe as g,et as h,ut as i,d as j,m as k,z as l,Ke as m,vt as n,Z as o,V as p,mt as r,B as s,gt as t,Ze as u,k as v,ie as w,xe as x,S as y};