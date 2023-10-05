"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39307],{906900:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-594ac8ba","path":"/devices/HR-C99C-Z-C045.html","title":"ADEO HR-C99C-Z-C045 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ADEO HR-C99C-Z-C045 control via MQTT","description":"Integrate your ADEO HR-C99C-Z-C045 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-06T20:18:53.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Actions generated by circular button","slug":"actions-generated-by-circular-button","link":"#actions-generated-by-circular-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696529640000},"filePathRelative":"devices/HR-C99C-Z-C045.md"}')},618053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(166252);const i=(0,o._)("h1",{id:"adeo-hr-c99c-z-c045",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#adeo-hr-c99c-z-c045","aria-hidden":"true"},"#"),(0,o.Uk)(" ADEO HR-C99C-Z-C045")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"HR-C99C-Z-C045")],-1),s=(0,o._)("td",null,"Vendor",-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"RGB CTT LEXMAN ENKI remote control")],-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, action, linkquality")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HR-C99C-Z-C045.jpg",alt:"ADEO HR-C99C-Z-C045"})])],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Hold small reset button pressed (located on the backside of remote) for 3 seconds (until the front LED blinks) and device will reset and will attempt to join network.</p><h3 id="actions-generated-by-circular-button" tabindex="-1"><a class="header-anchor" href="#actions-generated-by-circular-button" aria-hidden="true">#</a> Actions generated by circular button</h3><p>It is important to know that click on the center round boutton is the way to switch between <code>color_saturation_step_down</code> and <code>color_temperature_step_up</code> (bottom of the cicrcular button) <code>color_saturation_step_up</code> and <code>color_temperature_step_down</code> (top of the cicrcular button) <code>color_hue_step_down</code> and nothing (left of the cicrcular button) <code>color_hue_step_up</code> and nothing (right of the cicrcular button)</p>',5),h=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),p=(0,o.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>color_saturation_step_up</code>, <code>color_saturation_step_down</code>, <code>color_stop</code>, <code>color_hue_step_up</code>, <code>color_hue_step_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),_={},b=(0,n(983744).Z)(_,[["render",function(e,t){const n=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),i,(0,o._)("table",null,[a,(0,o._)("tbody",null,[c,(0,o._)("tr",null,[s,(0,o._)("td",null,[(0,o.Wm)(n,{to:"/supported-devices/#v=ADEO"},{default:(0,o.w5)((()=>[(0,o.Uk)("ADEO")])),_:1})])]),d,l,r])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),h,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);