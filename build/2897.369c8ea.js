"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2897,4758,8633],{98633:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r,i=n(14201),a=n(90960),o=n(45089),d=n(89346),s=n(75553),c=n(25329),l=n(56205),u=n(3140),g=n(39010);!function(e){e.open="settingeditor:open",e.openJSON="settingeditor:open-json",e.revert="settingeditor:revert",e.save="settingeditor:save"}(r||(r={}));const m={id:"@jupyterlab/settingeditor-extension:form-ui",requires:[l.ISettingRegistry,u.IStateDB,g.ITranslator,d.IFormComponentRegistry,i.ILabStatus],optional:[i.ILayoutRestorer,a.ICommandPalette,c.g],autoStart:!0,provides:c.O,activate:function(e,t,i,o,s,c,l,u,g){const v=o.load("jupyterlab"),{commands:p,shell:y}=e,S="setting-editor",b=new a.WidgetTracker({namespace:S});return l&&l.restore(b,{command:r.open,args:e=>({}),name:e=>S}),p.addCommand(r.open,{execute:async e=>{t.load(m.id).then((l=>{var u,I;(null!==(u=e.settingEditorType)&&void 0!==u?u:"json"===l.get("settingEditorType").composite)?p.execute(r.openJSON):(async e=>{if(b.currentWidget&&!b.currentWidget.isDisposed)return b.currentWidget.isAttached||y.add(b.currentWidget),void y.activateById(b.currentWidget.id);const l=m.id,{SettingsEditor:u}=await n.e(1924).then(n.t.bind(n,81924,23)),I=new a.MainAreaWidget({content:new u({editorRegistry:s,key:l,registry:t,state:i,commands:p,toSkip:["@jupyterlab/application-extension:context-menu","@jupyterlab/mainmenu-extension:plugin"],translator:o,status:c,query:e.query})});g&&(I.toolbar.addItem("spacer",a.Toolbar.createSpacerItem()),I.toolbar.addItem("open-json-editor",new a.CommandToolbarButton({commands:p,id:r.openJSON,icon:d.launchIcon,label:v.__("JSON Settings Editor")}))),I.id=S,I.title.icon=d.settingsIcon,I.title.label=v.__("Settings"),I.title.closable=!0,b.add(I),y.add(I)})({query:null!==(I=e.query)&&void 0!==I?I:""})}))},label:e=>e.label?e.label:v.__("Advanced Settings Editor")}),u&&u.addItem({category:v.__("Settings"),command:r.open,args:{settingEditorType:"ui"}}),b}},v={id:"@jupyterlab/settingeditor-extension:plugin",requires:[l.ISettingRegistry,o.IEditorServices,u.IStateDB,s.IRenderMimeRegistry,i.ILabStatus,g.ITranslator],optional:[i.ILayoutRestorer,a.ICommandPalette],autoStart:!0,provides:c.g,activate:function(e,t,i,o,s,c,l,u,g){const v=l.load("jupyterlab"),{commands:p,shell:y}=e,S="json-setting-editor",b=i.factoryService.newInlineEditor,I=new a.WidgetTracker({namespace:S});return u&&u.restore(I,{command:r.openJSON,args:e=>({}),name:e=>S}),p.addCommand(r.openJSON,{execute:async()=>{if(I.currentWidget&&!I.currentWidget.isDisposed)return I.currentWidget.isAttached||y.add(I.currentWidget),void y.activateById(I.currentWidget.id);const i=m.id,u=e.restored,{JsonSettingEditor:g}=await n.e(1924).then(n.t.bind(n,81924,23)),_=new g({commands:{registry:p,revert:r.revert,save:r.save},editorFactory:b,key:i,registry:t,rendermime:s,state:o,translator:l,when:u});let E=null;_.commandsChanged.connect(((e,t)=>{t.forEach((e=>{p.notifyCommandChanged(e)})),_.canSaveRaw?E||(E=c.setDirty()):E&&(E.dispose(),E=null),_.disposed.connect((()=>{E&&E.dispose()}))}));const T=new a.MainAreaWidget({content:_});T.id=S,T.title.icon=d.settingsIcon,T.title.label=v.__("Advanced Settings Editor"),T.title.closable=!0,I.add(T),y.add(T)},label:v.__("Advanced JSON Settings Editor")}),g&&g.addItem({category:v.__("Settings"),command:r.openJSON}),p.addCommand(r.revert,{execute:()=>{var e;null===(e=I.currentWidget)||void 0===e||e.content.revert()},icon:d.undoIcon,label:v.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),p.addCommand(r.save,{execute:()=>{var e;return null===(e=I.currentWidget)||void 0===e?void 0:e.content.save()},icon:d.saveIcon,label:v.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),I}},p=[m,v]},25329:(e,t,n)=>{n.d(t,{O:()=>i,g:()=>a});var r=n(74547);const i=new r.Token("@jupyterlab/settingeditor:ISettingEditorTracker"),a=new r.Token("@jupyterlab/settingeditor:IJSONSettingEditorTracker")}}]);
//# sourceMappingURL=2897.369c8ea.js.map