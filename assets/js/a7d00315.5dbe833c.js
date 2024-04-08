"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[770],{7329:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(4848),n=t(8453);const r={id:"api_specs",title:"Specification-API Design",sidebar_position:1},d="Specification: API Design",c={id:"specifications/api_specs",title:"Specification-API Design",description:"Best Practices, Minimum HTTP Responses for REST APIs",source:"@site/docs/specifications/api.md",sourceDirName:"specifications",slug:"/specifications/api_specs",permalink:"/fc4e-cat-doc/docs/specifications/api_specs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api_specs",title:"Specification-API Design",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Specifications",permalink:"/fc4e-cat-doc/docs/category/specifications"},next:{title:"User Guidelines",permalink:"/fc4e-cat-doc/docs/category/user-guidelines"}},o={},a=[{value:"Glossary",id:"glossary",level:2},{value:"API Best Practices",id:"api-best-practices",level:2},{value:"HTTP Response Status Codes",id:"http-response-status-codes",level:2}];function l(e){const s={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"specification-api-design",children:"Specification: API Design"}),"\n",(0,i.jsx)(s.p,{children:"Best Practices, Minimum HTTP Responses for REST APIs"}),"\n",(0,i.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Term"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Reference"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resource"}),(0,i.jsx)(s.td,{children:"Resources are fundamental to the concept of REST. A resource is an object that\u2019s important enough to be referenced in itself. A resource has data, relationships to other resources, and methods that operate against it to allow for accessing and manipulating the associated information."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://swagger.io/resources/articles/best-practices-in-api-design/",children:"https://swagger.io/resources/articles/best-practices-in-api-design/"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Collection"}),(0,i.jsx)(s.td,{children:"A group of resources is called a collection"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"https://swagger.io/resources/articles/best-practices-in-api-design/",children:"https://swagger.io/resources/articles/best-practices-in-api-design/"})})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"api-best-practices",children:"API Best Practices"}),"\n",(0,i.jsx)(s.p,{children:"In general, an effective API design will have the following characteristics [5]:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Easy to read and work with:"})," A well designed API will be easy to work with, and its resources and associated operations can quickly be memorised by developers who work with it constantly."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Hard to misuse:"})," Implementing and integrating with an API with good design will be a straightforward process, and writing incorrect code will be a less likely outcome."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Complete and concise:"})," Finally, a complete API will make it possible for developers to make full- fledged applications against the data you expose. Completeness happens over time usually, and most API designers and developers incrementally build on top of existing APIs."]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"JSON"}),(0,i.jsx)(s.td,{children:"REST APIs SHOULD accept JSON for request payload and also send responses as JSON.  To ensure that clients interpret it as such, one SHOULD set Content-Type in the response header to application/json."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Nouns as Endpoints"}),(0,i.jsx)(s.td,{children:"Use nouns instead of verbs in endpoint paths. The HTTP request already indicates the action (GET, POST, PUT, DELETE)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"HTTP Methods"}),(0,i.jsx)(s.td,{children:"Standard actions for HTTP methods: - GET\tUsed to retrieve a representation of a resource. - POST\tUsed to create new new resources and sub-resources - PUT\tUsed to update existing resources - PATCH\tUsed to update existing resources/ may result in new resource - DELETE\tUsed to delete existing resources"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Collections and Resources"}),(0,i.jsx)(s.td,{children:"Collections indicate lists or inventories of resources (individual instances in the collection)."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Examples"}),(0,i.jsx)(s.td,{children:"Provide request and response examples for all GET requests."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Error Handling"}),(0,i.jsx)(s.td,{children:"Handle errors gracefully and return standard error codes."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Filtering and Paging"}),(0,i.jsx)(s.td,{children:"Allow filtering, sorting, and pagination - responses could be very large without these. Use query parameters to aid with this."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Security"}),(0,i.jsx)(s.td,{children:"Maintain good security practices - APIs should be secure. Enforce the principle of least privilege and define user roles."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Caching"}),(0,i.jsx)(s.td,{children:"Cache client-side data to improve performance."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Versioning"}),(0,i.jsx)(s.td,{children:"Create different versions of API if changes may break clients. Versioning can be done according to semantic version (for example, 2.0.6 to indicate major version 2 and the sixth patch)."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"http-response-status-codes",children:"HTTP Response Status Codes"}),"\n",(0,i.jsx)(s.p,{children:"These are the minimum set of responses required for REST APIs."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Response"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"200 OK"}),(0,i.jsx)(s.td,{children:"Most common code used to indicate success. The actual response will depend on the request method used."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"201 Created"}),(0,i.jsx)(s.td,{children:"The request has been fulfilled and resulted in a new resource being created."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"202 Accepted"}),(0,i.jsx)(s.td,{children:"The request has been accepted for processing, but the processing has not been completed."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"204 No Content"}),(0,i.jsx)(s.td,{children:"The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"304 Not Modified"}),(0,i.jsx)(s.td,{children:"If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"400 Bad Request"}),(0,i.jsx)(s.td,{children:"The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"401 Unauthorised"}),(0,i.jsx)(s.td,{children:"Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided. Error code response for missing or invalid authentication token."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"403 Forbidden"}),(0,i.jsx)(s.td,{children:"The server understood the request, but is refusing to fulfil it. Authorization will not help and the request SHOULD NOT be repeated."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"404 Not Found"}),(0,i.jsx)(s.td,{children:"The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"409 Conflict"}),(0,i.jsx)(s.td,{children:"Indicates that the request could not be processed because of conflict in the request, such as an edit conflict."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"500 Internal Server Error"}),(0,i.jsx)(s.td,{children:"The server encountered an unexpected condition which prevented it from fulfilling the request."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"502 Bad Gateway"}),(0,i.jsx)(s.td,{children:"This indicates an invalid response from an upstream server."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"503 Service Unavailable"}),(0,i.jsx)(s.td,{children:"This indicates that something unexpected happened server side (It can be anything like server overload, some parts of the system failed, etc.)."})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var i=t(6540);const n={},r=i.createContext(n);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);