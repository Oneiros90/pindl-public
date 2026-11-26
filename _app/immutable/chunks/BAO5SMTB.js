import{I as e,J as t,Y as n,Z as r,q as i,z as a}from"./D_9dvEKF.js";import{P as o,f as s}from"./D4jJhDcs.js";import{t as c}from"./CA9W9IIM.js";var l=((e,t={})=>(t.locale??o())===`it`?`Ora sei ${e?.name}`:`You are now ${e?.name}`),u=((e={},t={})=>(t.locale??o())===`it`?`Te stesso`:`Yourself`),d=((e={},t={})=>(t.locale??o())===`it`?`Questo pin non è più disponibile.`:`This pin is no longer available.`),f=[`vendo`,`compro`,`regalo`,`cerco`,`offro`,`incontro`,`segnalo`,`avviso`,`penso`],ee=`#17142e`,p={vendo:{id:`vendo`,color:`#2bbb71`,text:{light:`#047c46`,dark:`#2bbb71`},icon:`tag`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`,price:!0},compro:{id:`compro`,color:`#28bfd2`,text:{light:`#017885`,dark:`#28bfd2`},icon:`shopping-basket`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`},regalo:{id:`regalo`,color:`#f068bc`,text:{light:`#b8338a`,dark:`#f068bc`},icon:`gift`,defaultDays:7,maxDays:14,renewable:!1,expiry:`days`},cerco:{id:`cerco`,color:`#5b8efe`,text:{light:`#3564d4`,dark:`#5b8efe`},icon:`search`,defaultDays:14,maxDays:30,renewable:!0,expiry:`days`},offro:{id:`offro`,color:`#a47efc`,text:{light:`#7a52cc`,dark:`#a47efc`},icon:`hand-heart`,defaultDays:30,maxDays:90,renewable:!0,expiry:`days`},incontro:{id:`incontro`,color:`#ff8e2a`,text:{light:`#a65603`,dark:`#ff8e2a`},icon:`users`,defaultDays:7,maxDays:60,renewable:!1,expiry:`event`},segnalo:{id:`segnalo`,color:`#f6544b`,text:{light:`#cc2827`,dark:`#f6544b`},icon:`triangle-alert`,defaultDays:180,maxDays:180,renewable:!1,expiry:`resolved`},avviso:{id:`avviso`,color:`#fbcb2f`,text:{light:`#846804`,dark:`#fbcb2f`},icon:`megaphone`,defaultDays:7,maxDays:30,renewable:!1,expiry:`days`},penso:{id:`penso`,color:`#afe04e`,text:{light:`#567501`,dark:`#afe04e`},icon:`message-circle`,defaultDays:2,maxDays:7,renewable:!1,expiry:`days`}},te=f.map(e=>p[e]);function m(e){return typeof e==`string`&&f.includes(e)}var ne=[`spam`,`offensive`,`danger`,`personal`,`other`],h=class extends Error{code;constructor(e,t){super(t),this.name=`PindlError`,this.code=e}},re=1e3,ie=/[̀-ͯ]/g;function g(e){return e.normalize(`NFD`).replace(ie,``).toLowerCase().replace(/\s+/g,` `).trim()}function _(e){return g(e).replace(/[^a-z0-9]/g,``).slice(0,30)}function ae(e){let t=[];for(let n of e.matchAll(/#([\p{L}\p{N}_]+)/gu)){let e=_(n[1]);e&&!t.includes(e)&&t.push(e)}return t}function oe(e=[],...t){let n=[],r=e=>{e&&!n.includes(e)&&n.length<5&&n.push(e)};return e.forEach(e=>r(_(e))),t.forEach(e=>e&&ae(e).forEach(r)),n}function se(e){return e.replace(/[\r\n\t]+/g,` `).replace(/\s+/g,` `).trim()}function ce(e){return e.length?` ${e.join(` `)} `:``}function le(e){return e.split(` `).filter(Boolean)}function ue(e,t){let n=g(e);return t.length?`${n} ${t.map(e=>`#${e}`).join(` `)}`:n}var de=[/\b(?:via|viale|corso|piazza|piazzetta|largo|vicolo|strada|lungo ?po)\s+[\p{L}. ']{2,40}?\s*,?\s*(?:n\.?\s*|numero\s+|civico\s+)?\d{1,4}\b|\b(?:citofono|interno\s+\d+|scala\s+[a-z]\b|(?:primo|secondo|terzo|quarto|quinto|ultimo)\s+piano|piano\s+\d+|civico\s+\d+)/iu,/\b\d{1,4}[a-z]?\s+[\p{L}. ']{2,40}?\s+(?:street|st|road|rd|avenue|ave|lane|ln|drive|dr|place|pl|square|sq|terrace|way|close|crescent)\b|\b(?:flat|apartment|apt|unit)\s+\d+|\b(?:first|second|third|fourth|fifth|top)\s+floor\b|\bbuzzer\b/iu];function fe(e){return de.some(t=>t.test(e))}var pe=6371008.8,v=Math.PI/180,y=111320;function me(e,t){let n=(t.lat-e.lat)*v,r=(t.lng-e.lng)*v,i=Math.sin(n/2)**2+Math.cos(e.lat*v)*Math.cos(t.lat*v)*Math.sin(r/2)**2;return 2*pe*Math.asin(Math.min(1,Math.sqrt(i)))}function he(e,t,n){let r=t*Math.cos(n)/y,i=t*Math.sin(n)/(y*Math.cos(e.lat*v));return{lng:e.lng+i,lat:e.lat+r}}function b(e,t){return e.lng>=t[0]&&e.lng<=t[2]&&e.lat>=t[1]&&e.lat<=t[3]}function ge(e){return{lng:Math.round(e.lng*1e6)/1e6,lat:Math.round(e.lat*1e6)/1e6}}function _e(e,t,n=64){let r=[];for(let i=0;i<=n;i++){let a=he(e,t,i/n*2*Math.PI);r.push([a.lng,a.lat])}return r}var ve=2e3,ye=Math.PI/180,x=90/y;function be(e){let t=(e+.5)*x;return 90/(y*Math.cos(t*ye))}function S(e){let t=Math.floor(e.lat/x),n=be(t),r=Math.floor(e.lng/n);return{id:`${t}:${r}`,row:t,col:r,center:{lng:(r+.5)*n,lat:(t+.5)*x}}}function xe(e){return e>0?Math.min(ve,Math.max(150,Math.round(e))):0}function Se(e){let t=1779033703,n=3144134277,r=1013904242,i=2773480762;for(let a=0;a<e.length;a++){let o=e.charCodeAt(a);t=n^Math.imul(t^o,597399067),n=r^Math.imul(n^o,2869860233),r=i^Math.imul(r^o,951274213),i=t^Math.imul(i^o,2716044179)}return t=Math.imul(r^t>>>18,597399067),n=Math.imul(i^n>>>22,2869860233),r=Math.imul(t^r>>>17,951274213),i=Math.imul(n^i>>>19,2716044179),t^=n^r^i,[t>>>0,(n^t)>>>0,(r^t)>>>0,(i^t)>>>0]}function C(e,t,n,r){let i=xe(t);if(i===0)return{position:ge(e),radius:0};let a=S(e),[o,s]=Se(`${r}|${n}|${a.id}`),c=o/4294967296*2*Math.PI,l=i/2*Math.sqrt(s/4294967296);return{position:ge(he(a.center,l,c)),radius:i}}function Ce(e){return S(e).id}function we(e,t){if(!t)return!1;let[n,r]=t.split(`:`).map(Number);if(!Number.isFinite(n)||!Number.isFinite(r))return!1;let i=S(e);if(Math.abs(i.row-n)>1)return!1;let a=(r+.5)*be(n);return Math.abs(i.center.lng-a)*y*Math.cos(i.center.lat*ye)<=135}var w={verbs:[],q:``,tags:[],time:`any`,source:`all`,board:null};function Te(e){return e.verbs.length>0||e.q.trim()!==``||e.tags.length>0||e.time!==`any`||e.source!==`all`||e.board!==null}function T(e){let t=[],n=[];for(let r of e.split(/\s+/))if(r){if(r.startsWith(`#`)){let e=_(r);e&&n.push(e)}else{let e=g(r);e&&t.push(e)}}return{words:t,tagPrefixes:n}}var E=86400;function D(e){let{words:t,tagPrefixes:n}=T(e.q);return t.length>0||n.length>0||e.tags.length>0}function Ee(e){let t=new Date(e*1e3);t.setHours(0,0,0,0);let n=Math.floor(t.getTime()/1e3);return{start:n,end:n+E}}function De(e,t){let n=[`all`,[`>`,[`get`,`expires`],t.now]];e.verbs.length&&n.push([`in`,[`get`,`verb`],[`literal`,[...e.verbs]]]);let{words:r,tagPrefixes:i}=T(e.q);if(!e.board&&!D(e)&&n.push([`==`,[`get`,`only`],0]),r.length||i.length){let e=[`all`];for(let t of r)e.push([`in`,t,[`get`,`q`]]);for(let t of i)e.push([`in`,` ${t}`,[`get`,`tags`]]);t.descriptionHits?.length?n.push([`any`,e,[`in`,[`get`,`id`],[`literal`,[...t.descriptionHits]]]]):n.push(e)}for(let t of e.tags)n.push([`in`,` ${t} `,[`get`,`tags`]]);if(e.time!==`any`){let{start:r,end:i}=Ee(t.now);e.time===`today`?n.push([`any`,[`>=`,[`get`,`created`],r],[`all`,[`>`,[`get`,`starts`],0],[`<`,[`get`,`starts`],i]]]):e.time===`week`?n.push([`any`,[`>=`,[`get`,`created`],t.now-7*E],[`all`,[`>`,[`get`,`starts`],0],[`<`,[`get`,`starts`],t.now+7*E]]]):n.push([`>`,[`get`,`starts`],0])}return e.source!==`all`&&n.push([`==`,[`get`,`kind`],e.source]),e.board&&n.push([`==`,[`get`,`board`],e.board]),n}function Oe(e,t,n){if(!(e.expires>n.now)||t.verbs.length&&!t.verbs.includes(e.verb))return!1;let{words:r,tagPrefixes:i}=T(t.q);if(!t.board&&!D(t)&&e.only||(r.length||i.length)&&!(r.every(t=>e.q.includes(t))&&i.every(t=>e.tags.includes(` ${t}`)))&&!n.descriptionHits?.includes(e.id))return!1;for(let n of t.tags)if(!e.tags.includes(` ${n} `))return!1;if(t.time!==`any`){let{start:r,end:i}=Ee(n.now);if(t.time===`today`){if(!(e.created>=r||e.starts>0&&e.starts<i))return!1}else if(t.time===`week`){if(!(e.created>=n.now-7*E||e.starts>0&&e.starts<n.now+7*E))return!1}else if(!(e.starts>0))return!1}return!(t.source!==`all`&&e.kind!==t.source||t.board&&e.board!==t.board)}function ke(e,t=new URLSearchParams){return e.verbs.length&&t.set(`v`,e.verbs.join(`,`)),e.q.trim()&&t.set(`q`,e.q.trim()),e.tags.length&&t.set(`tag`,e.tags.join(`,`)),e.time!==`any`&&t.set(`t`,e.time),e.source!==`all`&&t.set(`s`,e.source),e.board&&t.set(`lista`,e.board),t}function Ae(e){let t=e.get(`t`),n=e.get(`s`);return{verbs:(e.get(`v`)??``).split(`,`).filter(m),q:e.get(`q`)??``,tags:(e.get(`tag`)??``).split(`,`).map(_).filter(Boolean),time:t===`today`||t===`week`||t===`upcoming`?t:`any`,source:n===`individual`||n===`business`?n:`all`,board:e.get(`lista`)||e.get(`b`)||null}}function je(e){return[`v`,`q`,`tag`,`t`,`s`,`lista`,`b`].some(t=>e.has(t))}var Me=86400;function Ne(e,t){let n=Math.max(0,(t-e.createdAt)/Me);return Math.round(100*Math.exp(-n/10))+8*Math.min(e.confirmations,25)}function Pe(e,t){return{id:e.id,verb:e.verb,title:e.title,tags:ce(e.tags),q:ue(e.title,e.tags),kind:e.kind,board:e.board??``,only:e.board&&!e.alsoOnMap?1:0,score:Ne(e,t),votes:e.confirmations,created:e.createdAt,expires:e.expiresAt,starts:e.starts??0,radius:e.radius}}function Fe(e,t){return{type:`Feature`,geometry:{type:`Point`,coordinates:[e.position.lng,e.position.lat]},properties:Pe(e,t)}}function Ie(e,t){let n=[];for(let r of e)n.push(Fe(r,t));return{type:`FeatureCollection`,features:n}}function O(e=Date.now()){let t=new Uint8Array(16);crypto.getRandomValues(t);let n=BigInt(Math.floor(e));t[0]=Number(n>>40n&255n),t[1]=Number(n>>32n&255n),t[2]=Number(n>>24n&255n),t[3]=Number(n>>16n&255n),t[4]=Number(n>>8n&255n),t[5]=Number(n&255n),t[6]=t[6]&15|112,t[8]=t[8]&63|128;let r=Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``);return`${r.slice(0,8)}-${r.slice(8,12)}-${r.slice(12,16)}-${r.slice(16,20)}-${r.slice(20)}`}function Le(e=24){let t=new Uint8Array(e);return crypto.getRandomValues(t),Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function k(){return Math.floor(Date.now()/1e3)}var A=86400;function Re(e){if(!e||typeof e!=`object`)return!1;let{lng:t,lat:n}=e;return typeof t==`number`&&typeof n==`number`&&Number.isFinite(t)&&Number.isFinite(n)&&Math.abs(t)<=180&&Math.abs(n)<=90}function ze(e){let t={...e};return typeof t.title==`string`&&(t.title=se(t.title)),typeof t.description==`string`&&(t.description=t.description.trim(),t.description||delete t.description),(t.tags!==void 0||t.title!==void 0||t.description!==void 0)&&(t.tags=oe(t.tags??[],t.title,t.description)),t}function Be(e,t,n=!1){let r=[],i=t=>e[t]!==void 0;if(n&&!i(`verb`)||m(e.verb)||r.push({field:`verb`,code:`required`}),!n||i(`title`)){let t=e.title??``;t.trim()?[...t].length>60?r.push({field:`title`,code:`too_long`}):/[\r\n]/.test(t)&&r.push({field:`title`,code:`one_line`}):r.push({field:`title`,code:`required`})}if(i(`description`)&&[...e.description??``].length>1e3&&r.push({field:`description`,code:`too_long`}),i(`tags`)){let t=e.tags??[];t.length>5&&r.push({field:`tags`,code:`too_many`}),t.some(e=>!/^[a-z0-9]+$/.test(e)||e.length>30)&&r.push({field:`tags`,code:`invalid`})}if(i(`photos`)&&(e.photos??[]).length>10&&r.push({field:`photos`,code:`too_many`}),n&&!i(`point`)||Re(e.point)||r.push({field:`point`,code:`required`}),!n||i(`radius`)){let t=e.radius??0;(typeof t!=`number`||t<0||t>0&&(t<150||t>2e3))&&r.push({field:`radius`,code:`out_of_range`})}if(i(`price`)&&!(typeof e.price==`number`&&e.price>=0&&e.price<1e7)&&r.push({field:`price`,code:`invalid`}),i(`durationDays`)){let t=e.durationDays,n=m(e.verb)?p[e.verb].maxDays:180;typeof t==`number`&&t>=1&&t<=n||r.push({field:`durationDays`,code:`out_of_range`})}if(e.verb===`incontro`&&(!n||i(`starts`))){let n=p.incontro.maxDays;typeof e.starts==`number`?e.starts>t+n*A?r.push({field:`starts`,code:`too_far`}):typeof e.ends==`number`&&e.ends<=e.starts?r.push({field:`ends`,code:`before_start`}):(e.ends??e.starts)<t-A&&r.push({field:`starts`,code:`in_past`}):r.push({field:`starts`,code:`required`})}return r}function j(e,t,n={}){let r=p[e];return r.expiry===`event`&&n.starts?n.ends??n.starts+10800:t+Math.min(r.maxDays,Math.max(1,n.durationDays??r.defaultDays))*A}function M(e){let t=[];if(!e||typeof e!=`object`)return[{field:``,code:`not_an_object`}];let n=e,r=e=>typeof e==`string`&&e.length>0,i=e=>typeof e==`number`&&Number.isFinite(e);r(n.id)||t.push({field:`id`,code:`required`}),m(n.verb)||t.push({field:`verb`,code:`invalid`}),(!r(n.title)||[...n.title??``].length>60||/[\r\n]/.test(n.title??``))&&t.push({field:`title`,code:`invalid`}),n.description!==void 0&&(typeof n.description!=`string`||[...n.description].length>1e3)&&t.push({field:`description`,code:`invalid`}),(!Array.isArray(n.tags)||n.tags.length>5||n.tags.some(e=>typeof e!=`string`||!/^[a-z0-9]+$/.test(e)||e.length>30))&&t.push({field:`tags`,code:`invalid`}),n.photos!==void 0&&(!Array.isArray(n.photos)||n.photos.length>10)&&t.push({field:`photos`,code:`invalid`}),Re(n.position)||t.push({field:`position`,code:`invalid`}),(!i(n.radius)||n.radius<0||n.radius>2e3||n.radius>0&&n.radius<150)&&t.push({field:`radius`,code:`invalid`});for(let e of[`createdAt`,`updatedAt`,`expiresAt`,`confirmations`])i(n[e])||t.push({field:e,code:`invalid`});return n.status!==`published`&&n.status!==`pending`&&n.status!==`closed`&&t.push({field:`status`,code:`invalid`}),n.kind!==`individual`&&n.kind!==`business`&&t.push({field:`kind`,code:`invalid`}),n.author&&r(n.author.name)||t.push({field:`author`,code:`invalid`}),n.contact!==`chat`&&n.contact!==`comments`&&n.contact!==`none`&&t.push({field:`contact`,code:`invalid`}),n.commentPhotos!==void 0&&typeof n.commentPhotos!=`boolean`&&t.push({field:`commentPhotos`,code:`invalid`}),t}var N=86400;function P(e){return g(e).replace(/['’.]/g,``).replace(/[^\p{L}\p{N}]+/gu,` `).trim()}function Ve(){return{pins:{},boards:{},pinOwners:{},boardOwners:{},confirms:{},reports:{},comments:{}}}function He(e){let t=Ve();for(let n of e.pins)t.pins[n.id]=n;for(let n of e.boards)t.boards[n.id]=n;return Object.assign(t.pinOwners,e.pinOwners),Object.assign(t.boardOwners,e.boardOwners),Object.assign(t.confirms,e.confirms),Object.assign(t.reports,e.reports),Object.assign(t.comments,e.comments),t}var Ue=class{state;privacyKey;clock;onChange;constructor(e,t){this.state=e,this.privacyKey=t.privacyKey,this.clock=t.now??(()=>Math.floor(Date.now()/1e3)),this.onChange=t.onChange}now(){return this.clock()}emit(e=[],t=[],n=!1){(e.length||t.length||n)&&this.onChange?.({pins:e,boards:t,all:n})}sweep(){let e=this.now(),t=[];for(let n of Object.values(this.state.pins))n.status!==`closed`&&n.expiresAt<=e&&(n.status=`closed`,n.closedReason=`expired`,n.closedAt=n.expiresAt,t.push(n.id)),n.status===`closed`&&(n.closedAt??n.expiresAt)+30*N<=e&&(delete this.state.pins[n.id],delete this.state.pinOwners[n.id],delete this.state.confirms[n.id],delete this.state.reports[n.id],delete this.state.comments[n.id],t.push(n.id));this.emit(t)}isOwner(e,t){return this.state.pinOwners[e]===t.id}canManageBoard(e,t){return!e||!this.state.boards[e]?!1:this.state.boardOwners[e]===t.id}canPostTo(e,t){let n=this.state.boards[e];return n?n.contributions!==`owner`||this.canManageBoard(e,t):!1}detail(e,t){return{...e,mine:this.isOwner(e.id,t),confirmedByMe:this.state.confirms[e.id]?.includes(t.id)??!1}}features(e={}){this.sweep();let t=[];for(let n of Object.values(this.state.pins))n.status===`published`&&(e.board&&n.board!==e.board||t.push(n));return Ie(t,this.now())}getPin(e,t){this.sweep();let n=this.state.pins[e];return!n||n.status!==`published`&&!this.isOwner(e,t)&&!this.canManageBoard(n.board,t)?null:this.detail(n,t)}ownPins(e){return this.sweep(),Object.values(this.state.pins).filter(t=>this.isOwner(t.id,e)).sort((e,t)=>t.updatedAt-e.updatedAt)}searchDescriptions(e,t){let n=g(e).split(` `).filter(e=>e&&!e.startsWith(`#`));if(!n.length)return[];let r=[];for(let e of Object.values(this.state.pins)){if(e.status!==`published`||!e.description||t&&!b(e.position,t))continue;let i=g(e.description);n.every(e=>i.includes(e))&&r.push(e.id)}return r}previewPosition(e,t,n){return C(e,t,n.id,this.privacyKey)}requirePin(e){let t=this.state.pins[e];if(!t)throw new h(`not_found`,`Pin not found`);return t}requireOwner(e,t){let n=this.requirePin(e);if(!this.isOwner(e,t))throw new h(`forbidden`,`Not your pin`);return n}checkBoardRules(e,t){if(!e)return;let n=this.state.boards[e];if(!n)throw new h(`board_not_found`,`List not found`);if(n.verbs.length&&!n.verbs.includes(t))throw new h(`board_verb`,`This verb is not accepted by the list`);return n}createPin(e,t){let n=this.now(),r=ze(e),i=Be(r,n);if(i.length)throw new h(`invalid`,i.map(e=>`${e.field}:${e.code}`).join(` `));let a=this.checkBoardRules(r.board,r.verb);if(a&&!this.canPostTo(a.id,t))throw new h(`board_closed`,`Only the owner adds pins to this list`);let o=!!a&&a.contributions===`approval`&&!this.canManageBoard(a.id,t),s=C(r.point,r.radius,t.id,this.privacyKey),c=p[r.verb].expiry===`event`,l={id:O(),verb:r.verb,title:r.title,tags:r.tags??[],position:s.position,radius:s.radius,createdAt:n,updatedAt:n,expiresAt:j(r.verb,n,r),status:o?`pending`:`published`,kind:`individual`,author:{name:t.name},contact:r.contact??(a||r.verb===`segnalo`||r.verb===`penso`?`comments`:`chat`),confirmations:0};return r.description&&(l.description=r.description),r.photos?.length&&(l.photos=r.photos),r.commentPhotos&&(l.commentPhotos=!0),p[r.verb].price&&r.price!==void 0&&(l.price=r.price),c&&r.starts&&(l.starts=r.starts,r.ends&&(l.ends=r.ends)),a&&(l.board=a.id,r.alsoOnMap&&(l.alsoOnMap=!0)),this.state.pins[l.id]=l,this.state.pinOwners[l.id]=t.id,this.emit([l.id]),this.detail(l,t)}updatePin(e,t,n){let r=this.now(),i=this.requireOwner(e,n),a={...t,verb:t.verb??i.verb};a.tags===void 0&&(a.title!==void 0||a.description!==void 0)&&(a.tags=i.tags);let o=ze(a);o.verb===`incontro`&&o.starts===void 0&&(o.starts=i.starts);let s=Be(o,r,!0);if(s.length)throw new h(`invalid`,s.map(e=>`${e.field}:${e.code}`).join(` `));let c=null,l=o.radius??i.radius;if(o.point)c=C(o.point,l,n.id,this.privacyKey);else if(l!==i.radius){if(i.radius===0)c=C(i.position,l,n.id,this.privacyKey);else if(l>i.radius)c={position:i.position,radius:l};else throw new h(`point_required`,`Place the pin again to change its area`)}return this.checkBoardRules(i.board,o.verb??i.verb),m(o.verb)&&(i.verb=o.verb),o.title!==void 0&&(i.title=o.title),t.description!==void 0&&(o.description?i.description=o.description:delete i.description),o.tags!==void 0&&(i.tags=o.tags),o.photos!==void 0&&(o.photos.length?i.photos=o.photos:delete i.photos),c&&(i.position=c.position,i.radius=c.radius),p[i.verb].price?`price`in t&&(t.price===void 0?delete i.price:i.price=t.price):delete i.price,o.contact&&(i.contact=o.contact),t.commentPhotos!==void 0&&(t.commentPhotos?i.commentPhotos=!0:delete i.commentPhotos),i.board&&t.alsoOnMap!==void 0&&(t.alsoOnMap?i.alsoOnMap=!0:delete i.alsoOnMap),p[i.verb].expiry===`event`?(o.starts!==void 0&&(i.starts=o.starts),t.ends===void 0?t.starts!==void 0&&delete i.ends:i.ends=t.ends,i.expiresAt=j(i.verb,r,{starts:i.starts,ends:i.ends})):(delete i.starts,delete i.ends,o.durationDays!==void 0&&(i.expiresAt=j(i.verb,r,o))),i.updatedAt=r,this.emit([e]),this.detail(i,n)}closePin(e,t,n){let r=this.requireOwner(e,n),i=this.now();return r.status=`closed`,r.closedReason=t,r.closedAt=i,r.updatedAt=i,this.emit([e]),this.detail(r,n)}renewPin(e,t){let n=this.requireOwner(e,t),r=this.now(),i=p[n.verb];if(n.closedReason===`rejected`||n.closedReason===`removed`)throw new h(`removed_by_owner`,`The owner of the list took this pin out`);if(i.expiry===`event`)throw new h(`not_renewable`,`An event ends when it ends: edit its date instead`);let a=r+i.defaultDays*N;if(!i.renewable&&(a=Math.min(a,n.createdAt+i.maxDays*N),a<=r+3600))throw new h(`max_duration`,`Maximum duration reached`);n.expiresAt=a;let o=n.board?this.state.boards[n.board]:void 0,s=!!o&&o.contributions===`approval`&&!this.canManageBoard(o.id,t);return n.status=n.status===`pending`||n.status===`closed`&&s?`pending`:`published`,delete n.closedReason,delete n.closedAt,n.updatedAt=r,this.emit([e]),this.detail(n,t)}toggleConfirm(e,t){let n=this.requirePin(e);if(this.isOwner(e,t))throw new h(`own_pin`,`You cannot confirm your own pin`);if(n.status!==`published`)throw new h(`closed`,`The pin is not published`);let r=this.state.confirms[e]??=[],i=r.indexOf(t.id);return i>=0?(r.splice(i,1),n.confirmations=Math.max(0,n.confirmations-1)):(r.push(t.id),n.confirmations+=1),this.emit([e]),this.detail(n,t)}listComments(e,t){return this.getPin(e,t)?[...this.state.comments[e]??[]]:[]}addComment(e,t,n){let r=this.getPin(e,n);if(!r)throw new h(`not_found`,`Pin not found`);if(r.status!==`published`)throw new h(`closed`,`The pin is closed`);let i=String(t?.text??``).trim(),a=Array.isArray(t?.photos)?t.photos.filter(e=>typeof e==`string`&&e.length>0):[];if(a.length&&!r.commentPhotos)throw new h(`invalid`,`comment:photos_off`);if(a.length>4)throw new h(`invalid`,`comment:too_many_photos`);if(!i&&!a.length)throw new h(`invalid`,`comment:required`);if([...i].length>500)throw new h(`invalid`,`comment:too_long`);let o={id:O(),author:{name:n.name},text:i,createdAt:this.now()};return a.length&&(o.photos=a),(this.state.comments[e]??=[]).push(o),this.emit([e]),o}reportPin(e,t,n){let r=this.getPin(e,n);if(!r)throw new h(`not_found`,`Pin not found`);if(!n.name.trim())throw new h(`forbidden`,`An account is needed to report`);if(r.mine)throw new h(`own_pin`,`You cannot report your own pin`);if(!ne.includes(t?.reason))throw new h(`invalid`,`report:reason`);let i=String(t.note??``).trim();if([...i].length>500)throw new h(`invalid`,`report:too_long`);let a=this.state.reports[e]??=[];a.some(e=>e.by===n.id)||(a.push({by:n.id,reason:t.reason,...i?{note:i}:{},createdAt:this.now()}),this.emit([e]))}importSharedPin(e,t){let n=this.state.pins[e.id];if(n)return this.detail(n,t);if(M(e).length)throw new h(`invalid`,`Invalid shared pin`);return this.state.pins[e.id]=e,this.emit([e.id]),this.detail(e,t)}boardCounts(){let e=new Map;for(let t of Object.values(this.state.pins)){if(!t.board||t.status===`closed`)continue;let n=e.get(t.board);n||e.set(t.board,n={published:0,pending:0}),t.status===`published`?n.published++:n.pending++}return e}boardDetail(e,t,n=this.boardCounts()){let r=this.canManageBoard(e.id,t),i=n.get(e.id);return{...e,canManage:r,canPost:this.canPostTo(e.id,t),pinCount:i?.published??0,pendingCount:r?i?.pending??0:0}}getBoard(e,t){this.sweep();let n=this.state.boards[e];return n?this.boardDetail(n,t):null}getBoards(e,t){let n=this.boardCounts();return[...new Set(e)].flatMap(e=>this.state.boards[e]?[this.boardDetail(this.state.boards[e],t,n)]:[])}ownBoards(e){this.sweep();let t=this.boardCounts();return Object.values(this.state.boards).filter(t=>this.canManageBoard(t.id,e)).sort((e,t)=>t.createdAt-e.createdAt).map(n=>this.boardDetail(n,e,t))}searchBoards(e,t,n=50){let r=P(e).split(` `).filter(Boolean);if(!r.length)return[];let i=r.join(` `),a=this.boardCounts(),o=[],s=(e,t)=>e.some(e=>e.startsWith(t));for(let e of Object.values(this.state.boards)){let t=P(e.name),n=t.split(` `),c=[...n,...P(`${e.description??``} ${e.owner.name}`).split(` `)];if(!r.every(e=>s(c,e)))continue;let l=t.startsWith(i)?0:r.every(e=>s(n,e))?1:2;o.push({board:e,rank:l,pins:a.get(e.id)?.published??0})}return o.sort((e,t)=>e.rank-t.rank||t.pins-e.pins||e.board.name.localeCompare(t.board.name)),o.slice(0,Math.max(1,n)).map(e=>this.boardDetail(e.board,t,a))}boardsNearby(e,t,n=50){this.sweep();let r=new Map;for(let t of Object.values(this.state.pins))t.board&&t.status===`published`&&this.state.boards[t.board]&&b(t.position,e)&&r.set(t.board,(r.get(t.board)??0)+1);let i=this.boardCounts(),a=[...r.entries()].sort((e,t)=>t[1]-e[1]||(i.get(t[0])?.published??0)-(i.get(e[0])?.published??0));return{total:a.length,boards:a.slice(0,Math.max(1,n)).map(([e,n])=>({...this.boardDetail(this.state.boards[e],t,i),pinsHere:n}))}}cleanBoardDraft(e){let t=e.name?.replace(/\s+/g,` `).trim()??``;if(!t||t.length>60)throw new h(`invalid`,`name:required`);let n=e.contributions===`approval`||e.contributions===`owner`?e.contributions:`open`,r=typeof e.photo==`string`?e.photo.trim():``;if(r.length>2e5)throw new h(`invalid`,`photo:too_large`);return{name:t,description:e.description?.trim().slice(0,500)||void 0,verbs:[...new Set((e.verbs??[]).filter(m))],contributions:n,photo:r||void 0}}createBoard(e,t){if(!t.name.trim())throw new h(`forbidden`,`A name is needed to create a list`);let n=this.cleanBoardDraft(e),r={id:O(),...n,owner:{name:t.name},createdAt:this.now()};return r.description||delete r.description,r.photo||delete r.photo,this.state.boards[r.id]=r,this.state.boardOwners[r.id]=t.id,this.emit([],[r.id]),this.boardDetail(r,t)}updateBoard(e,t,n){let r=this.state.boards[e];if(!r)throw new h(`board_not_found`,`List not found`);if(!this.canManageBoard(e,n))throw new h(`forbidden`,`Not your list`);Object.assign(r,this.cleanBoardDraft(t)),r.description||delete r.description,r.photo||delete r.photo;let i=[];if(r.contributions!==`approval`)for(let t of Object.values(this.state.pins))t.board===e&&t.status===`pending`&&(t.status=`published`,i.push(t.id));return this.emit(i,[e]),this.boardDetail(r,n)}boardPins(e,t){this.sweep();let n=this.canManageBoard(e,t);return Object.values(this.state.pins).filter(t=>t.board===e&&(t.status===`published`||n&&t.status===`pending`)).sort((e,t)=>t.createdAt-e.createdAt)}requireManager(e,t){let n=this.state.boards[e];if(!n)throw new h(`board_not_found`,`List not found`);if(!this.canManageBoard(e,t))throw new h(`forbidden`,`Not your list`);return n}reviewPins(e,t,n,r){this.requireManager(e,r);let i=this.now(),a=[];for(let r of t){let t=this.state.pins[r];t&&t.board===e&&t.status===`pending`&&(n===`approve`?t.status=`published`:(t.status=`closed`,t.closedReason=`rejected`,t.closedAt=i),t.updatedAt=i,a.push(t))}return this.emit(a.map(e=>e.id)),a}removePins(e,t,n){this.requireManager(e,n);let r=this.now(),i=[];for(let n of t){let t=this.state.pins[n];t&&t.board===e&&t.status!==`closed`&&(t.status=`closed`,t.closedReason=`removed`,t.closedAt=r,t.updatedAt=r,i.push(t))}return this.emit(i.map(e=>e.id)),i}exportDataSet(){return this.sweep(),{pindl:1,exportedAt:this.now(),pins:Object.values(this.state.pins),boards:Object.values(this.state.boards),pinOwners:{...this.state.pinOwners},boardOwners:{...this.state.boardOwners},confirms:{...this.state.confirms},reports:{...this.state.reports},comments:{...this.state.comments}}}importDataSet(e){if(!e||e.pindl!==1||!Array.isArray(e.pins)||!Array.isArray(e.boards))throw new h(`invalid`,`Not a Pindl data set`);let t={...e,pins:e.pins.filter(e=>M(e).length===0)};this.state=He(t),this.emit([],[],!0)}};function We(e,t,n){let r=n-t,i=e=>e===void 0?void 0:e+r;return{...e,exportedAt:n,pins:e.pins.map(e=>{let t={...e,createdAt:e.createdAt+r,updatedAt:e.updatedAt+r,expiresAt:e.expiresAt+r};return e.starts!==void 0&&(t.starts=i(e.starts)),e.ends!==void 0&&(t.ends=i(e.ends)),e.closedAt!==void 0&&(t.closedAt=i(e.closedAt)),t}),boards:e.boards.map(e=>({...e,createdAt:e.createdAt+r})),...e.comments?{comments:Object.fromEntries(Object.entries(e.comments).map(([e,t])=>[e,t.map(e=>({...e,createdAt:e.createdAt+r}))]))}:{}}}var Ge=400;function Ke(e){let t=new TextEncoder().encode(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}function qe(e){let t=atob(e.replace(/-/g,`+`).replace(/_/g,`/`)),n=Uint8Array.from(t,e=>e.charCodeAt(0));return new TextDecoder().decode(n)}function Je(e){let t=e.description&&e.description.length>Ge?`${e.description.slice(0,399)}…`:e.description,n=[1,e.id,e.verb,e.title,t??``,e.tags,[e.position.lng,e.position.lat],e.radius,e.createdAt,e.expiresAt,+(e.kind===`business`),[e.author.name,e.author.mark??``],e.contact,e.board??``,e.price??null,e.starts??null,e.ends??null,e.confirmations,+!!e.alsoOnMap];return Ke(JSON.stringify(n))}function Ye(e){try{let t=JSON.parse(qe(e));if(!Array.isArray(t)||t[0]!==1||!m(t[2]))return null;let n={id:String(t[1]),verb:t[2],title:String(t[3]),tags:Array.isArray(t[5])?t[5].map(String):[],position:{lng:Number(t[6][0]),lat:Number(t[6][1])},radius:Number(t[7]),createdAt:Number(t[8]),updatedAt:Number(t[8]),expiresAt:Number(t[9]),status:`published`,kind:t[10]?`business`:`individual`,author:{name:String(t[11][0]),...t[11][1]?{mark:t[11][1]}:{}},contact:t[12],confirmations:Number(t[17])||0};return t[4]&&(n.description=String(t[4])),t[13]&&(n.board=String(t[13])),t[13]&&t[18]&&(n.alsoOnMap=!0),typeof t[14]==`number`&&(n.price=t[14]),typeof t[15]==`number`&&(n.starts=t[15]),typeof t[16]==`number`&&(n.ends=t[16]),M(n).length?null:n}catch{return null}}var F=`selected-pin`,I=`pins-free`,L=[{min:0,max:11,free:1/0},{min:11,max:13,free:1e3},{min:13,max:15,free:400},{min:15,max:24,free:1}],R=e=>`pins-${e}`,z=16.5,Xe={cluster:!0,clusterRadius:44,clusterMaxZoom:16,clusterMinPoints:3};function Ze(e){return`pindl-${e}`}function Qe(e){let t=L.map((t,n)=>({source:R(n),filter:Number.isFinite(t.free)?[`all`,e,[`<`,[`get`,`radius`],t.free]]:e}));return t.push({source:I,filter:[`all`,e,[`>`,[`get`,`radius`],0]]}),t}function $e(){let e=[`step`,[`zoom`],1e9];for(let t of L)t.min>0&&e.push(t.min,Number.isFinite(t.free)?t.free:1e9);return[`>=`,[`get`,`radius`],e]}function B(e,t){let n=[`match`,[`get`,`verb`]];for(let t of te)n.push(t.id,e(t));return n.push(t),n}function V(e){return[`case`,[`>`,[`length`,[`get`,`title`]],e],[`concat`,[`slice`,[`get`,`title`],0,e-1],`…`],[`get`,`title`]]}var H=[`!`,[`has`,`point_count`]],et=`pindl-sign`,tt=e=>`pindl-sign-${e}`,nt={light:{surface:`#ffffff`,ink:`#17142e`,onInk:`#ffffff`},dark:{surface:`#1b1832`,ink:`#f4f2fb`,onInk:`#17142e`}},rt=[7,11,7,33],it=[1.62,0];function at(e={}){let t=e.theme===`dark`?`dark`:`light`,n=nt[t],r=e.fonts??{regular:[`Noto Sans Regular`],bold:[`Noto Sans Bold`]},i=B(e=>e.color,`#555555`),a=B(e=>e.text[t],n.ink),o=B(t=>e.verbLabels?.[t.id]??t.id[0].toUpperCase()+t.id.slice(1),``),s=(e,t=!0)=>[`format`,o,{"font-scale":.92,"text-font":[`literal`,r.bold],...t?{"text-color":a}:{}},` · `,{},e,{}],c=e=>e?[`step`,[`zoom`],V(26),z,s(V(40)),18,s([`get`,`title`])]:[`step`,[`zoom`],``,15,V(26),z,s(V(40)),18,s([`get`,`title`])],l=[`interpolate`,[`linear`],[`zoom`],10,.55,13,.62,16,.8],u=[],d=[],f=(e,t,n)=>({id:e,type:`symbol`,source:t,...n,layout:{"icon-image":[`concat`,`pindl-`,[`get`,`verb`]],"icon-size":l,"icon-allow-overlap":!0,"icon-ignore-placement":!1,"icon-padding":1,"symbol-sort-key":[`-`,[`get`,`score`]]}}),p=(e,t,i,a=!1)=>({id:e,type:`symbol`,source:t,...i,layout:{"icon-image":et,"icon-allow-overlap":!0,"icon-text-fit":`both`,"icon-text-fit-padding":rt,"text-field":c(a),"text-font":r.bold,"text-size":13,"text-max-width":100,"text-anchor":`left`,"text-offset":it,"text-padding":4,"symbol-sort-key":[`-`,[`get`,`score`]]},paint:{"text-color":n.ink}});return L.forEach((e,t)=>{let a=R(t),o={minzoom:e.min,maxzoom:e.max};e.max>15&&(u.push(p(`pin-signs-${t}`,a,{minzoom:Math.max(e.min,15),maxzoom:e.max,filter:H})),d.push(`pin-signs-${t}`)),u.push({id:`pin-clusters-${t}`,type:`circle`,source:a,...o,filter:[`has`,`point_count`],paint:{"circle-color":n.ink,"circle-stroke-color":n.surface,"circle-stroke-width":3,"circle-radius":[`step`,[`get`,`point_count`],16,10,19,50,22,200,26]}}),u.push({id:`pin-cluster-counts-${t}`,type:`symbol`,source:a,...o,filter:[`has`,`point_count`],layout:{"text-field":[`concat`,`+`,[`to-string`,[`get`,`point_count`]]],"text-font":r.bold,"text-size":13,"text-allow-overlap":!0,"text-ignore-placement":!1,"text-padding":6},paint:{"text-color":n.onInk}}),d.push(`pin-clusters-${t}`),e.min<13&&(u.push({id:`pin-dots-${t}`,type:`circle`,source:a,minzoom:e.min,maxzoom:Math.min(e.max,13),filter:H,paint:{"circle-radius":[`interpolate`,[`linear`],[`zoom`],8,3.5,13,6.5],"circle-color":i,"circle-stroke-color":n.surface,"circle-stroke-width":2}}),d.push(`pin-dots-${t}`)),e.max>13&&(u.push(f(`pin-icons-${t}`,a,{minzoom:Math.max(e.min,13),maxzoom:e.max,filter:H})),d.push(`pin-icons-${t}`))}),u.push(p(`pin-free-signs`,I,{filter:$e()},!0)),u.push(f(`pin-free`,I,{filter:$e()})),d.push(`pin-free-signs`,`pin-free`),u.push({id:`pin-selected-sign`,type:`symbol`,source:F,layout:{"icon-image":[`concat`,`pindl-sign-`,[`get`,`verb`]],"icon-text-fit":`both`,"icon-text-fit-padding":[9,13,9,38],"text-field":[`step`,[`zoom`],V(30),z,s(V(40),!1)],"text-font":r.bold,"text-size":14,"text-max-width":100,"text-anchor":`left`,"text-offset":[1.8,0],"text-allow-overlap":!0,"text-ignore-placement":!0,"icon-allow-overlap":!0,"icon-ignore-placement":!0},paint:{"text-color":ee}}),u.push({id:`pin-selected-icon`,type:`symbol`,source:F,layout:{"icon-image":[`concat`,`pindl-`,[`get`,`verb`]],"icon-size":.92,"icon-allow-overlap":!0,"icon-ignore-placement":!0}}),{layers:u,hitLayers:d}}var ot=new URL(`../assets/seed.Bqm9LL3Y.json`,import.meta.url).href,U=`pindl-prototype`,st=`pindl:storage`,ct=`mock-server-1`;function W(e){return new Promise((t,n)=>{e.onsuccess=()=>t(e.result),e.onerror=()=>n(e.error)})}function lt(e,t){return new Promise((n,r)=>{let i=indexedDB.open(e,1);i.onupgradeneeded=()=>{if(!t)return;let e=i.result;e.createObjectStore(`pins`,{keyPath:`id`}),e.createObjectStore(`boards`,{keyPath:`id`}),e.createObjectStore(`meta`)},i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function ut(e){try{let t=localStorage.getItem(e);return t===null?null:JSON.parse(t)}catch{return null}}async function dt(e){try{if(localStorage.getItem(st)===ct)return}catch{return}try{let t={},n=[],r=[],i=await indexedDB.databases?.()??[];if(i.some(e=>e.name===U)){let e=await lt(U,!1);if(e.objectStoreNames.contains(`pins`)&&e.objectStoreNames.contains(`meta`)){let i=e.transaction([`pins`,`boards`,`meta`]);n=await W(i.objectStore(`pins`).getAll()),r=await W(i.objectStore(`boards`).getAll());let a=await W(i.objectStore(`meta`).getAllKeys()),o=await W(i.objectStore(`meta`).getAll());a.forEach((e,n)=>t[String(e)]=o[n])}e.close()}let a=ut(`pindl:session`);a?.id&&(t.readerId=a.id,t.account=a.name?.trim()?{id:a.id,name:a.name.trim()}:null);let o=ut(`pindl:demoAs`);if(o&&(t.actingAs=`demo:${o}`),n.length||r.length||Object.keys(t).length){let i=await lt(e,!0),a=i.transaction([`pins`,`boards`,`meta`],`readwrite`);for(let e of n)a.objectStore(`pins`).put(e);for(let e of r)a.objectStore(`boards`).put(e);for(let[e,n]of Object.entries(t))a.objectStore(`meta`).put(n,e);await new Promise((e,t)=>{a.oncomplete=()=>e(),a.onerror=()=>t(a.error)}),i.close()}i.some(e=>e.name===U)&&indexedDB.deleteDatabase(U),localStorage.removeItem(`pindl:session`),localStorage.removeItem(`pindl:demoAs`),localStorage.setItem(st,ct)}catch(e){console.warn(`Pindl: could not move the records of an earlier build`,e)}}var ft=`pindl-mock-server`,pt=40,mt=`demo:`;function ht(e){return new Promise(t=>{try{let n=indexedDB.open(e,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`pins`)||e.createObjectStore(`pins`,{keyPath:`id`}),e.objectStoreNames.contains(`boards`)||e.createObjectStore(`boards`,{keyPath:`id`}),e.objectStoreNames.contains(`meta`)||e.createObjectStore(`meta`)},n.onsuccess=()=>t(n.result),n.onerror=()=>t(null),n.onblocked=()=>t(null)}catch{t(null)}})}function G(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error)})}function gt(e,t){return new Promise((n,r)=>{let i=e.transaction(t).objectStore(t).getAll();i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function K(e,t){return new Promise((n,r)=>{let i=e.transaction(`meta`).objectStore(`meta`).get(t);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)})}function _t(){let e=new Date;return e.setHours(0,0,0,0),Math.floor(e.getTime()/1e3)}function q(e){let t=String(e??``).trim().slice(0,pt);if(!t)throw new h(`invalid`,`nickname`);return t}var vt=class{kind=`mock`;demo;db=null;engine;seedUrl;latency;seedIds=new Set;tombstones=new Set;replaced=!1;localComments={};localReports={};readerId=``;own=null;acting=null;listeners=new Set;writes=Promise.resolve();constructor(e){this.seedUrl=e.seedUrl,this.latency=Math.max(0,e.latency??0),this.demo={accounts:()=>this.answer(()=>this.demoAccounts()),actAs:e=>this.answer(()=>this.actAs(e)),actingAs:()=>this.acting,exportDataSet:()=>this.answer(()=>this.engine.exportDataSet()),importDataSet:e=>this.answer(()=>this.engine.importDataSet(e)),reset:()=>this.reset()}}async connect(){await dt(ft),this.db=await ht(ft);let e,t=[],n=[],r={},i={},a={};if(this.db){let o=this.db;[t,n]=await Promise.all([gt(o,`pins`),gt(o,`boards`)]),e=await K(o,`privacyKey`),r=await K(o,`pinOwners`)??{},i=await K(o,`boardOwners`)??{},a=await K(o,`confirms`)??{},this.tombstones=new Set(await K(o,`tombstones`)??[]),this.replaced=await K(o,`replaced`)??!1,this.localComments=await K(o,`comments`)??{},this.localReports=await K(o,`reports`)??{},this.readerId=await K(o,`readerId`)??``,this.own=await K(o,`account`)??null,this.acting=await K(o,`actingAs`)??null}e||(e=Le(),this.putMeta({privacyKey:e})),this.readerId||(this.readerId=this.own?.id??O(),this.putMeta({readerId:this.readerId}));let o=Ve();if(this.seedIds=new Set,!this.replaced){let e=await(await fetch(this.seedUrl)).json(),t=Math.floor(Date.now()/1e3),n=We(e,e.base,_t());for(let e of n.pins)e.createdAt>t-300&&(e.createdAt=e.updatedAt=t-300-e.confirmations%7*600),this.seedIds.add(e.id);n.pins=n.pins.filter(e=>!this.tombstones.has(e.id)),o=He(n)}for(let e of t)o.pins[e.id]=e;for(let e of n)e.contributions&&(o.boards[e.id]=e);Object.assign(o.pinOwners,r),Object.assign(o.boardOwners,i),Object.assign(o.confirms,a),Object.assign(o.comments,this.localComments),Object.assign(o.reports,this.localReports),this.acting&&!Object.values(o.boardOwners).includes(this.acting)&&(this.acting=null),this.engine=new Ue(o,{privacyKey:e,onChange:e=>this.persist(e)})}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){queueMicrotask(()=>this.listeners.forEach(e=>e()))}async answer(e){this.latency&&await new Promise(e=>setTimeout(e,this.latency));let t=e();return t===void 0?t:structuredClone(t)}putMeta(e){let t=this.db;if(!t)return;let n=structuredClone(e);this.writes=this.writes.then(()=>{let e=t.transaction(`meta`,`readwrite`);for(let[t,r]of Object.entries(n))e.objectStore(`meta`).put(r,t);return G(e)}).catch(e=>console.warn(`Pindl: the mock server could not save`,e))}persist(e){let t=this.db,n=this.engine.state;if(t){let r=(e.all?Object.keys(n.pins):e.pins).map(e=>[e,n.pins[e]&&structuredClone(n.pins[e])]),i=(e.all?Object.keys(n.boards):e.boards).map(e=>[e,n.boards[e]&&structuredClone(n.boards[e])]);e.all&&(this.replaced=!0,this.tombstones.clear(),this.seedIds.clear());for(let[e,t]of r)!t&&this.seedIds.has(e)&&this.tombstones.add(e);if(e.all)this.localComments=structuredClone(n.comments),this.localReports=structuredClone(n.reports);else for(let[e,t]of r)t&&n.comments[e]?this.localComments[e]=structuredClone(n.comments[e]):delete this.localComments[e],t&&n.reports[e]?this.localReports[e]=structuredClone(n.reports[e]):delete this.localReports[e];let a={pinOwners:structuredClone(n.pinOwners),boardOwners:structuredClone(n.boardOwners),confirms:structuredClone(n.confirms),comments:structuredClone(this.localComments),reports:structuredClone(this.localReports),tombstones:[...this.tombstones],replaced:this.replaced},o=e.all;this.writes=this.writes.then(()=>{let e=t.transaction([`pins`,`boards`,`meta`],`readwrite`);o&&(e.objectStore(`pins`).clear(),e.objectStore(`boards`).clear());for(let[t,n]of r)n?e.objectStore(`pins`).put(n):e.objectStore(`pins`).delete(t);for(let[t,n]of i)n?e.objectStore(`boards`).put(n):e.objectStore(`boards`).delete(t);for(let[t,n]of Object.entries(a))e.objectStore(`meta`).put(n,t);return G(e)}).catch(e=>console.warn(`Pindl: the mock server could not save`,e))}this.notify()}get session(){return this.acting?{id:this.acting,name:this.acting.slice(5)}:this.own?{id:this.own.id,name:this.own.name}:{id:this.readerId,name:``}}current(){return this.acting?{id:this.acting,name:this.acting.slice(5)}:this.own}account(){return this.answer(()=>this.current())}signUp(e){return this.answer(()=>(this.own={id:this.readerId,name:q(e?.name)},this.acting=null,this.putMeta({account:this.own,actingAs:null}),this.notify(),this.own))}updateAccount(e){return this.answer(()=>{if(!this.own)throw new h(`forbidden`,`No account`);return e?.name!==void 0&&(this.own={...this.own,name:q(e.name)}),this.acting=null,this.putMeta({account:this.own,actingAs:null}),this.notify(),this.own})}signOut(){return this.answer(()=>{this.own=null,this.acting=null,this.readerId=O(),this.putMeta({account:null,actingAs:null,readerId:this.readerId}),this.notify()})}loadPins(e={}){return this.answer(()=>this.engine.features(e))}getPin(e){return this.answer(()=>this.engine.getPin(e,this.session))}searchDescriptions(e,t){return this.answer(()=>this.engine.searchDescriptions(e,t))}listComments(e){return this.answer(()=>this.engine.listComments(e,this.session))}getBoard(e){return this.answer(()=>this.engine.getBoard(e,this.session))}getBoards(e){return this.answer(()=>this.engine.getBoards(e,this.session))}searchBoards(e){return this.answer(()=>this.engine.searchBoards(e,this.session))}boardsNearby(e){return this.answer(()=>this.engine.boardsNearby(e,this.session))}listBoardPins(e){return this.answer(()=>this.engine.boardPins(e,this.session))}previewPosition(e,t){return this.answer(()=>this.engine.previewPosition(e,t,this.session))}importSharedPin(e){return this.answer(()=>this.engine.importSharedPin(e,this.session))}writer(){let e=this.session;if(!e.name)throw new h(`forbidden`,`An account is needed`);return e}createPin(e){return this.answer(()=>this.engine.createPin(e,this.writer()))}updatePin(e,t){return this.answer(()=>this.engine.updatePin(e,t,this.writer()))}closePin(e,t){return this.answer(()=>this.engine.closePin(e,t,this.writer()))}renewPin(e){return this.answer(()=>this.engine.renewPin(e,this.writer()))}toggleConfirm(e){return this.answer(()=>this.engine.toggleConfirm(e,this.writer()))}addComment(e,t){return this.answer(()=>this.engine.addComment(e,t,this.writer()))}reportPin(e,t){return this.answer(()=>this.engine.reportPin(e,t,this.writer()))}listOwnPins(){return this.answer(()=>this.engine.ownPins(this.session))}ownBoards(){return this.answer(()=>this.engine.ownBoards(this.session))}createBoard(e){return this.answer(()=>this.engine.createBoard(e,this.writer()))}updateBoard(e,t){return this.answer(()=>this.engine.updateBoard(e,t,this.writer()))}reviewPins(e,t,n){return this.answer(()=>this.engine.reviewPins(e,t,n,this.writer()))}removePins(e,t){return this.answer(()=>this.engine.removePins(e,t,this.writer()))}demoAccounts(){return[...new Set(Object.values(this.engine.state.boardOwners))].filter(e=>e.startsWith(mt)).map(e=>({id:e,name:e.slice(5)})).sort((e,t)=>e.name.localeCompare(t.name))}actAs(e){if(e!==null&&!this.demoAccounts().some(t=>t.id===e))throw new h(`not_found`,`No such demonstration account`);return this.acting=e,this.putMeta({actingAs:e}),this.notify(),this.current()}async reset(){await this.writes;let e=this.db;if(e){let t=e.transaction([`pins`,`boards`,`meta`],`readwrite`);t.objectStore(`pins`).clear(),t.objectStore(`boards`).clear();for(let e of[`pinOwners`,`boardOwners`,`confirms`,`comments`,`reports`,`tombstones`,`replaced`,`actingAs`])t.objectStore(`meta`).delete(e);await G(t),e.close()}this.acting=null,await this.connect(),this.listeners.forEach(e=>e())}};function yt(){return new vt({seedUrl:ot,latency:0})}var J=`pindl:`;function Y(e,t){try{let n=localStorage.getItem(J+e);return n===null?t:JSON.parse(n)}catch{return t}}function X(e,t){try{t==null?localStorage.removeItem(J+e):localStorage.setItem(J+e,JSON.stringify(t))}catch{}}var Z={saved:()=>Y(`saved`,[]),saveSaved:e=>X(`saved`,e),filters:()=>Y(`filters`,null),saveFilters:e=>X(`filters`,e),lastArea:()=>Y(`area`,null),saveLastArea:e=>X(`area`,e),homeZone:()=>Y(`home`,null),saveHomeZone:e=>X(`home`,e),homeAsked:()=>Y(`homeAsked`,!1),saveHomeAsked:()=>X(`homeAsked`,!0)},Q={lng:7.6808,lat:45.0545,zoom:14.6},bt=new class{server;#e=n(!1);get ready(){return e(this.#e)}set ready(e){t(this.#e,e,!0)}#t=n(!1);get failed(){return e(this.#t)}set failed(e){t(this.#t,e,!0)}#n=n(null);get account(){return e(this.#n)}set account(e){t(this.#n,e)}#r=n([]);get demoAccounts(){return e(this.#r)}set demoAccounts(e){t(this.#r,e)}#i=n(null);get actingAs(){return e(this.#i)}set actingAs(e){t(this.#i,e,!0)}#a=n(i({...w}));get filters(){return e(this.#a)}set filters(e){t(this.#a,e,!0)}#o=n([]);get descriptionHits(){return e(this.#o)}set descriptionHits(e){t(this.#o,e)}#s=n(i(k()));get now(){return e(this.#s)}set now(e){t(this.#s,e,!0)}#c=n([]);get features(){return e(this.#c)}set features(e){t(this.#c,e)}#l=n(null);get currentBoard(){return e(this.#l)}set currentBoard(e){t(this.#l,e)}#u=n([]);get myBoards(){return e(this.#u)}set myBoards(e){t(this.#u,e)}#d=n({boards:[],total:0});get nearbyBoards(){return e(this.#d)}set nearbyBoards(e){t(this.#d,e)}#f=n({});get knownBoards(){return e(this.#f)}set knownBoards(e){t(this.#f,e)}#p=n(0);get revision(){return e(this.#p)}set revision(e){t(this.#p,e,!0)}#m=n(null);get panel(){return e(this.#m)}set panel(e){t(this.#m,e,!0)}#h=n(null);get selectedId(){return e(this.#h)}set selectedId(e){t(this.#h,e,!0)}#g=n(null);get selected(){return e(this.#g)}set selected(e){t(this.#g,e)}#_=n(!1);get selectedMissing(){return e(this.#_)}set selectedMissing(e){t(this.#_,e,!0)}#v=n(null);get camera(){return e(this.#v)}set camera(e){t(this.#v,e)}initialArea={...Q};#y=n(null);get userLocation(){return e(this.#y)}set userLocation(e){t(this.#y,e)}#b=n(!0);get mapAvailable(){return e(this.#b)}set mapAvailable(e){t(this.#b,e,!0)}map=null;#x=n(i([]));get saved(){return e(this.#x)}set saved(e){t(this.#x,e,!0)}#S=n(null);get homeZone(){return e(this.#S)}set homeZone(e){t(this.#S,e,!0)}#C=n(null);get editing(){return e(this.#C)}set editing(e){t(this.#C,e)}#w=n(null);get composeBoard(){return e(this.#w)}set composeBoard(e){t(this.#w,e,!0)}#T=n(null);get draftPoint(){return e(this.#T)}set draftPoint(e){t(this.#T,e)}#E=n(null);get draftPreview(){return e(this.#E)}set draftPreview(e){t(this.#E,e)}#D=n(null);get manageBoard(){return e(this.#D)}set manageBoard(e){t(this.#D,e,!0)}#O=n(void 0);get boardForm(){return e(this.#O)}set boardForm(e){t(this.#O,e,!0)}boardFormFrom=`boards`;#k=n(`mine`);get myPinsTab(){return e(this.#k)}set myPinsTab(e){t(this.#k,e,!0)}#A=n(!1);get backToPins(){return e(this.#A)}set backToPins(e){t(this.#A,e,!0)}pinsFrom=null;listsFrom=null;#j=n(``);get listsQuery(){return e(this.#j)}set listsQuery(e){t(this.#j,e,!0)}#M=n(!1);get fromMenu(){return e(this.#M)}set fromMenu(e){t(this.#M,e,!0)}#N=n(null);get toast(){return e(this.#N)}set toast(e){t(this.#N,e,!0)}toastTimer;loadToken=0;nearbyToken=0;#P=r(()=>({now:this.now,descriptionHits:this.descriptionHits}));get filterContext(){return e(this.#P)}set filterContext(e){t(this.#P,e)}#F=r(()=>De(this.filters,this.filterContext));get filterExpression(){return e(this.#F)}set filterExpression(e){t(this.#F,e)}#I=r(()=>this.features.filter(e=>Oe(e.properties,this.filters,this.filterContext)));get filtered(){return e(this.#I)}set filtered(e){t(this.#I,e)}#L=r(()=>Te(this.filters));get filtersActive(){return e(this.#L)}set filtersActive(e){t(this.#L,e)}#R=r(()=>{let e=this.camera?.bounds;if(!e)return this.filtered.length;let t=0;for(let n of this.filtered)b({lng:n.geometry.coordinates[0],lat:n.geometry.coordinates[1]},e)&&t++;return t});get visibleCount(){return e(this.#R)}set visibleCount(e){t(this.#R,e)}#z=r(()=>{let e=this.camera?.bounds,t=new Map;for(let n of this.filtered)if(!e||b({lng:n.geometry.coordinates[0],lat:n.geometry.coordinates[1]},e))for(let e of le(n.properties.tags))t.set(e,(t.get(e)??0)+1);return[...t.entries()].sort((e,t)=>t[1]-e[1]).map(([e])=>e)});get nearbyTags(){return e(this.#z)}set nearbyTags(e){t(this.#z,e)}async start(){this.saved=Z.saved(),this.homeZone=Z.homeZone(),this.server=yt();let e=this.readAddress(),t=Z.filters();je(e)?this.filters=Ae(e):t&&!e.has(`p`)&&!e.has(`pin`)&&(this.filters={...w,...t}),e.get(`view`)===`list`&&(this.panel=`pins`);let n=e.get(`m`)?.split(`,`).map(Number),r=Z.lastArea();n?.length===3&&n.every(Number.isFinite)?this.initialArea={lat:n[0],lng:n[1],zoom:n[2]}:r&&(this.initialArea=r);try{await this.server.connect(),await this.reload(),this.server.demo&&(this.demoAccounts=await this.server.demo.accounts())}catch(e){console.error(e),this.failed=!0;return}this.filters.board&&!this.currentBoard&&(this.filters.board=null,await this.reload()),this.server.subscribe(()=>void this.reload()),setInterval(()=>this.now=k(),3e4),window.addEventListener(`hashchange`,()=>this.applyAddress()),this.ready=!0;let i=e.get(`p`),a=e.get(`pin`);i?await this.openSharedPin(i):a?await this.select(a,!0):this.filters.board&&!e.has(`m`)&&this.fitToPins()}async reload(){let e=++this.loadToken,t=this.filters.board,[n,r,i,a]=await Promise.all([this.server.loadPins({board:t}),t?this.server.getBoard(t):null,this.server.account(),this.server.ownBoards()]);if(e===this.loadToken&&(this.features=n.features,this.currentBoard=r,this.myBoards=a,this.knownBoards={},this.remember(r?[r,...a]:a),this.account=i,this.actingAs=this.server.demo?.actingAs()??null,this.now=k(),this.revision++,this.selectedId)){let t=await this.server.getPin(this.selectedId);e===this.loadToken&&this.selectedId&&(this.selected=t,this.selectedMissing=!t)}}readAddress(){return new URLSearchParams(location.hash.replace(/^#/,``))}address(e={}){let t=ke(this.filters);if(this.panel===`pins`&&t.set(`view`,`list`),this.camera){let{center:e,zoom:n}=this.camera;t.set(`m`,`${e.lat.toFixed(5)},${e.lng.toFixed(5)},${n.toFixed(2)}`)}e.pin?t.set(`p`,Je(e.pin)):this.selectedId&&t.set(`pin`,this.selectedId);let n=t.toString().replace(/%2C/g,`,`);return`${location.origin}${location.pathname}${n?`#${n}`:``}`}syncAddress(){let e=this.address();e!==location.href&&c(e,{shallow:!0,replace:!0,state:{}}).catch(()=>{})}async applyAddress(){let e=this.readAddress(),t=Ae(e),n=t.board!==this.filters.board;this.filters=t,e.get(`view`)===`list`?this.panel||=`pins`:this.panel===`pins`&&(this.panel=null),n&&await this.reload(),n&&t.board&&!e.has(`m`)&&!e.has(`pin`)&&this.fitToPins();let r=e.get(`m`)?.split(`,`).map(Number);r?.length===3&&r.every(Number.isFinite)&&this.map?.flyTo({lat:r[0],lng:r[1]},r[2]);let i=e.get(`p`),a=e.get(`pin`);i?await this.openSharedPin(i):a&&a!==this.selectedId&&await this.select(a,!0)}async openSharedPin(e){let t=Ye(e);if(!t)return this.notify(d());try{let e=await this.server.importSharedPin(t);await this.select(e.id,!0)}catch{this.notify(d())}}toggleVerb(e){let t=this.filters.verbs;this.filters.verbs=t.includes(e)?t.filter(t=>t!==e):[...t,e]}setQuery(e){this.filters.q=e,this.descriptionHits.length&&(this.descriptionHits=[])}toggleTag(e){let t=this.filters.tags;this.filters.tags=t.includes(e)?t.filter(t=>t!==e):[...t,e]}remember(e){if(!e.length)return;let t={...this.knownBoards};for(let n of e)t[n.id]=n;this.knownBoards=t}async ensureBoards(e,t=!1){let n=a(()=>[...new Set(e.filter(e=>!!e&&(t||!this.knownBoards[e])))]);if(n.length)try{this.remember(await this.server.getBoards(n))}catch(e){console.warn(`Pindl: could not read lists`,e)}}async refreshNearby(){let e=this.camera?.bounds;if(!e)return;let t=++this.nearbyToken;try{let n=await this.server.boardsNearby(e);if(t!==this.nearbyToken)return;this.nearbyBoards=n,this.remember(n.boards)}catch(e){console.warn(`Pindl: could not read the lists around`,e)}}async searchBoards(e){let t=await this.server.searchBoards(e);return this.remember(t),t}openLists(e=null,t=``){this.listsFrom=e,this.listsQuery=t,this.deselect(),this.fromMenu=!1,this.panel=`lists`}async setBoard(e){e!==this.filters.board&&(this.filters.board=e,await this.reload())}async clearFilters(){let e=this.filters.board!==null;this.filters={...w},this.descriptionHits=[],e&&await this.reload()}async searchDescriptions(){let e=this.camera?.bounds;if(!e||!this.filters.q.trim())return 0;let t=await this.server.searchDescriptions(this.filters.q,e),n=this.filtered.length;return this.descriptionHits=t,Math.max(0,this.filtered.length-n)}async select(e,t=!1){this.panel===`pins`?this.backToPins=!0:this.selectedId||(this.backToPins=!1),this.selectedId=e,this.selectedMissing=!1,this.selected?.id!==e&&(this.selected=null),this.panel!==`manage`&&(this.panel=null);let n=await this.server.getPin(e);this.selectedId===e&&(this.selected=n,this.selectedMissing=!n,n&&t&&(n.status===`published`&&!this.features.some(t=>t.properties.id===e)&&await this.setBoard(n.board??null),this.map?.flyTo(n.position,Math.max(this.camera?.zoom??0,16))))}deselect(){this.backToPins=!1,this.selectedId=null,this.selected=null,this.selectedMissing=!1}open(e){e!==`manage`&&this.deselect(),this.fromMenu=this.panel===`menu`&&e!==null&&e!==`menu`,this.panel=e}backToMenu(){this.fromMenu=!1,this.panel=`menu`}openPins(e=null){this.pinsFrom=e,this.deselect(),this.fromMenu=!1,this.panel=`pins`}closePanel(){this.panel===`composer`&&this.endCompose(),this.panel=null}compose(e={}){this.deselect(),this.editing=e.edit??null,this.composeBoard=e.edit?e.edit.board??null:e.board??this.filters.board,this.draftPreview=null,this.draftPoint=e.edit?null:this.map?.center()??this.camera?.center??Q,this.panel=`composer`}endCompose(){this.editing=null,this.draftPoint=null,this.draftPreview=null}async openList(e){this.deselect(),this.panel=null,this.boardForm=void 0,await this.setBoard(e),this.fitToPins()}pendingFit=!1;fitToPins(){if(!this.map){this.pendingFit=!0;return}if(this.pendingFit=!1,!this.features.length)return;let[e,t,n,r]=[180,90,-180,-90];for(let i of this.features){let[a,o]=i.geometry.coordinates;e=Math.min(e,a),t=Math.min(t,o),n=Math.max(n,a),r=Math.max(r,o)}this.map.fitBounds([e,t,n,r])}openManage(e){this.manageBoard=e,this.boardForm=void 0,this.panel=`manage`,this.setBoard(e)}newBoard(){this.boardFormFrom=`boards`,this.boardForm=null,this.panel=`boards`}editBoard(e){this.boardFormFrom=this.panel===`manage`?`manage`:`boards`,this.boardForm=e,this.panel=`boards`}async actAs(e){let t=this.server.demo;if(t)try{let n=await t.actAs(e);this.notify(l({name:n?.name||u()}))}catch(e){this.fail(e)}}isSaved(e){return this.saved.includes(e)}toggleSaved(e){this.saved=this.isSaved(e)?this.saved.filter(t=>t!==e):[e,...this.saved],Z.saveSaved(this.saved)}async signUp(e){this.account=await this.server.signUp({name:e})}async rename(e){try{this.account=await this.server.updateAccount({name:e})}catch(e){this.fail(e)}}setHomeZone(e){this.homeZone=e,Z.saveHomeZone(e),Z.saveHomeAsked()}distanceTo(e){return me(this.userLocation??this.camera?.center??Q,{lng:e.geometry.coordinates[0],lat:e.geometry.coordinates[1]})}notify(e){this.toast=e,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toast=null,3500)}fail(e){console.warn(e),this.notify(s(e))}},xt={"settings-2":`<!-- @license lucide-static v1.72.0 - ISC -->
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
`},St=`pindl:theme`,Ct={light:`#f5f3ef`,dark:`#100e1e`};function wt(){try{let e=JSON.parse(localStorage.getItem(St)??`null`);return e===`light`||e===`dark`?e:null}catch{return null}}var Tt=new class{#e=n(`light`);get current(){return e(this.#e)}set current(e){t(this.#e,e,!0)}started=!1;apply(e){this.current=e,document.documentElement.dataset.theme=e,document.querySelector(`meta[name="theme-color"]`)?.setAttribute(`content`,Ct[e])}start(){if(this.started)return;this.started=!0;let e=window.matchMedia(`(prefers-color-scheme: dark)`);this.apply(wt()??(e.matches?`dark`:`light`));let t=e=>{wt()||this.apply(e.matches?`dark`:`light`)};e.addEventListener?e.addEventListener(`change`,t):e.addListener(t)}toggle(){let e=this.current===`dark`?`light`:`dark`;try{localStorage.setItem(St,JSON.stringify(e))}catch{}this.apply(e)}};function Et(){return document.documentElement.classList.contains(`ios-bleed`)}function $(e){return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(e))||0}function Dt(){return Et()?{top:$(`--bleed-top`),bottom:$(`--bleed-bottom`)}:{top:0,bottom:0}}function Ot(){let e=document.activeElement;return!!e&&(e.tagName===`INPUT`||e.tagName===`TEXTAREA`||e.isContentEditable)}function kt(){return(window.visualViewport?.scale??1)>1.01}function At(e,t){for(let n=e instanceof Element?e:null;n&&n!==document.body;n=n.parentElement){if(n.matches(`input[type="range"]`))return!0;let e=getComputedStyle(n),r=t===`y`?e.overflowY:e.overflowX;if((r===`auto`||r===`scroll`)&&(t===`y`?n.scrollHeight>n.clientHeight+1:n.scrollWidth>n.clientWidth+1))return!0}return!1}function jt(){let e=null,t=null,n=n=>{let r=n.touches[0];e=n.touches.length===1&&r?{x:r.clientX,y:r.clientY}:null,t=null},r=n=>{if(!(!e||n.touches.length>1||!n.cancelable||Ot()||kt())){if(t===null){let r=n.touches[0],i=Math.abs(r.clientY-e.y)>=Math.abs(r.clientX-e.x)?`y`:`x`;t=At(n.target,i)}t||n.preventDefault()}};return document.addEventListener(`touchstart`,n,{passive:!0}),document.addEventListener(`touchmove`,r,{passive:!1}),()=>{document.removeEventListener(`touchstart`,n),document.removeEventListener(`touchmove`,r)}}function Mt(){if(!Et())return()=>{};let e=0,t=()=>{e=0;let t=$(`--runway`);Ot()||kt()||(Math.abs(window.scrollY-t)>.5||window.scrollX!==0)&&window.scrollTo({left:0,top:t,behavior:`instant`})},n=()=>{e||=requestAnimationFrame(t)};t(),window.addEventListener(`scroll`,n,{passive:!0}),window.addEventListener(`resize`,n),document.addEventListener(`focusout`,n);let r=jt();return()=>{r(),cancelAnimationFrame(e),window.removeEventListener(`scroll`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`focusout`,n)}}export{te as A,re as C,_ as D,g as E,d as M,u as N,ne as O,_e as S,fe as T,Qe as _,bt as a,Ce as b,Xe as c,F as d,et as f,tt as g,at as h,xt as i,ee as j,p as k,I as l,Ze as m,Mt as n,Z as o,R as p,Tt as r,L as s,Dt as t,nt as u,D as v,oe as w,we as x,ve as y};