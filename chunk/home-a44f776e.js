import {
    C as K,
    _ as C,
    B as G,
    u as S,
    s as L,
    a as z,
    c as W,
    b as T,
    r as D,
    P as J,
    d as Q,
    e as Z,
    f as ee,
    M as te,
    S as oe,
    g as ne,
    h as A,
    i as B,
    j as E,
    k as se,
    o as ce,
    D as ie,
    l as ae,
    I as re
} from "../assets/index-83a10b2e.js";
import {N as le} from "./index-36e5bf24.js";
import {
    k,
    D as f,
    E as y,
    a2 as de,
    q as H,
    G as r,
    K as b,
    j as _,
    J as g,
    y as O,
    u as o,
    _ as Y,
    H as N,
    I as $,
    b as V,
    F as U,
    c as _e,
    f as pe,
    N as me,
    a5 as ue,
    L as fe
} from "./xcs-vue-family-70642f71.js";
import {G as ve} from "./griditem.vue_vue_type_style_index_0_scoped_39934db8_lang-b0c8362c.js";
import "./index-55948043.js";
import "./xcs-canvas-5c2592d6.js";

let R = !1;

function he(l, e) {
    var n, c, t;
    if (!R) {
        const i = (n = window.MeApi) == null ? void 0 : n.openFile.getFile();
        if (i) {
            const a = (c = K.latest) == null ? void 0 : c.product;
            i.endsWith(".xcs") || a ? (t = window.MeApi) == null || t.openFile.callOpenFileHandler({filePath: i}) : e()
        }
    }
    R = l
}

const ge = k({
        __name: "Card", props: {borderRadius: null, aspectRatio: null, cardBgc: null}, setup(l) {
            return (e, n) => (f(), y("section", H({
                class: "x-card", style: {
                    "--aspect-ratio": l.aspectRatio ?? "auto",
                    "--card-radius": `${l.borderRadius ?? 0}px`,
                    "--card-bgc": l.cardBgc || "none"
                }
            }, e.$attrs), [de(e.$slots, "default", {}, void 0, !0)], 16))
        }
    }), X = C(ge, [["__scopeId", "data-v-621cc6e7"]]), xe = {class: "not-connect-device"},
    we = {class: "device-connect-tip"}, be = k({
        __name: "DeviceEmpty", props: {confirm: {type: Function}}, setup(l) {
            const e = l, n = async () => {
                await e.confirm(!1)
            };
            return (c, t) => {
                const i = G;
                return f(), y("div", xe, [r("div", we, b(c.$t("mobile.device.device_not_connected")), 1), _(i, {
                    block: "", plain: "", type: "success", size: "normal", onClick: n
                }, {default: g(() => [O(b(c.$t("mobile.device.connect_device")), 1)]), _: 1})])
            }
        }
    });
const ye = C(be, [["__scopeId", "data-v-f0be8413"]]), Pe = {class: "connected-device"},
    Ce = {class: "connected-content"}, ke = {class: "connected-img"}, Ie = ["src"], Se = {class: "connected-tip"},
    Te = {class: "connected-tip-device"}, De = k({
        __name: "DeviceInfo", props: {confirm: {type: Function}}, setup(l) {
            const e = l, n = S(), {info: c, connected: t, ext: i} = L(n), a = async s => {
                await e.confirm(s)
            };
            return (s, d) => {
                var I, w;
                const v = z, x = G;
                return f(), y("div", Pe, [r("div", Ce, [r("div", ke, [r("img", {src: ((I = o(i)) == null ? void 0 : I.deviceInfo.cover) || ((w = o(c)) == null ? void 0 : w.cover)}, null, 8, Ie)]), r("div", Se, [r("div", Te, b(o(c).name), 1), r("div", {class: Y(["connected-tip-status", o(t) && "connected"])}, [_(v, {
                    name: o(t) ? "connected-status" : "disconnected-status", class: "connect-status", size: "16px"
                }, null, 8, ["name"]), r("span", null, b(o(t) ? s.$t("device.setting.wifi_connected") : s.$t("device.setting.wifi_not_connected")), 1)], 2)])]), _(x, {
                    block: "", plain: !o(t), type: "primary", size: "normal", onClick: d[0] || (d[0] = j => a(o(t)))
                }, {
                    default: g(() => [O(b(o(t) ? s.$t("mobile.device.device_setting") : s.$t("mobile.device.connect_device")), 1)]),
                    _: 1
                }, 8, ["plain"])])
            }
        }
    });
const $e = C(De, [["__scopeId", "data-v-73eff19f"]]), je = {class: "device-panel"}, Fe = k({
    __name: "DevicePanel", setup(l) {
        const {t: e} = N(), n = S(), {ext: c, connected: t} = L(n), i = async a => {
            var s, d;
            if (window.MeApi && await W()) try {
                if (!await ((s = window.MeApi.permission) == null ? void 0 : s.isGrantedInternetPermission())) {
                    await T({
                        title: e("mobile.common.notice"),
                        message: e("mobile.connect.open_gps_permission"),
                        confirmButtonText: e("mobile.common.go_to_setting"),
                        cancelButtonText: e("mobile.common.not_yet")
                    }), (d = window.MeApi.permission) == null || d.openLocationPage();
                    return
                }
            } catch (v) {
                console.log(v);
                return
            }
            D.push(a ? "/device" : "/connect")
        };
        return (a, s) => {
            const d = X;
            return f(), y("section", je, [_(d, {class: Y(["device-panel-card", o(t) && "connected"])}, {
                default: g(() => [o(c) ? (f(), $($e, {
                    key: 0, confirm: i
                })) : (f(), $(ye, {key: 1, confirm: i}))]), _: 1
            }, 8, ["class"])])
        }
    }
});
const Me = C(Fe, [["__scopeId", "data-v-8185f3e8"]]), Ae = k({
    __name: "ExtSelector", setup(l) {
        const e = V(!1), n = S(), c = [{text: "xTool D1 Pro", value: "D1Pro"}, {text: "xTool P1", value: "P1"}, {
            text: "xTool P2", value: "P2"
        }, {text: "xTool F1", value: "F1"}, {text: "xTool M1", value: "M1"}, {
            text: "xTool D1", value: "D1"
        }, {text: "xTool D2", value: "D2"}], t = ({selectedValues: i}) => {
            e.value = !1, n.loadExt(i[0].toString())
        };
        return (i, a) => {
            var v;
            const s = J, d = Q;
            return f(), y(U, null, [r("section", {
                class: "ext-selector", onClick: a[0] || (a[0] = x => e.value = !0)
            }, b(((v = o(n).info) == null ? void 0 : v.id) || "请选择设备"), 1), _(d, {
                show: e.value, "onUpdate:show": a[2] || (a[2] = x => e.value = x), round: "", position: "bottom"
            }, {
                default: g(() => [_(s, {columns: c, onConfirm: t, onCancel: a[1] || (a[1] = x => e.value = !1)})]), _: 1
            }, 8, ["show"])], 64)
        }
    }
});
const Be = C(Ae, [["__scopeId", "data-v-1de09e02"]]), Ee = {id: "home"}, Re = {class: "device-container"},
    Ge = {class: "grid-container"}, Le = {class: "home-card-item"}, ze = {class: "home-card-item-box"},
    He = {class: "text"}, Oe = k({
        __name: "Home", setup(l) {
            const {t: e} = N(), n = Z(), c = S(), t = ee();
            _e(() => {
                t.setEditStatusProjectPath(""), t.setBackStatusProjects(!1), te.destroyAll(), n.resetSelectedAttrs(), n.updateCanvasList([]), t.reset(), oe().get("PRIVACY_KEY", !1) && (i(), a())
            });
            const i = async () => {
                    var p, m;
                    if (window.MeApi) {
                        console.log("windows.MeApi");
                        try {
                            await ((p = window.MeApi.permission) == null ? void 0 : p.isGrantedInternetPermission()) || (await T({
                                title: e("mobile.common.local_network_title"),
                                message: e("mobile.common.local_network_tip"),
                                confirmButtonText: e("mobile.common.go_to_setting"),
                                cancelButtonText: e("mobile.common.not_yet")
                            }), (m = window.MeApi.permission) == null || m.openLocationPage())
                        } catch (u) {
                            console.log(u)
                        }
                    }
                }, a = () => {
                    ne(({fileId: p, fileName: m, filePath: u}) => {
                        p && m && u ? T({
                            title: e("mobile.common.notice"),
                            message: e("mobile.projects.cache_notice"),
                            confirmButtonText: e("mobile.projects.continue_cache"),
                            cancelButtonText: e("mobile.projects.abandon_cache")
                        }).then(async () => {
                            const h = A({message: e("device.status.loading"), overlay: !0, duration: 0});
                            await t.openProject({file: u, fileName: m, fileId: p}), d.push({
                                path: "process-setting", query: {refresh: 1, path: u, fileName: m, fileId: p}
                            }), B(), h.close()
                        }).catch(() => {
                            B(), s()
                        }) : s()
                    })
                }, s = () => {
                    he(!0, () => {
                        E(e("mobile.toast.connect_device_first"))
                    })
                }, d = ue(), v = () => {
                    D.push("/general")
                }, x = V(!1), I = {aspectRatio: 158 / 108, cardBgc: "#fff", borderRadius: 8},
                w = () => 1 ? !0 : (E(e("mobile.toast.connect_device_first")), !1), j = pe(() => [{
                    id: 0, text: e("mobile.common.create_project"), icon: "create-project", onClick() {
                        w() && (t.newProject(), M())
                    }
                }, {
                    id: 1, text: e("mobile.common.my_project"), icon: "my-project", onClick() {
                        w() && D.push("projects")
                    }
                }, {
                    id: 2, text: e("mobile.common.photo"), icon: "photo", async onClick() {
                        w() && await se(e("mobile.toast.camera_not_authorized"), e("mobile.toast.camera_not_authorized_text"), e("mobile.common.go_to_setting"), e("mobile.common.not_yet")) && await F(0)
                    }
                }, {
                    id: 3, text: e("mobile.common.photo_album"), icon: "photo-album", onClick() {
                        w() && F(1)
                    }
                }]), F = async p => {
                    const m = await ce("", p);
                    if (m !== "") {
                        let u = A({message: e("device.status.loading"), overlay: !0, duration: 0});
                        try {
                            const h = n.addCanvas(), {width: P, height: q} = c.ext.config.processingArea.base;
                            h == null || h.resizeViewport({
                                viewportWidth: P, viewportHeight: q
                            }), await n.loadResToCanvas({file: m, offsetX: ie, offsetY: ae}), M()
                        } catch (h) {
                            console.log("[ error ] >", h), t.showNotSupportedFileDialog(!0, "mobile.projects.open_xcs_file_error")
                        } finally {
                            u.close()
                        }
                    }
                }, M = () => {
                    d.push({path: "process-setting"})
                };
            return (p, m) => {
                const u = re, h = le;
                return f(), y("div", Ee, [r("section", Re, [_(h, {
                    fixed: "", placeholder: "", "z-index": "100", title: "xTool Creative Space"
                }, me({
                    left: g(() => [_(u, {name: "wap-nav", size: "24", color: "#ffffff", onClick: v})]), _: 2
                }, [x.value ? {
                    name: "right", fn: g(() => [_(o(Be))]), key: "0"
                } : void 0]), 1024), _(o(Me))]), r("section", Ge, [_(o(ve), {
                    cols: 2, gap: "12px"
                }, {
                    default: g(() => [(f(!0), y(U, null, fe(o(j), P => (f(), $(o(X), H({key: P.id}, I, {
                        class: "home-card", onClick: P.onClick
                    }), {
                        default: g(() => [r("div", Le, [r("div", ze, [_(o(z), {
                            name: P.icon, size: "40px", color: "#fff"
                        }, null, 8, ["name"]), r("div", He, b(P.text), 1)])])]), _: 2
                    }, 1040, ["onClick"]))), 128))]), _: 1
                })])])
            }
        }
    });
const Ke = C(Oe, [["__scopeId", "data-v-c173e21b"]]);
export {Ke as default};
