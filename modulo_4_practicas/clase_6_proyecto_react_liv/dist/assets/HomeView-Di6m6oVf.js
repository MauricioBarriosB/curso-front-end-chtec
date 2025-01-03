import{P as r,j as e,r as h,g as u,a as l,l as v,R as j}from"./index-CL3Us2UI.js";function d({label:a,onClick:s,desc:c}){return e.jsxs("button",{className:"btn btn-primary m-2","data-label":a,onClick:s,"data-desc":c,children:[a," »"]})}d.propTypes={label:r.string.isRequired,onClick:r.func.isRequired,desc:r.string};var b=h();const N=u(b);function o({onClose:a,itemData:s}){return N.createPortal(e.jsx("div",{onClick:a,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:900},children:e.jsxs("div",{onClick:c=>c.stopPropagation(),className:"card text-center m-4",children:[e.jsx("div",{className:"card-header",children:e.jsxs("h4",{className:"mt-1 text-primary",children:["Especialidad ",s.name]})}),e.jsxs("div",{className:"card-body",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"las la-cog"}),"  Descripción de la especialidad"]}),e.jsxs("div",{children:[" ",s.desc," "]})]}),e.jsx("div",{className:"card-footer text-body-secondary",children:e.jsx(d,{label:"Cerrar Modal",onClick:a})})]})}),document.getElementById("modal-root"))}o.propTypes={onClose:r.func.isRequired,itemData:r.object.isRequired};function y(){const[a,s]=l.useState([]),[c,t]=l.useState(!1),[n,m]=l.useState({name:"",desc:""}),x=()=>{t(!1),console.log("* Close ModalServices")},p=i=>{m({name:i.target.dataset.label,desc:i.target.dataset.desc}),t(!0),console.log("* Open ModalServices")};return l.useEffect(()=>{s([{id:1,name:"Medicina General",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Medicina General."},{id:2,name:"Medicina Nuclear",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Medicina Nuclear."},{id:3,name:"Neurología",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Neurología."},{id:4,name:"Fonoaudiología",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Fonoaudiología."},{id:5,name:"Cardiología",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Cardiología."},{id:6,name:"Pediatría",desc:"Texto breve e informativo acerca del ámbito y uso del Servicio Pediatría."}])},[]),e.jsxs("div",{className:"container marketing",children:[e.jsx("div",{className:"text-center py-4",children:e.jsx("img",{src:v,alt:"Vite logo",width:"120px"})}),e.jsxs("div",{className:"row text-center",children:[e.jsx("h2",{className:"text-primary",children:"Bienvenidos a Liv Hospital"}),e.jsx("h4",{className:"pt-4 pb-4",children:"A continuación presentamos nuestros principales servicios hospitalarios."})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"card p-2",children:[e.jsx("i",{className:"las la-ambulance la-4x text-primary mb-2"}),e.jsx("h3",{className:"fw-normal text-primary",children:"Servicio de Traslado"}),e.jsx("p",{children:"Atención inmediata para emergencias, disponible 24/7."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"card p-2",children:[e.jsx("i",{className:"las la-stethoscope la-4x text-primary mb-2"}),e.jsx("h3",{className:"fw-normal text-primary",children:"Consulta Médica General"}),e.jsx("p",{children:"Atención personalizada y diagnóstico integral para el cuidado de tu salud."})]})}),e.jsx("div",{className:"col-lg-4",children:e.jsxs("div",{className:"card p-2",children:[e.jsx("i",{className:"las la-procedures la-4x text-primary mb-2"}),e.jsx("h3",{className:"fw-normal text-primary",children:"Atención Hospitalaria"}),e.jsx("p",{children:"Cirugías con tecnología avanzada y un equipo de especialistas de primer nivel."})]})})]}),e.jsxs("div",{className:"card text-center mb-5",children:[e.jsx("div",{className:"card-header",children:e.jsx("h5",{className:"mt-1",children:"Listado con nuestras esecialidades médicas disponibles"})}),e.jsx("div",{className:"card-body",children:a.map(i=>e.jsx(j.Fragment,{children:e.jsx(d,{label:i.name,onClick:p,desc:i.desc})},i.id))}),e.jsx("div",{className:"card-footer text-body-secondary",children:e.jsx("p",{className:"fw-bold text-primary m-0",children:"Presione cada botón para obtener mayor información acerca de nuestras especialidades"})})]}),c&&e.jsx(o,{onClose:x,itemData:n})]})}export{y as default};
