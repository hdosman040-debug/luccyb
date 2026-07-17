globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/_redirects": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-TGPrql0FkU5a6RzE8fk02XyXGOE\"",
		"mtime": "2026-07-17T14:26:21.614Z",
		"size": 23,
		"path": "../public/_redirects"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-17T14:26:21.614Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/index-CZrXmp8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54773-gWHDoHgYV9EDoVPaHDkbyfv4zPg\"",
		"mtime": "2026-07-17T14:26:18.778Z",
		"size": 345971,
		"path": "../public/assets/index-CZrXmp8I.js"
	},
	"/assets/routes-Bx3xRVl8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3db8c-ly4Q674pW/br4CedX0Cl3tm3pq4\"",
		"mtime": "2026-07-17T14:26:18.782Z",
		"size": 252812,
		"path": "../public/assets/routes-Bx3xRVl8.js"
	},
	"/assets/styles-Aso5ARvS.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18301-bJ3Y4AFLKPRqVrCbSmTfiE4aoKQ\"",
		"mtime": "2026-07-17T14:26:18.782Z",
		"size": 99073,
		"path": "../public/assets/styles-Aso5ARvS.css"
	},
	"/exterior-building/building-exterior.jpg": {
		"type": "image/jpeg",
		"etag": "\"27ebf-XPGUtZMC/+7VshlsD7Hie4I8zEM\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 163519,
		"path": "../public/exterior-building/building-exterior.jpg"
	},
	"/hero/hero-background.jpg": {
		"type": "image/jpeg",
		"etag": "\"27ebf-XPGUtZMC/+7VshlsD7Hie4I8zEM\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 163519,
		"path": "../public/hero/hero-background.jpg"
	},
	"/restaurant/cocked-meat.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ef8f-6jyIIydlKCyuuxXotYVhadUc9BE\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 257935,
		"path": "../public/restaurant/cocked-meat.jpg"
	},
	"/restaurant/food-grilled-meat-rice.jpg": {
		"type": "image/jpeg",
		"etag": "\"28c24-wr2toWtvds37nq+8KqurpxDuk3g\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 166948,
		"path": "../public/restaurant/food-grilled-meat-rice.jpg"
	},
	"/restaurant/food-injera-habesha.jpg": {
		"type": "image/jpeg",
		"etag": "\"26c12-NHza0YLLDFIbbfQz8ygoHua1qQ0\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 158738,
		"path": "../public/restaurant/food-injera-habesha.jpg"
	},
	"/restaurant/food-tibs-rice-combo.jpg": {
		"type": "image/jpeg",
		"etag": "\"37fc6-R1U01CiPtsR/YpdffbbUrmi3GFY\"",
		"mtime": "2026-07-17T14:26:21.602Z",
		"size": 229318,
		"path": "../public/restaurant/food-tibs-rice-combo.jpg"
	},
	"/restaurant/hotel-club-sandwich-fries.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b6c8-h4+6CJdbZAZSTruLfmNAXyoPy0Q\"",
		"mtime": "2026-07-17T14:26:21.602Z",
		"size": 177864,
		"path": "../public/restaurant/hotel-club-sandwich-fries.jpg"
	},
	"/restaurant/hotel-fried-chicken-cutlet-salad.jpg": {
		"type": "image/jpeg",
		"etag": "\"447ca-HktIh6hgH61V/8NMYfQN5K19S/M\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 280522,
		"path": "../public/restaurant/hotel-fried-chicken-cutlet-salad.jpg"
	},
	"/restaurant/hotel-sizzling-beef-tibs-skillet.jpg": {
		"type": "image/jpeg",
		"etag": "\"36589-BMdpku9h+yu/X6Hzuv7vKC3W/Og\"",
		"mtime": "2026-07-17T14:26:21.602Z",
		"size": 222601,
		"path": "../public/restaurant/hotel-sizzling-beef-tibs-skillet.jpg"
	},
	"/restaurant/restaurant-bare.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a129-Lmn2WWqnUKVTTka35E5w3MCYLJw\"",
		"mtime": "2026-07-17T14:26:21.598Z",
		"size": 106793,
		"path": "../public/restaurant/restaurant-bare.jpg"
	},
	"/restaurant/restaurant-setup.jpg": {
		"type": "image/jpeg",
		"etag": "\"19567-xgx8ggueX/ZQmZjq9UKW7U28av4\"",
		"mtime": "2026-07-17T14:26:21.602Z",
		"size": 103783,
		"path": "../public/restaurant/restaurant-setup.jpg"
	},
	"/restaurant/rice-tea-table.jpg": {
		"type": "image/jpeg",
		"etag": "\"147de-mqQOjIWW3w5RDi+Zq1g3c6EYLwI\"",
		"mtime": "2026-07-17T14:26:21.602Z",
		"size": 83934,
		"path": "../public/restaurant/rice-tea-table.jpg"
	},
	"/rooms/elegant-bed-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"11fbd-KN9+waEQYPlobICexBhKddJFgF8\"",
		"mtime": "2026-07-17T14:26:21.594Z",
		"size": 73661,
		"path": "../public/rooms/elegant-bed-view.jpg"
	},
	"/rooms/room-deluxe-queen.jpg": {
		"type": "image/jpeg",
		"etag": "\"49555-rmXC/H/x1Y1TzMhqECwkFTeafLA\"",
		"mtime": "2026-07-17T14:26:21.606Z",
		"size": 300373,
		"path": "../public/rooms/room-deluxe-queen.jpg"
	},
	"/rooms/room-executive-suite.jpg": {
		"type": "image/jpeg",
		"etag": "\"43cf8-iuJueHF3XmUkuPC2k1x+VsJnUMs\"",
		"mtime": "2026-07-17T14:26:21.606Z",
		"size": 277752,
		"path": "../public/rooms/room-executive-suite.jpg"
	},
	"/rooms/room-standard-king.jpg": {
		"type": "image/jpeg",
		"etag": "\"22236-pSz2p99+F4946H5XJ0Am7cHZzUI\"",
		"mtime": "2026-07-17T14:26:21.606Z",
		"size": 139830,
		"path": "../public/rooms/room-standard-king.jpg"
	},
	"/rooms/room-standard.jpg": {
		"type": "image/jpeg",
		"etag": "\"d773-RfF+kFV9tmDAGGQbMnCwmof4kK8\"",
		"mtime": "2026-07-17T14:26:21.606Z",
		"size": 55155,
		"path": "../public/rooms/room-standard.jpg"
	},
	"/rooms/room-superior.jpg": {
		"type": "image/jpeg",
		"etag": "\"10cc2-IFHadmUwiouUI9bdHyxM6rHwihE\"",
		"mtime": "2026-07-17T14:26:21.606Z",
		"size": 68802,
		"path": "../public/rooms/room-superior.jpg"
	},
	"/rooms/room-with-2-bed.jpg": {
		"type": "image/jpeg",
		"etag": "\"18b5f-W0iHLD2XTWzeGmIK3GLkbMb4q0s\"",
		"mtime": "2026-07-17T14:26:21.610Z",
		"size": 101215,
		"path": "../public/rooms/room-with-2-bed.jpg"
	},
	"/images/lucy-hotel/culture/culture-coffee-ceremony.jpg": {
		"type": "image/jpeg",
		"etag": "\"38439-/9dXtZqJ0IxA3zpSat04rQ5jCLY\"",
		"mtime": "2026-07-17T14:26:21.626Z",
		"size": 230457,
		"path": "../public/images/lucy-hotel/culture/culture-coffee-ceremony.jpg"
	},
	"/images/lucy-hotel/events/dining-vip-banquet.jpg": {
		"type": "image/jpeg",
		"etag": "\"32a98-z708ZwBIFx5LcOEj/dcC/dSRnvA\"",
		"mtime": "2026-07-17T14:26:21.618Z",
		"size": 207512,
		"path": "../public/images/lucy-hotel/events/dining-vip-banquet.jpg"
	},
	"/images/lucy-hotel/events/dining-boardroom-suite.jpg": {
		"type": "image/jpeg",
		"etag": "\"30803-MKs/W56kYnu9LID/uwRPVjio33M\"",
		"mtime": "2026-07-17T14:26:21.626Z",
		"size": 198659,
		"path": "../public/images/lucy-hotel/events/dining-boardroom-suite.jpg"
	},
	"/images/lucy-hotel/culture/culture-coffee-lounge.jpg": {
		"type": "image/jpeg",
		"etag": "\"7231e-brGixLnYb8aYAjtlbs5a4/u0huk\"",
		"mtime": "2026-07-17T14:26:21.618Z",
		"size": 467742,
		"path": "../public/images/lucy-hotel/culture/culture-coffee-lounge.jpg"
	},
	"/images/lucy-hotel/facilities/amenity-conference.jpg": {
		"type": "image/jpeg",
		"etag": "\"22df8-GahnwqN0TvB0f4wf+2pHE6PMjC0\"",
		"mtime": "2026-07-17T14:26:21.626Z",
		"size": 142840,
		"path": "../public/images/lucy-hotel/facilities/amenity-conference.jpg"
	},
	"/images/lucy-hotel/facilities/amenity-fitness-gym.jpg": {
		"type": "image/jpeg",
		"etag": "\"2aa3d-lCXP4ZYUUDaRmxBCAQBbXMs7nTc\"",
		"mtime": "2026-07-17T14:26:21.618Z",
		"size": 174653,
		"path": "../public/images/lucy-hotel/facilities/amenity-fitness-gym.jpg"
	},
	"/images/lucy-hotel/restaurant/dining-main-restaurant.jpg": {
		"type": "image/jpeg",
		"etag": "\"35fa8-34Hb4oq6yHnWEjhqRX1ezgoc1/E\"",
		"mtime": "2026-07-17T14:26:21.630Z",
		"size": 221096,
		"path": "../public/images/lucy-hotel/restaurant/dining-main-restaurant.jpg"
	},
	"/images/lucy-hotel/restaurant/food-chicken-cutlet.jpg": {
		"type": "image/jpeg",
		"etag": "\"7bf01-9rUEAOoDd6RcVcissHuctnCJJBw\"",
		"mtime": "2026-07-17T14:26:21.634Z",
		"size": 507649,
		"path": "../public/images/lucy-hotel/restaurant/food-chicken-cutlet.jpg"
	},
	"/images/lucy-hotel/restaurant/food-club-sandwich.jpg": {
		"type": "image/jpeg",
		"etag": "\"584db-zlWku54dkgHhsn9CzR4fZhVMYiE\"",
		"mtime": "2026-07-17T14:26:21.622Z",
		"size": 361691,
		"path": "../public/images/lucy-hotel/restaurant/food-club-sandwich.jpg"
	},
	"/images/lucy-hotel/restaurant/food-grilled-meat-rice.jpg": {
		"type": "image/jpeg",
		"etag": "\"54079-y4Oph6v5LQeFld1r2vymq3An2Bc\"",
		"mtime": "2026-07-17T14:26:21.630Z",
		"size": 344185,
		"path": "../public/images/lucy-hotel/restaurant/food-grilled-meat-rice.jpg"
	},
	"/images/lucy-hotel/restaurant/food-injera-habesha.jpg": {
		"type": "image/jpeg",
		"etag": "\"518ed-IX8VCw6zTTAwYnp68ZRXAeN2j6M\"",
		"mtime": "2026-07-17T14:26:21.634Z",
		"size": 334061,
		"path": "../public/images/lucy-hotel/restaurant/food-injera-habesha.jpg"
	},
	"/images/lucy-hotel/restaurant/food-sizzling-tibs.jpg": {
		"type": "image/jpeg",
		"etag": "\"4528b-oCeFgTirIMTSYUBuOGXz0MxZw/4\"",
		"mtime": "2026-07-17T14:26:21.634Z",
		"size": 283275,
		"path": "../public/images/lucy-hotel/restaurant/food-sizzling-tibs.jpg"
	},
	"/images/lucy-hotel/restaurant/food-tibs-rice-combo.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f588-J7ayIARm9AXDSWW0e2A3aPa4mSM\"",
		"mtime": "2026-07-17T14:26:21.638Z",
		"size": 456072,
		"path": "../public/images/lucy-hotel/restaurant/food-tibs-rice-combo.jpg"
	},
	"/images/lucy-hotel/rooms/room-deluxe-queen.jpg": {
		"type": "image/jpeg",
		"etag": "\"49555-rmXC/H/x1Y1TzMhqECwkFTeafLA\"",
		"mtime": "2026-07-17T14:26:21.626Z",
		"size": 300373,
		"path": "../public/images/lucy-hotel/rooms/room-deluxe-queen.jpg"
	},
	"/images/lucy-hotel/rooms/room-standard-king.jpg": {
		"type": "image/jpeg",
		"etag": "\"22236-pSz2p99+F4946H5XJ0Am7cHZzUI\"",
		"mtime": "2026-07-17T14:26:21.626Z",
		"size": 139830,
		"path": "../public/images/lucy-hotel/rooms/room-standard-king.jpg"
	},
	"/images/lucy-hotel/rooms/room-executive-suite.jpg": {
		"type": "image/jpeg",
		"etag": "\"43cf8-iuJueHF3XmUkuPC2k1x+VsJnUMs\"",
		"mtime": "2026-07-17T14:26:21.622Z",
		"size": 277752,
		"path": "../public/images/lucy-hotel/rooms/room-executive-suite.jpg"
	},
	"/images/lucy-hotel/views/Building-night-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fc56-yZvUPmHDvGNyhguslqYcyvNt6PA\"",
		"mtime": "2026-07-17T14:26:21.638Z",
		"size": 130134,
		"path": "../public/images/lucy-hotel/views/Building-night-view.jpg"
	},
	"/images/lucy-hotel/views/Bird-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"37998-clRP5bZeGaUDmRNfROvXZNwrHUc\"",
		"mtime": "2026-07-17T14:26:21.622Z",
		"size": 227736,
		"path": "../public/images/lucy-hotel/views/Bird-view.jpg"
	},
	"/images/lucy-hotel/views/Dim-light-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"2107c-wLARwNRK+WmcxB/7l+ZJ5doiL3I\"",
		"mtime": "2026-07-17T14:26:21.638Z",
		"size": 135292,
		"path": "../public/images/lucy-hotel/views/Dim-light-view.jpg"
	},
	"/images/lucy-hotel/views/building-day-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"219ec-7lt1yAEHxdetaYQfWEbtUy9asu8\"",
		"mtime": "2026-07-17T14:26:21.638Z",
		"size": 137708,
		"path": "../public/images/lucy-hotel/views/building-day-view.jpg"
	},
	"/images/lucy-hotel/views/front-night-view.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e067-bum1CJKg+Km88YB0ztlRoUs1YDM\"",
		"mtime": "2026-07-17T14:26:21.642Z",
		"size": 122983,
		"path": "../public/images/lucy-hotel/views/front-night-view.jpg"
	},
	"/images/lucy-hotel/views/view-mountain-panoramic.jpg": {
		"type": "image/jpeg",
		"etag": "\"43df0-SQcMjmjWycWvThcxiJCHyEflvNo\"",
		"mtime": "2026-07-17T14:26:21.642Z",
		"size": 278e3,
		"path": "../public/images/lucy-hotel/views/view-mountain-panoramic.jpg"
	},
	"/images/lucy-hotel/views/view-terrace-balcony.jpg": {
		"type": "image/jpeg",
		"etag": "\"4352e-I/pvFloXcA+ykeK2sbFw3wZkqco\"",
		"mtime": "2026-07-17T14:26:21.642Z",
		"size": 275758,
		"path": "../public/images/lucy-hotel/views/view-terrace-balcony.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_AD_vGg = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_AD_vGg
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
