"use strict";(self.webpackChunkexcel_kezdo=self.webpackChunkexcel_kezdo||[]).push([[679],{8716:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>k,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"excel-keresofuggvenyek","title":"Keres\u0151f\xfcggv\xe9nyek \xe9s kimutat\xe1sok","description":"Keres\u0151f\xfcggv\xe9nyek","source":"@site/docs/excel-keresofuggvenyek.md","sourceDirName":".","slug":"/excel-keresofuggvenyek","permalink":"/excel/excel-keresofuggvenyek","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"id":"excel-keresofuggvenyek","title":"Keres\u0151f\xfcggv\xe9nyek \xe9s kimutat\xe1sok","sidebar_label":"Keres\xe9s \xe9s kimutat\xe1sok"},"sidebar":"tutorialSidebar","previous":{"title":"Felt\xe9teles f\xfcggv\xe9nyek","permalink":"/excel/excel-feltetel-fuggvenyek"},"next":{"title":"Diagramok","permalink":"/excel/excel-diagramok"}}');var i=n(4848),r=n(8453),t=n(1470),a=n(9365);const k={sidebar_position:6,id:"excel-keresofuggvenyek",title:"Keres\u0151f\xfcggv\xe9nyek \xe9s kimutat\xe1sok",sidebar_label:"Keres\xe9s \xe9s kimutat\xe1sok"},d="Keres\u0151f\xfcggv\xe9nyek \xe9s kimutat\xe1sok \ud83d\udd0d",o={},c=[{value:"Keres\u0151f\xfcggv\xe9nyek",id:"keres\u0151f\xfcggv\xe9nyek",level:2},{value:"FKERES vs VKERES",id:"fkeres-vs-vkeres",level:3},{value:"INDEX \xe9s HOL.VAN kombin\xe1ci\xf3",id:"index-\xe9s-holvan-kombin\xe1ci\xf3",level:3},{value:"T\xe1bl\xe1zatok kezel\xe9se \ud83d\udcca",id:"t\xe1bl\xe1zatok-kezel\xe9se-",level:2},{value:"T\xe1bl\xe1zatt\xe1 alak\xedt\xe1s",id:"t\xe1bl\xe1zatt\xe1-alak\xedt\xe1s",level:3},{value:"T\xe1bl\xe1zat m\u0171veletek",id:"t\xe1bl\xe1zat-m\u0171veletek",level:3},{value:"Kimutat\xe1sok (Pivot t\xe1bl\xe1k) \ud83d\udcc8",id:"kimutat\xe1sok-pivot-t\xe1bl\xe1k-",level:2},{value:"Kimutat\xe1s alapjai",id:"kimutat\xe1s-alapjai",level:3},{value:"Kimutat\xe1s k\xe9sz\xedt\xe9se",id:"kimutat\xe1s-k\xe9sz\xedt\xe9se",level:3},{value:"Gyakorlati p\xe9lda - \xc9rt\xe9kes\xedt\xe9si riport",id:"gyakorlati-p\xe9lda---\xe9rt\xe9kes\xedt\xe9si-riport",level:3},{value:"Gyakorlati tippek \u2b50",id:"gyakorlati-tippek-",level:2},{value:"Keres\u0151f\xfcggv\xe9nyekn\xe9l",id:"keres\u0151f\xfcggv\xe9nyekn\xe9l",level:3},{value:"Kimutat\xe1sokn\xe1l",id:"kimutat\xe1sokn\xe1l",level:3},{value:"Ellen\u0151rz\u0151 k\xe9rd\xe9sek \u2705",id:"ellen\u0151rz\u0151-k\xe9rd\xe9sek-",level:2}];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"keres\u0151f\xfcggv\xe9nyek-\xe9s-kimutat\xe1sok-",children:"Keres\u0151f\xfcggv\xe9nyek \xe9s kimutat\xe1sok \ud83d\udd0d"})}),"\n",(0,i.jsx)(s.h2,{id:"keres\u0151f\xfcggv\xe9nyek",children:"Keres\u0151f\xfcggv\xe9nyek"}),"\n",(0,i.jsx)(s.h3,{id:"fkeres-vs-vkeres",children:"FKERES vs VKERES"}),"\n",(0,i.jsx)(s.mermaid,{value:"graph TD\n    A[Keres\u0151f\xfcggv\xe9nyek] --\x3e B[FKERES]\n    A --\x3e C[VKERES]\n    B --\x3e D[F\xfcgg\u0151leges keres\xe9s]\n    C --\x3e E[V\xedzszintes keres\xe9s]\n    D --\x3e F[Els\u0151 oszlopban keres]\n    E --\x3e G[Els\u0151 sorban keres]"}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsxs)(a.A,{value:"fkeres",label:"FKERES",default:!0,children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:"=FKERES(\n  mit_keres;     // Keresett \xe9rt\xe9k\n  hol_keres;     // T\xe1bl\xe1zat tartom\xe1ny\n  hanyadik_oszlop; // Visszaadand\xf3 oszlop sz\xe1ma\n  pontos_egyez\xe9s  // HAMIS=r\xe9szleges egyez\xe9s is j\xf3\n)\n"})}),(0,i.jsx)(s.admonition,{title:"P\xe9lda",type:"tip",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:'// Term\xe9k\xe1r keres\xe9se k\xf3d alapj\xe1n\n=FKERES("ABC123"; A2:C10; 3; HAMIS)\n'})})})]}),(0,i.jsxs)(a.A,{value:"vkeres",label:"VKERES",children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:"=VKERES(\n  mit_keres;    // Keresett \xe9rt\xe9k\n  hol_keres;    // T\xe1bl\xe1zat tartom\xe1ny\n  hanyadik_sor; // Visszaadand\xf3 sor sz\xe1ma\n  pontos_egyez\xe9s // HAMIS=r\xe9szleges egyez\xe9s is j\xf3\n)\n"})}),(0,i.jsx)(s.admonition,{title:"P\xe9lda",type:"tip",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:'// Negyed\xe9ves adat keres\xe9se\n=VKERES("Q1"; A1:E5; 3; HAMIS)\n'})})})]})]}),"\n",(0,i.jsx)(s.h3,{id:"index-\xe9s-holvan-kombin\xe1ci\xf3",children:"INDEX \xe9s HOL.VAN kombin\xe1ci\xf3"}),"\n",(0,i.jsx)(s.admonition,{title:"Rugalmasabb keres\xe9s",type:"info",children:(0,i.jsx)(s.p,{children:"Az INDEX-HOL.VAN kombin\xe1ci\xf3val b\xe1rmely ir\xe1nyban kereshet\xfcnk, \xe9s t\xf6bb felt\xe9telt is haszn\xe1lhatunk."})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:'// Szintaxis\n=INDEX(\n  visszaadand\xf3_tartom\xe1ny,  // Honnan adjuk vissza az \xe9rt\xe9ket\n  HOL.VAN(                 // A keresett \xe9rt\xe9k poz\xedci\xf3ja\n    mit_keres\xfcnk,\n    hol_keres\xfcnk,\n    0 // pontos egyez\xe9s\n  )\n)\n\n// P\xe9lda\n=INDEX(C2:C100; HOL.VAN("ABC123"; A2:A100; 0))\n'})}),"\n",(0,i.jsx)(s.h2,{id:"t\xe1bl\xe1zatok-kezel\xe9se-",children:"T\xe1bl\xe1zatok kezel\xe9se \ud83d\udcca"}),"\n",(0,i.jsx)(s.h3,{id:"t\xe1bl\xe1zatt\xe1-alak\xedt\xe1s",children:"T\xe1bl\xe1zatt\xe1 alak\xedt\xe1s"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Gyorsbillenty\u0171"}),": ",(0,i.jsx)(s.code,{children:"CTRL + T"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"El\u0151ny\xf6k"}),":","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"\u2713 Automatikus form\xe1z\xe1s\n\u2713 Dinamikus hivatkoz\xe1sok\n\u2713 Be\xe9p\xedtett sz\u0171r\u0151k\n\u2713 Automatikus b\u0151v\xfcl\xe9s\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"t\xe1bl\xe1zat-m\u0171veletek",children:"T\xe1bl\xe1zat m\u0171veletek"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("strong",{children:"Form\xe1z\xe1si lehet\u0151s\xe9gek"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"El\u0151re defini\xe1lt st\xedlusok"}),"\n",(0,i.jsx)(s.li,{children:"S\xe1vos sorok/oszlopok"}),"\n",(0,i.jsx)(s.li,{children:"\xd6sszegz\u0151 sor"}),"\n",(0,i.jsx)(s.li,{children:"Egyedi form\xe1z\xe1s"}),"\n"]})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)("strong",{children:"Sz\u0171r\xe9s \xe9s rendez\xe9s"})}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:"// Sz\u0171r\xe9si lehet\u0151s\xe9gek\n- \xc9rt\xe9k szerint\n- Sz\xedn szerint\n- Egyedi sz\u0171r\u0151\n  - Tartalmaz\n  - Nagyobb mint\n  - Kezd\u0151dik...\n"})})]}),"\n",(0,i.jsx)(s.h2,{id:"kimutat\xe1sok-pivot-t\xe1bl\xe1k-",children:"Kimutat\xe1sok (Pivot t\xe1bl\xe1k) \ud83d\udcc8"}),"\n",(0,i.jsx)(s.h3,{id:"kimutat\xe1s-alapjai",children:"Kimutat\xe1s alapjai"}),"\n",(0,i.jsx)(s.mermaid,{value:"graph LR\n    A[Adatok] --\x3e B[Kimutat\xe1s]\n    B --\x3e C[Sorok]\n    B --\x3e D[Oszlopok]\n    B --\x3e E[\xc9rt\xe9kek]\n    B --\x3e F[Sz\u0171r\u0151k]"}),"\n",(0,i.jsx)(s.h3,{id:"kimutat\xe1s-k\xe9sz\xedt\xe9se",children:"Kimutat\xe1s k\xe9sz\xedt\xe9se"}),"\n",(0,i.jsxs)(t.A,{children:[(0,i.jsx)(a.A,{value:"elokeszites",label:"El\u0151k\xe9sz\xedt\xe9s",default:!0,children:(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Adatok ellen\u0151rz\xe9se","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Nincsenek \xfcres sorok"}),"\n",(0,i.jsx)(s.li,{children:"Minden oszlopnak van fejl\xe9ce"}),"\n",(0,i.jsx)(s.li,{children:"Konzisztens adatt\xedpusok"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Kijel\xf6l\xe9s","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Teljes adattartom\xe1ny"}),"\n",(0,i.jsx)(s.li,{children:"Vagy t\xe1bl\xe1zat hivatkoz\xe1s"}),"\n"]}),"\n"]}),"\n"]})}),(0,i.jsx)(a.A,{value:"letrehozas",label:"L\xe9trehoz\xe1s",children:(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Besz\xfar\xe1s > Kimutat\xe1s"}),"\n",(0,i.jsxs)(s.li,{children:["Mez\u0151k elhelyez\xe9se:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Sorok \u2500\u2500\u2500 Mit szeretn\xe9nk r\xe9szletezni?\nOszlopok \u2500 Milyen bont\xe1sban?\n\xc9rt\xe9kek \u2500\u2500 Mit szeretn\xe9nk \xf6sszes\xedteni?\nSz\u0171r\u0151k \u2500\u2500\u2500 Milyen felt\xe9telekkel?\n"})}),"\n"]}),"\n"]})}),(0,i.jsx)(a.A,{value:"testreszabas",label:"Testreszab\xe1s",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:"// Sz\xe1m\xedt\xe1si m\xf3dok\n- \xd6sszeg\n- Darabsz\xe1m\n- \xc1tlag\n- Min/Max\n- Egyedi sz\xe1m\xedt\xe1s\n\n// Megjelen\xedt\xe9s\n- R\xe9sz\xf6sszegek\n- \xd6sszegz\u0151 sorok\n- Csoportos\xedt\xe1s\n"})})})]}),"\n",(0,i.jsx)(s.h3,{id:"gyakorlati-p\xe9lda---\xe9rt\xe9kes\xedt\xe9si-riport",children:"Gyakorlati p\xe9lda - \xc9rt\xe9kes\xedt\xe9si riport"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"// Adatok strukt\xfar\xe1ja\nD\xe1tum | Term\xe9k | R\xe9gi\xf3 | Mennyis\xe9g | \xc9rt\xe9k\n\n// Kimutat\xe1s be\xe1ll\xedt\xe1sok\nSorok: Term\xe9k\nOszlopok: R\xe9gi\xf3\n\xc9rt\xe9kek: \n  - Mennyis\xe9g (\xd6sszeg)\n  - \xc9rt\xe9k (\xd6sszeg)\nSz\u0171r\u0151k: D\xe1tum\n\n// Tov\xe1bbi sz\xe1m\xedt\xe1sok\n- R\xe9szesed\xe9s sz\xe1zal\xe9kban\n- El\u0151z\u0151 id\u0151szakhoz k\xe9pesti v\xe1ltoz\xe1s\n- Term\xe9kenk\xe9nti \xe1tlag\xe1r\n"})}),"\n",(0,i.jsx)(s.h2,{id:"gyakorlati-tippek-",children:"Gyakorlati tippek \u2b50"}),"\n",(0,i.jsx)(s.h3,{id:"keres\u0151f\xfcggv\xe9nyekn\xe9l",children:"Keres\u0151f\xfcggv\xe9nyekn\xe9l"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Hibakezel\xe9s"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:'=HAHIBA(\n  FKERES(...);\n  "Nem tal\xe1lhat\xf3"\n)\n'})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Pontos egyez\xe9s vs. K\xf6zel\xedt\u0151 keres\xe9s"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:'// Pontos egyez\xe9s\n=FKERES("ABC123"; A2:C10; 3; HAMIS)\n\n// K\xf6zel\xedt\u0151 keres\xe9s\n=FKERES(100; A2:C10; 3; IGAZ)  // Rendezett adatokn\xe1l!\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"kimutat\xe1sokn\xe1l",children:"Kimutat\xe1sokn\xe1l"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Gyorselemz\xe9s"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ALT + Q"}),": Gyorselemz\xe9s panel megnyit\xe1sa"]}),"\n",(0,i.jsx)(s.li,{children:"Javasolt vizualiz\xe1ci\xf3k"}),"\n",(0,i.jsx)(s.li,{children:"Gyors form\xe1z\xe1s"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Friss\xedt\xe9s"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-excel",children:"// K\xe9zi friss\xedt\xe9s: F5\n// Automatikus friss\xedt\xe9s be\xe1ll\xedt\xe1sa:\nKimutat\xe1s > Elemz\xe9s > Friss\xedt\xe9s\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ellen\u0151rz\u0151-k\xe9rd\xe9sek-",children:"Ellen\u0151rz\u0151 k\xe9rd\xe9sek \u2705"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"1. Mi a f\u0151 k\xfcl\xf6nbs\xe9g az FKERES \xe9s VKERES k\xf6z\xf6tt?"}),(0,i.jsx)(s.p,{children:"Az FKERES f\xfcgg\u0151legesen (oszlopokban), m\xedg a VKERES v\xedzszintesen (sorokban) keres."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"2. Mikor haszn\xe1ljunk INDEX-HOL.VAN kombin\xe1ci\xf3t?"}),(0,i.jsx)(s.p,{children:"Amikor rugalmasabb keres\xe9sre van sz\xfcks\xe9g, vagy amikor az FKERES/VKERES nem el\xe9g (pl. t\xf6bbsz\xf6r\xf6s felt\xe9telek, dinamikus oszlopsz\xe1m)."})]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"3. Mely mez\u0151t\xedpusok l\xe9teznek egy kimutat\xe1sban?"}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Sorok (kategoriz\xe1l\xe1s)"}),"\n",(0,i.jsx)(s.li,{children:"Oszlopok (keresztt\xe1bl\xe1s megjelen\xedt\xe9s)"}),"\n",(0,i.jsx)(s.li,{children:"\xc9rt\xe9kek (sz\xe1m\xedt\xe1sok)"}),"\n",(0,i.jsx)(s.li,{children:"Sz\u0171r\u0151k (adatok sz\u0171k\xedt\xe9se)"}),"\n"]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);