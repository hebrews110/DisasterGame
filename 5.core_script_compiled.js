(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{278:function(e,a,t){"use strict";var n=t(1),o=t.n(n).a.createContext({});a.a=o},369:function(e,a,t){"use strict";var n=t(5),o=t(84),r=t(1),i=t.n(r),s=(t(124),t(267)),c=t(268),l=t(278),d=i.a.forwardRef((function(e,a){var t=e.children,r=e.classes,c=e.className,d=e.component,m=void 0===d?"ul":d,u=e.dense,p=void 0!==u&&u,b=e.disablePadding,f=void 0!==b&&b,v=e.subheader,g=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),y=i.a.useMemo((function(){return{dense:p}}),[p]);return i.a.createElement(l.a.Provider,{value:y},i.a.createElement(m,Object(n.a)({className:Object(s.a)(r.root,c,p&&r.dense,!f&&r.padding,v&&r.subheader),ref:a},g),v,t))}));a.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d)},388:function(e,a,t){"use strict";var n=t(5),o=t(84),r=t(1),i=t.n(r),s=(t(124),t(267)),c=t(268),l=t(420);var d=t(269),m=t(278),u=t(85),p=t.n(u),b="undefined"==typeof window?i.a.useEffect:i.a.useLayoutEffect,f=i.a.forwardRef((function(e,a){var t=e.alignItems,r=void 0===t?"center":t,c=e.autoFocus,u=void 0!==c&&c,f=e.button,v=void 0!==f&&f,g=e.children,y=e.classes,h=e.className,C=e.component,O=e.ContainerComponent,j=void 0===O?"li":O,x=e.ContainerProps,E=(x=void 0===x?{}:x).className,N=Object(o.a)(x,["className"]),w=e.dense,I=void 0!==w&&w,T=e.disabled,k=void 0!==T&&T,M=e.disableGutters,P=void 0!==M&&M,S=e.divider,L=void 0!==S&&S,R=e.focusVisibleClassName,A=e.selected,F=void 0!==A&&A,V=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=i.a.useContext(m.a),$={dense:I||B.dense||!1,alignItems:r},D=i.a.useRef(null);b((function(){u&&D.current&&D.current.focus()}),[u]);var G,J,W=i.a.Children.toArray(g),z=W.length&&(G=W[W.length-1],J=["ListItemSecondaryAction"],i.a.isValidElement(G)&&-1!==J.indexOf(G.type.muiName)),U=i.a.useCallback((function(e){D.current=p.a.findDOMNode(e)}),[]),q=Object(d.a)(U,a),H=Object(n.a)({className:Object(s.a)(y.root,h,$.dense&&y.dense,!P&&y.gutters,L&&y.divider,k&&y.disabled,v&&y.button,"center"!==r&&y.alignItemsFlexStart,z&&y.secondaryAction,F&&y.selected),disabled:k},V),K=C||"li";return v&&(H.component=C||"div",H.focusVisibleClassName=Object(s.a)(y.focusVisible,R),K=l.a),z?(K=H.component||C?K:"div","li"===j&&("li"===K?K="div":"li"===H.component&&(H.component="div")),i.a.createElement(m.a.Provider,{value:$},i.a.createElement(j,Object(n.a)({className:Object(s.a)(y.container,E),ref:q},N),i.a.createElement(K,H,W),W.pop()))):i.a.createElement(m.a.Provider,{value:$},i.a.createElement(K,Object(n.a)({ref:q},H),W))}));a.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f)},421:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(12),i=t(369),s=t(388),c=t(5),l=t(84),d=(t(124),t(267)),m=t(268),u=t(278),p=o.a.forwardRef((function(e,a){var t=e.classes,n=e.className,r=Object(l.a)(e,["classes","className"]),i=o.a.useContext(u.a);return o.a.createElement("div",Object(c.a)({className:Object(d.a)(t.root,n,"flex-start"===i.alignItems&&t.alignItemsFlexStart),ref:a},r))})),b=Object(m.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(p),f=t(406),v=o.a.forwardRef((function(e,a){var t=e.children,n=e.classes,r=e.className,i=e.disableTypography,s=void 0!==i&&i,m=e.inset,p=void 0!==m&&m,b=e.primary,v=e.primaryTypographyProps,g=e.secondary,y=e.secondaryTypographyProps,h=Object(l.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),C=o.a.useContext(u.a).dense,O=null!=b?b:t;null==O||O.type===f.a||s||(O=o.a.createElement(f.a,Object(c.a)({variant:C?"body2":"body1",className:n.primary,component:"span"},v),O));var j=g;return null==j||j.type===f.a||s||(j=o.a.createElement(f.a,Object(c.a)({variant:"body2",className:n.secondary,color:"textSecondary"},y),j)),o.a.createElement("div",Object(c.a)({className:Object(d.a)(n.root,r,C&&n.dense,p&&n.inset,O&&j&&n.multiline),ref:a},h),O,j)})),g=Object(m.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(v),y=t(418),h=t(412),C=t(116),O=function(e){return o.a.createElement("div",{className:"disaster-icon-container"},o.a.createElement("img",{src:e.icon,alt:"disaster"}))},j=function(e){var a=o.a.useCallback((function(){e.onMapChosen(e.mapInfo.mapGenerator)}),[e.onMapChosen,e.mapInfo]);return o.a.createElement(s.a,{button:!0,onClick:a},o.a.createElement(b,null,o.a.createElement(O,{icon:C.b[e.mapInfo.disaster].icon})),o.a.createElement(g,{disableTypography:!0},o.a.createElement(f.a,{variant:"subtitle1"},e.mapInfo.name)))};Promise.all([t.e(1),t.e(2)]).then(t.bind(null,417));a.default=function(e){o.a.useCallback((function(a){var t=new FileReader;t.onload=function(a){var t=a.target.result,n=JSON.parse(t);n.tiles=n.tiles.map((function(e){return new r.c(e)}));var o=new r.f(n.tiles,n.rowLength);e.onMapChosen((function(){return Promise.resolve(o)}))},t.onerror=function(){window.alert("Unable to load file")},t.readAsText(a[0])}),[e.onMapChosen]);return o.a.createElement(y.a,{open:e.show},o.a.createElement(h.a,null,"Choose a scenario"),o.a.createElement(i.a,{className:"map-chooser-list"},e.availableMaps.map((function(a,t){return o.a.createElement(j,{key:t,mapInfo:a,onMapChosen:e.onMapChosen})}))))}}},0,[1,2]]);