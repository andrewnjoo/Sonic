"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "spotify-web-api-node":
/*!***************************************!*\
  !*** external "spotify-web-api-node" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("spotify-web-api-node");

/***/ }),

/***/ "./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"LOGIN_URL\": () => (/* binding */ LOGIN_URL)\n/* harmony export */ });\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-node */ \"spotify-web-api-node\");\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scopes = [\n    \"user-read-email\",\n    \"playlist-read-private\",\n    \"playlist-read-collaborative\",\n    \"user-read-email\",\n    \"streaming\",\n    \"user-read-private\",\n    \"user-library-read\",\n    \"user-top-read\",\n    // \"user-library-modify\",\n    \"user-read-playback-state\",\n    \"user-modify-playback-state\",\n    \"user-read-currently-playing\",\n    \"user-read-recently-played\",\n    \"user-follow-read\", \n].join(',');\nconst params = {\n    scope: scopes\n};\nconst queryParamString = new URLSearchParams(params);\nconst LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;\nconst spotifyApi = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({\n    clientId: \"3afee1f9cfbb4b35a60bb5a0cbf0da65\",\n    clientSecret: \"4f9d063b5a61420bbb83f850170c280e\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spotifyApi);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELEtBQUssQ0FBQ0MsTUFBTSxHQUFFLENBQUM7SUFDWCxDQUFpQjtJQUNqQixDQUF1QjtJQUN2QixDQUE2QjtJQUM3QixDQUFpQjtJQUNqQixDQUFXO0lBQ1gsQ0FBbUI7SUFDbkIsQ0FBbUI7SUFDbkIsQ0FBZTtJQUNmLEVBQXlCO0lBQ3pCLENBQTBCO0lBQzFCLENBQTRCO0lBQzVCLENBQTZCO0lBQzdCLENBQTJCO0lBQzNCLENBQWtCO0FBQ3RCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUc7QUFFVixLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ1pDLEtBQUssRUFBRUgsTUFBTTtBQUNqQixDQUFDO0FBRUQsS0FBSyxDQUFDSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUNDLGVBQWUsQ0FBQ0gsTUFBTTtBQUVuRCxLQUFLLENBQUNJLFNBQVMsSUFBSSx1Q0FBdUMsRUFBRUYsZ0JBQWdCLENBQUNHLFFBQVE7QUFFckYsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDVCw2REFBYSxDQUFFLENBQUM7SUFDbkNVLFFBQVEsRUFBRUMsa0NBQWlDO0lBQzNDRyxZQUFZLEVBQUVILGtDQUFxQztBQUN2RCxDQUFDO0FBRUQsaUVBQWVGLFVBQVUsRUFBQztBQUVMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3Nwb3RpZnkuanM/OWRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLW5vZGVcIjtcblxuY29uc3Qgc2NvcGVzID1bXG4gICAgXCJ1c2VyLXJlYWQtZW1haWxcIixcbiAgICBcInBsYXlsaXN0LXJlYWQtcHJpdmF0ZVwiLFxuICAgIFwicGxheWxpc3QtcmVhZC1jb2xsYWJvcmF0aXZlXCIsXG4gICAgXCJ1c2VyLXJlYWQtZW1haWxcIixcbiAgICBcInN0cmVhbWluZ1wiLFxuICAgIFwidXNlci1yZWFkLXByaXZhdGVcIixcbiAgICBcInVzZXItbGlicmFyeS1yZWFkXCIsXG4gICAgXCJ1c2VyLXRvcC1yZWFkXCIsXG4gICAgLy8gXCJ1c2VyLWxpYnJhcnktbW9kaWZ5XCIsXG4gICAgXCJ1c2VyLXJlYWQtcGxheWJhY2stc3RhdGVcIixcbiAgICBcInVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlXCIsXG4gICAgXCJ1c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmdcIixcbiAgICBcInVzZXItcmVhZC1yZWNlbnRseS1wbGF5ZWRcIixcbiAgICBcInVzZXItZm9sbG93LXJlYWRcIixcbl0uam9pbignLCcpO1xuXG5jb25zdCBwYXJhbXMgPSB7XG4gICAgc2NvcGU6IHNjb3Blcyxcbn07XG5cbmNvbnN0IHF1ZXJ5UGFyYW1TdHJpbmcgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcyk7XG5cbmNvbnN0IExPR0lOX1VSTCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT8ke3F1ZXJ5UGFyYW1TdHJpbmcudG9TdHJpbmcoKX1gO1xuXG5jb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnlXZWJBcGkgKHtcbiAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxuICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcG90aWZ5QXBpO1xuXG5leHBvcnQgeyBMT0dJTl9VUkwgfTtcbiJdLCJuYW1lcyI6WyJTcG90aWZ5V2ViQXBpIiwic2NvcGVzIiwiam9pbiIsInBhcmFtcyIsInNjb3BlIiwicXVlcnlQYXJhbVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsIkxPR0lOX1VSTCIsInRvU3RyaW5nIiwic3BvdGlmeUFwaSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/spotify.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/spotify */ \"./lib/spotify.js\");\n\n\n\nasync function refreshAccessToken(token) {\n    try {\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setAccessToken(token.accessToken);\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setAccessToken(token.refreshToken);\n        const { body: refreshedToken  } = await _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refreshAccessToken();\n        console.log(\"REFRESHED TOKEN IS\", refreshedToken);\n        return {\n            ...token,\n            accessToken: refreshedToken.access_token,\n            // 1 hour as 3600 returns from\n            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,\n            // Spotify API\n            refreshToken: refreshedToken.refresh_token ?? token.refreshToken\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            ...token,\n            error: \"RefreshAccessTokenError\"\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"3afee1f9cfbb4b35a60bb5a0cbf0da65\",\n            clientSecret: \"4f9d063b5a61420bbb83f850170c280e\",\n            authorization: _lib_spotify__WEBPACK_IMPORTED_MODULE_2__.LOGIN_URL\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            // initial sign in\n            if (account && user) {\n                return {\n                    ...token,\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    username: account.providerAcountId,\n                    // handle expiry times in milliseconds hence * 1000\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            // return previous token if the access token hasn't expired yet\n            if (Date.now() < token.accessTokenExpires) {\n                console.log(\"Existing access token is valid\");\n                return token;\n            }\n            // access token has expired, so we need to refresh it...\n            console.log(\"ACCESS TOKEN HAS EXPIRED, REFRESHING...\");\n            return await refreshAccessToken(token);\n        },\n        async session ({ session , token  }) {\n            session.user.accessToken = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            session.user.username = token.username;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdILEtBQUssQ0FBQ0csWUFBWTtZQUM5QytCLE9BQU8sQ0FBQ0osSUFBSSxDQUFDQyxRQUFRLEdBQUcvQixLQUFLLENBQUMrQixRQUFRO1lBRXRDLE1BQU0sQ0FBQ0csT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgU3BvdGlmeVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3Nwb3RpZnlcIjtcbmltcG9ydCBzcG90aWZ5QXBpLCB7IExPR0lOX1VSTCB9IGZyb20gXCIuLi8uLi8uLi9saWIvc3BvdGlmeVwiO1xuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoQWNjZXNzVG9rZW4odG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuLnJlZnJlc2hUb2tlbik7XG5cbiAgICBjb25zdCB7IGJvZHk6IHJlZnJlc2hlZFRva2VuIH0gPSBhd2FpdCBzcG90aWZ5QXBpLnJlZnJlc2hBY2Nlc3NUb2tlbigpO1xuICAgIGNvbnNvbGUubG9nKFwiUkVGUkVTSEVEIFRPS0VOIElTXCIsIHJlZnJlc2hlZFRva2VuKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50b2tlbixcbiAgICAgIGFjY2Vzc1Rva2VuOiByZWZyZXNoZWRUb2tlbi5hY2Nlc3NfdG9rZW4sXG4gICAgICAvLyAxIGhvdXIgYXMgMzYwMCByZXR1cm5zIGZyb21cbiAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogRGF0ZS5ub3cgKyByZWZyZXNoZWRUb2tlbi5leHBpcmVzX2luICogMTAwMCxcbiAgICAgIC8vIFNwb3RpZnkgQVBJXG4gICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hlZFRva2VuLnJlZnJlc2hfdG9rZW4gPz8gdG9rZW4ucmVmcmVzaFRva2VuLFxuICAgICAgLy8gUmVwbGFjZSBpZiBuZXcgb25lIGNhbWUgYmFjayBlbHNlIGZhbGwgYmFjayB0byBvbGQgcmVmcmVzaCB0b2tlblxuICAgIH07XG4gICAgXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udG9rZW4sXG4gICAgICBlcnJvcjogXCJSZWZyZXNoQWNjZXNzVG9rZW5FcnJvclwiLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIFNwb3RpZnlQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjogTE9HSU5fVVJMLFxuICAgIH0pLFxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50LCB1c2VyIH0pIHtcbiAgICAgIC8vIGluaXRpYWwgc2lnbiBpblxuICAgICAgaWYgKGFjY291bnQgJiYgdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2NvdW50LmFjY2Vzc190b2tlbixcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGFjY291bnQucmVmcmVzaF90b2tlbixcbiAgICAgICAgICB1c2VybmFtZTogYWNjb3VudC5wcm92aWRlckFjb3VudElkLFxuICAgICAgICAgIC8vIGhhbmRsZSBleHBpcnkgdGltZXMgaW4gbWlsbGlzZWNvbmRzIGhlbmNlICogMTAwMFxuICAgICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogYWNjb3VudC5leHBpcmVzX2F0ICogMTAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJuIHByZXZpb3VzIHRva2VuIGlmIHRoZSBhY2Nlc3MgdG9rZW4gaGFzbid0IGV4cGlyZWQgeWV0XG4gICAgICBpZiAoRGF0ZS5ub3coKSA8IHRva2VuLmFjY2Vzc1Rva2VuRXhwaXJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV4aXN0aW5nIGFjY2VzcyB0b2tlbiBpcyB2YWxpZFwiKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuXG4gICAgICAvLyBhY2Nlc3MgdG9rZW4gaGFzIGV4cGlyZWQsIHNvIHdlIG5lZWQgdG8gcmVmcmVzaCBpdC4uLlxuICAgICAgY29uc29sZS5sb2coXCJBQ0NFU1MgVE9LRU4gSEFTIEVYUElSRUQsIFJFRlJFU0hJTkcuLi5cIik7XG4gICAgICByZXR1cm4gYXdhaXQgcmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlci5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuO1xuICAgICAgc2Vzc2lvbi51c2VyLnJlZnJlc2hUb2tlbiA9IHRva2VuLnJlZnJlc2hUb2tlbjtcbiAgICAgIHNlc3Npb24udXNlci51c2VybmFtZSA9IHRva2VuLnVzZXJuYW1lO1xuXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTcG90aWZ5UHJvdmlkZXIiLCJzcG90aWZ5QXBpIiwiTE9HSU5fVVJMIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwiYm9keSIsInJlZnJlc2hlZFRva2VuIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsImFjY2Vzc1Rva2VuRXhwaXJlcyIsIkRhdGUiLCJub3ciLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsImVycm9yIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJhY2NvdW50IiwidXNlciIsInVzZXJuYW1lIiwicHJvdmlkZXJBY291bnRJZCIsImV4cGlyZXNfYXQiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();